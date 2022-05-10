import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
    render() {
        return (
            <section className='Pokedex'>
              {
                  pokemons.map((pokemon) => (
                      <Pokemon 
                      image={pokemon.image}
                      name={pokemon.name}
                      tipo={pokemon.type}
                      peso={pokemon.averageWeight.value}
                      key={pokemon.id}
                      />
                  ))
              }
            </section>   
        );
    }
}

export default Pokedex;