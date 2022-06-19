export default function Sidebar(){

    return(
            
        <div className="sticky top-0 md:grid grid-row-4 gap-y-0 ml-4 mt-2 p-0 w-24 h-screen bg-white bg-opacity-75 rounded-3xl text-gray-400">
            <div className="flex justify-center items-center flex-col hover:bg-white hover:rounded-full h-[100px] rounded-full mt-10">
                <img className="w-4" src="/images/home.png" alt="" />
                <h4 className="">Dashboard</h4>
            </div>
            <div className="flex justify-center items-center flex-col h-[100px] hover:bg-white hover:rounded-full rounded-full">
                <img className="w-4" src="/images/add.png" alt="" />
                <h4>Doctor</h4>
            </div>
            <div className="flex justify-center items-center flex-col h-[100px] hover:bg-white hover:rounded-full rounded-full">
                <img className="w-4" src="/images/phone-call.png" alt="" />
                <h4>Contact</h4>
            </div>
            <div className="flex justify-center items-center flex-col h-[100px] hover:bg-white hover:rounded-full rounded-full">
                <img className="w-4" src="/images/doctor.png" alt="" />
                <h4>Medicine</h4>
            </div>
        </div>
    
        
    )
}