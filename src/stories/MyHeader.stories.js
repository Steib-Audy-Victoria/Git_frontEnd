import MyHeader from '../components/MyHeader.vue'

export default {
  title: 'Components/MyHeader',
  component: MyHeader,
  argTypes: {

  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyHeader
      },
      setup() {
        return { args }
      },
      template: `<MyHeader v-bind="args" />`
    }
  },
  args: {


  }
}
