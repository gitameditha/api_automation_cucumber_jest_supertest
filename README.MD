# Automation Test API using Cucumber

Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team.


## Requirement
```
node installation
```

## Installation

- Set up node

```
npm install
```

## env
```
cp env.sample .env
```
    
## How To Run
```
npm run test        #Running test case
npm run test         #running test case and generate reports
```

## Structure
```bash
├── api
│   └── pages.js            #   API interaction methods
├── config
│   └── generate-report.js
├── data
│   └── orderData.js        #   Sample order data for tests
├── features
│   ├── step-defitions
│   │   └── orderSteps.js   #   Cucumber step definitions
│   └── order.feature       #   Gherkin feature file
├── README.MD               #   readme
├── cucumber-report.html    #   report
├── cucumber.js             #   config
├── env.sample              #   environment
├── package-lock.json
└── package.json            #   Node.js package configuration
```



## Report

report:
- cucumber-report.html : report use html report.

## Notes
- this project use Mac, with OS 13.3.1

## Answer the Question
1. To make sure this project scalable and easy to maintenance I prefer use cucumber so we can reuse step defitions.
2. We just have to adjust the scenario and run the automation, let's say we use Xray or other Test case managment which can export .feature file so we  import from test case menagement and run it on pipeline, if you want to adjust value of product just change it in test case management, no need to code or Merge request.
3. 
