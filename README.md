# Term Deposit Calculator

This project is a Term Deposit Calculator built with React. It allows users to calculate the final balance of a term deposit based on various inputs such as start amount, interest rate, investment term, and interest payment frequency.


https://github.com/user-attachments/assets/4541fd64-6fb2-44e1-b7b0-716ca5e774e5



## Table of Contents

- [Installation](#installation)
- [Run](#run)
- [Testing](#testing)
- [File Structure](#file-structure)

## Installation

To install the project dependencies, run:

`npm install`

## Run
To start the development server, run: `npm start`

This will start the application on http://localhost:3000.

## Testing
To run the tests, use:
`npm test`

## File Structure
```
.
├── README.md
├── package.json
├── tsconfig.json
├── src/
│   ├── components/
│   │   ├── TermDepositCalculator.tsx
│   │   ├── Form.tsx
│   │   ├── formInputs/
│   │   |   ├── InterestPaidInput/
│   │   |   ├── InterestRateInput/
│   │   |   ├── InvestmentTermInput/
│   │   |   ├── StartAmountInput/
│   ├── styles/
│   │   ├── TermDepositCalculatorStyles.ts
│   ├── types/
│   │   ├── index.ts
│   ├── utils/
│   │   ├──calculateTermDepositFinalBalance.ts
│   │   ├── calculateTermDepositFinalBalance.test.ts
```

