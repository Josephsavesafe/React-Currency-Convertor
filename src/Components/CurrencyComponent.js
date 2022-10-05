import "./CurrencyComponent.css";

const CurrencyComponent = (props) => {
  return (
    <div className="currency">
      <select>
        {props.Allcurrency.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
      <input type="number" />
    </div>
  );
};

export default CurrencyComponent;
