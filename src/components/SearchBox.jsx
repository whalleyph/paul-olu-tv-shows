export function SearchBox(props) {
    function handleChange(event) {
        props.setSearchTerm(event.target.value);
    }

    return (
        <div className="search-area">
            <select
                className="select-box"
                
            />
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
