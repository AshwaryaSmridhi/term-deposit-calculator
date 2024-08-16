import { calculateTermDepositFinalBalance } from "./calculateTermDepositFinalBalance";
import { InterestPaidFrequency } from "./types";

describe("calculateTermDepositFinalBalance", () => {
    const testCases = [
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
    ];
    testCases.forEach(({ startAmount, interestPaid, interestRate, investmentTerm, expectedBalance }) => {
        it(`returns the final balance for startAmount=${startAmount}, interestPaid=${interestPaid}, interestRate=${interestRate}, investmentTerm=${investmentTerm}`, () => {
            const finalBalance = calculateTermDepositFinalBalance({ startAmount, interestRate, interestPaid, investmentTerm });
            expect(finalBalance).toBe(expectedBalance);
        });
    });

    it("throws an error for start amount over the limit", () => {
        const badStartAmount = {
            ...testCases[1],
            startAmount: 9000000000
        }
        expect(() => {
            calculateTermDepositFinalBalance(badStartAmount)
        }).toThrow("Invalid start amount. It must be between 10 and 1500000.")
    })

    it("throws an error for start amount under the limit", () => {
        const badStartAmount = {
            ...testCases[1],
            startAmount: 1
        }
        expect(() => {
            calculateTermDepositFinalBalance(badStartAmount)
        }).toThrow("Invalid start amount. It must be between 10 and 1500000.")
    })

    it("throws an error for interest rates over the limit", () => {
        const badInterestRate = {
            ...testCases[1],
            interestRate: 100
        }
        expect(() => {
            calculateTermDepositFinalBalance(badInterestRate)
        }).toThrow("Invalid interest rate. It must be between 0 and 15%.")
    })

    it("throws an error for interest rates under the limit", () => {
        const badInterestRate = {
            ...testCases[1],
            interestRate: -1
        }
        expect(() => {
            calculateTermDepositFinalBalance(badInterestRate)
        }).toThrow("Invalid interest rate. It must be between 0 and 15%.")
    })

    it("throws an error for investment term over the limit", () => {
        const badInterestRate = {
            ...testCases[1],
            investmentTerm: 100 // 8 years 3 months
        }
        expect(() => {
            calculateTermDepositFinalBalance(badInterestRate)
        }).toThrow("Invalid investment term. It must be between 3 months and 5 years.")
    })

    it("throws an error for investment term over the limit", () => {
        const badInterestRate = {
            ...testCases[1],
            investmentTerm: 1 // 1 months
        }
        expect(() => {
            calculateTermDepositFinalBalance(badInterestRate)
        }).toThrow("Invalid investment term. It must be between 3 months and 5 years.")
    })
})
