<template>
  <div class="ImageDiv">
    <img :src="blok.img.filename" :alt="blok.img.filename">
  </img>
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
