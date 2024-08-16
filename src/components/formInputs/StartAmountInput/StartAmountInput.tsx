import React from 'react';
import { Input, InputGroup, Label } from '../../../styles/TermDepositCalculator.styles';

interface StartDepositAmountProps {
    value: number;
    setValue: (value: number) => void;
}

export const StartAmountInput: React.FC<StartDepositAmountProps> = ({ value, setValue }) => {
    const handleBlur = () => {
        if (!value) {
            setValue(10);
        }
        else if (value < 10) {
            setValue(10);
        }
        else if (value > 1500000) {
            setValue(1500000);
        }

    };
    return (
        <InputGroup>
            <Label>Start Deposit Amount ($)</Label>
            <Input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                onBlur={handleBlur}
                placeholder="e.g. 10000"
                min="10"
                max="15000000"
                required
            />
        </InputGroup>
    )
}