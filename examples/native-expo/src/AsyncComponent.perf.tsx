import { jest, test, beforeEach, afterEach } from '@jest/globals';
import { act, fireEvent, screen } from '@testing-library/react-native';
import { measureRenders } from 'reassure';
import { AsyncComponent } from './AsyncComponent';

jest.setTimeout(600_000);

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

test('React Native - Expo - AsyncComponent (10 runs)', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');

    await fireEvent.press(button);
    await fireEvent.press(button);
    await act(() => jest.runAllTimers());
  };

  await measureRenders(<AsyncComponent />, { scenario, runs: 10 });
});

test('React Native - Expo - AsyncComponent (50 runs)', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');

    await fireEvent.press(button);
    await fireEvent.press(button);
    await act(() => jest.runAllTimers());
  };

  await measureRenders(<AsyncComponent />, { scenario, runs: 50 });
});
