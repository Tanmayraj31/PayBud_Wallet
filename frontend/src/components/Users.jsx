import axios from "axios";

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Users = ()=>{
    const [users, setUsers]= useState([]);
    const [filter, setFilter]= useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState("")

 useEffect(() => {
    console.log("Fetching users with filter:", filter);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.get(
        `http://localhost:3000/api/v1/bulk?filter=${filter}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log("Response:", response.data);


      setUsers(response.data.user); // backend-driven
      setError("");
    } catch (err) {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
  
}, [filter]);


    return <>
  <div className="font-bold mt-6 text-lg">
    Users
  </div>
    <div className="my-2 flex justify-center ">
      <input
        onChange={(e) => setFilter(e.target.value)}
        type="text"
        placeholder="Search Users..."
        className=" px-2 py-1 border rounded border-slate-200 hover:border-green-500 outline-none bg-slate-200"
      />
    </div>
    <div>
  {users.map((user) => (
    < User user={user}/>
  ))}
</div>
    </>

}


function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-full">
      
      <div className="ml-3 pl-2 sm:ml-15 sm:pl-10 flex items-center">
        <div className="rounded-full h-12 mt-2 w-12 bg-slate-200 flex justify-center mr-2 items-center">
          <div className="flex flex-col justify-center h-full text-xl ">
            {user.firstName?.[0] || "?"}
          </div>
        </div>

        <div className="flex justify-center items-center mt-2">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex items-center  justify-between pl-10 sm:w-1/3 sm:mr-10 sm:justify-end ">
        <Button
        className="w-full sm:w-auto sm:mr-15"
          onClick={() => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
          }}
          label={"Send Money"}
        />
      </div>

    </div>
  );
}
