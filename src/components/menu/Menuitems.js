import "./Menuitems.css"
import MenuItem from "./MenuItem";
import { Menulist } from "./MenuList";


function Menuitems()
{
    return(
        <div className="menu bg-[#f4effc] flex flex-row flex-wrap justify-center p-6">
            {
                Menulist.map((item)=>{
                   return(<MenuItem  key= {item.id} itemImage={item.image} title={item.title} price={item.price} item={item}></MenuItem>) 
                })
            }

        </div>
    );
}

export default Menuitems;