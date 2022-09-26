import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const navigate = useNavigate();
   const posts=[];
    const collectData = () => {
        console.log("hello");
        console.log(name, email, password);
        const post={
            name:name,
           email:email,
           password:password,
         };
         posts.push(post);
        navigate("/login");
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
                value={name} onChange={(e) => setName(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input className="inputBox" type="password" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter Role"
                value={role} onChange={(e) => setRole(e.target.value)}
            />
            <button className="appButton" type="button" onClick={collectData}>Sign Up</button>
        </div>
    )
}
export default SignUp