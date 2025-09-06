export default function Cartitem({ cart, addPlant, removePlant }) {
  return (
    <>
      <>
        {cart.map((plant) => {
          return (
            <div className="cartitem" key={plant.id}>
              <h3>
                {plant.image} {plant.name}
              </h3>
              <button
                onClick={() => {
                  removePlant(plant);
                }}
              >
                -
              </button>
              <span>{plant.quantity}</span>
              <button
                onClick={() => {
                  addPlant(plant);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </>
    </>
  );
}
