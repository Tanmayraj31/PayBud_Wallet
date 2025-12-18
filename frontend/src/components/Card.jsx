export const Card = ({ label , children }) => {
  return (
    <div className="h-screen flex justify-center bg-slate-200">
      <div className="justify-center flex flex-col  ">
        <div className="rounded-lg bg-green-400 text-center p-5 w-90 px-4 h-50">
          <h2 className="font-bold text-4xl pt-6">{label}</h2>
          <div className="card-actions">
            <button className="w-1/2 mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer ">
              Go to Dashboard
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
