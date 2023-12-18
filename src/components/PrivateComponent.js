import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const PrivateComponent = ()=>{
    const auth = localStorage.getItem('user');
    const result = auth?<Outlet />:<Navigate to="/SignIn" />;
    return result;

}
export default PrivateComponent;
