import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1 style={{ "marginTop": "100px" }}>This is Login Page</h1>
            <p>New Memner?<Link to="/Signup" style={{ "textDecoration": "none" }}>Register</Link>here.</p>
        </div>
    );
}
export default Login;