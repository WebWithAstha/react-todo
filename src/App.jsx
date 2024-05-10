import React from 'react'
import './index.css'



const App = () => {
  return (
    <>
      <div className="main flex items-center bg-black justify-center h-screen w-full p-10">
        <div className="left w-1/2 h-full flex flex-col gap-10 items-center justify-center">
          <div className="head w-2/3 h-[35vh] bg-zinc-900 rounded-xl py-6 flex gap-4 items-center justify-center">
            <h1 className='text-3xl text-white font-medium'>To Do</h1>
            <div className="progress w-1/2 h-full flex items-center justify-center relative">
              <svg width="100%" height="100%" className='absolute' viewBox="0 0 100 100">
                <circle r="40" cx='50' cy='50' fill="transparent" stroke="#e0e0e0" strokeWidth="12px"></circle>
                <circle r="40" cx='50' cy='50' fill="transparent" stroke="crimson" strokeWidth="12px" strokeDasharray="251.1px" strokeDashoffset="62.775px"></circle>
              </svg>
              <h1 className='text-2xl font-medium text-white'>1/1</h1>
            </div>
          </div>
          <form className='w-2/3 flex items-center gap-2 rounded-full border p-2'>
            <input type="text" placeholder='Task' className='px-2 text-xl outline-none text-white py-1 bg-transparent  w-full ' />
            <h1 className='bg-zinc-900 rounded-full px-2 aspect-square text-2xl text-white font-black flex items-center justify-center'><i className="ri-add-line"></i></h1>
          </form>
        </div>
        <div className="right w-1/3 h-full flex flex-col items-center justify-center gap-4">
          <h1 className='text-white w-full text-3xl font-medium mb-4'>Tasks</h1>
          <div className="tasks w-full flex flex-col gap-2">
            <div className="task flex items-center bg-zinc-900  rounded-full px-4 py-2 gap-2">
              <i className="ri-circle-fill text-green-500 mt-1 "></i><h1 className='text-white text-xl  w-full line-through'>Task1</h1>
            </div>
            <div className="task flex items-center bg-zinc-900  rounded-full px-4 py-2 gap-2">
              <i className="ri-circle-line text-white mt-1 "></i><h1 className='text-white text-xl  w-full '>Task1</h1>
            </div>
          </div>

        </div>



      </div>
    </>
  )
}

export default App