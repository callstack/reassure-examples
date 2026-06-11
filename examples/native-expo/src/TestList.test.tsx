import { render, screen } from '@testing-library/react-native';
import { TestList } from './TestList';

test('TestList', async () => {
  await render(<TestList count={10} />);

  const items = screen.getAllByText(/Item/i);
  expect(items).toHaveLength(10);
});
