import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import NavBar from "./components/NavBar/NavBar";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <header>
      <Header/>
      <NavBar/>
    </header>
    </>
  );
}

export default App;
