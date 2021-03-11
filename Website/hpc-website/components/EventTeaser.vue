<template>
  <nuxt-link
    :to="eventLink" class="no-link">
    <div class="featured-card">
      <div class="imgBx">
        <img :alt="eventContent.title" :src="transformImage(eventContent.img[0].filename, '300x350')">
      </div>
      <div class="featured-details">
      <h2 class="">
        {{ eventContent.title }}
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
    }
  },
  props: {
    eventContent: {
      type: Object,
      required: true
    },
    eventLink: {
      type: String,
      required: true
    }
  }
}
</script>
