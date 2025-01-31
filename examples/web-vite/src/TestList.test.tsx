import { render, screen } from '@testing-library/react';
import { TestList } from './TestList';

test('TestList', () => {
  render(<TestList count={10} />);

  const items = screen.getAllByText(/Item/i);
  expect(items).toHaveLength(10);
});
