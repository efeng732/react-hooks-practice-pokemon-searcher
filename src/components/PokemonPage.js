import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import {useState, useEffect} from "react";

function PokemonPage() {
  const[pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")

  function addPokemon(newPoke) {
    setPokemons([...pokemons, newPoke])
  }

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((res) => res.json())
    .then(pokemons => setPokemons(pokemons))

  }, [])

 const pokemonsToDisplay = pokemons.filter((p) => 
  p.name.toLowerCase().includes(search.toLocaleLowerCase())
 )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemons={pokemonsToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
