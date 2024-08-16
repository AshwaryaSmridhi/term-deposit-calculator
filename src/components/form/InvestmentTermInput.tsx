import React from 'react';
import { Input, InputGroup, Label } from '../../styles/TermDepositCalculator.styles';

interface InvestmentTermProps {
    value: number;
    setValue: (value: number) => void;
}

const InvestmentTermInput: React.FC<InvestmentTermProps> = ({ value, setValue }) => {
    return (
        <InputGroup>
            <Label>Investment Term (Years)</Label>
            <Input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                placeholder="e.g. 3"
                min="1"
                required
            />
        </InputGroup>
    );
};

export default InvestmentTermInput;
