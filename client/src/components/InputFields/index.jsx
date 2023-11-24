import { useState } from "react";

export default function index({ setbook }) {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [category, setCategory] = useState();
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newbook = {
      title: title,
      author: author,
      category: category,
      description: description
    };
    try {
      const response = await fetch("http://localhost:3001", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newbook),
      });

      if (response.ok) {
        const data = await response.json();
        setbook(data);
      } else {
        console.error("Failed to add a new book");
      }
    } catch (error) {
      console.error("ERROR from FRONTEND/INPUT:", error);
    }
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="title">Book Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Book Title"
        onChange={(e) => {
          settitle(e.target.value);
        }}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        placeholder="Author"
        onChange={(e) => {
          setauthor(e.target.value);
        }}
      />
      <label htmlFor="description">Description</label>
      <textarea
        type="text"
        name="description"
        id="description"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        name="category"
        id="category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
