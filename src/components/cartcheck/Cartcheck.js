import "./Cartcheck.css";
import { useContext } from "react";
import { Contextcontent } from "../context-provider/ContextProvider";

function Cartcheck(props) {
  const { cart, removeItem, setCart} = useContext(Contextcontent);
  const totalPrice = cart.reduce((acc, item) => parseFloat(acc) + (parseFloat(item.price)*item.amount) , 0);

  function orderPlaced()
{
  if(cart.length===0)
  {
      alert("Add items to a cart to place order");
  }
  else
  {
    props.setShowOrder(true)
    props.setShowcart(false);
    setCart([]);
  }


}

  return (
    <div className="cartcheck fixed z-20">
      <div
        className="backdrop bg-black w-screen h-screen opacity-50"
        onClick={props.hidehandler}
      ></div>
      <h1>Cart</h1>
      <div className="cartitems">
        <h1 className="text-2xl font-bold uppercase text-center mb-3 tracking-widest sm:text-lg sm:mb-1">Cart</h1>
        {cart.length === 0 ? <p className="text-center">Your cart is empty, Add some items to your cart</p> : cart.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-row justify-between  items-center border-b-2 p-3"
            >
              <h3 className="w-[60%] sm:text-[12px] sm:mr-2">{item.title} <span>X {item.amount}</span></h3>
              <button className="px-2 py-1 bg-red-300 text-black rounded-md sm:text-[12px] sm:mr-2 sm:px-1 sm:py-[2px]" onClick={()=>removeItem(item)}>Remove</button>
              <p className="sm:text-[12px] sm:mr-2">${(item.price * item.amount).toFixed(2)}</p>
            </div>
          );
        })}
        <div className="flex flex-row justify-end my-4 text-2xl font-bold">
          <h3 className="mr-8 tracking-wider sm:text-sm sm:mr-2">Total Ammount:</h3>
          <p className="tracking-widest sm:text-sm sm:mr-2">$ {totalPrice.toFixed(2)}</p>
        </div>
        <div className="self-end">
          <button
            className="bg-[#e2daeb] font-bold px-3 py-2 mr-4 rounded-md sm:text-sm sm:mr-2 sm:px-2 sm:py-1"
            onClick={props.hidehandler}
          >
            Close
          </button>
          <button className="bg-[#4c346b] font-bold text-white px-3 py-2 rounded-md sm:text-sm sm:mr-2 sm:px-2 sm:py-1" onClick={orderPlaced}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartcheck;
