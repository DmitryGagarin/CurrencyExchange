import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersTable from './UsersTable';
import CurrencyRowComponent from './CurrencyRowsCompononent';

const BASE_URL = 'http://localhost:8084/currency-exchange-all';
const USERS_URL = 'http://localhost:8200/users-service/all';

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [conversionRates, setConversionRates] = useState({});
  const [rate, setRate] = useState(1);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [users, setUsers] = useState([]);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * rate;
  } else {
    toAmount = amount;
    fromAmount = amount / rate;
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const options = Array.from(new Set(data.flatMap(item => [item.from, item.to])));
        const rates = data.reduce((acc, item) => {
          const key = `${item.from}_${item.to}`;
          acc[key] = item.conversionMultiple;
          return acc;
        }, {});
        setCurrencyOptions(options);
        setConversionRates(rates);
        setFromCurrency(options[0]);
        setToCurrency(options[1]);
        setRate(rates[`${options[0]}_${options[1]}`] || 1);
      })
      .catch(error => console.error("Failed to fetch data:", error));
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency && conversionRates[`${fromCurrency}_${toCurrency}`]) {
      setRate(conversionRates[`${fromCurrency}_${toCurrency}`]);
    }
    if (fromCurrency === toCurrency) {
      setRate(1);
    }
  }, [fromCurrency, toCurrency, conversionRates]);

  useEffect(() => {
    fetch(USERS_URL)
      .then(res => res.json())
      .then(data => setUsers(data)) // Update to use setUsers
      .catch(error => console.error("Failed to fetch users:", error));
  }, []);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              exact path='/users'
              element={
                <UsersTable
                  users={users}
                />
              }
            >
            </Route>
            <Route
              path='/currency'
              element={
                <CurrencyRowComponent
                  currencyOptions={currencyOptions}
                  fromCurrency={fromCurrency}
                  setFromCurrency={setFromCurrency}
                  fromAmount={fromAmount}
                  handleFromAmountChange={handleFromAmountChange}
                  toCurrency={toCurrency}
                  setToCurrency={setToCurrency}
                  toAmount={toAmount}
                  handleToAmountChange={handleToAmountChange}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
