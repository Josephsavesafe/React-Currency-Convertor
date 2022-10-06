import "./CurrencyComponent.css";

const CurrencyComponent = (props) => {
  return (
    <div className="currency">
      <select>
        {props.Allcurrency.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
      <input type="number" />
    </div>
  );
};

export default CurrencyComponent;
