import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function index({ setbook }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setbook(response.data);

        navigate("/");
      } else {
        console.error("Failed to add a new book");
      }
    } catch (error) {
      console.error("ERROR from FRONTEND/INPUT:", error);
    }
  };

  return (
    <form action="submit" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Book Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Book Title"
        {...register("title")}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        placeholder="Author"
        {...register("author")}
      />
      <label htmlFor="description">Description</label>
      <textarea
        type="text"
        name="description"
        id="description"
        placeholder="description"
        {...register("description")}
      />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        name="category"
        id="category"
        {...register("category")}
      />
      <label htmlFor="Cover Photo">Cover Photo</label>
      <input
        type="text"
        name="Cover Photo"
        id="Cover Photo"
        placeholder="Upload the cover photo"
        {...register("cover_url")}
      />
      <label htmlFor="published">Publication Date</label>
      <input
        type="date"
        name="Published"
        id="Published"
        {...register("published_at")}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
