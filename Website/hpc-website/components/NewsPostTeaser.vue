<template>
  <nuxt-link
    :to="newsLink" class="no-link">
    <div class="featured-border px-12 py-8 hoverable">
        <img alt="Vorschaubild des News-Beitrags" class="featured-image" :src="transformImage(newsContent.thumbnail.filename,'300x0')">
      <h2 class="">
        {{ newsContent.title }}
      </h2>
      <p class="white">
        {{ newsContent.intro }}
      </p>
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
    }
  },
  props: {
    newsContent: {
      type: Object,
      required: true
    },
    newsLink: {
      type: String,
      required: true
    }
  }
}
</script>
