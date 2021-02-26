<template>
  <div
    v-editable="blok"
    class="my-24 mx-auto news-div">
    <div class="separator">
      <span class="title news-title">{{ blok.title }}</span>
    </div>
    <p class="news-date">{{blok.date}}</p>
    <img class="mx-auto py-8" :src="blok.img.filename">
    <p class="news-intro py-8 px-24">{{ blok.intro }}</p>
    <article class="px-24 my-24 news-body justify white mx-auto">
      <rich-text-renderer
        :document="blok.body"
      />
    </article>
    <div v-if="blok.youtube.cached_url" class="">
      <iframe class="iframe" width="1120" :src="blok.youtube.cached_url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div v-else class="">

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
