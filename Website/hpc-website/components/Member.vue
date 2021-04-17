<template>
  <div
    v-editable="blok"
    class="my-24 mx-auto project-div">
      <div class="separator">
        <h1 class="title project-title white">{{ blok.name }}</h1>
      </div>
      <div class="back-btn-div">
      <v-btn text :ripple="false" class="back-btn welcomeButton" @click="to">
        <p class="">&laquo; Alle Mitglieder</p>
      </v-btn>
    </div>
      <img alt="Bild des Mitglieds" class="mx-auto py-8 px-8" :src="transformImage(blok.img.filename, '1000x0')">
      <article class="px-24 project-body justify">
        <rich-text-renderer
          :document="blok.body"
        />
    </article>
    <ul
      v-editable="blok"
      class="flex-3 py-8 no-list card-container">
      <li
        :key="blok._uid"
        v-for="blok in blok.cars"
        class="card flex-card">
        <component :blok="blok" :is="blok.component" />
      </li>
    </ul>
  </div>
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
