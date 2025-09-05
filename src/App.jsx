import { useState } from "react";
import Plants from "./components/Plants";
import Carts from "./components/Cart";
export default function App() {
  const [Cart, setCart] = useState([]);

  const addPlant = (plant) => {
    const plantIn = Cart.find((i) => i.id === plant.id);
    if (plantIn) {
      setCart(
        Cart.map(
          (item) =>
            (item.id = plant.id
              ? { ...item, quantity: item.quantity + 1 }
              : item)
        )
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...Cart, item]);
    }
  };

  const removePlant = (deadPlant) => {
    setCart(
      Cart.map((plant) =>
        plant.id === deadPlant.id
          ? { ...plant, quantity: plant.quantity - 1 }
          : plant
      ).filter((plant) => plant.quantity > 0)
    );
  };

  return (
    <>
      <Plants addPlant={addPlant} />
      <Carts cart={Cart} addPlant={addPlant} removePlant={removePlant} />
    </>
  );
}
