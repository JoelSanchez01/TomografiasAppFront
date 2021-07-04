import React from "react";
import Input from "../components/Input";
import "../styles/Formulario.css";
import ButtonLog from "../components/ButtonLog";

class Formulario extends React.Component {
  render() {
    return (
      <div className="Formulario">
        <span className="logo"></span>
        <Input type="text" placeHolder="Usuario" />
        <Input type="password" placeHolder="Contrasena" />
        <ButtonLog enlace="/subir" />
        <a href="#">Registrarse</a>
      </div>
    );
  }
}

export default Formulario;
