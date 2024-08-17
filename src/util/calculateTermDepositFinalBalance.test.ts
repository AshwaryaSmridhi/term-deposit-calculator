import { testCases } from "./__fixtures__/termDepositeTestCases";
import { calculateTermDepositFinalBalance, getFinalBalance, getInterestPeriodsPerYear, validateInputs, calculateBalance, calculateSimpleInterest, calculateCompoundInterest } from "./calculateTermDepositFinalBalance";
import { InterestPaidFrequency } from "./types";

describe("calculateTermDepositFinalBalance", () => {
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

describe('calculateBalance', () => {
    it('calculates simple interest when interest is paid at maturity', () => {
        const result = calculateBalance(1000, 0.05, InterestPaidFrequency.AtMaturity, 1, 1);
        expect(result).toBe(1050);
    });

    it('calculates compound interest when interest is paid monthly', () => {
        const result = calculateBalance(1000, 0.05, InterestPaidFrequency.Monthly, 12, 1);
        expect(result).toBeCloseTo(1051.16, 2);
    });

    it('calculates compound interest when interest is paid quarterly', () => {
        const result = calculateBalance(1000, 0.05, InterestPaidFrequency.Quarterly, 4, 1);
        expect(result).toBeCloseTo(1050.95, 2);
    });

    it('calculates compound interest when interest is paid annually', () => {
        const result = calculateBalance(1000, 0.05, InterestPaidFrequency.Annually, 1, 1);
        expect(result).toBe(1050);
    });
});

describe('calculateSimpleInterest', () => {
    it('calculates simple interest correctly', () => {
        const result = calculateSimpleInterest(1000, 0.05, 1);
        expect(result).toBe(1050);
    });

    it('calculates simple interest for multiple years', () => {
        const result = calculateSimpleInterest(1000, 0.05, 2);
        expect(result).toBe(1100);
    });
});

describe('calculateCompoundInterest', () => {
    it('calculates compound interest correctly for monthly compounding', () => {
        const result = calculateCompoundInterest(1000, 0.05, 12, 1);
        expect(result).toBeCloseTo(1051.16, 2);
    });

    it('calculates compound interest correctly for quarterly compounding', () => {
        const result = calculateCompoundInterest(1000, 0.05, 4, 1);
        expect(result).toBeCloseTo(1050.95, 2);
    });

    it('calculates compound interest correctly for annual compounding', () => {
        const result = calculateCompoundInterest(1000, 0.05, 1, 1);
        expect(result).toBe(1050);
    });
});

describe('getInterestPeriodsPerYear', () => {
    it('returns 12 for monthly frequency', () => {
        expect(getInterestPeriodsPerYear(InterestPaidFrequency.Monthly)).toBe(12);
    });

    it('returns 4 for quarterly frequency', () => {
        expect(getInterestPeriodsPerYear(InterestPaidFrequency.Quarterly)).toBe(4);
    });

    it('returns 1 for annually frequency', () => {
        expect(getInterestPeriodsPerYear(InterestPaidFrequency.Annually)).toBe(1);
    });
});

describe('validateInputs', () => {
    it('throws an error for start amount less than 10', () => {
        const inputs = {
            startAmount: 5,
            interestRate: 5,
            investmentTerm: 12,
            interestPaid: InterestPaidFrequency.Annually
        };
        expect(() => validateInputs(inputs)).toThrow("Invalid start amount. It must be between 10 and 1500000.");
    });

    it('throws an error for start amount greater than 1500000', () => {
        const inputs = {
            startAmount: 2000000,
            interestRate: 5,
            investmentTerm: 12,
            interestPaid: InterestPaidFrequency.Annually
        };
        expect(() => validateInputs(inputs)).toThrow("Invalid start amount. It must be between 10 and 1500000.");
    });

    it('throws an error for interest rate less than 0', () => {
        const inputs = {
            startAmount: 1000,
            interestRate: -1,
            investmentTerm: 12,
            interestPaid: InterestPaidFrequency.Annually
        };
        expect(() => validateInputs(inputs)).toThrow("Invalid interest rate. It must be between 0 and 15%.");
    });

    it('throws an error for interest rate greater than 15', () => {
        const inputs = {
            startAmount: 1000,
            interestRate: 20,
            investmentTerm: 12,
            interestPaid: InterestPaidFrequency.Annually
        };
        expect(() => validateInputs(inputs)).toThrow("Invalid interest rate. It must be between 0 and 15%.");
    });

    it('throws an error for investment term less than 3 months', () => {
        const inputs = {
            startAmount: 1000,
            interestRate: 5,
            investmentTerm: 2,
            interestPaid: InterestPaidFrequency.Annually
        };
        expect(() => validateInputs(inputs)).toThrow("Invalid investment term. It must be between 3 months and 5 years.");
    });

    it('throws an error for investment term greater than 60 months', () => {
        const inputs = {
            startAmount: 1000,
            interestRate: 5,
            investmentTerm: 61,
            interestPaid: InterestPaidFrequency.Annually
        };
        expect(() => validateInputs(inputs)).toThrow("Invalid investment term. It must be between 3 months and 5 years.");
    });

    it('does not throw an error for valid inputs', () => {
        const inputs = {
            startAmount: 1000,
            interestRate: 5,
            investmentTerm: 12,
            interestPaid: InterestPaidFrequency.Annually
        };
        expect(() => validateInputs(inputs)).not.toThrow();
    });
});

describe('getFinalBalance', () => {
    test('should round down when balance is exactly x.5', () => {
        expect(getFinalBalance(14.5)).toBe(14);
        expect(getFinalBalance(10.5)).toBe(10);
        expect(getFinalBalance(100.5)).toBe(100);
    });

    test('should round up when balance is above x.5', () => {
        expect(getFinalBalance(14.6)).toBe(15);
        expect(getFinalBalance(10.7)).toBe(11);
        expect(getFinalBalance(100.9)).toBe(101);
    });

    test('should round down when balance is below x.5', () => {
        expect(getFinalBalance(14.4)).toBe(14);
        expect(getFinalBalance(10.3)).toBe(10);
        expect(getFinalBalance(100.2)).toBe(100);
    });

    test('should return the same value when balance is an integer', () => {
        expect(getFinalBalance(14)).toBe(14);
        expect(getFinalBalance(10)).toBe(10);
        expect(getFinalBalance(100)).toBe(100);
    });
});