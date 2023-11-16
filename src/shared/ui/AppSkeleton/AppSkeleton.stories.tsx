import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppSkeleton } from './AppSkeleton';
import { ThemeDecorator } from '../../../../config/storybook/decorators';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
  title: 'shared/AppSkeleton',
  component: AppSkeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppSkeleton>;

const Template: ComponentStory<typeof AppSkeleton> = (args) => <AppSkeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = { width: '100%', height: 200 };

export const Circle = Template.bind({});
Circle.args = { borderRadius: '50%', width: 100, height: 100 };

export const NormalDark = Template.bind({});
NormalDark.args = { width: '100%', height: 200 };
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = { borderRadius: '50%', width: 100, height: 100 };
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
