import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import CheckoutForm from "./Components/CheckoutForm";

function App() {
  return (
    <div className="App">
      <CheckoutForm />
    </div>
  );
}

export default App;
