import "./CurrencyComponent.css";

const CurrencyComponent = (props) => {
  return (
    <div className="currency">
      <select value={props.baseCurrency} onChange={props.changeCurrency}>
        {props.Allcurrency.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
      <input
        type="number"
        value={props.amount}
        onChange={props.onChangeAmount}
      />
    </div>
  );
};

export default CurrencyComponent;
