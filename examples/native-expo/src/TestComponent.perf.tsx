import { jest, test } from '@jest/globals';
import { fireEvent, screen } from '@testing-library/react-native';
import { measureRenders } from 'reassure';
import { TestComponent } from './TestComponent';

jest.setTimeout(600_000);

test('Expo - TestComponent (10 runs)', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');
    await fireEvent.press(button);
    await fireEvent.press(button);
    screen.getByText('Count: 2');
  };

  await measureRenders(<TestComponent />, { scenario, runs: 10 });
});

test('Expo - TestComponent (50 runs)', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');
    await fireEvent.press(button);
    await fireEvent.press(button);
    screen.getByText('Count: 2');
  };

  await measureRenders(<TestComponent />, { scenario, runs: 50 });
});
