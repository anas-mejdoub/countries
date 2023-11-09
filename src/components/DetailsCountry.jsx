import React from "react";
import axios from 'axios';
import  {  useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import '../App.css'
import Loading from "./Loading";

export default function DetailsCountry()
{
    const {name} = useParams();
    const [country, setcountry] = useState([]);
    const [loading, setloading] = useState(true)
    async function fetchdata(){
        const response = await axios.get("https://restcountries.com/v3.1/name/" + name);
        return (response.data);
    }
    useEffect(() =>{
        fetchdata()
            .then((data) =>{
                setcountry(data)
            })
            .finally(() =>{
                setloading(false)
            })
    },[]);

    return (
        <div className="all">
        {
            loading ?  (

                <Loading/>
                )
                : (
                    country.map((e) => (
                        <div key={e.cca2} className="country-details">
					<img onClick={() =>(handleClick(e.name.common))} src={e.flags.png} className="country-image" /> 
					<h4 className="country-name">{e.name.common} </h4>
                    <h4 className="country-info">continent : {e.region}</h4>
                    <h4 className="country-info">population : {e.population}</h4></div>)))}
                    <Link to="/" >Home</Link> 
        </div>
    )

}