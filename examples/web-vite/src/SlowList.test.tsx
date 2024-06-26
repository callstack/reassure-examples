// @ts-expect-error Needed for Jest testing
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SlowList } from './SlowList';

test('SlowList', () => {
  render(<SlowList count={10} />);

  const items = screen.getAllByText(/Item/i);
  expect(items).toHaveLength(10);
});
