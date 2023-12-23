import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const ProductList = ()=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts();
    }, []);
    const getProducts = async ()=> {
        try {
            let data = await fetch('http://localhost:1200/products');
            data = await data.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }
    const deleteItem = async (id)=>{
       console.log(id); 
       try{
            let result = await fetch(`http://localhost:1200/product/${id}`, {
                method: "delete"
            });
            result = await result.json();
            if(result){
                alert('Product is deleted');
                getProducts();
            }
       } catch (error) {
        console.error('Error deleting product:', error);
       }

    }
    return(
        <div className="product-list container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Products</h2>
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl no</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {products.length > 0 ? (
                    products.map((item, index) => (
                    <tr key={item._id}>
                        <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.company}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <Link to={`/update_product/${item._id}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">Update</Link>
                            <button onClick={()=>deleteItem(item._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Delete
                            </button>
                            

                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="px-6 py-4 text-center text-red-500">
                            no product found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
      </div>
    
    );
}
export default ProductList;