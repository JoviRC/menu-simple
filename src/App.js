import React from "react";

import "./App.css";
import HomeComponent from "./components/Home/HomeComponent";
import { MenuComponent } from "./components/MenuComponent";

export default function App() {
  return (
    <>
      <HomeComponent />
      <div>
          <MenuComponent />
      </div>
    </>
  );
}
