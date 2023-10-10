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
}
