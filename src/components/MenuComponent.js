import React, { useState, useEffect } from "react";
import "./MenuComponent.css";

import { MenuBd } from "../datos/DatosMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import { PlatosComponent } from "../Platos/PlatosComponent";

export const MenuComponent = () => {
  return (
    <Router>
      {MenuBd.map((a) => (
        <Link to={`/` + a.tipo}>
          <div className="menuContent" key={a.tipo}>
            <h1>{a.tipo}</h1>
            <Switch>
              <Router exact path={`/` + a.tipo}>
                <PlatosComponent platos={a.platos} />
              </Router>
            </Switch>
          </div>
        </Link>
      ))}
    </Router>
  );
};


