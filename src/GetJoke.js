import React, {useEffect,useState} from 'react'

export default function GetJoke(firstName,lastName,showJoke,showAgain) {
  const [loading,setLoading] = useState(false)
  const [joke, setJoke] = useState("");
    useEffect(() => {
        setLoading(true);
        const fetchJoke = async () =>
          await fetch(
            `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
          )
            .then((res) => res.json())
            .then((data) => {
              setJoke(data.value.joke);
              setLoading(false);
              
            });
    
        fetchJoke();
      }, [firstName, lastName,showJoke,showAgain]);
      if(showJoke && !loading) 
          return joke     
      else
        return null
}
