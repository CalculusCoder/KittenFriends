import React from "react";
import CardData from "./CardData";

type KittenUser = {
  name: string;
  email: string;
  id: number;
};

interface Props {
  newKittens: KittenUser[];
}

const Card: React.FC<Props> = ({ newKittens }) => {
  return (
    <div className="flex flex-wrap justify-center gap-12">
      {newKittens.map((kitten: KittenUser) => {
        return (
          <CardData
            key={kitten.id}
            name={kitten.name}
            email={kitten.email}
            id={kitten.id}
          />
        );
      })}
    </div>
  );
};

export default Card;
