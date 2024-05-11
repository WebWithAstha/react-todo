import { React, useState } from 'react'
import './index.css'
import { nanoid } from 'nanoid'




const App = () => {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const submitHandler = (e) => {
    e.preventDefault();
    const newtask = { id: nanoid(), task, completed: false }
    setTasks([...tasks, newtask])

    localStorage.setItem('tasks', JSON.stringify([...tasks, newtask]))
    setTask('')
  }
  const toggleStatus = (index) => {
    const copytasks = [...tasks]
    copytasks[index].completed = !copytasks[index].completed
    setTasks(copytasks)
    localStorage.setItem('tasks', JSON.stringify(copytasks))
  }
  const handleDelete =(index)=>{
    let copytasks = [...tasks]
    copytasks.splice(index, 1)
    
    setTasks(copytasks)
    localStorage.setItem('tasks', JSON.stringify(copytasks))
  }

  return (
    <>
      <div className="main font-mono flex items-center bg-black justify-center h-screen w-full p-10">
        <div className="left w-1/2 h-full flex flex-col gap-10 items-center justify-center">
          <div className="head w-2/3 h-[35vh] bg-zinc-900 rounded-xl  flex gap-4 items-center justify-center">
            <h1 className='text-4xl text-white font-medium'>To Do</h1>
            <div className="progress w-1/2 h-full flex items-center justify-center relative">
              <svg width="100%" height="100%" className='absolute' viewBox="0 0 100 100">
                <circle r="40" cx='50' cy='50' fill="transparent" stroke="#e0e0e0" strokeWidth="12px"></circle>
                <circle hidden={tasks.length <= 0 ? 'hidden' : null} filter="url(#drop-shadow)" r="40" cx='50' cy='50' fill="transparent" stroke="#6fdbf6" strokeWidth="11.2px"  strokeDasharray="252px" strokeLinecap='round' strokeDashoffset={`${252 *((100 - ((tasks.filter(task=>task.completed===true).length/tasks.length)*100))/100)}`}  ></circle>
                <filter id="drop-shadow" >
                  <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="royalblue" floodOpacity="1" />
                </filter>
              </svg>
              
              <h1 className='text-2xl font-medium text-white'>{tasks.filter(task=>task.completed===true).length}/{tasks.length}</h1>
            </div>
          </div>
          <form onSubmit={submitHandler} className='w-2/3 flex items-center gap-2 rounded-full border p-2'>
            <input required value={task} onChange={(e) => (setTask(e.target.value))} type="text" placeholder='Task' className='px-2 text-xl outline-none text-white py-1 bg-transparent  w-full ' />
            <button className='bg-zinc-900 rounded-full px-2 aspect-square text-2xl text-white font-black flex items-center justify-center'><i className="ri-add-line"></i></button>
          </form>
        </div>
        <div className="right w-1/3 h-full flex flex-col items-center justify-center gap-4">
          <h1 className='text-white w-full text-3xl font-medium mb-4 text-center'>Tasks</h1>
          <div className="tasks w-full flex flex-col rounded-lg gap-2 bg-zinc-800/90 p-2">
            {tasks.length>0?tasks.map((e,index) => {
              return (
                <div key={e.id} className="task flex items-center bg-zinc-900 justify-between rounded-full px-4 py-2 gap-2">
                  <i onClick={()=>toggleStatus(index)} id={e.id} className={e.completed?`ri-circle-fill text-sky-300 text-2xl`:`ri-circle-line text-white text-2xl`}></i><h1 className='text-white text-xl w-full '>{e.task}</h1>
                  <i onClick={()=>(handleDelete(index))} className='ri-close-fill text-white'></i>
                </div>
              )
            
            }):<h1 className="text-red-600 text-3xl font-bold text-center">No tasks.</h1>}
          </div>

        </div>



      </div>
    </>
  )
}

export default App