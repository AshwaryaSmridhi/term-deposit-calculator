export enum InterestPaidFrequency {
    Monthly = 'Monthly',
    Quarterly = 'Quarterly',
    Annually = 'Annually',
    AtMaturity = 'At Maturity'
}

export type TermDepositFields = {
    startAmount: number;
    interestRate: number;
    investmentTerm: number;
    interestPaid: InterestPaidFrequency;
};
