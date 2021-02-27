<template>
  <div class="res-container">
    <section>
      <h1 class="overview-title my-24 text-center separator white">Bilder</h1>
      {{ events }}
      <ul class="flex-3 py-6 mb-6 no-list card-container" data-aos="fade-down" data-aos-duration="500">
        <li
          v-for="event in stories" :key="event._uid"
          class="px-6 mb-12">
          <event-teaser
            v-if="event.content"
            :event-link="event.full_slug"
            :event-content="event.content"/>
          <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">This content loads on save. <strong>Save the entry & reload.</strong></p>
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
      title: "HPCrew - Events"
    }
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      starts_with: 'events/',
      sort_by:'content.date:desc',
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
}
</script>
