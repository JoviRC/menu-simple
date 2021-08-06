import React, { useState, useEffect } from "react";
import "./MenuComponent.css";

import { MenuBd } from "../datos/DatosMenu";

export const MenuComponent = () => {
  const [visible, setVisible] = useState("");
  const [index, setIndex] = useState(0);
  const toogleVisible = () => {
    setVisible((v) => !v);
  };

  const componentClickeado = (idx) => {
    if (visible === idx) {
      setVisible(() => "");
    } else {
      setVisible(() => idx);
    }
  };

  const agregarClase = (idx) => {
    if (idx === visible) {
      return "platosContent--active";
    }
  };

  return (
    <>
      {MenuBd.map((menu, idx) => (
        <div
          className="menuContent"
          key={idx}
          onClick={() => componentClickeado(idx)}
        >
          <h1 className="menuTipo">{menu.tipo}</h1>
          <div key={idx} className={`platosContent ${agregarClase(idx)}`}>
            {menu.platos.map((p, idx) => (
              <div key={idx} className="menuLi">
                <div className="menuMenu">
                  <h3 className="menuNombre">{p.nombre}</h3>
                  <h4 className="menunombre2">{`( ${p.content} )`}</h4>
                </div>
                <h3 className="menuPrice">{p.precio}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
