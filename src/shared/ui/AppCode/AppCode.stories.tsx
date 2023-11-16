import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppCode } from './AppCode';

export default {
  title: 'shared/AppCode',
  component: AppCode,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppCode>;

const Template: ComponentStory<typeof AppCode> = (args) => <AppCode {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: `
  export default {
    title: 'shared/AppCode',
    component: AppCode,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof AppCode>;`,
};
