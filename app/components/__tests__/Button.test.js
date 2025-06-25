import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button component', () => {
  it('renders title and handles press', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Hello" onPress={onPressMock} />);
    const buttonText = getByText('Hello');
    expect(buttonText).toBeTruthy();
    fireEvent.press(buttonText);
    expect(onPressMock).toHaveBeenCalled();
  });
});
