export default function Part2(){
    return(
        <div className="flex flex-col gap-y-4 mx-14 md:h-screen md:bg-white md:bg-opacity-10" >
            <h4 className="font-bold text-2xl mt-10">Your Treatment</h4>
            <div>
                <div className="bg-white  bg-opacity-25 shadow-xl rounded-3xl h-[200px] flex flex-col w-[100%] md:w-[300px] justify-center">
                    <div className="flex flex-row gap-3 justify-center items-center"> 
                        <img className="w-4 h-4" src="/images/user.png" alt=""/>
                        <div className="text-xs">
                            <h4 className="font-bold">Dr. Lida Gutierzz</h4>
                            <h4>Heart Surgeon, London, England</h4>
                        </div>
                    </div>
                    <h3 className="font-bold text-sm px-8">Surgeon</h3>
                    <h3 className="text-xs px-8">Heart Surgeon</h3>
                    {/* Date */}
                    <div className="flex gap-4 ml-8">
                    <div>
                    <h3 className="text-sm">Date</h3>
                    <h3 className="text-xs font-bold">20 Nov 2020</h3>
                    </div>
                    <div>
                    {/* Time */}
                    <h3 className="text-sm">Time</h3>
                    <h3 className="text-xs font-bold">10:00 AM</h3>
                    </div>
                    </div>
                    <div className="flex cursor-pointer">
                        <button className="text-xs bg-white rounded-xl p-2 mt-2 ml-6 hover:bg-gray-100">Appointment</button>
                        <img className="w-4 h-4 mt-4 mx-4 ml-10 md:ml-20 hover:scale-110 duration-200" src="/images/telephone.png" alt=""></img>
                        <img className="w-4 h-4 mt-4 hover:scale-110 duration-200" src="/images/video-camera.png" alt=""></img>
                    </div>
                </div>
            </div>
            <div>
            <div className="bg-white  bg-opacity-50 shadow-xl rounded-3xl h-[200px] flex flex-col w-[100%] md:w-[300px] justify-center">
                    <div className="flex flex-row gap-3 justify-center items-center"> 
                        <img className="w-4 h-4" src="/images/user.png" alt=""/>
                        <div className="text-xs">
                            <h4 className="font-bold">Dr. Christina Frazier</h4>
                            <h4>Heart Surgeon, London, England</h4>
                        </div>
                    </div>
                    <h3 className="font-bold text-sm px-8">Surgeon</h3>
                    <h3 className="text-xs px-8">Heart Surgeon</h3>
                    {/* Date */}
                    <div className="flex gap-4 ml-8">
                    <div>
                    <h3 className="text-sm">Date</h3>
                    <h3 className="text-xs font-bold">25 Nov 2020</h3>
                    </div>
                    <div>
                    {/* Time */}
                    <h3 className="text-sm">Time</h3>
                    <h3 className="text-xs">11:00 AM</h3>
                    </div>
                    </div>
                    <div className="flex cursor-pointer">
                        <button className="text-xs bg-white rounded-xl p-2 mt-2 ml-6 hover:bg-gray-100">Appointment</button>
                        <img className="w-4 h-4 mt-4 mx-4 ml-10 md:ml-20 hover:scale-110 duration-200" src="/images/telephone.png" alt=""></img>
                        <img className="w-4 h-4 mt-4 hover:scale-110 duration-200" src="/images/video-camera.png" alt=""></img>
                    </div>
                </div>
            </div>
            {/* buttons */}
            <div className="flex gap-10 cursor-pointer text-white">
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-blue-400 text-xs 
            w-2/4 flex flex-col gap-y-4 gap-x-2 py-4 px-2 hover:scale-110 duration-300">
                <h4>5500 6677 000 99</h4>
                <h4 className="text-[10px]">Harold Mann</h4>
                <h4 className="absolute bottom-4 right-2 text-[10px]">VISA</h4>
                
            </div>
            <div className="bg-gray-200 w-1/4 flex flex-col justify-center items-center rounded-full hover:scale-110 duration-300">
                    <img className="w-4 h-4" src="/images/settings.png" alt=""></img>
                    <h4 className="text-xs text-black">Settings</h4>
            </div>
            
            </div>
        </div>
    )
}