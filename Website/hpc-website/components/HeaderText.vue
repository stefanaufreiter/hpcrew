<template>
  <div
    v-editable="blok"
    class="mx-auto my-24 white">
    <span class="title">{{ blok.name }}</span>
    <div class="justify">
      <rich-text-renderer
        :document="blok.body"
      />
    </div>

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
