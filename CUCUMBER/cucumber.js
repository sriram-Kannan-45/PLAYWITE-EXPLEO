module.exports = {
  default: {
    requireModule: [
      "ts-node/register"
    ],

    require: [
      "src/test/steps/**/*.ts",
      "src/hooks/hooks.ts"
    ],

    paths: [
      "src/test/features/**/*.feature"
    ],

    format: [
      "progress-bar",
      "json:test-result/cucumber-report.json"
    ],

    formatOptions: {
      snippetInterface: "async-await"
    },

    publishQuiet: true,
    dryRun: false,
    parallel: 1
  }
};