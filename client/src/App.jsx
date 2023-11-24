import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/InputFields";

function App() {
  const [data, setData] = useState([]);
  const [book, setbook] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3001");
        const data = await response.json();
        setData(data.rows);
      } catch (error) {
        console.log("ERROR CLIENT", error);
      }
    };
    getData();
  }, [book]);

  //This functions reformats the date returned from the book.published_at
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  console.log(book);
  return (
    <>
      <h1>Library</h1>
      <Input setbook={setbook} book={book} />
      {data.map((book) => (
        <>
          <p>
            {book.title} by {book.author}
          </p>
          publihsed at {formatDate(book.published_at)}
          <p>{book.description}</p>
          <img src={book.cover_url} alt={book.title} style={{ width: 250 }} />
        </>
      ))}
    </>
  );
}

export default App;
