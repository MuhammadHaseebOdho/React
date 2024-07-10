import { useEffect, useState } from "react"
function useCurrency(currency){
    let URL=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    const [data,setData]=useState({})
    useEffect(  ( )=>{
       fetch(URL).
       then((response)=> response.json()).
       then((response)=>setData(response[currency]))
       console.log(data);
    },[currency] )
    
    return data;
}

export default useCurrency; 