import { describe,expect, test } from 'vitest';
import { formatCurrency } from './utils';


describe("formatCurrency", () => {
    test("should format currency", () => {
        expect(formatCurrency(999)).toBe("$9.99");
    });

    test("should return string", () => {
        expect(formatCurrency(999)).toBeTypeOf("string");
    });

    test("should format currency", () => {
        // expect(formatCurrency(999).length == 5).toBeTruthy();
        expect(formatCurrency(999)).toHaveLength(5);
    });
})
