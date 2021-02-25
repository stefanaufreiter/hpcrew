<template>
  <div
    v-editable="blok"
    class="teaser">
    {{ blok.headline }}
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
