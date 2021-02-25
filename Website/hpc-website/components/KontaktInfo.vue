<template>
  <div
  v-editable="blok"
  class="my-24 mx-auto">
    <span><img class="" :src="blok.img.filename" alt="Beschreibende Infografik" /></span>
    <span>{{blok.info}}</span>
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
