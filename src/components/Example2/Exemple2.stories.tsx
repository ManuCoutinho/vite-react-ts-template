import { ComponentStory } from '@storybook/react'
import { Example2 } from '.'

export default {
  title: 'Example',
  component: Example2,
  args: {
    children: ' '
  },
  argTypes: {
    children: { type: 'string' }
  }
}

const Template: ComponentStory<typeof Example2> = (args) => {
  return (
    <div>
      <Example2 {...args} />
    </div>
  )
}
export const Default = Template.bind({})
