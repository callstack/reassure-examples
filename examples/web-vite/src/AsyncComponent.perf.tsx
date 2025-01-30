// @ts-expect-error Needed for Jest testing
import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { measureRenders } from 'reassure';
import { AsyncComponent } from './AsyncComponent';

jest.setTimeout(60_000);

test('Web Vite - AsyncComponent (10 runs)', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');

    fireEvent.click(button);
    await screen.findByText('Count: 1');

    fireEvent.click(button);
    await screen.findByText('Count: 2');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    await screen.findByText('Count: 5');
  };

  await measureRenders(<AsyncComponent />, { scenario, runs: 10 });
});

test('Web Vite - AsyncComponent (50 runs)', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');

    fireEvent.click(button);
    await screen.findByText('Count: 1');

    fireEvent.click(button);
    await screen.findByText('Count: 2');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    await screen.findByText('Count: 5');
  };

  await measureRenders(<AsyncComponent />, { scenario, runs: 50 });
});
