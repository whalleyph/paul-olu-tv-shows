import episodes from "../data/gameOfThronesEpisodes.json";
export function TVShowsApp() {
    const ep1 = episodes[0];

    const summaryHTML = {
        __html: ep1.summary,
    };

    return (
        <main className="tvShowsApp">
            <h1>Game of Thrones Episodes</h1>
            <div className="tvShowsCard">
                <h2>{ep1.name}</h2>
                <img src={ep1.image.medium} />
                <div
                    className="episode-summary"
                    dangerouslySetInnerHTML={summaryHTML}
                />
            </div>
        </main>
    );
}
