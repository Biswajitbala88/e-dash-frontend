import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";

const UpdateProduct = ()=>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = React.useState(false);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(`http://localhost:1200/productDetails/${id}`);
          const data = await response.json();
  
          if (data.length > 0) {
            const product = data[0];
            setName(product.name);
            setPrice(product.price);
            setCategory(product.category);
            setCompany(product.company);
          } else {
            // Handle case where product details are not found
            console.log("Product details not found");
          }
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };
  
      fetchProductDetails();
    }, [id]);

    const collectData = async ()=>{

      if(!name || !price || !category || !company){
        setError(true);
        return false;
      }



      const userId = JSON.parse(localStorage.getItem('user'))._id;
      try {
        const result = await fetch(`http://localhost:1200/update-product/${id}`, {
          method: "put",
          body: JSON.stringify({ name, price, category, company }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const updatedProduct = await result.json();
        if (updatedProduct) {
          navigate('/');
        }
      } catch (error) {
        console.error("Error updating product:", error);
      }
      
    }

    


    return(
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Update Product</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name:</label>
            <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {error && !name && <p className="text-red-500 text-xs mt-1">Enter valid name</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-600">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {error && !price && <p className="text-red-500 text-xs mt-1">Enter valid Price</p>}

          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block text-gray-600">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {error && !category && <p className="text-red-500 text-xs mt-1">Enter valid Category</p>}

          </div>

          <div className="mb-6">
            <label htmlFor="company" className="block text-gray-600">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={(e)=>setCompany(e.target.value)}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {error && !company && <p className="text-red-500 text-xs mt-1">Enter valid Company</p>}

          </div>

          <button type="button" onClick={collectData} className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Update Product
          </button>
        </form>
      </div>
    </div>

    );
}

export default UpdateProduct;