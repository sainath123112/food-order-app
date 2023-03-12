import { useState, createContext } from "react";

export const Contextcontent = createContext(null);

function ContextProvider(props)
{
    const [cart, setCart] = useState([]);
    const [ amount, setAmount ] = useState(1);

    const addToCart = (item, event) => {
        event.preventDefault();
        const enteredAmmount = amount;

        const isItemAlreadyInCart = cart.some((olditem) => olditem.id === item.id);

        if (!isItemAlreadyInCart) {
            setCart([...cart, {id: item.id, title: item.title, amount: enteredAmmount, price: item.price}])
          }
          else
          {
            const index = cart.findIndex((olditem) => olditem.id === item.id);
            const updatedCartItems = [...cart];
            updatedCartItems[index].amount += amount;
            setCart(updatedCartItems);
          } 
          setAmount(1);
      };

      const removeItem = (item) =>
      {
          setCart(cart.filter((olditem) => olditem.id !== item.id));
      }

    const contentvalue = {
        cart: cart,
        setCart: setCart,
        amount: amount,
        setAmount: setAmount,
        addToCart: addToCart,
        removeItem: removeItem,

      };

      return(
        <Contextcontent.Provider value={contentvalue}>
            {props.children}
        </Contextcontent.Provider>
      )
}

export default ContextProvider;

