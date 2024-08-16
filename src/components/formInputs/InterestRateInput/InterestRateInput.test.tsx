import { render, fireEvent } from "@testing-library/react";
import InterestRateInput from "./InterestRateInput";

describe('InterestRateInput', () => {
    let value = 0;
    const setValue = jest.fn((newValue) => {
        value = newValue;
    });

    beforeEach(() => {
        value = 0;
        setValue.mockClear();
    });

    test('renders correctly with initial value', () => {
        const { getByTestId } = render(<InterestRateInput value={value} setValue={setValue} />);
        const input = getByTestId('interest-rate') as HTMLInputElement
        expect(input).toBeInTheDocument();
        expect(input.value).toBe('0');
    });

    test('increments value correctly', () => {
        const { getByTestId } = render(<InterestRateInput value={value} setValue={setValue} />);
        const input = getByTestId('interest-rate') as HTMLInputElement
        fireEvent.change(input, { target: { value: '0.25' } });
        expect(setValue).toHaveBeenCalledWith(0.25);
    });

    test('does not allow value below 0', () => {
        const { getByTestId } = render(<InterestRateInput value={value} setValue={setValue} />);
        const input = getByTestId('interest-rate') as HTMLInputElement
        fireEvent.change(input, { target: { value: '-1' } });
        fireEvent.blur(input);

        expect(setValue).toHaveBeenCalledWith(0);
    });

    test('does not allow value above 15', () => {
        const { getByTestId } = render(<InterestRateInput value={value} setValue={setValue} />);
        const input = getByTestId('interest-rate') as HTMLInputElement
        fireEvent.change(input, { target: { value: '16' } });
        fireEvent.blur(input);

        expect(setValue).toHaveBeenCalledWith(15);
    });

    test('handles empty input correctly', () => {
        const { getByTestId } = render(<InterestRateInput value={value} setValue={setValue} />);
        const input = getByTestId('interest-rate') as HTMLInputElement
        fireEvent.change(input, { target: { value: '' } });
        expect(setValue).toHaveBeenCalledWith(0);
    });
})