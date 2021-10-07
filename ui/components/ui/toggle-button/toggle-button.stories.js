import React from 'react';
import { useArgs } from '@storybook/client-api';
import README from './README.mdx';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import ToggleButton from './toggle-button.component';

export default {
  title: 'Components/UI/ToggleButton',
  title: 'ToggleButton',
  component: ToggleButton,

  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    value: { control: 'boolean' },
    onToggle: { action: 'onToggle' },
    offLabel: { control: 'text' },
    onLabel: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  id: __filename,
};

export const DefaultStory = (args) => {
  const [{ value }, updateArgs] = useArgs();
  const handleOnToggle = () => {
    updateArgs({ value: !value });
export const DefaultStory = () => {
  const [checked, setChecked] = useState(false);
  const handleOnToggle = (e) => {
    action('onToggle')(e);
    setChecked(!checked);
  };
  return <ToggleButton {...args} value={value} onToggle={handleOnToggle} />;
  return (
    <ToggleButton
      offLabel={text('offLabel', 'off')}
      onLabel={text('onLabel', 'on')}
      disabled={boolean('disabled', false)}
      value={checked}
      onToggle={handleOnToggle}
    />
  );
};

DefaultStory.storyName = 'Default';
DefaultStory.args = {
  value: false,
  offLabel: 'off',
  onLabel: 'on',
  disabled: false,
DefaultStory.story = {
  name: 'Default',
};
