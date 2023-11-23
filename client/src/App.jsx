import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/InputFields";

function App() {
  const[data, setData] = useState([]);
  const [member, setMember] = useState({})
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
  }, [member])
  console.log(member)
  return (
  <>
  <h1>Library</h1>
  <Input setMember = {setMember} member = {member}/>
  {data.map(member =>(
    <p>{member.first_name} {member.last_name} Age: {member.age}</p>
  ))}
  </>
  )
}

export default App;
