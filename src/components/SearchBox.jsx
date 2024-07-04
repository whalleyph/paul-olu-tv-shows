import episodes from "../data/mythBustersEpisodes.json"
import { createEpisodeCode } from "./utils";

export function SearchBox(props) {

    const episodeList = episodes.map((episode) => {
        const episodeCode = createEpisodeCode(episode.season, episode.number);
        const episodeTitle = `${episode.name} - ${episodeCode}`;
        return ({
            title: episodeTitle,
            name: episode.name,
            key: episode.id,
        });
    });

    function handleChange(event) {
        props.setSearchTerm(event.target.value);
    }

    const titleList = episodeList.map((episode) => {
        return (
            <option key={episode.key} value={episode.name}>
                {episode.title}
            </option>
        );
    });

    function handleSelection(event) {
        props.setSearchTerm(event.target.value)
    }

    return (
        <div className="search-area">
            <select onChange={handleSelection} className="select-box">
                <option value="">Select an episode...</option>
                {...titleList}</select>
            <input
                className="search-box"
                onChange={handleChange}
                placeholder="Search..."
            />
            <p>
                Displaying {props.listLength} / {props.totalEpisodes} episodes
            </p>
        </div>
    );
}
