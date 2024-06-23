import React from "react";
import flagEs from '../../assets/images/flagEs.png';
import './styles.css';


export const NavBar = () => {
  return (
    <header className="Header">
    <nav id='navbar'>
     <img src={flagEs} alt="" /> 
     <p>Ejercicios en Español</p>     
    </nav>
 
 </header>
  )
}
