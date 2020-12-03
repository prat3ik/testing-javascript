const { sum, sub } = require("../math");

test("Sum of 2 numbers", async() => {
  const sumResult = await sum(2, 3);
  let expectedResult = 5;
  expect(expectedResult).toBe(sumResult);
});

test("Substraction of 2 numbers", async () => {
  const sumResult = await sub(2, 3);
  let expectedResult = 5;
  expect(expectedResult).toBe(sumResult);
});

test("Addition and Substraction", async () => {
  const a = await sum(5, 2);
  const b = await sub(5, 2);
  expect(11).toEqual(a + b);
});