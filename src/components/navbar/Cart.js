import "./Cart.css";
import { useContext, useEffect } from "react";
import { Contextcontent } from "../context-provider/ContextProvider";
function Cart(props)
{
    const { cart } = useContext(Contextcontent);
    useEffect(() => {
        if(cart.length === 0)
        {
            return
        } 
         document.querySelector(".cart-button").classList.add("cart-heartbeat");
         const timer=setTimeout(() => {
        document.querySelector(".cart-button").classList.remove("cart-heartbeat");  
         }, 500)

         return( () => {
            clearTimeout(timer);
         }
           
         )
    },[cart]);
    return(
        <button className="cart-button bg-[#67568c] px-4 py-2 text-white font-bold flex flex-row justify-center items-center rounded-md lg:text-[28px] sm:px-2 sm:py-1" onClick={props.showhandler} >
            <span className="mr-2 sm:text-[20px]"><i className="fa-solid fa-cart-shopping"></i></span>
            <span className="mr-2 sm:hidden">Cart</span>
            <span className="bg-[#f4effc] rounded-md text-black text-center w-7 sm:text-[20px] sm:w-6">{cart.length}</span>
        </button>
    );
}

export default Cart;