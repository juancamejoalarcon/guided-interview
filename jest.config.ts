export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/tests/**/*.spec.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/src/demo/", "/src/lib/", "/src/data/"],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: [
    "node_modules",
  ],
  reporters: ["default"],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { diagnostics: false }]
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
