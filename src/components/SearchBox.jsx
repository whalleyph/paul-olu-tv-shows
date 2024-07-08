// import episodes from "../data/mythBustersEpisodes.json";
import { createEpisodeCode, sortByShowName } from "./utils";

export function SearchBox(props) {
    const episodeList = props.episodeData.map((episode) => {
        const episodeCode = createEpisodeCode(episode.season, episode.number);
        const episodeTitle = `${episode.name} - ${episodeCode}`;
        return {
            title: episodeTitle,
            name: episode.name,
            key: episode.id,
            summary: episode.summary,
        };
    });

    const tvShowList = props.tvShowData
        .map((show) => {
            return (
                <option key={show.id} value={show.id}>
                    {show.name}
                </option>
            );
        })
        .sort(sortByShowName);

    const titleList = episodeList.map((episode) => {
        return (
            <option key={episode.id} value={episode.summary}>
                {episode.title}
            </option>
        );
    });

    function handleChange(event) {
        props.setSearchTerm(event.target.value);
    }

    function handleEpisodeSelection(event) {
        props.setSearchTerm(event.target.value);
    }

    function handleShowSelection(event) {
        props.setSelectedShow(event.target.value);
    }

    // add ternary for initial render
    return (
        <div className="search-area">
            <select className="tv-show-select" onChange={handleShowSelection}>
                {...tvShowList}
            </select>

            <select onChange={handleEpisodeSelection} className="select-box">
                <option value="">Select an episode...</option>
                {...titleList}
            </select>
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
