import "./Order.css";
import success from "./success.gif"

function Order(props)
{
    return(
        <div className="order fixed z-20">
            <div className="backdrop bg-black w-screen h-screen opacity-50" onClick={props.hideorderhandler}></div>
            <div className="order-complete bg-white px-10 py-6 flex flex-col justify-center items-center">
                <img src={success} alt="success_gif" className="w-32 h-32 sm:w-20 sm:h-20"></img>
                <p className="text-black text-xl mb-5 sm:text-sm">Order Placed sucessfully</p>
                <button className="bg-red-300 px-4 py-2 rounded-lg text-lg sm:text-sm sm:px-2 sm:py-1" onClick={props.hideorderhandler}>Close</button>
            </div>
        </div>
    )
}

export default Order;