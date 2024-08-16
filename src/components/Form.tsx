import { useState } from 'react';
import { Button, FormContainer } from '../styles/TermDepositCalculator.styles';
import { StartAmountInput } from './formInputs/StartAmountInput/StartAmountInput';
import InterestRateInput from './formInputs/InterestRateInput/InterestRateInput';
import InvestmentTermInput from './formInputs/InvestmentTermInput/InvestmentTermInput';
import InterestPaidInput from './formInputs/InterestPaidInput/InterestPaidInput';
import { InterestPaidFrequency } from '../util/types';
import { calculateTermDepositFinalBalance } from '../util/calculateTermDepositFinalBalance';

interface FormProps {
    setFinalBalance: (value: number) => void;
}

export const Form: React.FC<FormProps> = ({ setFinalBalance }) => {
    const [startAmount, setStartAmount] = useState<number>(10000);
    const [interestRate, setInterestRate] = useState<number>(0.25);
    const [investmentTerm, setInvestmentTerm] = useState<number>(3);
    const [interestPaid, setInterestPaid] = useState<InterestPaidFrequency>(InterestPaidFrequency.Monthly);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // In form submissions, the default action is to send the form data to the server and reload the page. This prevents that from happening.
        const balance = calculateTermDepositFinalBalance({ startAmount, interestRate, interestPaid, investmentTerm });

        setFinalBalance(balance);
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <StartAmountInput value={startAmount} setValue={setStartAmount} />
            <InterestRateInput value={interestRate} setValue={setInterestRate} />
            <InvestmentTermInput value={investmentTerm} setValue={setInvestmentTerm} />
            <InterestPaidInput value={interestPaid} setValue={setInterestPaid} />
            <Button type="submit">Calculate</Button>
        </FormContainer>
    )
}