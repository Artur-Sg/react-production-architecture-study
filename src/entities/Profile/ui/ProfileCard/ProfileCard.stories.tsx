import avatar from 'shared/assets/tests/avatar.png';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from '../../../../../config/storybook/decorators';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Honduras,
    lastName: 'Test LastName',
    first: 'Test FirstName',
    city: 'Test City',
    currency: Currency.EUR,
    avatar,
  },
};

export const Dark = Template.bind({});
Dark.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Honduras,
    lastName: 'Test LastName',
    first: 'Test FirstName',
    city: 'Test City',
    currency: Currency.EUR,
    avatar,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {
  error: 'Something goes wrong',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
