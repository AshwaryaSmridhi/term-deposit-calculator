import { useState } from 'react';
import { Button, FormContainer } from '../styles/TermDepositCalculator.styles';
import { StartAmountInput } from './form/StartAmountInput';
import InterestRateInput from './form/InterestRateInput';
import InvestmentTermInput from './form/InvestmentTermInput';
import InterestPaidInput from './form/InterestPaidInput';

export const Form = () => {
    const [startDeposit, setStartDeposit] = useState<number>(10000);
    const [interestRate, setInterestRate] = useState<number>(0.25);
    const [investmentTerm, setInvestmentTerm] = useState<number>(1);
    const [interestPaid, setInterestPaid] = useState<'monthly' | 'quarterly' | 'annually' | 'atMaturity'>('monthly');
    return (
        <FormContainer>
            <StartAmountInput value={startDeposit} setValue={setStartDeposit} />
            <InterestRateInput value={interestRate} setValue={setInterestRate} />
            <InvestmentTermInput value={investmentTerm} setValue={setInvestmentTerm} />
            <InterestPaidInput value={interestPaid} setValue={setInterestPaid} />
            <Button type="submit">Calculate</Button>
        </FormContainer>
    )
}