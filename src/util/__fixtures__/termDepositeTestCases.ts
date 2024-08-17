import { InterestPaidFrequency } from "../types";

export const testCases = [
    {
        startAmount: 10000,
        interestPaid: InterestPaidFrequency.AtMaturity,
        interestRate: 0.40,
        investmentTerm: 36,
        expectedBalance: 10120
    },
    {
        startAmount: 10000,
        interestPaid: InterestPaidFrequency.Annually,
        interestRate: 0.40,
        investmentTerm: 36,
        expectedBalance: 10120
    },
    {
        startAmount: 10000,
        interestPaid: InterestPaidFrequency.Quarterly,
        interestRate: 0.40,
        investmentTerm: 36,
        expectedBalance: 10121
    },
    {
        startAmount: 20000,
        interestPaid: InterestPaidFrequency.Monthly,
        interestRate: 0.6,
        investmentTerm: 36,
        expectedBalance: 20363
    },
    {
        startAmount: 20000,
        interestPaid: InterestPaidFrequency.Quarterly,
        interestRate: 0.6,
        investmentTerm: 36,
        expectedBalance: 20363
    },
    {
        startAmount: 20000,
        interestPaid: InterestPaidFrequency.Annually,
        interestRate: 0.6,
        investmentTerm: 36,
        expectedBalance: 20362
    },
    {
        startAmount: 20000,
        interestPaid: InterestPaidFrequency.AtMaturity,
        interestRate: 0.6,
        investmentTerm: 36,
        expectedBalance: 20360
    },
    {
        startAmount: 30000,
        interestPaid: InterestPaidFrequency.Monthly,
        interestRate: 2.1,
        investmentTerm: 60,
        expectedBalance: 33318
    },
    {
        startAmount: 30000,
        interestPaid: InterestPaidFrequency.Quarterly,
        interestRate: 2.1,
        investmentTerm: 60,
        expectedBalance: 33312
    },
    {
        startAmount: 30000,
        interestPaid: InterestPaidFrequency.Annually,
        interestRate: 2.1,
        investmentTerm: 60,
        expectedBalance: 33285
    },
    {
        startAmount: 30000,
        interestPaid: InterestPaidFrequency.AtMaturity,
        interestRate: 2.1,
        investmentTerm: 60,
        expectedBalance: 33150
    },
    {
        startAmount: 10,
        interestPaid: InterestPaidFrequency.AtMaturity,
        interestRate: 15,
        investmentTerm: 36,
        expectedBalance: 14
    },
];