import Info from "./Info";

import { render, screen } from "@testing-library/react";

describe("Given an Info component", () => {
  describe("When is render", () => {
    test("Then it should contain 'Calling...' in the screen", () => {
      render(<Info />);

      const testInfo = screen.queryByText("Calling...");

      expect(testInfo).toHaveTextContent("Calling...");
    });
  });
});
