import {IMovie, IMoviesAction, IMoviesState, Types} from '../types/types';

const initialState: IMoviesState = {
    moviesRecomended:[],
 moviesRated:[],
  activeMovie: null,
};
export const moviesReducer = (
  state = initialState,
  action: IMoviesAction,
): IMoviesState => {
  const {type, payload} = action;
  switch (type) {
    case Types.loadMoviesRecomended:
      return {
        ...state,
        moviesRecomended: [...(payload as IMovie[])],
      };
      case Types.loadMoviesRated:
      return {
        ...state,
        moviesRated: [...(payload as IMovie[])],
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
