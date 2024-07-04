import axios from "axios";


export async function fetchEpisodes(showId){
    const result = await axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`);
    console.log(result);
    return result;
}