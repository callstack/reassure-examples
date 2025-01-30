import React from 'react';
import { jest, test } from '@jest/globals';
import { fireEvent, screen } from '@testing-library/react-native';
import { measureRenders } from 'reassure';
import { AsyncComponent } from './AsyncComponent';

jest.setTimeout(600_000);

test('React Native - Expo - AsyncComponent (10 runs)', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');

    fireEvent.press(button);
    fireEvent.press(button);
    await screen.findByText('Count: 2');
  };

  await measureRenders(<AsyncComponent />, { scenario, runs: 10 });
});

test('React Native - Expo - AsyncComponent (50 runs)', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');

    fireEvent.press(button);
    fireEvent.press(button);
    await screen.findByText('Count: 2');
  };

  await measureRenders(<AsyncComponent />, { scenario, runs: 50 });
});
