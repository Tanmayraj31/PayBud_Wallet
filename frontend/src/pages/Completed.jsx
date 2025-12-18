import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card"
import { useEffect, useState } from "react";

export const Completed = ()=>{
const navigate = useNavigate();
const [count, setCount]= useState(3)

   useEffect(()=>{
    const timer = setTimeout(()=>{
        navigate("/dashboard")
    }, 3000);

    const interval = setInterval(()=>{
        setCount((prev)=>prev-1);
    },1000)
    return ()=> {clearTimeout(timer); clearInterval(interval);}
   },[navigate])

    return <div>
      <div className="text-center space-y-2">
        
        <Card label={"Transfer Done!"}>
            <p>Redirecting to dashboard in {count}…</p>
        </Card>
        
      </div>
    </div>
}