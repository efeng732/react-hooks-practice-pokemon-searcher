import React from "react";
import { Card } from "semantic-ui-react";
import {useState} from "react";

function PokemonCard({pokemon}) {
  const[showFront, setShowFront] = useState (true)
  function toggle(){
    setShowFront((showFront) => !showFront)
  }

  return (
    <Card>
      <div onClick={toggle}>
        <div className="image">
          <img src= {showFront ? pokemon.sprites.front : pokemon.sprites.back} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
