<template>
  <div
    v-editable="blok"
    class="my-24 mx-auto news-div">
    <div class="separator">
      <h1 role="heading" class="title news-title">{{ blok.title }}</h1>
    </div>
    <p class="news-date">{{blok.date}}</p>
    <div class="back-btn-div">
    <v-btn text :ripple="false" class="back-btn welcomeButton" @click="to">
      <p class="">&laquo; Alle Newsbeiträge</p>
    </v-btn>
  </div>
    <img class="mx-auto py-8" :src="blok.img.filename" />
    <p class="news-intro py-8 px-24">{{ blok.intro }}</p>
    <article role="article" class="px-24 my-24 news-body justify white mx-auto">
      <rich-text-renderer
        :document="blok.body"
      />
    </article>
    <div v-if="blok.youtube.cached_url" class="">
      <iframe title="Youtube-Video" class="iframe" width="1120" :src="blok.youtube.cached_url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div v-else class="">

    </div>
  </div>
</template>

<script>
export default {
  methods: {
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
