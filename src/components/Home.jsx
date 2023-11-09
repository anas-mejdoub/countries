import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css'
import Loading from "./Loading";

export default function Home()
{
	const [countries, setcountries] = useState([]);
	const [loading, setloading] = useState(true);
	const navigate = useNavigate();
	async function fetchdata(){
		const response = await axios.get("https://restcountries.com/v3.1/all");
		
		return (response.data);
	}
	useEffect(() =>{
		fetchdata()
			.then((data) => {
				setcountries(data);
				console.log(data);
			 })
			 .finally(() =>{
				setloading(false);
			 })
	},[]);

	const handleClick = (name) =>{
		navigate("/detailsCountry/" + name)
	}
	return (
		<>
			<ul>
				{loading ? (
					<Loading/>
				)
			:
			(

				countries.map((e) => (<li key={e.cca2}>
					<img onClick={() =>(handleClick(e.name.common))} src={e.flags.png} /> 
					<h4>{e.name.common} </h4></li>))
			)}
			</ul>
		</>
	)
}