import {IMovie, IMoviesAction, IMoviesState, Types} from '../types/types';

const initialState: IMoviesState = {
  movies: [],
  activeMovie: null,
};
export const moviesReducer = (
  state = initialState,
  action: IMoviesAction,
): IMoviesState => {
  const {type, payload} = action;
  switch (type) {
    case Types.loadMovies:
      return {
        ...state,
        movies: [...(payload as IMovie[])],
      };
    case Types.setActiveMovie:
      return {
        ...state,
        activeMovie: payload as any,
      };
    default:
      return state;
  }
};
