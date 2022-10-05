import "./App.css";
import CurrencyComponent from "./Components/CurrencyComponent";
import money from "./img/money.png";
import { useEffect, useState } from "react";

function App() {
  const [allCurrency, setAllCurrency] = useState([]);

  const url = `https://api.exchangerate-api.com/v4/latest/USD`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllCurrency([...Object.keys(data.rates)]));
  });

  return (
    <div>
      <img src={money} alt="money" className="money-img" />
      <h1 style={{ color: "chocolate" }}>Currency Converter</h1>
      <div className="container">
        <CurrencyComponent Allcurrency={allCurrency} />
        <div className="equal">||</div>
        <CurrencyComponent Allcurrency={allCurrency} />
      </div>
    </div>
  );
}

export default App;
