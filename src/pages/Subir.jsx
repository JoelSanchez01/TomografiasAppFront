import React from "react";
import InputFile from "../components/Inputfile";
import "../styles/Subir.css";
import ButtonLog from "../components/ButtonLog";

class Subir extends React.Component {
  render() {
    return (
      <div className="Container">
        <h3>Seleccione Una Imagen</h3>
        <InputFile />
        <ButtonLog enlace="/" />
      </div>
    );
  }
}

export default Subir;
