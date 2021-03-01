<template>
  <div class="res-container">
    <section>
      <h1 class="my-24 text-center separator overview-title">News</h1>
      {{ news }}
      <ul class="flex-3 py-6 no-list card-container mb-24" data-aos="fade-down" data-aos-duration="500">
        <li
          v-for="newsPost in stories" :key="newsPost._uid"
          class="px-6 mb-24">
          <newspost-teaser
            v-if="newsPost.content"
            :news-link="newsPost.full_slug"
            :news-content="newsPost.content"/>
          <p v-else class="white text-center ">Der Content ladet nicht!<strong>Speichere ab &amp; neuladen.</strong></p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'main',
  data () {
    return {
      stories: []
    }
  },
  head(){
    return {
      title: "HPCrew - News"
    }
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      starts_with: 'news/',
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Konnte keine Daten von der API empfangen' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
}
</script>
