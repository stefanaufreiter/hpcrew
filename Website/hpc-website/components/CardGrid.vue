<template>
  <div class="res-container">
    <ul
      v-editable="blok"
      class="flex-3 cardGrid py-8 no-list card-container">
      <li
        :key="blok._uid"
        v-for="blok in blok.columns"
        class="px-6 card mx-auto" data-aos="fade-right" data-aos-duration="1500">
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
