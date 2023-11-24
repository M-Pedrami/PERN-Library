import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/InputFields";
import Home from "./components/Home";

import { Route, Routes, NavLink } from "react-router-dom";

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

  console.log(book);
  return (
    <>
      <nav>
        <h1>LOGO</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/AddBook">Add Book</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/AddBook"
          element={<Input setbook={setbook} book={book} />}
        />
        <Route path="/" element={<Home data={data} />}></Route>
      </Routes>
    </>
  );
}

export default App;
