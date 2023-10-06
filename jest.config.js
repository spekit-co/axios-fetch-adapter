const config = {
  preset: "ts-jest",

  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.js?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};

module.exports = config;
