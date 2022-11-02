import { render, screen, fireEvent } from "@testing-library/react";
import App, { spaceInseadOfCamelCase } from "./App";

test('red button with initial "Turn to green"', () => {
  render(<App />);

  // * find an element with the role of button and with text "Turn to green"

  const colorButton = screen.getByRole("button", { name: /Turn to green/i });

  //* expect colorButton to have initial red background color

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);

  //* expect colorButton to have green bg color and inner text with "Turn to red"

  expect(colorButton).toHaveStyle({ backgroundColor: "green" });

  expect(colorButton).toHaveTextContent("Turn to red");
});

test("find checkbox and test is it making button to be disable", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", {
    name: "disable colored button",
  });
  const colorButton = screen.getByRole("button", { name: /Turn to/i });

  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });
});

describe("function return string where camel case is preceded with space", () => {
  test("f-n return right value for one color shade", () => {
    expect(spaceInseadOfCamelCase("Red")).toBe("Red");
  });
  test("f-n return right value for 2 color shades", () => {
    expect(spaceInseadOfCamelCase("MidnightBlue")).toBe("Midnight Blue");
  });
  test("f-n return right value for color with any shades", () => {
    expect(spaceInseadOfCamelCase("VeryDarkRedMixedWithSunriseCoral")).toBe(
      "Very Dark Red Mixed With Sunrise Coral"
    );
  });
});
