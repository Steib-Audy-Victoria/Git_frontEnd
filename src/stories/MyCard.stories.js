import MyCard from '@/components/MyCard.vue'

export default {
  title: 'Components/MyCard',
  component: MyCard,
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
    }
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCard
      },
      setup() {
        return { args }
      },
      template: `<MyCard v-bind="args" />`
    }
  },
  args: {
    description: 'Description de la card',
    title: "Titre de la card",
    imageSrc : 'http://placekitten.com/300/150',
    imageAlt : 'Image de chat',
    buttonLabel: "Bouton de la card"
  }
}
