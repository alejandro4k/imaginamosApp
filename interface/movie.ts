import { IMovie } from "../redux/types/types";
export interface IProductionCompany{
    id:number,
    logo_path:string,
    name:string,
    origin_country:string
}
export interface IProductionCountry{
    iso_3166_1:string,
    name:string
}
export interface ISpokenLenguages {
    english_name:string,
    iso_639_1:string,
    name:string
}
export interface IDetailMovie extends IMovie{
    belongs_to_collection:Partial<IMovie>,
    budget:number,
    homepage:string,
    imdb_id:string,
    production_companies:IProductionCompany[],
    production_countries:IProductionCountry[],
    revenue:number,
    runtime:number,
    spoken_languages:ISpokenLenguages[],
    tagline:string,
    

}