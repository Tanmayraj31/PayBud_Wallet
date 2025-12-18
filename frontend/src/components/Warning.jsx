import { Link } from "react-router-dom";

export function Warning({label,buttonText, to}){
    return <div className="flex justify-center text-slate-500">
        <div className="mr-0.5">
            {label}
        </div>
        <Link to={to} className="pointer underline pl-1 cursor-pointer"> {buttonText} </Link>
    </div>
}