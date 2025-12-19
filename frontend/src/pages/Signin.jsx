import { useState } from "react"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import {Subheading} from "../components/Subheading"
import { Button } from "../components/Button"
import { Warning } from "../components/Warning"
import { useNavigate } from "react-router-dom"
import API from "../api"

export const Signin = ()=>{
const [username, setUserName]=useState("");
const [password, setPassword]= useState("");
const [error, setError] = useState("");
const [errorCount, setErrorCount]=useState(0);

const navigate = useNavigate();

const handleSignin = async()=>{
    try{
        const response = await API.post("/signin",{
        username,
        password
    })
     localStorage.setItem("token", response.data.token);
     localStorage.setItem("user",JSON.stringify(response.data.user));
     navigate("/dashboard") 
    }catch(err){
        setError(err.response?.data?.msg  || "Something went wrong");
        setErrorCount((prev)=> prev+1)
    }
}




   return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="justify-center flex flex-col">
        <div className="rounded-lg bg-white text-center p-2 w-80 px-4 h-max">
            <Heading label={"Sign In"}/>
            <Subheading label={"Enter details to login"}/>
            <InputBox placeholder={"username"} label={"Email"} onChange={(e)=>{setUserName(e.target.value)}}  />
            <InputBox placeholder={"password"} type={"password"} label={"Password"} onChange={(e)=>{setPassword(e.target.value)}} />
            {error && (
             <div 
             key={errorCount}
             className="text-red-500 text-sm mt-2 animate-shake">
             {error}</div>
)}
            <Button label={"Signin"} onClick={handleSignin} />
            <Warning label={"Don't have an account?"} buttonText={"SignUp"} to={"/signup"} />
        </div>
    </div>
   </div>
}