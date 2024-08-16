import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InvestmentTermInput from './InvestmentTermInput';

describe('InvestmentTermInput', () => {
    let setValueMock: jest.Mock;

    beforeEach(() => {
        setValueMock = jest.fn();
    });

    test('renders slider and display value correctly', () => {
        render(<InvestmentTermInput value={10} setValue={setValueMock} />);

        const slider = screen.getByRole('slider');
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveValue('10');

        const displayValue = screen.getByText('10 months');
        expect(displayValue).toBeInTheDocument();
    });

    test('calls setValue with correct value on slider change', () => {
        render(<InvestmentTermInput value={10} setValue={setValueMock} />);

        const slider = screen.getByRole('slider');
        fireEvent.change(slider, { target: { value: '15' } });

        expect(setValueMock).toHaveBeenCalledWith(15);
    });

    test('formats display value correctly for values above 12 months', () => {
        const { rerender } = render(<InvestmentTermInput value={12} setValue={setValueMock} />);

        let displayValue = screen.getByText('1 years');
        expect(displayValue).toBeInTheDocument();

        rerender(<InvestmentTermInput value={25} setValue={setValueMock} />);
        displayValue = screen.getByText('2 years 1 months');
        expect(displayValue).toBeInTheDocument();

        rerender(<InvestmentTermInput value={36} setValue={setValueMock} />);
        displayValue = screen.getByText('3 years');
        expect(displayValue).toBeInTheDocument();
    });
});