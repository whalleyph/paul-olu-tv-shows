import episodes from "../data/gameOfThronesEpisodes.json";
export function TVShowsApp() {
    const ep1 = episodes[0];
    return (
        <main className="tvShowsApp">
            <h1>TVShowsApp</h1>
            <div>Got {episodes.length} episode(s) in array</div>
            <div>Title of first episode: {ep1.name}</div>
        </main>
    );
}
