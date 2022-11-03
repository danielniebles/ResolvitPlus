import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route } from "wouter";
import AdvancedSearch from "./pages/AdvancedSearch";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Route component={Home} path="/home" />
      <Route component={AdvancedSearch} path="/search" />
    </>
  );
}

export default App;
