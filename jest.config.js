module.exports = {
  name: 'mailerlite-api-v2-node',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['jest-extended'],
}
