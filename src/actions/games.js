import { GamesFilter } from "../constants/Games";

export const gameSearch = text => dispatch => {
    dispatch({ type: GamesFilter, payload: text });
};
