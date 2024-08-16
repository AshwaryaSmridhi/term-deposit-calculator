import { useState } from 'react';
import { CalculatorContainer, Result, Title } from '../styles/TermDepositCalculator.styles';
import { Form } from './Form';

export const TermDepositCalculator = () => {
    const [finalBalance, setFinalBalance] = useState<number>(0);
    return (
        <CalculatorContainer>
            <Title>Term Deposit Calculator </Title>
            <Form setFinalBalance={setFinalBalance} />
            {finalBalance > 0 && <Result>Final Balance: ${finalBalance}</Result>}
        </CalculatorContainer>
    )
}