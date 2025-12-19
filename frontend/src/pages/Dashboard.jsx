import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users.JSX"
import axios from "axios"
import API from "../api"



export const Dashboard = ()=>{
    const [balance, setBalance ]=useState(0);
     const [loading, setLoading] = useState(true);

   

    useEffect(() => {
    const fetchBalance = async () => {
      try {
        

        const response = await API.get(
          "/account/balance"
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