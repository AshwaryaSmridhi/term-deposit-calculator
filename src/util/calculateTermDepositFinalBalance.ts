import { start } from "repl";
import { InterestPaidFrequency, TermDepositFields } from "./types";

export const calculateTermDepositFinalBalance = (termDepositFields: TermDepositFields) => {
    validateInputs(termDepositFields);
    const { startAmount, interestRate, interestPaid, investmentTerm } = termDepositFields
    const interestRatePerAnnum = interestRate / 100;
    let interestPeriodsPerYear: number = getInterestPeriodsPerYear(interestPaid);

    const totalPeriods = interestPeriodsPerYear * investmentTerm;

    let balance: number
    if (interestPaid === InterestPaidFrequency.AtMaturity) {
        // For "At Maturity," there is no compounding until the end.
        // So this is simple interest calculation
        balance = startAmount * (1 + interestRatePerAnnum * investmentTerm);
    }
    else {
        // Compound interest calculation
        balance = startAmount * Math.pow(1 + interestRatePerAnnum / interestPeriodsPerYear, totalPeriods);
    }
    return Math.round(balance);
}

const getInterestPeriodsPerYear = (interestPaid: InterestPaidFrequency) => {
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

const validateInputs = (termDepositFields: TermDepositFields) => {
    if (termDepositFields.startAmount < 1000 || termDepositFields.startAmount > 1500000) {
        throw new Error("Invalid start amount. It must be between 1000 and 1500000.");
    }

    if (termDepositFields.interestRate < 0 || termDepositFields.interestRate > 15) {
        throw new Error("Invalid interest rate. It must be between 0 and 15%.");
    }
}