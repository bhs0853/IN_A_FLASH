import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const {status,statusText,error} = useRouteError();
    
    console.log(Error);
    return (
        <div className="w-2/5 mx-auto my-52 text-center">
            <div className="text-8xl m-3 font-bold text-red-600">{status}</div>
            <div className="text-3xl mb-2 text-neutral-700 font-semibold">{statusText}</div>
            <div className=" text-xl text-black">{error.message}</div>
        </div>
    );
};
export default Error;