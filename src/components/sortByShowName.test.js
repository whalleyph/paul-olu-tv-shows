import { test, expect, describe } from "vitest";
import { sortByShowName } from "./utils";

describe("sortByShowName", () => {
    test("correct output when b > a", () => {
        expect(sortByShowName({props: {children: "a"}}, {props: {children: "b"}})).toBe(-1)
        expect(sortByShowName({props: {children: "example"}}, {props: {children: "test"}})).toBe(-1)
        expect(sortByShowName({props: {children: "400"}}, {props: {children: "word"}})).toBe(-1)
    })
    test("correct output when a > b", () => {
        expect(sortByShowName({props: {children: "test"}}, {props: {children: "a"}})).toBe(1)
        expect(sortByShowName({props: {children: "g"}}, {props: {children: "c"}})).toBe(1)
        expect(sortByShowName({props: {children: "example"}}, {props: {children: "10000"}})).toBe(1)
    })
    test("correct output when a === b", () => {
        expect(sortByShowName({props: {children: "11"}}, {props: {children: "11"}})).toBe(0)
        expect(sortByShowName({props: {children: "test"}}, {props: {children: "test"}})).toBe(0)
        expect(sortByShowName({props: {children: "vite"}}, {props: {children: "vite"}})).toBe(0)
    })
})
