import episodes from "../data/gameOfThronesEpisodes.json";
import { EpisodeCard } from "./EpisodeCard";
export function TVShowsApp() {
    const ep1 = episodes[0];

    const summaryHTML = {
        __html: ep1.summary,
    };

    return (
        <main className="tvShowsApp">
            <h1>{ep1._links.show.name}</h1>
            <EpisodeCard
            episode={ep1} 
            />
        </main>
    );
}
