import React from "react";

export const UI : React.FC = () => {
    return(
        <div className="flex flex-col gap-2">
            <div className="bg-slate-700 py-2">
                <p className="text-yellow-500 py-2 text-2xl font-semibold">Learning how to worl with APIs</p>
                <input type="text" name="Country" id="" className="px-40 py-1 rounded-md" />
            </div>
           <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col bg-slate-600 text-white items-start justify-start px-2 py-2" >
                    <h1 className="font-semibold text-2xl py-3 ">Country Name</h1>
                    <p className="text-lg">Native Name :</p>
                    <p className="text-lg">Capital :</p>
                    <p className="text-lg">Region :</p>
                    <p className="text-lg">Population :</p>
                    <p className="text-lg">Languages :</p>
                    <p className="text-lg">Time Zone :</p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <span className="uppercase text-3xl bg-slate-800 text-white py-4 w-full">calling code</span>
                    <span className="text-3xl bg-yellow-500 text-white py-[70px] w-full">+98</span>
                </div>
                <div className="w-full border">
                    <img src="" alt="" />
                </div>
            </div>

            <div className="flex gap-6">
                <div className="w-2/6 flex flex-col border items-start justify-start">
                    <span className="w-full uppercase text-yellow-400 bg-slate-600">
                        <p className="font-semibold text-2xl py-3 px-3">capital weather report</p>
                    </span>
                  
                    <span className="px-2 py-4 flex flex-col items-start justify-start">
                    <img src="/src/assets/react.svg" alt="" className="w-3/6 ml-36 -mr-2 mb-5" />
                        <p className="text-lg">Wind Speed : </p>
                        <p className="text-lg">Temperature :</p>
                        <p className="text-lg">Humidity :</p>
                        <p className="text-lg">Visibility :</p>
                    </span>
                </div>
                <div className="w-4/6 border">

                </div>
            </div> 

        </div>
    )
}

