<template>
  <div v-editable="blok">
    <h2 class="mb-12">{{ blok.title }}</h2>
    <ul class="py-6 mb-6 no-list featured-news">
      <li
        v-for="newsPost in sortedNews" :key="newsPost._uid"
        class="px-6 mb-24">
        <newspost-teaser
          v-if="newsPost.content"
          :news-link="newsPost.full_slug"
          :news-content="newsPost.content"/>
        <p v-else class="">Die Beiträge müssen zuerst geladen werden! <strong>Dazu den Beitrag speichern und die Seite neu laden.</strong></p>
      </li>
    </ul>
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
  computed: {
    sortedNews() {
      // Load reference data/content from store
      const featuredNews = this.$store.state.news.news.filter((newsPost) => {
        return this.blok.news.includes(newsPost.uuid)
      })

      // Enable the ordering of the news previews
      featuredNews.sort((a, b) => {
        return this.blok.news.indexOf(a.uuid) - this.blok.news.indexOf(b.uuid);
      })

      return featuredNews
    }
  }
}
</script>
