import MyCardMenu from '@/components/MyCardMenu.vue'

export default {
  title: 'Components/MyCardMenu',
  component: MyCardMenu,
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
    price: {
      control: 'number'
    }
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCardMenu
      },
      setup() {
        return { args }
      },
      template: `<MyCardMenu v-bind="args" />`
    }
  },
  args: {
    description: 'Description de la card',
    title: "Titre de la card",
    imageSrc : 'http://placekitten.com/300/150',
    imageAlt : 'Image de chat',
    price : '10',

  }
}
