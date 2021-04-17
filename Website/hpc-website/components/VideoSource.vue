<template>
  <div class="landingPage">
      <video width="1908" loop autoplay id="landingVideo" muted playsinline>
        <source :src="blok.video.filename" type="video/mp4">
      </video>
    <div class="landingText-Container">
      <h1 class="landingText cicd-gelb">High Performance Crew </h1>
      <!--<a href="#welcomeAnchor"><img src="~/assets/img/arrow.svg" class="arrow bounce"></img></a>-->
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
