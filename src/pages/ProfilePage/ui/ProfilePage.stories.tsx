import avatar from 'shared/assets/tests/avatar.png';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator, StoreDecorator } from '@config/storybook/decorators';
import ProfilePage from './ProfilePage';
import { Country } from '../../../entities/Country';
import { Currency } from '../../../entities/Currency';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    profile: {
      isLoading: false,
      readonly: false,
      form: {
        username: 'admin',
        age: 22,
        country: Country.Honduras,
        lastName: 'Test LastName',
        first: 'Test FirstName',
        city: 'Test City',
        currency: Currency.EUR,
        avatar,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      isLoading: false,
      readonly: false,
      form: {
        username: 'admin',
        age: 22,
        country: Country.Honduras,
        lastName: 'Test LastName',
        first: 'Test FirstName',
        city: 'Test City',
        currency: Currency.EUR,
        avatar,
      },
    },
  }),
];
