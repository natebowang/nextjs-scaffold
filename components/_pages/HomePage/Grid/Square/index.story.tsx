import { ElementState } from '../_types'
import Square, { Props } from './index'
import type { Meta, Story } from '@storybook/react'

const Template: Story<Props> = (args) => {
  return <Square {...args} />
}

export const EmptySquare = Template.bind({})
EmptySquare.args = {
  matrixElement: ElementState.EMPTY,
  count: 5,
  index: { x: 0, y: 0 },
}

export const FilledSquare = Template.bind({})
FilledSquare.args = {
  matrixElement: ElementState.FILLED,
  count: 5,
  index: { x: 0, y: 0 },
}

export const ConnectedSquare = Template.bind({})
ConnectedSquare.args = {
  matrixElement: ElementState.CONNECTED,
  count: 5,
  index: { x: 0, y: 0 },
}

const meta: Meta = {
  component: Square,
  title: __dirname,
}

export default meta
