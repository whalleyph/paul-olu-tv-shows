import React from "react";
import { createEpisodeCode } from "./utils";

export function EpisodeCard(props) {
    const summaryHTML = {
        __html: props.episode.summary,
    };

    const episodeCode = createEpisodeCode(
        props.episode.season,
        props.episode.number,
    );

    return (
        <div className="tvShowsCard">
            <h2 className="episode-header">
                {props.episode.name} - {episodeCode}
            </h2>
            <img className="episode-image" src={props.episode.image.medium} />
            <div
                className="episode-summary"
                dangerouslySetInnerHTML={summaryHTML}
            />
        </div>
    );
}
