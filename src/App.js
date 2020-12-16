import React from "react";
import { ViewportProvider } from "./hooks/viewPort";
import Nav from "./components/topNav";
import Header from "./containers/headerContainer";
import "./index.css";

export default function App() {
  return (
    <ViewportProvider>
      <Nav />
      <Header />
      <div className="width-big"></div>
      <div id="Portfolio">
      TEST
      </div>
      <div className="width-big"></div>
    </ViewportProvider>
  );
}
