import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';


function PokemonList({ pokemonList }) {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "type", headerName: "Type", width: 250 },
  ];

  const rows = pokemonList.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    type: pokemon.types?.map(ty => {
      return " " + ty.type.name
    }),
  }));

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
}
export default PokemonList;