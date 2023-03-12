import "./MenuItem.css";
import { useContext } from "react";
import { Contextcontent } from "../context-provider/ContextProvider";

function MenuItem({itemImage, title, price, item})
{

    const { addToCart, amount, setAmount } = useContext(Contextcontent);

    function handleChange(e)
    {
        const value = e.target.value;
        setAmount(parseInt(value));
    }
    return(
    <div className="m-9 flex flex-col items-center bg-[#e2daeb] py-6 px-10 rounded-2xl ">
        <img src={itemImage} alt="food images" className="rounded-[50%] w-72 h-72 sm:w-36 sm:h-36"></img>
        <h3 className="mt-2 text-2xl font-bold sm:text-xl sm:text-center">{title}</h3>
        <p className="font-bold text-xl tracking-widest mb-2 sm:text-base">${price}</p>
        <div className="flex flex-row justify-center items-center" >
            <input defaultValue ={amount} type="number" min="1" max="5" step="1" onChange={handleChange} className="text-center text-2xl mr-4 focus:outline-none sm:text-lg"></input>
            <button className="addtocart-button" onClick={(event) => addToCart(item, event)}>+ ADD</button>
        </div>
    </div>
    );
}

export default MenuItem;