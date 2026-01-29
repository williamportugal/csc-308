const myFunctions = require('./exampleFunctions.js');

test('Testing div -- success', () => {
  const target = 3;
  const result = myFunctions.div(12, 4);
  expect(target).toBe(result);
});

test('Testing div -- division by zero', () => {
  const result = myFunctions.div(10, 0);
  expect(result).toBe(Infinity);
});

test('Testing div -- negative numbers', () => {
  const result = myFunctions.div(-12, 4);
  expect(result).toBe(-3);
});

test('Testing div -- both negative', () => {
  const result = myFunctions.div(-12, -4);
  expect(result).toBe(3);
});

test('Testing div -- decimal result', () => {
  const result = myFunctions.div(10, 4);
  expect(result).toBe(2.5);
});

test('Testing div -- zero numerator', () => {
  const result = myFunctions.div(0, 5);
  expect(result).toBe(0);
});

test('Testing containsNumbers -- success', () => {
  const text = "Hello123";
  const result = myFunctions.containsNumbers(text);
  expect(result).toBe(true);
});

test('Testing containsNumbers -- number at start', () => {
  const text = "1hello";
  const result = myFunctions.containsNumbers(text);
  expect(result).toBe(true);
});

test('Testing containsNumbers -- failure', () => {
  const text = "HelloWorld";
  const result = myFunctions.containsNumbers(text);
  expect(result).toBe(false);
});

test('Testing containsNumbers -- failure', () => {
  const text = "Hello World";
  const result = myFunctions.containsNumbers(text);
  expect(result).toBe(false);
});
// bug identified -- space triggers containsNumbers to return true

test('Testing containsNumbers -- only numbers', () => {
  const text = "12345";
  const result = myFunctions.containsNumbers(text);
  expect(result).toBe(true);
});

test('Testing containsNumbers -- empty string', () => {
  const text = "";
  const result = myFunctions.containsNumbers(text);
  expect(result).toBe(false);
});

