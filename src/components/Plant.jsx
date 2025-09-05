export default function Plant({ plant, addPlant }) {
  return (
    <section>
      <h1>{plant.image}</h1>
      <b>{plant.name}</b>
      <button onClick={() => addPlant(plant)}>Add to cart</button>
    </section>
  );
}
