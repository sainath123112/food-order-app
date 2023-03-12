import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Cartcheck from "./components/cartcheck/Cartcheck";
import ContextProvider from "./components/context-provider/ContextProvider"
import Order from "./components/order/Order";

function App() {
  const [showcart, setShowcart] = useState(false);
  const [showorder, setShowOrder] = useState(false);
  

  function showhandler() {
    setShowcart(true);
  }

  function hidehandler() {
    setShowcart(false);
  }

function hideorderhandler()
{
  setShowOrder(false)
}


  return (
    <div className="App overflow-hidden">
      <ContextProvider>
        {showorder && <Order hideorderhandler={hideorderhandler}></Order>}
      {showcart && <Cartcheck hidehandler={hidehandler} setShowOrder={setShowOrder} setShowcart={setShowcart}></Cartcheck>}
        <Navbar showhandler={showhandler}></Navbar>
        <Home></Home>
        <Menu></Menu>
      </ContextProvider>

    </div>
  );
}

export default App;
