import { render, screen } from '@testing-library/react';
import { TermDepositCalculator } from './TermDepositCalculator';

test('renders term deposit calculator', () => {
  render(<TermDepositCalculator />);
  const linkElement = screen.getByText(/Term Deposit Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
