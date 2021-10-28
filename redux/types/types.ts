export interface IReduxType {
  type: Types;
}
export interface IMovie{
  adult:boolean,
  backdrop_path:string,
  belongs_to_collection:any,
  budget:number,
  genres:any[],
  homepage:string,
  id:number,
  imdb_id:string,
  original_language:string,
  original_title:string,
  overview:string,
  popularity:number,
  poster_path:string,
  production_companies:any[],
  production_countries:any[],
  release_date:string,
  revenue:number,
  runtime:number,
  spoken_languages:any[],
  status:string,
  tagline:string,
  title:string,
  video:boolean,
  vote_average:number,
  vote_count:number
}
export interface IMoviesState{
  moviesRecomended:IMovie[],
  moviesRated:IMovie[],
  activeMovie:IMovie|null
}
export interface IMoviesAction extends IReduxType{
  payload?:IMovie | string | IMovie[]
}
export interface IUiState{
  darkmode:boolean
}
export interface IUiActions extends IReduxType{
  payload?:boolean
}

export enum Types {
  loadMoviesRecomended = '[movies] load movies recomended',
  loadMoviesRated = '[movies] load movies rated',
  setActiveMovie = '[movies] set active movie',
  setDarkMode = '[ui] set dark mode'
}
