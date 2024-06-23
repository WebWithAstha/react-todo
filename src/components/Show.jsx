import React, { useContext } from 'react'
import { taskcontext } from '../Context/TaskContext'

const Show = () => {
  const [tasks,setTasks]= useContext(taskcontext)


    
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
    <div className="right lg:w-2/3 w-full md:w-[40rem] mt-10 lg:mt-0 h-full flex flex-col items-center justify-center gap-4">
          <div className="w-full flex flex-col rounded-lg bg-zinc-200 p-4">
          <h1 className='w-full text-3xl font-bold mb-4 text-center'>Tasks</h1>
          <div className="tasks w-full flex flex-col rounded-lg gap-3 p-2 py-6">
            {tasks.length>0?tasks.map((e,index) => {
              return (
                <div key={e.id} className="task flex items-center bg-zinc-200 shadow-lg justify-between rounded-full px-4 py-2 gap-2">
                  <i onClick={()=>toggleStatus(index)} id={e.id} className={e.completed?`ri-circle-fill text-sky-300 text-2xl`:`ri-circle-line text-2xl`}></i><h1 className=' text-xl w-full '>{e.task}</h1>
                  <i onClick={()=>(handleDelete(index))} className='ri-close-fill'></i>
                </div>
              )
            
            }):<h1 className="text-red-600 text-3xl font-bold text-center">No tasks.</h1>}
          </div>
            </div>

        </div>
  )
}

export default Show