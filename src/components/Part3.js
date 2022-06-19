

export default function Part3(){
    return(
        <div className=" rounded relative w-full md:mt-12 md:h-screen md:bg-white md:bg-opacity-10">
            <h4 className="font-bold">Make an Appointment, That Will Help You Choose A Doctor!
            </h4>
            <div className="bg-white bg-opacity-50 rounded-2xl mt-4 md:rounded-b-none">
                <h3 className="font-bold p-4">Consults For Today</h3>
                <div className="grid grid-cols-6 gap-y-2 gap-x-0 md:grid-cols-10 p-6 ">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center line-through shadow-xl">1</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center line-through  shadow-xl" >2</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center line-through shadow-xl">3</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center line-through shadow-xl">4</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center line-through shadow-xl">5</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center line-through shadow-xl">6</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center line-through shadow-xl">7</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">8</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">9</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">10</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">11</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">12</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">13</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">14</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">15</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">16</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">17</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">18</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">19</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">20</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">21</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl bg-red-300 cursor-pointer active:bg-red-400">22</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">23</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">24</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl line-through">25</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl line-through">26</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">27</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">28</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">29</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">30</div>
                </div>
            </div>
            <div className="mt-4 bg-white rounded-t-2xl bg-opacity-50 md:m-0 md:rounded-none">
            <h1 className="font-bold text-lg p-6 md:py-0">Examinations</h1>
            <div className="flex ">
                <div className="bg-white rounded-2xl w-2/4 m-4 p-2 bg-opacity-50 hover:scale-105 duration-200 cursor-pointer">
                    <h3>23 Dec 2020</h3>
                    <h3 className="font-bold">Heart Surgeon</h3>
                    <h3>Ellen Bradley</h3>
                </div>
                <div className="bg-white rounded-2xl w-2/4 m-4 p-2 bg-opacity-50 hover:scale-105 duration-200 cursor-pointer">
                    <h3>24 Nov 2020</h3>
                    <h3 className="font-bold">Medicine Specialist</h3>
                    <h3>Luke McKinney</h3>
                </div>
            </div>
            </div>
            <div className="p-6 flex flex-col bg-white bg-opacity-50 md:m-0 rounded-b-lg">
                <h3 className="font-bold text-lg">Treatment</h3>
                <h3 className="text-gray-500">November 2020</h3>
            <div className="flex flex-col md:flex-row">
                <div className="flex gap-3 bg-white bg-opacity-75 rounded-xl p-4 justify-center items-center md:h-[70px] text-xs">
                    <h3>-</h3>
                    <h3>26</h3>
                    <h3>27</h3>
                    <h3>28</h3>
                    <h3>29</h3>
                    <h3>30</h3>
                    <h3>31</h3>
                    <h3>-</h3>
                </div>
                <div className="bg-white p-4 rounded-2xl flex justify-center items-center bg-opacity-50 md:h-[70px]">
                    <div className="bg-red-300 w-1/4 p-8 mx-10 rounded-2xl flex flex-col justify-center items-center shadow-lg md:h-[50px] hover:scale-105 duration-200 
                    cursor-pointer text-white">
                        <h3>27</h3>
                        <h3 className="text-xs">November</h3>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="font-bold md:text-xs">Medicine</h3>
                        <h3 className="md:text-xs">11:30 am</h3>
                        <div className="flex gap-4 justify-center items-center ">
                        <img className="h-4 w-4 cursor-pointer hover:scale-110 duration-200" src="/images/telephone.png" alt=""></img>
                        <img className="h-4 w-4 cursor-pointer hover:scale-110 duration-200" src="/images/video-camera.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}