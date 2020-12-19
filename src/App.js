import React from "react";
import { ViewportProvider } from "./hooks/viewPort";
import Nav from "./components/topNav";
import Header from "./containers/headerContainer";
import Projects from "./containers/projectsContainer";
import About from "./containers/aboutContainer";
import "./index.css";

export default function App() {
  return (
    <ViewportProvider>
      <Nav />
      <Header />
      <Projects />
      <About />
    </ViewportProvider>
  );
}
