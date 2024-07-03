function createEpisodeCode(season, episodeNumber) {
    const seasonOutput = season > 9 ? season : `0${season}`;
    const episodeOutput =
        episodeNumber > 9 ? episodeNumber : `0${episodeNumber}`;
    return `S${seasonOutput}E${episodeOutput}`;
}

function searchEpisodes(searchTerm, episodeList){
    return [];
}

export { createEpisodeCode, searchEpisodes};
