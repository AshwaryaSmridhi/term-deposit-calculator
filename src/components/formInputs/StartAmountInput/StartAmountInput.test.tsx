import { render, fireEvent } from '@testing-library/react';
import { StartAmountInput } from './StartAmountInput';

describe('StartAmountInput', () => {
    it('sets value to 10 if input is empty', () => {
        const setValue = jest.fn();
        const { getByPlaceholderText } = render(<StartAmountInput value={0} setValue={setValue} />);
        const input = getByPlaceholderText('e.g. 10000') as HTMLInputElement;

        fireEvent.blur(input);

        expect(setValue).toHaveBeenCalledWith(10);
    });

    it('sets value to 10 if input is less than 10', () => {
        const setValue = jest.fn();
        const { getByPlaceholderText } = render(<StartAmountInput value={5} setValue={setValue} />);
        const input = getByPlaceholderText('e.g. 10000') as HTMLInputElement;

        fireEvent.blur(input);

        expect(setValue).toHaveBeenCalledWith(10);
    });

    it('sets value to 1,500,000 if input is greater than 1,500,000', () => {
        const setValue = jest.fn();
        const { getByPlaceholderText } = render(<StartAmountInput value={2000000} setValue={setValue} />);
        const input = getByPlaceholderText('e.g. 10000') as HTMLInputElement;

        fireEvent.blur(input);

        expect(setValue).toHaveBeenCalledWith(1500000);
    });

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