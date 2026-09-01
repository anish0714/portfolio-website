import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import Contact from "./Contact";

describe("Contact", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("marks name, contact info, and message as required", () => {
    render(<Contact />);

    expect(screen.getByLabelText(/^name$/i)).toBeRequired();
    expect(screen.getByLabelText(/email or phone/i)).toBeRequired();
    expect(screen.getByLabelText(/message/i)).toBeRequired();
  });

  it("opens a pre-filled Gmail compose window with the entered name, contact, and message on submit", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/^name$/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email or phone/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Let's talk" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(openSpy).toHaveBeenCalledTimes(1);
    const [url, target] = openSpy.mock.calls[0];
    const params = new URL(String(url)).searchParams;

    expect(String(url)).toContain("mail.google.com");
    expect(params.get("su")).toBe("Portfolio contact from Jane Doe");
    expect(params.get("body")).toContain("Name: Jane Doe");
    expect(params.get("body")).toContain("Contact: jane@example.com");
    expect(params.get("body")).toContain("Let's talk");
    expect(target).toBe("_blank");
  });
});
