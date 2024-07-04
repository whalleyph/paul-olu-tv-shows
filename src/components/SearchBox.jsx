export function SearchBox(props) {
    function handleChange(event) {
        props.setSearchTerm(event.target.value);
    }

    const titleArray = props.titleArray;
    const titleList = titleArray.map((episode) => {
        return (
            <option key={episode.key} value={episode.name}>
                {episode.title}
            </option>
        );
    });

    return (
        <div className="search-area">
            <select className="select-box">{...titleList}</select>
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
