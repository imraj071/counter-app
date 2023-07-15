import "./App.css";
import { useState } from "react";


function App() {
  const[count,setCount] = useState(0);
    
  function decareaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-[url('bg11.jpg')]">
      <div className="text-[#d8ee59] font-medium text-2xl">Increment & Decrement</div>
      <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#4e5134]">
        <button onClick={decareaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="font-bold gap-12 text-5xl">
        {count}
        </div>
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="bg-[#f049cf] text-white px-5 py-2 rounded-sm text-lg ">
        Reset
      </button>
    </div>
  );
}

export default App;
