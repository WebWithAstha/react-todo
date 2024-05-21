import { React, useContext, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { taskcontext } from '../Context/TaskContext'


const Header = () => {
    const [tasks] = useContext(taskcontext)


    const fillCircle = useRef()
    useGSAP(() => {
        gsap.to(fillCircle.current, {
            strokeDashoffset: `${252 * ((100 - ((tasks.filter(task => task.completed === true).length / tasks.length) * 100)) / 100)}`
        })
    }, [tasks])


    return (
        <div className="head w-2/3 p-2 h-[35vh] bg-zinc-900 rounded-xl flex gap-4 items-center justify-center">
            <h1 className='text-4xl text-white font-medium'>To Do</h1>
            <div className="progress w-1/2 h-full flex items-center justify-center relative">
                <svg width="100%" height="100%" className='absolute' viewBox="0 0 100 100">
                    <circle r="40" cx='50' cy='50' fill="transparent" stroke="#e0e0e0" strokeWidth="12px"></circle>
                    <circle ref={fillCircle} hidden={tasks.length <= 0 ? 'hidden' : null} filter="url(#drop-shadow)" r="40" cx='50' cy='50' fill="transparent" stroke="#6fdbf6" strokeWidth="11.2px" strokeDasharray="252px" strokeLinecap='round' strokeDashoffset=""  ></circle>
                    <filter id="drop-shadow" >
                        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="royalblue" floodOpacity="1" />
                    </filter>
                </svg>

                <h1 className='text-2xl font-medium text-white'>{tasks.filter(task => task.completed === true).length}/{tasks.length}</h1>
            </div>
        </div>
    )
}

export default Header