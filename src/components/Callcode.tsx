interface callcode{
    callingCode:string 
}

export const Callcode: React.FC<callcode> = ({
    callingCode,
})=> {
    return(
        <div className="flex flex-col justify-center items-center ">
        <span className="uppercase text-3xl bg-slate-800 text-white py-4 w-full">
            Calling Code
        </span>
        <span className="text-3xl bg-yellow-500 text-white py-[70px] w-full h-full">
            {callingCode}
        </span>
        </div>
    )
}