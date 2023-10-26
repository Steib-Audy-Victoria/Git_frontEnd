import MyCardSlider from '@/components/MyCardSlider.vue'

export default {
  title: 'Components/MyCardSlider',
  component: MyCardSlider,
  argTypes: {
    imageSrc: {
      control: 'text'
    },
    imageAlt: {
      control: 'text'
    },
    imageSrcPers: {
      control: 'text'
    },
    imageAltPers: {
      control: 'text'
    },
    name: {
      control: 'text'
    },
    role: {
      control: 'text'
    },
    avis: {
      control: 'text'
    },
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCardSlider
      },
      setup() {
        return { args }
      },
      template: `<MyCardSlider v-bind="args" />`
    }
  },
  args: {
    imageSrc : 'http://placekitten.com/300/150',
    imageAlt : 'Image de chat',
    imageSrcPers : 'http://placekitten.com/300/150',
    imageAltPers : 'Image de chat',
    name : 'Nom du chat',
    role : 'Role du chat',
    avis : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”',
  }
}
