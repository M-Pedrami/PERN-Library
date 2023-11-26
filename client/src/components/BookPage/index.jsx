
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
export default function index() {
  const { ID } = useParams();
  const [book, setBook] = useState({})
  const getBook = async ( id ) => {
    try {
      const response = await fetch(`http://localhost:3001/Home/${id}`);
      const data = await response.json()
      setBook(data.rows[0])
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    getBook(ID)
  }, [ID])

  


  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.cover_url} style={{width: 800}} />
    </div>
  )
}
