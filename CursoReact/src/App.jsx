import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <header>
      <Header/>
      <NavBar/>
      <div>
      <ItemListContainer greeting={"Muy buenos días!"}/>
    </div>
    </header>
    
    </>
  );
}

export default App;
