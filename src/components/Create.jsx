import {React,useContext,useState} from 'react'
import { nanoid } from 'nanoid'
import { taskcontext } from '../Context/TaskContext'


const Create = () => {
    const [tasks,setTasks] = useContext(taskcontext)

    const [task, setTask] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        const newtask = { id: nanoid(), task, completed: false }
        setTasks([...tasks, newtask])
        localStorage.setItem('tasks', JSON.stringify([...tasks, newtask]))
        setTask('')
    }

    return (
        <form onSubmit={submitHandler} className='w-2/3 flex items-center gap-2 rounded-full border p-2'>
            <input required value={task} onChange={(e) => (setTask(e.target.value))} type="text" placeholder='Task' className='px-2 text-xl outline-none text-white py-1 bg-transparent  w-full ' />
            <button className='bg-zinc-900 rounded-full px-2 aspect-square text-2xl text-white font-black flex items-center justify-center'><i className="ri-add-line"></i></button>
        </form>
    )
}

export default Create