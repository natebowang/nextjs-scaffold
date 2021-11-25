import '../styles/globals.css'
import { addDecorator } from '@storybook/react'

export const parameters = {
  argTypes: {
    // Hide children, id, variant, className, style in control addon by default
    children: { table: { disable: true } },

    id: { table: { disable: true } },

    variant: { table: { disable: true } },
    className: { table: { disable: true } },
    style: { table: { disable: true } },

    onClick: { table: { disable: true } },
    handleClick: { table: { disable: true } },
    href: { table: { disable: true } },
    target: { table: { disable: true } },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    sort: 'alpha',
  },
}
