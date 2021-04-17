<template>
  <div
    v-editable="blok"
    class="my-24 mx-auto">
      <div class="">
        <span class=" title project-title white titledec">{{ blok.title }}</span>
      </div>
      <article role="article" class="px-24 project-body justify">
        <rich-text-renderer
          :document="blok.body"
        />
    </article>
    <div class="car-gallery">
      <div v-for="eimg in blok.img" class="car-hover">
          <a role="link" :href="eimg.filename" :data-lightbox="blok.title" >
            <picture>
              <source :srcset="transformImage(eimg.filename, '185x0/filters:format(webp)')" type="image/webp">
              <img width="185" :alt="blok.title" :src="transformImage(eimg.filename, '185x0')"></img>
            </picture>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      { src: '/js/lightbox-plus-jquery.min.js', body: true }
    ]
  },
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
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
