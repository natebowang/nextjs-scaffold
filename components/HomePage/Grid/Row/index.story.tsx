import type { Meta, Story } from '@storybook/react'
import Row, { Props } from './index'

const Template: Story<Props> = (args) => {
  return <Row {...args} />
}

export const DefaultRow = Template.bind({})
DefaultRow.args = {
  children: [<div>0</div>, <div>1</div>, <div>2</div>],
}

const meta: Meta = {
  component: Row,
  title: __dirname,
}

export default meta
