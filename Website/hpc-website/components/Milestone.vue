<template>
  <div
    v-editable="blok"
    class="" data-aos="zoom-in" data-aos-duration="500">
    <div class="timeline-content">
      <h3 class="date">{{blok.date}}</h3>
      <h2>{{blok.title}}</h2>
      <p><rich-text-renderer
          :document="blok.body"
        /></p>
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
