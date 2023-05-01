test("Renders main page correctly", () => {
  expect(true).toBeTruthy();
});

test("Renders main page correctly", () => {
  expect(true).toBeTruthy();
});

describe("My first snapshot test", () => {
  test("testing app button", () => {
    let tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
