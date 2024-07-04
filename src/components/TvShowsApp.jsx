import { useState } from "react";
//import episodes from "../data/gameOfThronesEpisodes.json";
import episodes from "../data/mythBustersEpisodes.json";
import { EpisodeCard } from "./EpisodeCard";
import { SearchBox } from "./SearchBox";
import { searchEpisodes, createEpisodeCode } from "./utils";

export function TVShowsApp() {
    const ep1 = episodes[0];
    const [searchTerm, setSearchTerm] = useState("");
    const selectedEpisodes =
        searchTerm.length === 0
            ? episodes
            : searchEpisodes(searchTerm, episodes);
    const selectedEpisodeTitles = [];

    const episodeList = selectedEpisodes.map((episode) => {
        const episodeCode = createEpisodeCode(episode.season, episode.number);
        const episodeTitle = `${episode.name} - ${episodeCode}`;
        selectedEpisodeTitles.push({
            title: episodeTitle,
            name: episode.name,
            key: episode.id,
        });
        return (
            <EpisodeCard
                episodeTitle={episodeTitle}
                episode={episode}
                key={episode.id}
            />
        );
    });

    return (
        <main className="tvShowsApp">
            <h1>{ep1._links.show.name}</h1>
            <p>
                Data from <a href="TVMaze.com">TVMaze.com</a>
            </p>
            <SearchBox
                listLength={episodeList.length}
                totalEpisodes={episodes.length}
                setSearchTerm={setSearchTerm}
                titleArray={selectedEpisodeTitles}
            />
            <div className="episode-list">{episodeList}</div>
        </main>
    );
}
