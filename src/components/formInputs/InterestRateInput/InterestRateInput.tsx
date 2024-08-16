import React from 'react';
import { InputGroup, Label, Input } from '../../../styles/TermDepositCalculator.styles';

interface InterestRateProps {
    value: number;
    setValue: (value: number) => void;
}

const InterestRateInput: React.FC<InterestRateProps> = ({ value, setValue }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === '') {
            setValue(0); // Handling empty state by setting it to null
            return;
        }

        let newValue = parseFloat(inputValue);
        if (newValue < 0) {
            newValue = 0;
        } else if (newValue > 15) {
            newValue = 15;
        }
        setValue(newValue);
    };
    const handleBlur = () => {
        if (!value) {
            setValue(0);
        }
        else if (value < 0) {
            console.log('Inside 0')
            setValue(0);
        }
        else if (value > 15) {
            setValue(15);
        }

    };
    return (
        <InputGroup>
            <Label>Interest Rate (% per annum)</Label>
            <Input
                type="number"
                data-testid="interest-rate"
                step="0.01"
                value={value}
                onChange={handleChange}
                // onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
                onBlur={handleBlur}
                placeholder="e.g. 1.10"
                min="0"
                max="15"
                required
            />
        </InputGroup>
    );
};

export default InterestRateInput;
