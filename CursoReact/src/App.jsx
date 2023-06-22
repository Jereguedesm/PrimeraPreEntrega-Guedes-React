import React, {useState} from "react";
import "./App.css";


//Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import UserList from "./components/UserList/UserList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


//React Router Dom
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


//pages
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

/*
<header>
        <Header/>
        <NavBar/>
        <div>
        <ItemListContainer greeting={"Muy buenos días!"}/>
      </div>
      </header>
      <main>
      
      </main>



      <Route path="/item/:id" element={<DetailPage/>}/>
                <Route path="/category/:categoryId" element={<CategoriesPage/>}/>
*/




const App = () => {
  
  return (
      <Router>
        <div className="App">
          <Header/>
          <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryId" element={<CategoriesPage/>}/>
        </Routes>
        </div>
      </Router>
    )
}

export default App;
