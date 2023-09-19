import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from "/images/media.png?ur"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main'>
       <div className='main-content'>
       <h2>Technology</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, sint ducimus quas est ab maxime accusantium nulla ipsum voluptatum? Optio nemo enim doloremque labore eligendi esse veniam incidunt, ipsa eum?
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, sint ducimus quas est ab maxime accusantium nulla ipsum voluptatum? Optio nemo enim doloremque labore eligendi esse veniam incidunt, ipsa eum?
    </p>
       </div>

       <div className="mian-image">
        <img src={logo} alt="img" />
       </div>

       <div className='next'>
        <h3>this next</h3>
       </div>
    </div>
       
    </>
  )
}

export default App
