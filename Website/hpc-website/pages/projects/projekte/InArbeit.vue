<template>
  <div class="res-container">
    <section>
      {{ projects }}
      <ul class="flex-3 py-6 mb-6 no-list card-container" data-aos="fade-down" data-aos-duration="500">
        <li
          v-for="project in stories" :key="project._uid"
          class="mb-12 px-6">
          <project-teaser
            v-if="project.content"
            :project-link="project.full_slug"
            :project-content="project.content"/>
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
      projects: []
    }
  },
  head(){
    return {
      title: "HPCrew - Projekte in Arbeit"
    }
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      'filter_query[abgeschlossen][is]': false,
      starts_with: 'projects/',
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
