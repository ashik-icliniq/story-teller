import React from 'react';
import { within, fireEvent, userEvent, screen } from '@storybook/testing-library';
import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import Header from '../components/Header';
import "./global-test.css"
import * as CONSTANTS from '../constants';



const hoverTest = async (canvas, elem) => {
  // Mouse Hover and Check Color
  const hoverElem = canvas.getByText(elem)
  await fireEvent.mouseOver(hoverElem);
  await expect(hoverElem).toHaveClass('md:hover:bg-transparent md:hover:text-blue-700')
}

const clickTest = async (canvas, elem, obj = false) => {

  const clickElem = canvas.getByText(elem)
  await userEvent.click(clickElem);

  if (obj) {
    // Toggle to open Menu and Check the tool tip menu visiblity
    const menuOptions = await canvas.getByTestId('flowbite-tooltip');
    await expect(menuOptions).not.toHaveStyle('visiblity: hidden')


    // Toggle to close Menu and Check the tool tip menu invisible
    await userEvent.click(clickElem);
    await expect(menuOptions).toHaveClass('invisible')
  }

}

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const MenuTest = Template.bind({});

MenuTest.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/K1uGsN6EQHTiMN2wlCfmmB/Chromatic-Testing?node-id=4%3A20&t=US2BdAT8jDTJktpF-1",
  },
};

MenuTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  CONSTANTS.NAV_MENU.map((options) => {
    typeof options === 'object' ?
      Object.keys(options).map((result) => {
        hoverTest(canvas, result)
      })
      :
      hoverTest(canvas, options)
  })

  CONSTANTS.NAV_MENU.map((options) => {
    typeof options === 'object' ?
      Object.keys(options).map((result) => {
        clickTest(canvas, result, true)
      })
      :
      clickTest(canvas, options)
  })

};


