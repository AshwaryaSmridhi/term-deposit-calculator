import { CalculatorContainer, Result, Title } from '../styles/TermDepositCalculator.styles';
import { Form } from './Form';

export const TermDepositCalculator = () => {
    return (
        <CalculatorContainer>
            <Title>Term Deposit Calculator </Title>
            <Form />
            <Result>Final Balance: ${100000000}</Result>
        </CalculatorContainer>
    )
}