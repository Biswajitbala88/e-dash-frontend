import React, { useEffect, useState } from "react";

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
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {products.map((item, index) => (
                <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.company}</td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    
    );
}
export default ProductList;