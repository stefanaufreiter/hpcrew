<template>
  <div v-editable="blok">
    <h2 class="mb-12">{{ blok.title }}</h2>
    <ul class="py-6 mb-6 no-list">
      <li
        v-for="project in sortedProjects" :key="project._uid"
        class="flex-auto px-6 mb-24" style="min-width: 33%">
        <project-teaser
          v-if="project.content"
          :news-link="project.full_slug"
          :news-content="project.content"/>
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
    sortedProjects() {
      // Load reference data/content from store
      const featuredProjects = this.$store.state.projects.projects.filter((project) => {
        return this.blok.projects.includes(project.uuid)
      })

      // Enable the ordering of the news previews
      featuredProjects.sort((a, b) => {
        return this.blok.projects.indexOf(a.uuid) - this.blok.projects.indexOf(b.uuid);
      })

      return featuredProjects
    }
  }
}
</script>
