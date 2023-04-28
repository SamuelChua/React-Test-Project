import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "companyName":
        setCompanyName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "reEnterPassword":
        setReEnterPassword(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch("https://example.com/signup", { // Make a POST request to a random URL with the form data in JSON
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, companyName, email, password, reEnterPassword }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
    };
    
    return (
    <form className="signup-form" onSubmit={handleSubmit}>
    <label className = "text" htmlFor="name">Name:</label>
    <input
         type="text"
         id="name"
         name="name"
         value={name}
         onChange={handleChange}
         required
       />
    <label className = "text" htmlFor="companyName">Company Name:</label>
    <input
        type="text"
        id="companyName"
        name="companyName"
        value={companyName}
        onChange={handleChange}
        required
    />

    <label className = "text" htmlFor="email">Email:</label>
    <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
    />

    <label className = "text" htmlFor="password">Password:</label>
    <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
    />

    <label className = "text" htmlFor="reEnterPassword">Re-enter Password:</label>
    <input
        type="password"
        id="reEnterPassword"
        name="reEnterPassword"
        value={reEnterPassword}
        onChange={handleChange}
        required
    />

    <button type="submit">Signup</button>
    </form>

    );
};
export default Signup;
