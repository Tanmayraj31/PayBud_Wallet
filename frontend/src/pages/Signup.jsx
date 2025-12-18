import { useState } from "react"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import {Subheading} from "../components/Subheading"
import { Button } from "../components/Button"
import { Warning } from "../components/Warning"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup = ()=>{

const [firstName, setFirstName] = useState("");
const[lastName, setLastName] = useState("");
const[username, setUserName]= useState("");
const[password, setPassword]= useState("");
const navigate = useNavigate();
const handleSignup = async()=>{
   const response = await axios.post("http://localhost:3000/api/v1/signup",{
            username,
            password,
            firstName,
            lastName
      }
    );
    localStorage.setItem("token", response.data.token)     
    navigate("/dashboard")      
}




    return <div className="bg-slate-300 h-screen flex justify-center ">  
        <div className="justify-center flex flex-col">
            <div className="rounded-lg bg-white text-center p-2 w-80 px-4 h-max" >
                <Heading label={"Sign Up"}/>
                <Subheading label={"Enter your information to create account"}/>
                <InputBox onChange={(e)=>{setFirstName(e.target.value);}} placeholder={"John"} label={"First Name"} />
                <InputBox onChange={(e)=>{setLastName(e.target.value)}} placeholder={"Doe"} label={"Last Name"} />
                <InputBox onChange={(e)=>{setUserName(e.target.value);}} placeholder={"example@gmail.com"} label={"Email"}/>
                <InputBox onChange={(e)=>{setPassword(e.target.value)}} placeholder={"password"} label={"Password"}/>
                <Button onClick={handleSignup} label={"Submit"}/>
                <Warning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"} />
            </div>
        </div>
    </div>
    
}