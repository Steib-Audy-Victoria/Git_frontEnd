<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
 
const percent = ref(0);
const container = ref();

function handleScroll() {
  let scrollTop = window.scrollY;
  let scrollBottom = scrollTop + window.innerHeight;

  let offsetTop = container.value.offsetTop;
  let elementHeight = container.value.offsetHeight;

  let result = ((scrollBottom - offsetTop) / elementHeight) * 100;

  percent.value = result > 100 ? 100 : Math.round(result);
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div ref="container" class="backgroundScroll">
    <div class="backgroundScroll__content">
      <p>Section Scroll : {{ percent }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.backgroundScroll {
  background: $black;
  color: $white;
  height: 2000px;

  &__content {
    left: 0;
    position: sticky;
    top: 0;
    width: 100%;
  }
}
</style>
