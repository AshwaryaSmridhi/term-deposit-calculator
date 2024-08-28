import { InterestPaidFrequency, TermDepositFields } from "./types";

export const calculateTermDepositFinalBalance = (termDepositFields: TermDepositFields) => {
    validateInputs(termDepositFields);
    const { startAmount, interestRate, interestPaid, investmentTerm } = termDepositFields
    const interestRatePerAnnum = interestRate / 100;
    const interestPeriodsPerYear: number = getInterestPeriodsPerYear(interestPaid);
    const investmentTermInYears = investmentTerm / 12;

    const balance = calculateBalance(startAmount, interestRatePerAnnum, interestPaid, interestPeriodsPerYear, investmentTermInYears);
    return getFinalBalance(balance);
}


export const calculateBalance = (
    startAmount: number,
    interestRatePerAnnum: number,
    interestPaid: InterestPaidFrequency,
    interestPeriodsPerYear: number,
    investmentTermInYears: number
): number => {
    if (interestPaid === InterestPaidFrequency.AtMaturity) {
        // For "At Maturity," there is no compounding until the end.
        // So this is simple interest calculation
        return calculateSimpleInterest(startAmount, interestRatePerAnnum, investmentTermInYears);
    } else {
        return calculateCompoundInterest(startAmount, interestRatePerAnnum, interestPeriodsPerYear, investmentTermInYears);
    }
}

export const calculateSimpleInterest = (
    startAmount: number,
    interestRatePerAnnum: number,
    investmentTermInYears: number
): number => {
    return startAmount * (1 + interestRatePerAnnum * investmentTermInYears);
}

export const calculateCompoundInterest = (
    startAmount: number,
    interestRatePerAnnum: number,
    interestPeriodsPerYear: number,
    investmentTermInYears: number
): number => {
    const totalPeriods = interestPeriodsPerYear * investmentTermInYears;
    return startAmount * Math.pow(1 + interestRatePerAnnum / interestPeriodsPerYear, totalPeriods);
}

export const getFinalBalance = (balance: number) => {
    const decimalPart = balance % 1;
    // We want to round down when balance is x.5
    if (decimalPart === 0.5) {
        return Math.floor(balance);
    } else {
        return Math.round(balance);
    }
}

export const getInterestPeriodsPerYear = (interestPaid: InterestPaidFrequency) => {
    let interestPeriodsPerYear: number;

    switch (interestPaid) {
        case InterestPaidFrequency.Monthly:
            interestPeriodsPerYear = 12;
            break;
        case InterestPaidFrequency.Quarterly:
            interestPeriodsPerYear = 4;
            break;
        case InterestPaidFrequency.Annually:
            interestPeriodsPerYear = 1;
            break;
        case InterestPaidFrequency.AtMaturity:
            interestPeriodsPerYear = 1;
            break;
        default:
            interestPeriodsPerYear = 1;
    }

    return interestPeriodsPerYear;
}

export const validateInputs = (termDepositFields: TermDepositFields) => {
    if (termDepositFields.startAmount < 10 || termDepositFields.startAmount > 1500000) {
        throw new Error("Invalid start amount. It must be between 10 and 1500000.");
    }

    if (termDepositFields.interestRate < 0 || termDepositFields.interestRate > 15) {
        throw new Error("Invalid interest rate. It must be between 0 and 15%.");
    }

    if (termDepositFields.investmentTerm < 3 || termDepositFields.investmentTerm > 60) {
        throw new Error("Invalid investment term. It must be between 3 months and 5 years.");
    }
}

interface BalancePerMonth {
    month: number,
    interestEarned: number,
    balance: number
}

// Go over each month
// convert interest rate to a per month value
// balance * interestPerMonth
// calculate total balance for that month = current balance + interest
// cumulative NewBalance - initialBalance

export const calculateBalancePerMonth = (months: number, startingBalance: number, interestRate: number): BalancePerMonth[] => {
    const interestPerMonth = interestRate / 12 / 100;
    const balancePerMonth: BalancePerMonth[] = [];
    let currentBalance = startingBalance;
    for (let i = 1; i <= months; i++) {
        const interestEarned = parseFloat((currentBalance * interestPerMonth).toFixed(2));
        currentBalance = currentBalance + interestEarned;
        const cumulativeInterestEarned = parseFloat((currentBalance - startingBalance).toFixed(2))

        balancePerMonth.push({
            month: i,
            interestEarned: cumulativeInterestEarned,
            balance: currentBalance
        })
    }

    return balancePerMonth;
}