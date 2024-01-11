import Button from '@mui/material/Button';
import Pokemon from "./Pokemon"

import './Pokemon.css'
import { Card, CardHeader, CardMedia } from '@mui/material';

function Pokemons({ pokemons }) {
	return (
		<div className="pokemons">
			
			{pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} />)}
		</div>
	)
}

export default Pokemons