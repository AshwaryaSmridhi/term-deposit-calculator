import { render, fireEvent } from '@testing-library/react';
import { StartAmountInput } from './StartAmountInput';

describe('StartAmountInput', () => {
    it('does not change value if input is within range', () => {
        const setValue = jest.fn();
        const { getByPlaceholderText } = render(<StartAmountInput value={50000} setValue={setValue} />);
        const input = getByPlaceholderText('e.g. 10000') as HTMLInputElement;

        fireEvent.blur(input);

        expect(setValue).not.toHaveBeenCalled();
    });

    it('calls setValue with the correct value on change', () => {
        const setValue = jest.fn();
        const { getByPlaceholderText } = render(<StartAmountInput value={50000} setValue={setValue} />);
        const input = getByPlaceholderText('e.g. 10000') as HTMLInputElement;

        fireEvent.change(input, { target: { value: '20000' } });

        expect(setValue).toHaveBeenCalledWith(20000);
    });
});