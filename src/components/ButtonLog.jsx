import React from "react";
import { Link } from "react-router-dom";
import "../styles/ButtonLog.css";

class ButtonLog extends React.Component {
  render() {
    const { enlace } = this.props;
    return (
      <Link to={enlace}>
        <button type="button"></button>
      </Link>
    );
  }
}

export default ButtonLog;
