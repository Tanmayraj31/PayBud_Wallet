export const Balance = ({value})=>{
    return <div className="">
        <div>
            Your Balance
        </div>
        <div>
            ₹{Number(value).toFixed(2)}
        </div>
    </div>
}