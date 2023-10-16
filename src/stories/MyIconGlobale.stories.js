import MyIcon from '../components/elements/MyIconGlobale.vue'

export default {
  title: 'icons/MyIconGlobale',
  component: MyIcon,
  argTypes: {
    name: {
      control: 'select',
      options: [
        'Market',
        'Search',
        'Clock',
        'Localisation',
        'Call',
        'Favori',
      ]
    },
    background: {
      control: 'select',
      options: ['base', 'primary', 'secondary', 'black', 'white', 'none']
    },
    color: {
      control: 'select',
      options: ['base', 'primary', 'secondary', 'black', 'white']
    },
    size: {
      control: 'select',
      options: ['small', 'regular', 'big']
    }
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        MyIcon
      },
      setup() {
        return { args }
      },
      template: `<MyIcon v-bind="args" />`
    }
  },
  args: {
    name: 'basic'
  }
}