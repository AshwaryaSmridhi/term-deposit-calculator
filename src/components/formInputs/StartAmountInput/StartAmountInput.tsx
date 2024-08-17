import React from 'react';
import { Input, InputGroup, Label } from '../../../styles/TermDepositCalculator.styles';

interface StartDepositAmountProps {
    value: number;
    setValue: (value: number) => void;
}

export const StartAmountInput: React.FC<StartDepositAmountProps> = ({ value, setValue }) => {
    return (
        <InputGroup>
            <Label>Start Deposit Amount ($)</Label>
            <Input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                placeholder="e.g. 10000"
                required
            />
        </InputGroup>
    )
}