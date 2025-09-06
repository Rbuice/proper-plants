import Cartitem from "./Cartitem";
export default function Carts({ cart, addPlant, removePlant }) {
  return (
    <>
      <h2>Cart</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <Cartitem cart={cart} addPlant={addPlant} removePlant={removePlant} />
        )}
      </div>
    </>
  );
}
