import {BrowserRouter, Route, Routes } from "react-router-dom";
import {Signup} from "./pages/Signup";
import {Signin} from "./pages/Signin";
import {Dashboard} from "./pages/Dashboard";
import {SendMoney} from "./pages/SendMoney";
import { Completed } from "./pages/Completed";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {

  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}></Route>
          <Route path="/send" element={<ProtectedRoute><SendMoney/></ProtectedRoute>}></Route>
          <Route path="/completed" element={<ProtectedRoute><Completed/></ProtectedRoute>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
