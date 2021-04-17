<template>
  <div
    v-editable="blok"
    class="my-24 mx-auto project-div">
      <div class="separator">
        <h1 class=" title project-title white">{{ blok.title }}</h1>
      </div>
      <p class="project-date white">{{blok.date}}</p>
      <div class="back-btn-div">
      <v-btn text :ripple="false" class="back-btn welcomeButton" @click="to">
        <p class="">&laquo; Alle Projekte</p>
      </v-btn>
    </div>
      <article class="px-24 news-body justify">
        <rich-text-renderer
          :document="blok.body"
        />
    </article>
    <div class="project-gallery">
      <div v-for="eimg in blok.img" class="gallery-hover" :style="dynamicPadding(eimg.filename)">
        <a :href="eimg.filename" :data-lightbox="blok.title" >
          <img :src="transformImage(eimg.filename, '370x0')" width="370" :alt="blok.title">
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
    },
    dynamicPadding(url){
        let width = url.split('/')[5].split('x')[0];
        let height = url.split('/')[5].split('x')[1];

      return "padding-bottom: calc(("+ height + "/" + width + ")*100%);"
    },
    to() {
      this.$router.go(-1);
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
