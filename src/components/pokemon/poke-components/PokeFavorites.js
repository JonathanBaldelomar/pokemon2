import * as React from 'react';
import { StarSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux'
import * as pokemonActions from '../../redux/actions/pokemonActions'


export default function PokeFavorites({ pokemon, status }) {
    const dispatch = useDispatch();

    function HandleAdd() {
        dispatch(pokemonActions.addFavorite({ name: pokemon.name, id: pokemon.id, types: pokemon.types }))
        console.log(pokemon.name, pokemon.id, pokemon.types)
    }
    
    function HandleRemove() {
        console.log(pokemon.id)
        dispatch(pokemonActions.deleteFavorite(pokemon.id))
    }
    // function HandleOnClick() {
    //     console.log(status)
    //     if (!status) {
    //         HandleAdd();
    //     }
    //     else {
    //         HandleRemove();
    //     }
    // }

    return (
        <div>
            <IconButton sx={{ bgcolor: 'yellow', boxShadow: 5, padding: '5px', margin: '2px' }} aria-label="star" size="large">
                <StarSharp
                    fontSize="large"
                    onClick={() => HandleAdd()}
                />
            </IconButton>
            <IconButton sx={{ bgcolor: 'red', boxShadow: 5, padding: '5px', margin: '2px' }} aria-label="star" size="large">
                <StarSharp
                    fontSize="large"
                    onClick={() => HandleRemove()}
                />
            </IconButton>
        </div>
    );
}