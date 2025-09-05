import Plant from "./Plant";
import PLANTS from "../data";
export default function Plants({ addPlant }) {
  return (
    <>
      <h2>Plants</h2>
      <>
        {PLANTS.map((plant) => (
          <Plant key={plant.id} plant={plant} addPlant={addPlant} />
        ))}
      </>
    </>
  );
}
