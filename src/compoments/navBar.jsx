

const navBar = ({pokemonIndex, pokemonList,suivant,precedent }) => {
   
  return (
        <div>
        navBar
        <div>

        {(pokemonIndex >0 ) ? 
        (<button onClick={ precedent}>precedent</button> ): ("")}
         {(pokemonIndex < pokemonList.length -1 ) ?
          (<button onClick={ suivant}>suivant</button>): ("")}
 
      </div>

    </div>
  )
}

export default navBar