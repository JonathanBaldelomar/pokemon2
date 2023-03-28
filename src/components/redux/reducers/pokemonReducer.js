import { Filter } from "@mui/icons-material";

export default function pokemonReducer(state = [], action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      const pokeFind = state.find((p) => p.id === action.pokemon.id);
      if (!pokeFind) {
        return [...state, action.pokemon];
      }
      else {
        return [...state];
      }
    case "DELETE_FAVORITE":
      return state.filter((p) => p.id !== action.id);
    default:
      return state;
  }
}
