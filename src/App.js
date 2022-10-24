import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
	const [pokemonName, setpokemonName] = useState("");
	const [pokemon, setPokemon] = useState({
		name: "",
		species: "",
		img: "",
		attack: "",
		defense: "",
		type: ""
	})

	const fetchPokemon = () => {
		axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
		.then((res) => {
			setPokemon({
				name: pokemonName,
				species: res.data.species.name,
				img: res.data.sprites.front_default,
				attack: res.data.stats[1].base_stat,
				defense: res.data.stats[2].base_stat,
				type: res.data.types[0].type.name
			});
			console.log(res)
		})
		.catch(() => {
			console.error("Error!")
		})
	}

	return (
		<>
			<h1 className="themeText">My Pokemon App</h1>
			<div className='poc'>
			<div className="searchArea">
				<input 
					className="search"
					type="text"
					onChange={(event) => {
						setpokemonName(event.target.value);
					}}
				/>
				<button onClick={fetchPokemon}>Search</button>
			</div>

			<div className="resultCard">
				<div className="card">
					<h1>{pokemon.name}</h1>
					<img src={pokemon.img} />
					<p>SPECIES: {pokemon.species}</p>
					<h3>ATTACK: {pokemon.attack}</h3>
					<h4>DEFENSE: {pokemon.defense}</h4>
					<p>TYPE: {pokemon.type}</p>
				</div>
				</div>
			</div>
		</>
	);
};

export default App;
