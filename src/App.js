import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [state, setState] = useState([])
  
  useEffect(()=>{
  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=811')
      .then(response => {
        setState(response.data.results)
      }
    ).catch((error) => alert("Problem loading data: " + error))
  }, []);

  const pokemonList = state.map((item, index) => {
    return (
      <div key={index}><p>{item.name}</p></div>
    )
  })

  return (
    <div style={{textAlign: "center"}} className="App">
      {pokemonList}
    </div>
  );
}

export default App;