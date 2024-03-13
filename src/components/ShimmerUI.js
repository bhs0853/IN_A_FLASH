import React from "react";

const ShimmerUI = () => {
    return (
        <>
            <div className="bg-gray-400 w-96 h-14 mx-[35%] my-10" key="shimmer-search"></div>
            <div className="flex flex-wrap overflow-hidden my-5 mx-48 gap-20">
                
                {
                    Array(10).fill("").map((e,index)=>{
                        return (
                            <div className="flex flex-col p-2 h-52 w-40 gap-3 bg-white border-gray-400" key={"shimmer"+ index}>
                                <div className="h-32 w-full bg-gray-500"></div>
                                <div className="bg-gray-300  h-3 w-full"></div>
                                <div className="bg-gray-500 h-3 w-2/4"></div>
                                <div className="bg-gray-300 h-3 w-10"></div>
                            </div>
                        );
                    })
                }
            </div>
        </>
      );
}
export default ShimmerUI;