import PokemonCard from "./compoments/PoKemonCard";
import { useState } from "react";
const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


 function Card() {
  const [pokemonIndex,setPokemonIndex] = useState(0);
    console.log(pokemonIndex);
    return (
      <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    {(pokemonIndex >0 ) ? (<button onClick={() => setPokemonIndex(pokemonIndex -1)}>Précédent</button> ): ("")}
    {(pokemonIndex < pokemonList.length -1 ) ? (<button onClick={() => setPokemonIndex(pokemonIndex +1)}>suivant</button>): ("")}
 
      </div>
    
    );
  }
  export default Card;

  
