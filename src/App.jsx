import { useState } from "react";
import "./App.css";
import Navigation from "./assets/Navigation/Nav";
import Product from "./assets/Products/Product";
import Recommneded from "./assets/Recommneded/Recommneded";
import Sidebar from "./assets/Sidebar/Sidebar";
// import  data from "./assets/Dp/Dp"

function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
    <Sidebar/>
      <Navigation />
      <Recommneded />
      <Product />
    </>
  );
}

export default App;
