import "./App.css";
import CurrencyComponent from "./Components/CurrencyComponent";
import money from "./img/money.png";
import { useEffect, useState } from "react";
function App() {
  const url = `https://api.exchangerate-api.com/v4/latest/USD`;
  const [chooseCur,setChooseCur] = useState([])
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <img src={money} alt="money" className="money-img" />
      <h1 style={{ color: "chocolate" }}>Currency Converter</h1>
      <div className="container">
        <CurrencyComponent />
        <div className="equal">||</div>
        <CurrencyComponent />
      </div>
    </div>
  );
}

export default App;
