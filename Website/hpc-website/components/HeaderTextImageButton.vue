<template>
  <div
    v-editable="blok"
    class=" white htib">
      <div class="headertext text-center">
        <span class="title text-center">{{ blok.name }}</span>
      </div>
      <div class="headertextDiv">
        <div class="justify">
          <rich-text-renderer
            :document="blok.body"
          />
        </div>
        <img alt="Vereinbeschreibendes Bild" width="700" class="my-24 headertextImage" :src="transformImage(blok.img.filename, '700x0')"></img>
      </div>
      <div class="text-center">
        <a role="link" :href="blok.location.cached_url" class="welcomeButton mx-auto">{{blok.locationname}}</a>
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
}
</script>
