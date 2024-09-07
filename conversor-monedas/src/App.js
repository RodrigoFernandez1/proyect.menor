import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [conversionRate, setConversionRate] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/18e2589aed3965cba6b4b375/latest/USD${fromCurrency}`
        );
        if (response.data.result === "error") {
          throw new Error(response.data["error-type"]);
        }
        setConversionRate(response.data.conversion_rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching the conversion rate:", error);
        setConversionRate(null);
      }
    };

    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  const handleConvert = () => {
    if (conversionRate === null) {
      setResult("No se pudo obtener la tasa de conversión.");
    } else {
      const conversionResult = (amount * conversionRate).toFixed(2);
      setResult(
        `${amount} ${fromCurrency} son aproximadamente ${conversionResult} ${toCurrency}.`
      );
    }
  };

  return (
    <section>
      <div class="skewed">
        <div className="container">
          <h1>Conversor de Monedas</h1>
          <form>
            <div>
              <label>Cantidad:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="any"
              />
            </div>
            <div>
              <label>De:</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="ARS">ARS</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div>
              <label>A:</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="ARS">ARS</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <button type="button" onClick={handleConvert}>
              Convertir
            </button>
          </form>
          <h2>
            {amount} {fromCurrency} son aproximadamente {result} {toCurrency}.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default App;
