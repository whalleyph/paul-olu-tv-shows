import { test, expect, describe } from "vitest";
import { createEpisodeCode } from "./utils";

describe("", () => {
    test("Return value to be a string", () => {
        expect(typeof createEpisodeCode(5, 1)).toBe("string");
    });

    test("double digit episode/season number", () => {
        expect(createEpisodeCode(12, 10)).toBe("S12E10");
    });

    test("single digit episode and season number", () => {
        expect(createEpisodeCode(12, 5)).toBe("S12E05");
        expect(createEpisodeCode(5, 12)).toBe("S05E12");
        expect(createEpisodeCode(4, 5)).toBe("S04E05");
    });
});
