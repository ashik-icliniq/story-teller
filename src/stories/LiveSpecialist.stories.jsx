import React from 'react';
import { userEvent } from '@storybook/testing-library';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import "./global-test.css"
import LiveSpecialist from '../components/askDoctor/LiveSpecialist';
import { act } from '@testing-library/react';


export default {
  title: 'Example/LiveSpecialist',
  component: LiveSpecialist
};

const Template = (args) => <LiveSpecialist  {...args} />;

export const LiveSpecialistCard = Template.bind({});

LiveSpecialistCard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const textLabelCheck = canvas.getByText(/ENTER YOUR HEALTH QUERY/i)
  expect(textLabelCheck).toHaveStyle('text-transform: uppercase;')


  const commentBox = await canvas.getByPlaceholderText('Leave a comment...');
  await commentBox.focus();
  await expect(commentBox).toHaveStyle('border-color: rgb(63 131 248);');

  const submitButton = await canvas.getByRole('button', { name: 'Submit' });
  await expect(submitButton).toHaveStyle('background-color: rgb(26 86 219)');

  await act(() => {
    userEvent.hover(submitButton)

  });
  expect(submitButton).toHaveClass(' hover:bg-blue-800');
  await act(() => {
    userEvent.unhover(submitButton)
  });


}