import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useReveal } from "./useReveal";

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  callback: IntersectionObserverCallback;
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
  root = null;
  rootMargin = "";
  thresholds: ReadonlyArray<number> = [];

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }
}

function mockReducedMotion(matches: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query.includes("prefers-reduced-motion") ? matches : false,
    media: query,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}

function TestTarget() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return <div ref={ref}>{visible ? "visible" : "hidden"}</div>;
}

describe("useReveal", () => {
  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    // @ts-expect-error overriding with a controllable mock for this test file
    global.IntersectionObserver = MockIntersectionObserver;
  });

  it("is visible immediately when prefers-reduced-motion is set, without observing", () => {
    mockReducedMotion(true);
    render(<TestTarget />);

    expect(screen.getByText("visible")).toBeInTheDocument();
    expect(MockIntersectionObserver.instances).toHaveLength(0);
  });

  it("starts hidden and becomes visible once the element intersects, then disconnects", () => {
    mockReducedMotion(false);
    render(<TestTarget />);

    expect(screen.getByText("hidden")).toBeInTheDocument();

    const observer = MockIntersectionObserver.instances[0];
    expect(observer.observe).toHaveBeenCalledTimes(1);

    act(() => {
      observer.callback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        observer as unknown as IntersectionObserver,
      );
    });

    expect(screen.getByText("visible")).toBeInTheDocument();
    expect(observer.disconnect).toHaveBeenCalledTimes(1);
  });

  it("stays hidden when the element has not intersected yet", () => {
    mockReducedMotion(false);
    render(<TestTarget />);

    const observer = MockIntersectionObserver.instances[0];
    act(() => {
      observer.callback(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        observer as unknown as IntersectionObserver,
      );
    });

    expect(screen.getByText("hidden")).toBeInTheDocument();
    expect(observer.disconnect).not.toHaveBeenCalled();
  });
});
