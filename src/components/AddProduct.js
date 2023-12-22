import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const AddProduct = ()=>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = React.useState(false);


    const navigate = useNavigate();

    const collectData = async ()=>{

      if(!name || !price || !category || !company){
        setError(true);
        return false;
      }



      const userId = JSON.parse(localStorage.getItem('user'))._id;
      // console.log(userId);

        let result = await fetch("http://localhost:1200/add-product",{
          method: "post",
          body: JSON.stringify({name, price, category, userId, company}),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        result = await result.json();
        console.log({name, price, category, userId, company});
        // localStorage.setItem('user', JSON.stringify(result));
        if(result){
          navigate('/');
        }

    }

    


    return(
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
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
            Add Product
          </button>
        </form>
      </div>
    </div>

    );
}

export default AddProduct;