import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  testEnvironment: "jsdom",
  roots: ["src/renderer/src/__test__"], // your unit test folders
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.web.json",
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/renderer/src/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "\\.svg$": "<rootDir>/src/renderer/src/__test__/utils/svg.mock.ts", // mocks SVG
  },
  // adding ignore paths to exlude them from coverages
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/renderer/src/__test__/utils/",
    "<rootDir>/src/renderer/src/components/ui/", // the Shadcn UI folder
  ],
};

export default config;
