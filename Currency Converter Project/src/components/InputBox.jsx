
function InputBox({
    label,  
    onCurencyChange,
    onAmountChange,
    amount,
    currencies=[],
    selectedCurrency="usd",
    flagCode,
    amountDisabled=false,
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/60 font-medium mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={ (evt) => onAmountChange && onAmountChange(Number(evt.target.value))}
                    disabled={amountDisabled}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <img className="max-w-12" src={`https://flagsapi.com/${flagCode}/flat/64.png` }/>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                    value={selectedCurrency}
                    onChange={ (evt)=> onCurencyChange && onCurencyChange(evt.target.value)}
                >

                    {
                        currencies.map( (currency) =>(
                        <option value={currency} key={currency}>
                            {currency}
                        </option>)
                         )
                    }
                    
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
