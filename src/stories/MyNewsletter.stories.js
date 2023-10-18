import MyNewsletter from '../components/MyNewsletter.vue'

export default {
  title: 'Components/MyNewsletter',
  component: MyNewsletter,
  argTypes: {

  }
}

export const Newsletter = {
  render: (args) => {
    return {
      components: {
        MyNewsletter
      },
      setup() {
        return { args }
      },
      template: `<MyNewsletter v-bind="args" />`
    }
  },
  args: {


  }
}
