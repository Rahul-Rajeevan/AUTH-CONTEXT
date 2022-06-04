import { useState } from 'react'
import { AuthContextProvider } from './context/AuthContext'
import Navbar from "./context/Navbar"
import Login from "./context/Login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AuthContextProvider>
        <Navbar/>
        <Login/>
      </AuthContextProvider>
    </div>
  )
}

export default App
