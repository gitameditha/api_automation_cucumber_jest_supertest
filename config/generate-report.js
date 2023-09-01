const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'report/cucumber-report.json', // Update with the actual path
  output: 'report/cucumber-report.html', // Output path for the HTML report
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0',
  }
};

reporter.generate(options);
