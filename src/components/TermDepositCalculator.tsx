import { useState } from 'react';
import { CalculatorContainer, Result, Title } from '../styles/TermDepositCalculator.styles';
import { Form } from './Form';
import { calculateBalancePerMonth } from '../util/calculateTermDepositFinalBalance';

export const TermDepositCalculator = () => {
    const [finalBalance, setFinalBalance] = useState<number>(0);
    const balancePerMonth = calculateBalancePerMonth(3, 10000, 1.1)
    return (
        <CalculatorContainer>
            <Title>Term Deposit Calculator </Title>
            <Form setFinalBalance={setFinalBalance} />
            {finalBalance > 0 && <Result>Final Balance: ${finalBalance}</Result>}
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Interest Rate</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {balancePerMonth &&
                        balancePerMonth.map((balance) => {
                            return (
                                <tr key={balance.month}>
                                    <td>{balance.month}</td>
                                    <td>{balance.interestEarned}</td>
                                    <td>{balance.balance}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </CalculatorContainer>
    );
}