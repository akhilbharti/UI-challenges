import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CustomButon from './comp/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CustomButon label="basic"onClick={()=>(console.log('dfdfdd'))} size="small" variant="basic"/>
        <CustomButon label="info"onClick={()=>(console.log('dfdfdd'))} size="large"  variant="info"/>
        <CustomButon label="error"onClick={()=>(console.log('dfdfdd'))} size="large"  variant="error"/>

    </>
  )
}

export default App
