import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button Component', () => {
  it('renders component differently based on primary prop', () => {
    const wrapper = shallow(<Button primary label='Text' />);
    expect(wrapper.exists('button.storybook-button__primary')).toBeTruthy();

    wrapper.setProps({ primary: false });
    expect(wrapper.exists('button.storybook-button__primary')).toBeFalsy();
    expect(wrapper.exists('button.storybook-button__secondary')).toBeTruthy();
  });

  it('renders component differently based on size prop', () => {
    const wrapper = shallow(<Button size="large" label='Text' />);
    expect(wrapper.exists('button.storybook-button__large')).toBeTruthy();

    wrapper.setProps({ size: 'small' });
    expect(wrapper.exists('button.storybook-button__large')).toBeFalsy();
    expect(wrapper.exists('button.storybook-button__small')).toBeTruthy();
  });
});
