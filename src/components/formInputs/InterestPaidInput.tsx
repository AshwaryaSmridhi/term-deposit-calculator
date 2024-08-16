import React from 'react';
import { InputGroup, Label, Select } from '../../styles/TermDepositCalculator.styles';
import { InterestPaidFrequency } from '../../util/types';

interface InterestPaidProps {
    value: InterestPaidFrequency;
    setValue: (value: InterestPaidFrequency) => void;
}

const InterestPaidInput: React.FC<InterestPaidProps> = ({ value, setValue }) => {
    return (
        <InputGroup>
            <Label>Interest Paid</Label>
            <Select value={value} onChange={(e) => setValue(e.target.value as any)}>
                {Object.values(InterestPaidFrequency).map((frequency) => (
                    <option key={frequency} value={frequency}>
                        {frequency}
                    </option>
                ))}
            </Select>
        </InputGroup>
    );
};

export default InterestPaidInput;
