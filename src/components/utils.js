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
        const lowerCaseSummary = episode.summary.toLowerCase();

        const isInName = lowerCaseName.includes(lowerCaseSearchTerm);
        const isInSummary = lowerCaseSummary.includes(lowerCaseSearchTerm);

        return isInName || isInSummary;
    });

    return results;
}

export { createEpisodeCode, searchEpisodes };