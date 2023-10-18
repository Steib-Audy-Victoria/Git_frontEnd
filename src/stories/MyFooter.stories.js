import MyFooter from '../components/MyFooter.vue'

export default {
  title: 'Components/MyFooter',
  component: MyFooter,
  argTypes: {

  }
}

export const Footer = {
  render: (args) => {
    return {
      components: {
        MyFooter
      },
      setup() {
        return { args }
      },
      template: `<MyFooter v-bind="args" />`
    }
  },
  args: {


  }
}
