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
        'Play',

        'Fourchette',
        'Repas',
        'Livraison',

        'Arrow',
        'Next',

        'Facebook',
        'Instagram',
        'Twitter',
        'Linkedin',
        
      ]
    },
    background: {
      control: 'select',
      options: ['base', 'primary', 'secondary', 'black', 'white', 'none']
    },
    color: {
      control: 'select',
      options: ['base', 'primary', 'black', 'white']
    },
    size: {
      control: 'select',
      options: ['regular', 'small', 'big']
    },
    position: {
      control: 'select',
      options: ['right', 'left']
    },
    fill: {
      control: 'select',
      options: ['base', 'primary', 'black', 'white', 'none']
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