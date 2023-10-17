import MyBigCardMenu from '../components/MyBigCardMenu.vue'

export default {
  title: 'Components/MyBigCardMenu',
  component: MyBigCardMenu,
  argTypes: {
    description: {
      control: 'text'
    },
    title: {
      control: 'text'
    },
    imageSrc: {
      control: 'text'
    },
    imageAlt: {
      control: 'text'
    },
    buttonLabel: {
      control: 'text'
    },
    note: {
      control: 'number'
    },
    price: {
      control: 'number'
    }
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyBigCardMenu
      },
      setup() {
        return { args }
      },
      template: `<MyBigCardMenu v-bind="args" />`
    }
  },
  args: {
    description: 'Description de la card',
    title: "Titre de la card",
    imageSrc : 'http://placekitten.com/300/150',
    imageAlt : 'Image de chat',
    buttonLabel: "Bouton de la card",
    note : '5',
    price : '10',

  }
}
