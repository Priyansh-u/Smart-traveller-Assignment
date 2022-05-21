import React, { useState } from "react";
import contacts from "./App.jsx";
import { Link } from "react-router-dom";

function Name() {  let next;
  var [details, setDetails] = useState({ mobile: "", password: "", name: "" });
  function handleChange(event) {
    let put = event.target.value;
    setDetails(() => {
      return {
        ...contacts,
        name: put
      };
    });
  }
  function handleSubmit() {
    let data=details;
    fetch("https://ap-south-1.aws.data.mongodb-api.com/app/smarttraveller-zapex/endpoint/signup",
   {
     method:"POST",
     headers:{
       'Accept':'application/json',
       'Content-Type':'application/json'
     },
     body:JSON.stringify(data)
   } ).then(response=>response.json())
     .then((result) =>{
       if(result!={} || result!=null){ next='new';}
       else{ next='';}
       console.log(result);
     } )
  }

  return (
    <div className="container">
      <p className="register">Register</p>
      <form>
        <input
          onChange={handleChange}
          name="contactname"
          value={details.name}
        />
       <button className="button" onClick={handleSubmit}> 
       <Link to={"/"+next} className="anchor" onClick={handleSubmit}>
          SIGN UP
        </Link>
         </button>
      </form>
    </div>
  );
}
export default Name;
