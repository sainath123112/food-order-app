import './Navbar.css';
import Cart from './Cart.js';
function Navbar(props) {
  return (
    <div className="navbar flex flex-row justify-around items-center text-xl p-2 fixed w-screen bg-white z-10 lg:p-8 sm:p-4">
        <h2 className='text-[#67568c] font-bold text-2xl tracking-[5px] lg:text-[32px] sm:text-[24px]'>Food Delivery</h2>
        <ul className='flex flex-row justify-around w-[200px] lg:text-[28px] lg:hidden'>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
        </ul>
        <Cart showhandler={props.showhandler}></Cart>
    </div>
  );
}

export default Navbar;