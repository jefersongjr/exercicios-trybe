import React from 'react';
import Pokemon from './components/Pokemon';
import pokemons from './data'
import Button from './components/Buttons';

class App extends React.Component {
  state = {
    pokemon : 0,
    filter: 0
  }  
  render() {
      return (
        <div>
          <Pokemon 
          image={pokemons[0].image}
          name={pokemons[0].name}
          tipo={pokemons[0].type}
          peso={pokemons[0].averageWeight.value}
          key={pokemons[0].id}
          />
        <Button tipo='proximo Pokemon' />

        </div>
      );
    }
}
  

export default App;
