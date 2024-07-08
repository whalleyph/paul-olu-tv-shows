function createEpisodeCode(season, episodeNumber) {
    const seasonOutput = season > 9 ? season : `0${season}`;
    const episodeOutput =
        episodeNumber > 9 ? episodeNumber : `0${episodeNumber}`;
    return `S${seasonOutput}E${episodeOutput}`;
}

function searchEpisodes(searchTerm, episodeList) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const results = episodeList.filter((episode) => {
        const lowerCaseName = episode.name.toLowerCase();
        const lowerCaseSummary = episode.summary
            ? episode.summary.toLowerCase()
            : "";

        const id = episode.id === parseInt(lowerCaseSearchTerm);
        const isInName = lowerCaseName.includes(lowerCaseSearchTerm);
        const isInSummary = lowerCaseSummary.includes(lowerCaseSearchTerm);

        return id || isInName || isInSummary;
    });

    return results;
}

function sortByShowName(a, b) {
    const nameA = a.props.children.toUpperCase(); // ignore upper and lowercase
    const nameB = b.props.children.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    // names must be equal
    return 0;
}

export { createEpisodeCode, searchEpisodes, sortByShowName };
