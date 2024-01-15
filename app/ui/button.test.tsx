import { test, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Button } from './button';

beforeEach(() => {
    render(<Button>Button</Button>)
});

afterEach(cleanup);

test("Button is rendered", () => {
    // render(<Button>Button</Button>);
    // expect(screen.getByRole("button")).toBeDefined()
    // expect(screen.getByTestId("myButton")).toBeDefined()
    expect(screen.getByText("Button")).toBeDefined()
});

test("Button is clicked shows test 'clicked'", () => {
    // render(<Button>Button</Button>);
    fireEvent.click(screen.getByText("Button"));

    expect(screen.findByText("clicked")).toBeDefined();
});
