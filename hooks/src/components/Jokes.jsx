import { useState, useEffect } from 'react';

function Jokes() {
  let [Joke, setJoke] = useState({});

   const URL = "https://official-joke-api.appspot.com/random_joke"; 

  const getNewJoke = async () => { 
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();   // <-- function ko yahan call karo
  }, []);

  return (
    <div>
      <h3>{Joke.setup}</h3>         {/* Joke not Jokes */}
      <h3>{Joke.punchline}</h3>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}

export default Jokes;
