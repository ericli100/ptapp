import { ComponentStory, ComponentMeta } from '@storybook/react';
import HelloWorld from '../components/HelloWorld';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
  argTypes: {
    variant: {
      options: ['gray', 'red', 'green', 'blue'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof HelloWorld>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof HelloWorld> = (args) => {
  const { variant } = args;
  return <HelloWorld variant={variant} />;
};

export const Message = Template.bind({});
Message.args = { variant: 'gray' };
