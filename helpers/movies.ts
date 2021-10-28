import Axios from "axios"
import { IDetailMovie } from "../interface/movie";

export const getMovieDetail = async(id:number)=>{
    const {data} = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=528c73d3a9a968fbd19ed10dccadcb03`);
    return data as IDetailMovie
}