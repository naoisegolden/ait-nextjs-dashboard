import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './button';

test("Button is rendered", () => {
    render(<Button>Button</Button>);
    // expect(screen.getByRole("button")).toBeDefined()
    // expect(screen.getByTestId("myButton")).toBeDefined()
    expect(screen.getByText("Button")).toBeDefined()
});
