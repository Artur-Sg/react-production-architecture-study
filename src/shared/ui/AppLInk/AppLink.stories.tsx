import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../config/storybook/decorators';
import AppLink, { AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text Primary',
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text Secondary',
  theme: AppLinkTheme.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text Primary',
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text Secondary',
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
