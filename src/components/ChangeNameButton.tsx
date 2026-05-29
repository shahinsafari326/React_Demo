import { set } from "immer/dist/internal";
import React, { useState } from "react";

const ChangeNameButton = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John Doe",
    },
  });

  const [pizza, setPizza] = useState({
    name: "spicy pepperoni",
    toppings: ["pepperoni"],
  });

  const handlePizzaButtonClick = () => {
    // add topping to pizza
    setPizza((prevPizza) => ({
      ...prevPizza,
      toppings: [...prevPizza.toppings, "olives"],
    }));

    /* remove topping from pizza
    setPizza({
      ...pizza,
      toppings: pizza.toppings.filter((topping) => topping !== "pepperoni"),
    });

    /* change name of topping
    setPizza({
      ...pizza,
      toppings: pizza.toppings.map((topping) =>
        topping === "pepperoni" ? "sausage" : topping,
      ),
    });*/
  };

  const handleClick = () => {
    setGame({ ...game, player: { name: "Jane Doe" } });
  };

  return (
    <div>
      <button onClick={handleClick}>{game.player.name}</button>
      <button onClick={handlePizzaButtonClick}>
        {pizza.toppings.join(", ")}
      </button>
    </div>
  );
};

export default ChangeNameButton;
