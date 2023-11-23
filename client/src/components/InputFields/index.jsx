import { useState } from "react";

export default function index({ setMember }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMember = {
      first_name: firstName,
      last_name: lastName,
      age: age,
    };
    try {
      const response = await fetch("http://localhost:3001", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMember),
      });

      if (response.ok) {
        const data = await response.json();
        setMember(data);
      } else {
        console.error("Failed to add a new Member");
      }
    } catch (error) {
      console.error("ERROR from FRONTEND/INPUT:", error);
    }
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="name">First Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <label htmlFor="LastName">Last Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        name="age"
        id="age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
