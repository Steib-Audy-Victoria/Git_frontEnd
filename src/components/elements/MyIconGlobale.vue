<script setup>
import { computed } from 'vue'

import IconMarket from '../icons/IconMarket.vue'
import IconSearch from '../icons/IconSearch.vue'
import IconCall from '../icons/IconCall.vue'
import IconClock from '../icons/IconClock.vue'
import IconLocalisation from '../icons/IconLocalisation.vue'
import IconFavori from '../icons/IconFavori.vue'
import IconPlay from '../icons/IconPlay.vue'

import IconFourchette from '../icons/IconFourchette.vue'
import IconRepas from '../icons/IconRepas.vue'
import IconLivraison from '../icons/IconLivraison.vue'

import IconArrow from '../icons/IconArrow.vue'
import IconNext from '../icons/IconNext.vue'

import IconFacebook from '../icons/IconFacebook.vue'
import IconTwitter from '../icons/IconTwitter.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconInstagram from '../icons/IconInstagram.vue'

const props = defineProps({
  name: String,
  background: String,
  color: String,
  size: String,
  position: String,
  fill: String
})
const getIcon = computed(() => {
  switch (props.name) {
    case 'Market':
      return IconMarket
    case 'Search':
      return IconSearch
    case 'Clock':
      return IconClock
    case 'Localisation':
      return IconLocalisation
    case 'Call':
      return IconCall
    case 'Favori':
      return IconFavori
    case 'Play':
      return IconPlay

    case 'Fourchette':
      return IconFourchette
    case 'Repas':
      return IconRepas
    case 'Livraison':
      return IconLivraison

    case 'Arrow':
      return IconArrow
    case 'Next':
      return IconNext

    case 'Facebook':
      return IconFacebook
    case 'Twitter':
      return IconTwitter
    case 'Linkedin':
      return IconLinkedin
    case 'Instagram':
      return IconInstagram

    default:
      return IconMarket
  }
})

const className = computed(() => ({
  ' -black': props.background === 'black',
  ' -primary': props.background === 'primary',
  ' -white': props.background === 'white',
  ' -secondary': props.background === 'secondary',
  ' -none': props.background === 'none',

  ' -cblack': props.color === 'black',
  ' -cprimary': props.color === 'primary',
  ' -cwhite': props.color === 'white',

  ' -small': props.size === 'small',
  ' -regular': props.size === 'regular',
  ' -big': props.size === 'big',

  ' -left': props.position === 'left',
  ' -right': props.position === 'right',

  ' -sblack': props.fill === 'black',
  ' -sprimary': props.fill === 'primary',
  ' -swhite': props.fill === 'white',
  ' -snone': props.fill === 'none'
}))
</script>

<template>
  <i :class="className" class="icon">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  border-radius: 100%;
  box-shadow: 0 0 rem(5) 0 $gray;
  display: inline-flex;
  height: rem(50);
  justify-content: center;
  width: rem(50);

  //background
  &.-primary {
    background: $primary-color;
  }
  &.-secondary {
    background: #f5ddc4;
  }

  &.-white {
    background: $white;
  }

  &.-black {
    background: $black;
  }

  &.-none {
    background: none;
    box-shadow: none;
  }

  //color

  &.-cprimary {
    color: $primary-color;
  }

  &.-cwhite {
    color: $white;
  }

  &.-cblack {
    color: $black;
  }

  //size

  &.-small {
    svg {
      scale: 0.5;
    }
    height: rem(25);
    width: rem(25);
  }
  &.-regular {
    height: rem(50);
    width: rem(50);
  }
  &.-big {
    svg {
      scale: 1.5;
    }
    height: rem(100);
    width: rem(100);
  }

  //position
  &.-left {
    rotate: 180deg;
  }
  &.-right {
    rotate: 0deg;
  }

  //fill
  &.-sprimary {
    svg {
      fill: $primary-color;
    }
  }
  &.-swhite {
    svg {
      fill: $white;
    }
  }

  &.-sblack {
    svg {
      fill: $black;
    }
  }
  &.-snone {
    svg {
      fill: none;
    }
  }
}
</style>
