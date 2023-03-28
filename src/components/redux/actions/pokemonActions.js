export function addFavorite(favorite) {
  return { type: "ADD_FAVORITE", pokemon: favorite };
}

export function deleteFavorite(id) {
  return { type: "DELETE_FAVORITE", id };
}