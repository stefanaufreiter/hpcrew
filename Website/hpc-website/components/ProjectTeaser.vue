<template>
  <nuxt-link
    :to="transformURL(projectLink)" class="no-link">
    <div class="featured-card">
      <div class="imgBx">
        <img width="300" height="350" alt="Vorschaubild des Projekts" :src="transformImage(projectContent.img[0].filename, '300x350')">
      </div>
      <div class="featured-details">
      <h2 class="">
        {{ projectContent.title }}
      </h2>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  methods: {
    transformImage(image, option) {
      if (!image) return "";
      if (!option) return "";

      let imageService = "https://img2.storyblok.com/";
      let path = image.replace("https://a.storyblok.com", "");
      return imageService + option + path;
    },
    transformURL(url){
      return "../../" + url;
    }
  },
  props: {
    projectContent: {
      type: Object,
      required: true
    },
    projectLink: {
      type: String,
      required: true
    }
  }
}
</script>
