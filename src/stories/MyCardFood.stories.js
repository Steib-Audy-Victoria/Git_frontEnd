import MyCardFood from '@/components/MyCardFood.vue'

export default {
  title: 'Components/MyCardFood',
  component: MyCardFood,
  argTypes: {
    description: {
      control: 'text'
    },
    title: {
      control: 'text'
    },
    classIcon: {
      control: "select",
      options: ['Default', 'Livraison', 'Repas']
    },
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCardFood
      },
      setup() {
        return { args }
      },
      template: `<MyCardFood v-bind="args" />`
    }
  },
  args: {
    description: 'Description de la card',
    title: "Titre de la card",
    classIcon: "Default"
  }
}
export const CardLivraison = {
  render: (args) => {
    return {
      components: {
        MyCardFood
      },
      setup() {
        return { args }
      },
      template: `<MyCardFood v-bind="args" />`
    }
  },
  args: {
    description: 'Description de la card',
    title: "Titre de la card",
    classIcon: "Livraison"
  }
}
export const CardRepas = {
  render: (args) => {
    return {
      components: {
        MyCardFood
      },
      setup() {
        return { args }
      },
      template: `<MyCardFood v-bind="args" />`
    }
  },
  args: {
    description: 'Description de la card',
    title: "Titre de la card",
    classIcon: "Repas"
  }
}
