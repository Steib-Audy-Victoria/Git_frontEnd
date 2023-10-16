import MyIcon from '../components/elements/MyIconCard.vue'

export default {
  title: 'icons/MyIconCard',
  component: MyIcon,
  argTypes: {
    name: {
      control: 'select',
      options: [
        'Fourchette',
        'Livraison',
        'Repas',
      ]
    },
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