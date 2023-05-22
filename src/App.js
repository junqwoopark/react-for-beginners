import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);

  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const onSelectCoin = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  function fetchCoins() {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }

  useEffect(fetchCoins, []);

  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <div>loading...</div> : null}
      {!loading ? (
        <select onChange={onSelectCoin}>
          <option>Select Coin</option>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.KRW.price}>
              {coin.name} ({coin.symbol}) {coin.quotes.KRW.price} KRW
            </option>
          ))}
        </select>
      ) : null}
      <h2>Please enter the amount</h2>
      <div>
        <input
          onChange={onAmountChange}
          value={amount}
          type="number"
          placeholder="KRW"
        />
        <h2>You can get {amount / value} coins</h2>
      </div>
      <div></div>
    </div>
  );
}

export default App;
