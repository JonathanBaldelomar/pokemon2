import { combineReducers } from 'redux';
import favorites from "./pokemonReducer";

const rootReducer = combineReducers({
  favorites
});

export default rootReducer;
