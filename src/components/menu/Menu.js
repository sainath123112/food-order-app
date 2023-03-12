import "./Menu.css"
import Menuitems from "./Menuitems";
function Menu()
{
    return(
        <div className="menu bg-[#f4effc] w-screen flex flex-col items-center p-20 sm:p-10" id="menu">
            <h1 className="text-4xl font-bold tracking-[3px] text-[#1f1135] sm:text-2xl">Our Menu</h1>
            <p className="text-[#1b1325] sm:text-center">Check out recommended dishes of your choice</p>
            <Menuitems></Menuitems>
        </div>
    );
}

export default Menu;