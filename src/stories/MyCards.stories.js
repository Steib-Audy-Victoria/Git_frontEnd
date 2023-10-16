import MyCards from '@/components/MyCards.vue'

export default {
  title: 'Components/MyCards',
  component: MyCards,
}

export const Cards = {
  render: () => {
    return {
      components: {
        MyCards
      },
      template: `<MyCards />`
    }
  },
  args: [
    {
      description: 'Description de la card',
      title: "Titre de la card",
      imageSrc : 'http://placekitten.com/300/150',
      imageAlt : 'Image de chat',
      buttonLabel: "Bouton de la card"
    },
    {
      description: 'Description de la card',
      title: "Titre de la card",
      imageSrc : 'http://placekitten.com/300/150',
      imageAlt : 'Image de chat',
      buttonLabel: "Bouton de la card"
    },
    {
      description: 'Description de la card',
      title: "Titre de la card",
      imageSrc : 'http://placekitten.com/300/150',
      imageAlt : 'Image de chat',
      buttonLabel: "Bouton de la card"
    }
  ]
}
