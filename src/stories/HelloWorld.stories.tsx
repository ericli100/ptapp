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
};

function Template(args: string[]) {
  return <HelloWorld {...args} />;
}

export const Message = Template.bind({});
Message.args = { variant: 'grey' };
