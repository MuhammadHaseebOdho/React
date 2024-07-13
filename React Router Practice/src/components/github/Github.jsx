import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
 const data= useLoaderData();
 

  /*
   const [data, setData] = useState({});
  const URL = "https://api.github.com/users/MuhammadHaseebOdho";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res)=>setData(res));
    console.log(data);
  },[]);*/
 
  return (
    <div  className="justify-center">
        <h1>Name: {data.name}</h1>
        <h1>Bio: {data.bio}</h1>
      <h1 >GitHub Followers: {data.followers}</h1>
     
      <img src={data.avatar_url} alt=""  width={400}/>
    </div>
  );
}

export async function fetchData(){
   const response= await fetch("https://api.github.com/users/MuhammadHaseebOdho");
    return response.json()
}   



export default Github;
