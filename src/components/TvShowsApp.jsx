import episodes from "../data/gameOfThronesEpisodes.json";
export function TVShowsApp() {
    const ep1 = episodes[0];

    const summaryHTML = {
        __html: ep1.summary,
    };

    return (
        <main className="tvShowsApp">
            <h1>{ep1._links.show.name}</h1>
            <div className="tvShowsCard">
                <h2 className="episode-header">{ep1.name}</h2>
                <img className="episode-image" src={ep1.image.medium} />
                <div
                    className="episode-summary"
                    dangerouslySetInnerHTML={summaryHTML}
                />
            </div>
        </main>
    );
}
