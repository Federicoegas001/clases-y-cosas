import React from "react";
import './button.css'

const Button = () =>{
    const saludar = () =>{
        alert('Hola')
      }

    return(
        <button onClick={saludar} className="btn">Click</button>
    )
}

export default Button