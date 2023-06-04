import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <div>
        <Header/>
        </div>
      </section>
      <section>
        <div>
        </div>
      </section>
    </>
  );
}

export default App;
