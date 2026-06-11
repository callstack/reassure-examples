import { jest, test } from '@jest/globals';
import { fireEvent, screen } from '@testing-library/react-native';
import { measureRenders } from 'reassure';
import { AsyncComponent } from './AsyncComponent';

jest.setTimeout(600_000);

test('React Native - Expo - AsyncComponent (10 runs)', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');
    await fireEvent.press(button);
    await fireEvent.press(button);
    screen.getByText('Count: 2');
  };

  await measureRenders(<AsyncComponent />, { scenario, runs: 10 });
});

test('React Native - Expo - AsyncComponent (50 runs)', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');
    await fireEvent.press(button);
    await fireEvent.press(button);
    screen.getByText('Count: 2');
  };

  await measureRenders(<AsyncComponent />, { scenario, runs: 50 });
});
