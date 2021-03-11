<template>
  <nuxt-link
    :to="transformURL(memberLink)" class="no-link">
      <div class="memberFlex px-12">
        <div v-if="memberContent.vorschau"
        class="cycle-slideshow" data-cycle-fx=fadeout
          data-cycle-timeout=2000
          data-cycle-log="false">
          <img
            v-for="eimg in memberContent.vorschau"
           :src="transformImage(eimg.filename, '550x350/smart')" alt="Vorschaubild des Mitglieds" class="memberImage" width="550" height="350"></img>
        </div>
        <div v-else>
          <img :src="transformImage(memberContent.img.filename, '550x350/smart')" alt="Vorschaubild des Mitglieds" class="memberImage" width="550" height="350"></img>
        </div>
        <div class="memberParagraph mx-auto">
          <h2 class="memberTitle ">
            {{ memberContent.name }}
          </h2>
          <article>
            <rich-text-renderer
              :document="memberContent.body"
            />
          </article>
        </div>
      </div>
  </nuxt-link>
</template>

<script>
export default {
  head: {
    script: [
      { src: '/js/jquery-cycle2-min.js', body: true},
      { src: '/js/cycleVoll.js', body: true, ssr: false}
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
    transformURL(url){
      return "../../" + url;
    }
  },
  props: {
    memberContent: {
      type: Object,
      required: true
    },
    memberLink: {
      type: String,
      required: true
    }
  }
}
</script>
