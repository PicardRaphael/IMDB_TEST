export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export function addFavorite(movie) {
    return { type: ADD_FAVORITE, movie }
}
export function removeFavorite(movie) {
    return { type: REMOVE_FAVORITE, movie }
}