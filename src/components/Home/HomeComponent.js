import React from "react";
import "./HomeComponent.css";
import { LogoSvg } from "../LogoSvg/LogoSvg";

export default function HomeComponent() {
  return (
    <div className="homeContent">
      <div className="homeLogo">
        <LogoSvg height="100px" width="100px" />
      </div>
      <h1 className="homeTitule">Menu</h1>
    </div>
  );
}
