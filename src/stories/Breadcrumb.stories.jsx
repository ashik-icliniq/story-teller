import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { within, fireEvent , userEvent, screen} from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import "./global-test.css"


export default {
  title: 'Example/Breadcrumb',
  component: Breadcrumb
};

const Template = (args) => <Breadcrumb content='Hair Loss'  {...args} />;

export const PropsCheck = Template.bind({});

PropsCheck.play = async ({ canvasElement }) => {
  const canvas= within(canvasElement);
  const breadHeading = await canvas.getAllByTestId('flowbite-breadcrumb-item');
  await expect(breadHeading[0]).toHaveTextContent('iCliniq')


  const propsCheck = await canvas.getAllByTestId('flowbite-breadcrumb-separator');
  expect(propsCheck[1].nextElementSibling).not.toHaveTextContent('')
}