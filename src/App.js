import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const fetchCharacter = () => {
      axios
        .get("https://akabab.github.io/starwars-api/api/all.json")
        .then((res) => {
          console.log(res);
          setCharacter(res.data)
        })
        .catch((err) => {
          console.log("err", err)
        })
    }
    fetchCharacter()
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {character.map(character => {
        return(
          <Character key={character.id} character={character}/>
        )
      })

      }
    </div>
  );
}

export default App;
