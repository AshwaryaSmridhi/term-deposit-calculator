import React from 'react';
import { InputGroup, Label, Slider } from '../../../styles/TermDepositCalculator.styles';

interface InvestmentTermProps {
    value: number;
    setValue: (value: number) => void;
}

const InvestmentTermInput: React.FC<InvestmentTermProps> = ({ value, setValue }) => {
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value));
    };

    const getDisplayValue = (value: number) => {
        if (value < 12) {
            return `${value} months`;
        } else {
            const years = Math.floor(value / 12);
            const months = value % 12;
            return months === 0 ? `${years} years` : `${years} years ${months} months`;
        }
    };

    return (
        <InputGroup>
            <Label>Investment Term</Label>
            <Slider
                type="range"
                role="slider"
                min={3}
                max={60}
                value={value}
                onChange={handleSliderChange}
            />
            <div>{getDisplayValue(value)}</div>
        </InputGroup>
    );
};

export default InvestmentTermInput;