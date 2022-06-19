import Sidebar from "./components/Sidebar";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
function App() {
  return (
    // container
    <div className="flex bg-gradient-to-r from-purple-300 to-pink-200  md:justify-center ">
        
        <Sidebar/>
        <div className="flex bg-gradient-to-br  to-pink-200 flex-col md:flex-row gap-y-10">
        <Part2/>
        <Part3 />
        </div>
    </div>
  );
}

export default App;
