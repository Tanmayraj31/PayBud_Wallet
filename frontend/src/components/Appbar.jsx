import { useState } from "react"
import { useNavigate } from "react-router-dom";


export const Appbar=({label})=>{
  const [open, setOpen]= useState(false);
  const navigate = useNavigate();

  const toggleMenu = ()=>{
    setOpen((prev)=> !prev);
  }; 

   const logout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signin");
   }

  


    return <div className=" bg-gray-900 flex justify-between h-14">
        <div className="justify-center text-white flex flex-col h-full ml-4 text-2xl italic">
            PayBud
        </div>
        <div className="flex">
            <div className="flex flex-col text-xl text-white justify-center h-full mr-4 ">
                Hola!
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 cursor-pointer " onClick={toggleMenu}>
            <div className="flex flex-col justify-center h-full text-xl">
                {label}
            </div>

            {open && (
  <div className="absolute right-0 top-14 z-50 mt-2 mr-2">
    <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-l border-t">
    </div>
    <div className="w-32 bg-white border rounded-md shadow-lg overflow-hidden">
      <button
        onClick={logout}
        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
        Logout
      </button>
    </div>

  </div>
)}

            </div>
        </div>
    </div>
}