import React from "react";
import InputFile from "../components/Inputfile";
import "../styles/Subir.css";
import ButtonLog from "../components/ButtonLog";

class Subir extends React.Component {
  render() {
    return (
      <div className="Container">
        <h2>Seleccione Una Imagen</h2>
        <InputFile />
        <ButtonLog />
      </div>
    );
  }
}

export default Subir;
