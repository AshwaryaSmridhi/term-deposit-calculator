import { render, screen } from '@testing-library/react';
import { TermDepositCalculator } from './TermDepositCalculator';

test('renders term deposit calculator', () => {
  render(<TermDepositCalculator />);
  const termDepositText = screen.getByText(/Term Deposit Calculator/i);
  const startAmountLabel = screen.getByText('Start Deposit Amount ($)');
  const interestRateLabel = screen.getByText('Interest Rate (%)');
  const investmentTermLabel = screen.getByText(/Investment Term/i);
  const interestPaidLabel = screen.getByText(/Interest Paid/i);

  expect(termDepositText).toBeInTheDocument();
  expect(startAmountLabel).toBeInTheDocument();
  expect(interestRateLabel).toBeInTheDocument();
  expect(investmentTermLabel).toBeInTheDocument();
  expect(interestPaidLabel).toBeInTheDocument();
});
