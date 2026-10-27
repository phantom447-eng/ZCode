import { describe, expect, it } from "vitest";
import enUS from "./locales/en-US.js";
import ruRU from "./locales/ru-RU.js";

function placeholders(value: string): string[] {
  return (value.match(/\{[^}]+\}/g) ?? []).sort();
}

describe("ru-RU locale catalog", () => {
  it("keeps every ru-RU key in sync with en-US", () => {
    expect(Object.keys(ruRU).sort()).toEqual(Object.keys(enUS).sort());
  });

  it("keeps {placeholder} sets identical to en-US", () => {
    for (const [key, value] of Object.entries(ruRU)) {
      expect(
        placeholders(value),
        `ru-RU ${key} placeholders must match en-US`,
      ).toEqual(placeholders(enUS[key] ?? ""));
    }
  });
});
