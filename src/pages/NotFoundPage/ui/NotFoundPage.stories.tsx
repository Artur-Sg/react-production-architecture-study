import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotFoundPage from './NotFoundPage';
import { ThemeDecorator } from '../../../../config/storybook/decorators';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
