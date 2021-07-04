import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Formulario from "../pages/Formulario";
import Subir from "../pages/Subir";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Formulario} />
        <Route exact path="/subir" component={Subir} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
