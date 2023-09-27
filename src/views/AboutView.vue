<script setup>
import DefaultLayout from "../components/layouts/DefaultLayout.vue";

</script>

<template>
  <DefaultLayout>
      <template #header>
        Nouveau header
      </template>
      Page about
      <template #article>
          Nouvelle article
       </template>
      <template #footer>
          Nouveau footer
      </template>
  </DefaultLayout>
</template>

