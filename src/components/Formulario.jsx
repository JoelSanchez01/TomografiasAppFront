import React from "react";
import Input from "./Input";
import "../styles/Formulario.css";
import ButtonLog from "./ButtonLog";

class Formulario extends React.Component {
  render() {
    return (
      <div className="Formulario">
        <span className="logo"></span>
        <Input type="text" placeHolder="Usuario" />
        <Input type="password" placeHolder="Contrasena" />

        <ButtonLog />
      </div>
    );
  }
}

export default Formulario;
