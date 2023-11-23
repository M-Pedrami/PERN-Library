import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const[data, setData] = useState([]);
  useEffect(()=>{
   const getData = async () =>{
    try {
      const response = await fetch('http://localhost:3001')
      const data = await response.json()
      setData(data.rows)
    } catch (error) {
      console.log('ERROR CLIENT', error)
    }
   }
   getData()
  }, [])
  console.log(data)
  return <h1>Library</h1>;
}

export default App;
