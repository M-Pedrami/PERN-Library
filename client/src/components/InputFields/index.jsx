import { useState } from "react";

export default function index({ setMember }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = {
      first_name: firstName,
      last_name: lastName,
      age: age,
    };
    setMember(newMember);
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
