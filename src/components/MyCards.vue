<script setup>
import MyCard from './MyCard.vue'
import { reactive } from 'vue'

const response = [
  {
    description: 'Description de la card',
    title: '100% Gratuit',
    imageSrc: 'http://placekitten.com/300/150',
    imageAlt: 'Image de chat',
    buttonLabel: 'Bouton de la card'
  },
  {
    description: 'Description de la card',
    title: '100% ecolo',
    imageSrc: 'http://placekitten.com/300/150',
    imageAlt: 'Image de chat',
    buttonLabel: 'Bouton de la card'
  },
  {
    description: 'Description de la card',
    title: 'Retours gratuits',
    imageSrc: 'http://placekitten.com/300/150',
    imageAlt: 'Image de chat',
    buttonLabel: 'Bouton de la card'
  },
  {
    description: 'Description de la card',
    title: 'Retours gratuits',
    imageSrc: 'http://placekitten.com/300/150',
    imageAlt: 'Image de chat',
    buttonLabel: 'Bouton de la card'
  },
  {
    description: 'Description de la card',
    title: 'Retours gratuits',
    imageSrc: 'http://placekitten.com/300/150',
    imageAlt: 'Image de chat',
    buttonLabel: 'Bouton de la card'
  },
  {
    id: '3',
    description: 'Description de la card',
    title: 'Retours gratuits',
    imageSrc: 'http://placekitten.com/300/150',
    imageAlt: 'Image de chat',
    buttonLabel: 'Bouton de la card'
  }
]

const cards = reactive(response)
</script>

<template>
  <div class="cards">
    <MyCard v-for="card in cards" :key="card.id" v-bind="card" />
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: grid;
  gap: rem(20);
  grid-template-columns: repeat(3, 1fr);
}
</style>
