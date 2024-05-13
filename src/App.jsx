import { React, useState} from 'react'
import './index.css'

import Header from './components/Header'
import Create from './components/Create'
import Show from './components/Show'




const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])


  return (
    <>
      <div className="main font-mono flex items-center bg-black justify-center h-screen w-full p-10">
        <div className="left w-1/2 h-full flex flex-col gap-10 items-center justify-center">
          <Header tasks={tasks} />
          <Create tasks={tasks} setTasks={setTasks} />
        </div>
        <Show tasks={tasks} setTasks={setTasks}/>
      </div>
    </>
  )
}

export default App