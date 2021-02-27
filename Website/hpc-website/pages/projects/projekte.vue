<template>
  <div class="res-container">
    <section>
      <h1 class="my-24 overview-title text-center separator">Projekte</h1>
      <div class="text-center">
        <ul class="my-24 no-list flex-buttons" data-aos="fade-left" data-aos-duration="500">
          <li class="">
            <nuxt-link class="welcomeButton no-link" to="/projects/projekte/alle">Alle</nuxt-link>
          </li>
          <li class="">
            <nuxt-link class=" welcomeButton no-link" to="/projects/projekte/abgeschlossen">Abgeschlossen</nuxt-link>
          </li>
          <li class="">
            <nuxt-link class="welcomeButton no-link" to="/projects/projekte/inarbeit">In Arbeit</nuxt-link>
          </li>
        </ul>
      </div>
      <ul class="flex-3 py-6 mb-6 no-list card-container">
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
      <nuxt-child  />
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
      title: "HPCrew - Projekte"
    }
  }
}
</script>
