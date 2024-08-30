import './App.css'
import { useState} from 'react'
import Navbar from './components/Navbar'
import Mainlist from './components/Mainlist'
import Footer from './components/Footer'
import { context } from './contexts/context'

function App() {
  const [todo, settodo] = useState([])
  const [number, setnumber]= useState(0)

  return (
    <div className="main">
    <context.Provider value={{todo , settodo , number, setnumber}}>
      <Navbar />
      <Mainlist />
      </context.Provider>
      <Footer />
    </div>
  )
}

export default App
