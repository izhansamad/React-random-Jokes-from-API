import React, { useEffect, useState } from "react";

export default function GetJoke(firstName, lastName, showJoke, showAgain) {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    await fetch(
      `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
    )
      .then((res) => res.json())
      .then((data) => (setJoke(data.value.joke), setLoading(false)))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    setLoading(true);
    fetchJoke();
  }, [firstName, lastName, showJoke, showAgain]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (showJoke && !loading) return joke;
  else return null;
}
