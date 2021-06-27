import React from "react";
import "../styles/input.css";

class Input extends React.Component {
  render() {
    const { placeHolder, type } = this.props;
    return (
      <div className="boxInput">
        <input className="input" type={type} placeholder={placeHolder} />
        <hr />
      </div>
    );
  }
}

export default Input;
