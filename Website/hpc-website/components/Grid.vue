<template>
  <div class="res-container">
    <ul
      v-editable="blok"
      class="flex py-8 no-list grid" data-aos="fade-up">
      <li
        :key="blok._uid"
        v-for="blok in blok.columns"
        class="px-6 gridli">
        <component :blok="blok" :is="blok.component" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
