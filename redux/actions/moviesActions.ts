import Axios from 'axios';
import {IMovie, IMoviesAction, Types} from '../types/types';

export const startLoadMoviesRecomended = () => {
  return async (dispatch: any) => {
    const {data} = await Axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=528c73d3a9a968fbd19ed10dccadcb03&page=1',
    );
    if (data.results.length > 0) {

        
        dispatch(loadMoviesRecomended(data.results));
    }
  };
};
export const loadMoviesRecomended = (movies: IMovie[]): IMoviesAction => ({
  type: Types.loadMoviesRecomended,
  payload: movies,
});
export const startLoadMoviesRated = () => {
  return async (dispatch: any) => {
    const {data} = await Axios.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=528c73d3a9a968fbd19ed10dccadcb03&page=1',
    );
    if (data.results.length > 0) {
      dispatch(loadMoviesRated(data.results));
    }
  };
};
export const loadMoviesRated = (movies: IMovie[]): IMoviesAction => ({
  type: Types.loadMoviesRated,
  payload: movies,
});
export const setActiveMovie = (movie:IMovie|null):IMoviesAction=>({
  type:Types.setActiveMovie,
  payload:movie
})
