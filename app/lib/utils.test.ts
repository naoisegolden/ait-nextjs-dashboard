import { expect, test } from 'vitest'
import { formatCurrency } from './utils';

test("formats currency correctly", () => {
    expect(formatCurrency(999)).toBe("$9.99");
})