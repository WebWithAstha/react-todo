import { React, useState} from 'react'
import './index.css'

import Header from './components/Header'
import Create from './components/Create'
import Show from './components/Show'




const App = () => {

  

  return (
    <>
      <div className="main font-mono flex items-center bg-black justify-center h-screen w-full p-10">
        <div className="left w-1/2 h-full flex flex-col gap-10 items-center justify-center">
          <Header />
          <Create />
        </div>
        <Show/>
      </div>
    </>
  )
}

export default App