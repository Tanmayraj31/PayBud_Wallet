export function Button({label, onClick}) {
    return <button onClick={onClick} type="button" className="w-1/2 mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer ring-offset-background transition transform duration-150 active:scale-95 hover:scale-105 ">{label}</button>
}