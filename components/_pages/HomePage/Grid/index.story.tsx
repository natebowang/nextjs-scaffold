import Grid, { Props } from './index'
import type { Meta, Story } from '@storybook/react'

const Template: Story<Props> = (args) => {
  return <Grid {...args} />
}

export const DefaultGrid = Template.bind({})
DefaultGrid.args = {
  n: 5,
}

const meta: Meta = {
  component: Grid,
  title: __dirname,
}

export default meta
