import { render, screen, fireEvent } from "@testing-library/react";
import { InterestPaidFrequency } from "../../../util/types";
import InterestPaidInput from "./InterestPaidInput";

describe('InterestPaidInput', () => {
    let setValueMock: jest.Mock;

    beforeEach(() => {
        setValueMock = jest.fn();
    });

    test('renders dropdown and displays value', () => {
        render(<InterestPaidInput value={InterestPaidFrequency.Monthly} setValue={setValueMock} />)
        const dropdown = screen.getByRole('combobox');
        expect(dropdown).toBeInTheDocument()
        expect(dropdown).toHaveValue('Monthly')
    })

    test('calls setValue with the correct value', () => {
        render(<InterestPaidInput value={InterestPaidFrequency.Monthly} setValue={setValueMock} />)
        const dropdown = screen.getByRole('combobox');
        expect(dropdown).toBeInTheDocument()
        expect(dropdown).toHaveValue('Monthly')

        fireEvent.change(dropdown, { target: { value: InterestPaidFrequency.Quarterly } });
        expect(setValueMock).toHaveBeenCalledWith(InterestPaidFrequency.Quarterly);
    })
})