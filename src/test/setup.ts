import "@testing-library/jest-dom";
import { vi } from "vitest";

if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

class NoopIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

if (!("IntersectionObserver" in window)) {
  // @ts-expect-error jsdom has no IntersectionObserver; provide a no-op default for tests
  window.IntersectionObserver = NoopIntersectionObserver;
  // @ts-expect-error same as above, for code referencing the global directly
  global.IntersectionObserver = NoopIntersectionObserver;
}
