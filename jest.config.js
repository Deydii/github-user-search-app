module.exports =  () => {
  return {
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
      "^.+\\.ts$": "babel-jest",
      "^.+\\.vue$": "@vue/vue3-jest"
    },
    testPathIgnorePatterns: ['/node_modules/'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
      customExportConditions: ["node", "node-addons"],
   },
   setupFiles: ['<rootDir>/src/components/__tests__/matchMedia.js'],
   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
  }
} 