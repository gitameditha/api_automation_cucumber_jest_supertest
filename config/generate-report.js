const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'path-to-your-cucumber-json-file.json', // Update with the actual path
  output: 'report/cucumber-report.html', // Output path for the HTML report
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'STAGING',
    'Browser': 'Chrome',
    'Platform': 'Windows 10',
    'Parallel': 'Scenarios',
    'Executed': 'Local'
  }
};

reporter.generate(options);
