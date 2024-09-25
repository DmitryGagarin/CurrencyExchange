import React from "react";
import CurrencyRow from "./CurrencyRow";

export default function CurrencyRowComponent({
  currencyOptions,
  fromCurrency,
  setFromCurrency,
  fromAmount,
  handleFromAmountChange,
  toCurrency,
  setToCurrency,
  toAmount,
  handleToAmountChange
}) {
  return (
    <div>
      <h1>Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={handleFromAmountChange}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleToAmountChange}
      />
    </div>
  );
}
