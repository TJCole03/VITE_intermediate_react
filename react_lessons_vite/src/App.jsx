// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from './routes/Home'
import UseMemo from './routes/UseMemo'
import UseReducer from './routes/UseReducer'
import UseRef from './routes/UseRef'
// import {expensiveMathOperation} from './routes/expensiveMathOperation'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/useMemo' element={<UseMemo />} />  
        <Route path='/useReducer' element={<UseReducer />} />
        <Route path='/useRef' element={<UseRef />} />
      </Routes>
    </div>

  )
}

export default App


    // import reactLogo from './assets/react.svg'
    // import viteLogo from '/vite.svg'
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 6)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>