// import episodes from "../data/mythBustersEpisodes.json";
import { createEpisodeCode } from "./utils";

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

    const tvShowList = props.tvShowData.map((show) => {
        return (<option key={show.id}>{show.name}
        </option>
        )
    })

    const titleList = episodeList.map((episode) => {
        return (
            <option key={episode.key} value={episode.summary}>
                {episode.title}
            </option>
        );
    });

    function handleChange(event) {
        props.setSearchTerm(event.target.value);
    }


    function handleSelection(event) {
        props.setSearchTerm(event.target.value);
    }

    return (
        <div className="search-area">
            <select className="tv-show-select" onChange={() => {}}>
                {...tvShowList}
            </select>

            <select onChange={handleSelection} className="select-box">
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
