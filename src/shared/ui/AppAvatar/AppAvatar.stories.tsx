import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';
import { AppAvatar } from './AppAvatar';
import { ThemeDecorator } from '../../../../config/storybook/decorators';
import AvatarImg from './avatar.png';

export default {
  title: 'shared/AppAvatar',
  component: AppAvatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppAvatar>;

const Template: ComponentStory<typeof AppAvatar> = (args) => <AppAvatar {...args} />;

export const Prime = Template.bind({});
Prime.args = {
  size: 150,
  src: AvatarImg,
};

export const Dark = Template.bind({});
Dark.args = {
  size: 150,
  src: AvatarImg,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
