import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users.JSX"
import axios from "axios"



export const Dashboard = ()=>{
    const [balance, setBalance ]=useState(0);
     const [loading, setLoading] = useState(true);

   

    useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:3000/api/v1/account/balance",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setBalance(response.data.bal);
      } catch (err) {
        console.error("Failed to fetch balance", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);


   const user = JSON.parse(localStorage.getItem("user"));
    console.log("loggedin as", user)
    const initial = user?.firstName?.[0]|| "?";


    return <>
    <div >
        <Appbar label={initial} />
        <div>
            <Balance value={balance}/>
            <Users/>
        </div>
    
    </div>

    </> 
}