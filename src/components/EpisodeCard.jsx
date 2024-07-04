export function EpisodeCard(props) {
    const summaryHTML = {
        __html: props.episode.summary,
    };

    return (
        <div className="tvShowsCard">
            <h2 className="episode-header">
                {props.episodeTitle}
            </h2>
            {props.episode.image && <img className="episode-image" src={props.episode.image.medium} />}
            <div
                className="episode-summary"
                dangerouslySetInnerHTML={summaryHTML}
            />
        </div>
    );
}
