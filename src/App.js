import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import GetJoke from "./GetJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  // const [errorMessage, setErrorMessage] = useState("");
  const [showAgain, setShowAgain] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showJoke, setShowJoke] = useState(false);
  const joke = GetJoke(firstName, lastName, showJoke, showAgain);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
    setShowAgain(showAgain + 1);
    setShowJoke(true);
    console.log(showAgain);
  };
  return (
    <div className="main">
      <h1>The Joke Generator!</h1>
      <h3>{joke}</h3>
      <form>
        <input placeholder="First Name" ref={firstNameRef} />
        <input placeholder="Last Name" ref={lastNameRef} />
        <button onClick={generateJoke}>Generate</button>
      </form>
      {/* <p style={{ color: "red" }}>{errorMessage}</p> */}
    </div>
  );
}

export default App;
