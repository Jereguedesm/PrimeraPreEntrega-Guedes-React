import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import UserList from "./components/UserList/UserList";


const App = () => {
  
  return (
      <>
      <header>
        <Header/>
        <NavBar/>
        <div>
        <ItemListContainer greeting={"Muy buenos días!"}/>
      </div>
      </header>
      <main>
      <UserList/>
      </main>
      </>
    )
}

export default App;
