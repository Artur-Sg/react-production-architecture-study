import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from './Navbar';
import { ThemeDecorator } from '../../../../config/storybook/decorators';
import { Theme } from '../../../app/providers/ThemeProvider';
import { StoreDecorator } from '../../../../config/storybook/decorators/StoreDecorator';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [
  StoreDecorator({
    user: {},
  }),
];
