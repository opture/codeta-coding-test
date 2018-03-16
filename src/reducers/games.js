import Games from "../games";
import { GamesFilter } from "../constants/Games";

export const initialState = {
  games: Games
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GamesFilter:
      let games = Games;
      if (action.payload.length > 0) {
        games = games.filter(game =>
          game.restrictedTerritories.some(t => t.startsWith(action.payload))
        );
      }
      return { ...state, games };
    default:
      return state;
  }
};
