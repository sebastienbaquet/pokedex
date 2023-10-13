function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {
  
  const bouton = ((pokemonIndex) => {
    setPokemonIndex(pokemonIndex);
  });

  return (
    <div>
      {pokemonList.map((pokemon, pokemonIndex) => (
        <button 
          key={pokemon.name}
          onClick={ () => bouton(pokemonIndex)}
        >{pokemon.name}</button>
      ))}
    </div>
  );
}

export default NavBar;

