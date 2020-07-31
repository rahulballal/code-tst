const solution = require('./04_remote-data')

test('all users have been accounted for', async () => {
  // Arrange
  const expected = 10

  // Act
  const actual = await solution()

  // Assert
  expect(actual.length).toBe(expected)
})
