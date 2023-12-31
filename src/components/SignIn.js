import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const SignUp = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/');
      }
    });


    const collectData = async ()=>{
      console.log({email, password});
        if(email == "" || password == ""){
          alert("Plase enter your data");
        }else{
          let result = await fetch("http://localhost:1200/signin", {
              method: "post",
              body: JSON.stringify({email, password}),
              headers: {
                'Content-Type': 'application/json'
              },
          });
          result = await result.json();
          console.log(result);
          if(result.result === 1){
            alert('Enter valid data');
          }else{
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');
          }
        }
        
        
    }


    return(
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button type="button" onClick={collectData} className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Sign In
          </button>
        </form>
      </div>
    </div>

    );
}

export default SignUp;