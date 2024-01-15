import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InvoicesTable from "./table";

describe("Invoices table", () => {
    test("should show empty state", () => {
        render(<InvoicesTable invoices={[]} />);

        expect(screen.queryByTestId("table-item-mobile")).toBeNull();
        expect(screen.queryByTestId("table-item-desktop")).toBeNull();
    });

    test("should show rows correctly", () => {
        const mockInvoices = [
            {
                id: 1,
                image_url: "https://mockimage.com",
                name: "Name 1",
                email: "1@email.com",
                status: "paid",
                amount: 421,
                date: "Mon Jan 15 2024",
            }
        ]
        render(<InvoicesTable invoices={mockInvoices} />);

        expect(screen.getAllByTestId("table-item-mobile")).toBeDefined();
        expect(screen.getAllByTestId("table-item-desktop")).toBeDefined();

        expect(screen.getAllByTestId("table-item-desktop")).toHaveLength(mockInvoices.length);
    })
});