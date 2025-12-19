import { useState } from "react"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import {Subheading} from "../components/Subheading"
import { Button } from "../components/Button"
import { Warning } from "../components/Warning"
import API from "../api"
import { useNavigate } from "react-router-dom"

export const Signup = ()=>{

const [firstName, setFirstName] = useState("");
const[lastName, setLastName] = useState("");
const[username, setUserName]= useState("");
const[password, setPassword]= useState([]);
const [error, setError] = useState("");
const [errorCount, setErrorCount]=useState(0);
const navigate = useNavigate();
const handleSignup = async()=>{
   try{
    const response = await API.post("/signup",{
            username,
            password,
            firstName,
            lastName
      }
    );
    localStorage.setItem("token", response.data.token); 
     localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    ); 
    navigate("/dashboard")     

    
   }catch(err){
      const errors = err.response?.data?.errors;
        if (errors?.length) {
    setError(errors[0].message); // 👈 first error only
        } else {
          setError("Something went wrong");
          }
          setErrorCount((prev)=> prev+1)
   }
}




    return <div className="bg-slate-300 h-screen flex justify-center ">  
        <div className="justify-center flex flex-col">
            <div className="rounded-lg bg-white text-center p-2 w-80 px-4 h-max" >
                <Heading label={"Sign Up"}/>
                <Subheading label={"Enter your information to create account"}/>
                <InputBox onChange={(e)=>{setFirstName(e.target.value);}} placeholder={"John"} label={"First Name"} />
                <InputBox onChange={(e)=>{setLastName(e.target.value)}} placeholder={"Doe"} label={"Last Name"} />
                <InputBox onChange={(e)=>{setUserName(e.target.value);}} placeholder={"example@gmail.com"} label={"Email"}/>
                <InputBox onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder={"password"} label={"Password"}/>
                {error && (
             <div 
             key={errorCount}
             className="text-red-500 text-sm mt-2 animate-shake">
             {error}</div>
)}
                <Button onClick={handleSignup} label={"Submit"}/>
                <Warning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"} />
            </div>
        </div>
    </div>
    
}