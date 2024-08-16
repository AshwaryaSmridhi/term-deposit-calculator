import React from 'react';
import { InputGroup, Label, Input } from '../../styles/TermDepositCalculator.styles';

interface InterestRateProps {
    value: number;
    setValue: (value: number) => void;
}

const InterestRateInput: React.FC<InterestRateProps> = ({ value, setValue }) => {
    return (
        <InputGroup>
            <Label>Interest Rate (%)</Label>
            <Input
                type="number"
                step="0.01"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                placeholder="e.g. 1.10"
                min="0"
                required
            />
        </InputGroup>
    );
};

export default InterestRateInput;
