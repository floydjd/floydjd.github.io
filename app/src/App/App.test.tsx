import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { content as prodContent, ContentConfig } from "../content";

const testContent: ContentConfig = {
  ...prodContent,
};

describe("App", () => {
  it("renders name", () => {
    render(<App content={testContent} />);
    expect(screen.queryByText("Jordan Floyd")).toBeInTheDocument();
  });
});
