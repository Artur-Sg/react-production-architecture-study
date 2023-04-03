import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../config/storybook/decorators';
import AppModal from './AppModal';

export default {
  title: 'shared/AppModal',
  component: AppModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppModal>;

const Template: ComponentStory<typeof AppModal> = (args) => <AppModal {...args} />;

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  isOpen: true,
  children: 'Text Default Theme',
  className: Theme.DEFAULT,
};

export const DarkModal = Template.bind({});
DarkModal.args = {
  isOpen: true,
  children: 'Text Dark Theme',
  className: Theme.DARK,
};
DarkModal.decorators = [ThemeDecorator(Theme.DARK)];
