import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrency from "./hooks/useCurrency";
import countryList from "./assets/codes";
import Background from "./assets/pexels-steve-1006060.jpg";

function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [toFlag, setToFlag] = useState("PKR");
  const [fromFlag, setFromFlag] = useState("USD");

  const currencyData = useCurrency(from.toLowerCase());
  const allCurrencies = Object.keys(countryList);

  const convertAmount = () => {
    setConvertedAmount(amount * currencyData[to.toLowerCase()]);
  };

  function swap() {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setToFlag(fromFlag);
    setFromFlag(toFlag);
  }
  return (
    <div
  className="w-full h-screen flex font-mono"
  style={{
    backgroundColor: "#1A2130",
  }}
>
<div
    className="flex-1 bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url(${Background})`,
    }}
  ></div>
  <div className="flex-1 flex flex-col justify-center items-center">
    <div className=" w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
      <h1 className="flex justify-center text-2xl mb-2 font-medium">Currency Convertor</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convertAmount();
        }}
      >
        <div className="w-full mb-1">
          <InputBox
            label="From"
            currencies={allCurrencies}
            amount={amount}
            selectedCurrency={from}
            onCurencyChange={(currency) => {
              setFrom(currency);
              setFromFlag(currency.toUpperCase());
            }}
            onAmountChange={(amount) => setAmount(amount)}
            flagCode={countryList[fromFlag]}
            amountDisabled={false}
          />
        </div>
        <div className="relative w-full h-0.5">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            onClick={swap}
          >
            swap
          </button>
        </div>
        <div className="w-full mt-1 mb-4">
          <InputBox
            label="To"
            currencies={allCurrencies}
            amount={convertedAmount}
            selectedCurrency={to}
            onCurencyChange={(currency) => {
              setTo(currency);
              setToFlag(currency.toUpperCase());
            }}
            flagCode={countryList[toFlag]}
            amountDisabled={true}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-lime-500 text-white px-4 py-3 rounded-lg"
        >
          Convert {from.toUpperCase()} TO {to.toUpperCase()}
        </button>
      </form>
    </div>
  </div>

</div>

  );
}

export default App;
