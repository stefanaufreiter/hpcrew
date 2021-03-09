<template>
  <div class="mb-24">
    <div class="face face1">
      <div class="content">
        <img alt="Beschreibende Grafik" :src="blok.img.filename" class="cardImage">
        <div class="title">{{blok.titel}}</div>
      </div>
    </div>
    <div class="face face2">
      <div class="content">
          <p>{{blok.info}}</p>
          <a :href="blok.location.cached_url" class="welcomeButton">{{blok.locationname}}</a>
      </div>
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
