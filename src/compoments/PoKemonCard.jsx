
function PokemonCard({pokemon}) {

  const imageElement = pokemon.imgSrc ? (
    <img src={pokemon.imgSrc} alt={pokemon.name} />
  ) : (
    <p>???</p>
  );

  return (
    <div>
      <div>{pokemon.name}</div>
      <div>{imageElement}</div>   
    </div>
  );
}
  export default PokemonCard;
