<template>
  <div
    v-editable="blok"
    class="feature">
    <span class="text-lg">{{ blok.name }}</span>
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
