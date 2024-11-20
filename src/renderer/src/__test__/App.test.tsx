import "@testing-library/jest-dom";
import "./utils/window.mock";
import { render, screen, fireEvent } from "./utils";
import { expect, test } from "vitest";
import { act } from "react";
import App from "@/App";

describe("Tesing default interface", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />);
    });
  });
  test("check screen elements", () => {
    expect(
      screen.getByText(/Electron \+ React \+ Shadcn/i)
    ).toBeVisible();
    expect(screen.getByText(/Increase Count/i)).toBeVisible();
    expect(screen.getByText(/Invoke IPC/i)).toBeVisible();
  });

  test("check count button interactions", () => {
    const countButton = screen.getByText(/Increase Count/);
    fireEvent.click(countButton);
    expect(screen.getByText("1")).toBeVisible();
    fireEvent.click(countButton);
    expect(screen.getByText("2")).toBeVisible();
  });

  test("check IPC communication", () => {
    const ipcButton = screen.getByText(/Invoke IPC/);
    fireEvent.click(ipcButton);
    expect(window.context.triggerIPC).toHaveBeenCalled();
  });
});
