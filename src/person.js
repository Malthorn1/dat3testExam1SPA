import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { id } from "./App";

export default Click;

function Click() {
  const options = facade.makeOptions("GET", true);
  const [data, setData] = useState([]);

  function GetData(e) {
    e.preventDefault();

    var idOrPhoneCheckBox = document.getElementById("idOrPhoneCheckBox")
    let emailCheckBox = document.getElementById("emailCheckBox")
    let hobbyCheckBox = document.getElementById("hobbyCheckBox")
    let id 


    if (idOrPhoneCheckBox.checked == true) {
        id = document.getElementById("IDinput").value;
    } else if ( emailCheckBox.checked == true  ) {
        
        id = "email/" + document.getElementById("Email").value;
    } else if (hobbyCheckBox) {
        id = "hobby/" + document.getElementById("Hobby").value;
    }


    
    
    fetch("http://localhost:8080/CA3/api/person/" + id, options)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("UPPS"));

      skrivTing(); 

  
  }

  console.log(data)

  function skrivTing() {
    return data.firstName ? (
      <>
        <h1>Person info:</h1>
        <h4>Navn: {data.firstName}</h4>
       
      </>
    ) : (
      <></>
    );
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <form>
          <label>
            ID or Phone:
            <input type="checkbox"  id= "idOrPhoneCheckBox" />
            <input type="text" name="name" id="IDinput" />
          </label>
         

          <label>
            Email:
            <input type="checkbox"  id= "emailCheckBox" />
            <input type="text" name="name" id="Email" />
          </label>
         

          <label>
            Hobby:
            <input type="checkbox"  id= "hobbyCheckBox" />
            <input type="text" name="name" id="Hobby" />
          </label>
          <input type="submit" value="Submit" onClick={GetData} />
          
         
        </form>
        {skrivTing()}
      
      </div>
    </div>
  );
}
