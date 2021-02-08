import React from "react";
import { Form } from "semantic-ui-react";
import {useState} from "react";

function PokemonForm({addPokemon}) {
  const[name, setName] = useState("")
  const[hp, setHp] = useState("")
  const[front, setFront] = useState("")
  const[back, setBack] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const newPoke = {
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back
      }
    }

    fetch("http://localhost:3001/pokemon", 
    {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newPoke)
    })
    .then( res => res.json())
    .then( addPokemon)
    setName("")
    setHp("")
    setFront("")
    setBack("")
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={e =>setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={e =>setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={e =>setFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={e =>setBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
