import { ComponentStory, ComponentMeta } from '@storybook/react';

import HelloWorld, { HelloWorldProps } from '../components/HelloWorld';

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

// Storybook story docs: https://storybook.js.org/docs/react/writing-stories/args

// React version:
// function Template(args: HelloWorldProps) {
//   return <HelloWorld variant={args} />;
// }

// TS version:
const Template: ComponentStory<typeof HelloWorld> = (args) => (
  <HelloWorld {...args} />
);

export const Message = Template.bind({});
Message.args = { variant: 'gray' };
