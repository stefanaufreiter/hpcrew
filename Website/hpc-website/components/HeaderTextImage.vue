<template>
  <div
    v-editable="blok"
    class="prose mx-auto my-24 white">
    <span class="title">{{ blok.name }}</span>
    <div class="justify">
      <rich-text-renderer
        :document="blok.body"
      />
  </div>
    <img class="mx-auto my-24" :src="blok.img.filename" :alt="blok.name">
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
