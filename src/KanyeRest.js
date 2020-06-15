import React, { useState, useEffect} from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function KanyeRest(){
    const[data, setData] = useState([]);

    
    
     useEffect(()=>{
        const fetchData = fetch("http://localhost:8080/CA3/api/person/1")
    .then((res) => res.json())
    .then((data) =>  setData(data))
    .catch((err) => console.log("fejl"))
    console.log(fetchData)
      }, []) ;      
    


      
    
    return (
        <div className="container">
          <div  className="jumbotron">
            <h1 className="display-4 text-primary">Kanye Quote</h1>
            <p  className="font-weight-bold">{data.Person}</p>
          </div>
        </div>
      );


  };
