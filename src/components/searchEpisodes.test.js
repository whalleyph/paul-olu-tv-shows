import { test, expect, describe } from "vitest";
import { searchEpisodes } from "./utils";
import episodes from "../data/episodeTestData.json";

// take in input string, check if string is in the header and summary of object

describe("searchEpisodes", () => {
    test("returns an array of objects", () => {
        expect(Array.isArray(searchEpisodes("", []))).toBe(true);
    });

    test("returns correct information for search phrase in title", () => {
        expect(searchEpisodes("Winter is Coming", episodes)).toEqual([
            episodes[0],
        ]);
    });

    test("returns correct information for search phrase in description", () => {
        const searchString = "Viserys is increasingly frustrated by the lack";
        expect(searchEpisodes(searchString, episodes)).toEqual([episodes[5]]);
    });

    test("returns multiple correct results", () => {
        const searchResults = searchEpisodes("Stark", episodes);
        const resultID1 = searchResults[0].id;
        const resultID2 = searchResults[1].id;
        expect(searchResults.length).toBe(2);
        expect(resultID1).toBe(4952);
        expect(resultID2).toBe(4955);
    });

    test("case insensitive", () => {
        expect(searchEpisodes("DUBIOUS", episodes)).toEqual([episodes[4]]);
    });
});
