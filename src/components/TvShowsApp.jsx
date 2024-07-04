import { useEffect, useState } from "react";
//import episodes from "../data/gameOfThronesEpisodes.json";
import episodes from "../data/mythBustersEpisodes.json";
import { EpisodeCard } from "./EpisodeCard";
import { SearchBox } from "./SearchBox";
import { searchEpisodes, createEpisodeCode } from "./utils";
import { fetchEpisodes } from "../data/api";

export function TVShowsApp() {
    const [searchTerm, setSearchTerm] = useState("");
    const selectedEpisodes =
        searchTerm.length === 0
            ? episodes
            : searchEpisodes(searchTerm, episodes);

    const episodeList = selectedEpisodes.map((episode) => {
        const episodeCode = createEpisodeCode(episode.season, episode.number);
        const episodeTitle = `${episode.name} - ${episodeCode}`;
        return (
            <EpisodeCard
                episodeTitle={episodeTitle}
                episode={episode}
                key={episode.id}
            />
        );
    });

    useEffect(() => {
        console.log("use effect ran")
        fetchEpisodes(82)
    }, [])

    return (
        <main className="tvShowsApp">
            <h1>{episodes[0]._links.show.name}</h1>
            <p>
                Data from <a href="TVMaze.com">TVMaze.com</a>
            </p>
            <SearchBox
                listLength={episodeList.length}
                totalEpisodes={episodes.length}
                setSearchTerm={setSearchTerm}
            />
            <div className="episode-list">{episodeList}</div>
        </main>
    );
}
