import React from 'react';
import { InputGroup, Label, Select } from '../../styles/TermDepositCalculator.styles';

interface InterestPaidProps {
    value: 'monthly' | 'quarterly' | 'annually' | 'atMaturity';
    setValue: (value: 'monthly' | 'quarterly' | 'annually' | 'atMaturity') => void;
}

const InterestPaidInput: React.FC<InterestPaidProps> = ({ value, setValue }) => {
    return (
        <InputGroup>
            <Label>Interest Paid</Label>
            <Select value={value} onChange={(e) => setValue(e.target.value as any)}>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
                <option value="atMaturity">At Maturity</option>
            </Select>
        </InputGroup>
    );
};

export default InterestPaidInput;
