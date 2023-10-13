import PokemonCard from "./compoments/poKemonCard";
import { useState } from "react";
import NavBar from "./compoments/navBar";
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

const precedent = () => {setPokemonIndex(pokemonIndex -1)};
const suivant= () =>{setPokemonIndex(pokemonIndex +1)};

    return (
      <div>

      <NavBar pokemonIndex={pokemonIndex}
             pokemonList={pokemonList}
            suivant = {suivant}
             precedent= {precedent}/>

       < PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    
      </div>
    
    );
  }
  export default Card;

  
