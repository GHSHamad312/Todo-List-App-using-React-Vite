import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Mainlist from './components/Mainlist';
import Footer from './components/Footer';
import { context } from './contexts/context';

function App() {
  const [todo, settodo] = useState([]);
  const [number, setnumber] = useState(0);
  const [done , setDone] = useState(false)

  useEffect(() => {

    const storedTodos = localStorage.getItem("Todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      console.log("Loaded todos from localStorage:", parsedTodos);
      settodo(parsedTodos);
    }


    const storedNumber = localStorage.getItem("number");
    if (storedNumber) {
      const parsedNumber = parseInt(storedNumber, 10);
      if (!isNaN(parsedNumber)) {
        console.log("Loaded number from localStorage:", parsedNumber);
        setnumber(parsedNumber);
      }
    } 
  }, []);

  useEffect(() => {
 
    localStorage.setItem("Todos", JSON.stringify(todo));



    localStorage.setItem("number", number.toString());
  }, [todo, number]);

  return (
    <div className="main">
      <context.Provider value={{ todo, settodo, number, setnumber  ,done ,setDone}}>
        <Navbar />
        <Mainlist />
      </context.Provider>
      <Footer />
    </div>
  );
}

export default App;
