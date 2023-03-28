import * as React from 'react';
import PokeWeakness from './PokeWeakness';
import PokeFavorites from './PokeFavorites';
import { useEffect, useState } from 'react';
import StarIcon from '@mui/material/IconButton';
import {
  Card, Avatar, CardHeader,
  CardActions, CardContent, CardMedia, Button, Typography
} from '@mui/material';
import { FacebookSharp, StarSharp } from '@mui/icons-material';
import { CardActionArea } from '@mui/material';


export default function MediaCard({ image2, name, id, logo, pokemon }) {
  const [isDelete, setIsDelete] = useState(true);

  function HandleDelete() {
    setIsDelete(!isDelete);
    return isDelete;
  }

  return (
    <Card sx={{ maxWidth: 345, width: 345, backgroundColor: 'green' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'white', boxShadow: 5, padding: '5px', margin: '2px' }} aria-label="recipe" src={logo} >
          </Avatar>
        }
        titleTypographyProps={{ variant: 'h4', alig: 'left' }}
        title={name}
        subheader={id}
        action={
          <PokeFavorites
            pokemon={pokemon}
          //status={ ()=>HandleDelete() } //arreglar para true/false estrella
          />
        }
      />
      <CardMedia
        sx={{
          minHeight: '300px',
          maxHeight: '300px',
          padding: '15px',
          objectFit: "contain",
          backgroundColor: 'skyblue',
          width: "auto"
        }}
        image={image2}
        title="Pokemon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <div id='container'>
            <div>
              <div>
                <h3>Weight:</h3>
                {pokemon.weight / 10} kg
              </div>
              <div>
                <h3>Height:</h3>
                {pokemon.height / 10} mts
              </div>
            </div>
            <PokeWeakness />
            <div>
              <div>
                <h3>Types:</h3>
                {pokemon.types?.map(ty => {
                  return (
                    <li> {ty.type.name} </li>
                  )
                }
                )}
              </div>
              <div>
                <h3>Abilities:</h3>
                {pokemon.abilities?.map(ab => {
                  return (
                    <li> {ab.ability.name} </li>
                  )
                }
                )}
              </div>
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
