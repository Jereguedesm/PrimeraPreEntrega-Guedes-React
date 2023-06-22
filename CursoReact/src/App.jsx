import React, {useState} from "react";
import "./App.css";


//Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import UserList from "./components/UserList/UserList";


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
*/




const App = () => {
  
  return (
      <Router>
        <div className="App">
          <Header/>
          <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/item/:id" element={<DetailPage/>}/>
          <Route path="/category/:categoryId" element={<CategoriesPage/>}/>
        </Routes>
        </div>
      </Router>
    )
}

export default App;
