import renderer from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";
//Heres where I run my tests for app.
describe("App component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test("Should return a 404 when invalid route", () => {
  render(<App />);
  const appElement = screen.getByTestId("app-1");
  expect(appElement).toBeInTheDocument();
});
