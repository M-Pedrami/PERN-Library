import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/InputFields";
import Card from "./components/Cards";

function App() {
  const [data, setData] = useState([]);
  const [book, setbook] = useState({});
  //This functions reformats the date returned from the book.published_at
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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

  console.log(book);
  return (
    <>
      <Input setbook={setbook} book={book} />
      <div className="bookContainer">
        {data.map((book) => (
          <Card book={book} formatDate={formatDate} />
        ))}
      </div>
    </>
  );
}

export default App;
