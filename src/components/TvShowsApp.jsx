import episodes from "../data/gameOfThronesEpisodes.json";
import { EpisodeCard } from "./EpisodeCard";
export function TVShowsApp() {
    const ep1 = episodes[0];
    const episodeSlice = episodes.slice(0, 6);

    const episodeList = episodeSlice.map((episode) => {
        return <EpisodeCard episode={episode} key={episode.id} />;
    });

    return (
        <main className="tvShowsApp">
            <h1>{ep1._links.show.name}</h1>
            <p>
                Data from <a href="TVMaze.com">TVMaze.com</a>
            </p>
            {episodeList}
        </main>
    );
}
