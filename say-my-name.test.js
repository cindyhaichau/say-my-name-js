const sayMyName = require('./say-my-name');

test('should returns \'Hi! My name is A B\'', () => {
  expect(sayMyName('A', 'B')).toBe('Hi! My name is A B');
});

test('should returns \'Hi! My name is John Doe\'', () => {
  expect(sayMyName('John', 'Doe')).toBe('Hi! My name is John Doe');
});

test('should returns \'Hi! My name is ', () => {
  expect(sayMyName('', '')).toBe('Hi! My name is  ');
});
