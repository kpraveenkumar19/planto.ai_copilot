module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/test/**/*.test.ts'],
    moduleNameMapper: {
      '^vscode$': '<rootDir>/__mocks__/vscode.ts',
    },
  };