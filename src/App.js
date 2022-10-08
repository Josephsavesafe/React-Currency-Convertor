import "./App.css";
import CurrencyComponent from "./Components/CurrencyComponent";
import money from "./img/money.png";
import { useEffect, useState } from "react";

function App() {
  const [allCurrency, setAllCurrency] = useState([]);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("THB");

  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(0);

  const [checkFormCurrency, setCheckFormCurrency] = useState(true);
  let fromAmount, toAmount;

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllCurrency([...Object.keys(data.rates)]);
        setRate(data.rates[toCurrency]);
      });
  }, [fromCurrency, toCurrency]);

  const amountFromCurrency = (e) => {
    setAmount(e.target.value);
    setCheckFormCurrency(true);
  };
  const amountToCurrency = (e) => {
    setAmount(e.target.value);
    setCheckFormCurrency(false);
  };

  if (checkFormCurrency) {
    fromAmount = amount;
    toAmount = (amount * rate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / rate).toFixed(2);
  }

  return (
    <div>
      <img src={money} alt="money" className="money-img" />
      <h1 style={{ color: "chocolate" }}>Currency Converter</h1>
      <div className="container">
        <CurrencyComponent
          Allcurrency={allCurrency}
          baseCurrency={fromCurrency}
          changeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={amountFromCurrency}
        />
        <div className="equal">||</div>
        <CurrencyComponent
          Allcurrency={allCurrency}
          baseCurrency={toCurrency}
          changeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={amountToCurrency}
        />
      </div>
    </div>
  );
}

export default App;
