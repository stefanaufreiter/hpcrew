<template>
  <div v-editable="blok">
    <h2 class="mb-12">{{ blok.title }}</h2>
    <ul class="py-6 mb-6 no-list">
      <li
        v-for="member in sortedMembers" :key="member._uid"
        class="px-6 mb-24">

        <member-teaser
          v-if="member.content"
          :news-link="member.full_slug"
          :news-content="member.content"/>
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
    sortedMembers() {
      // Load reference data/content from store
      const featuredMembers = this.$store.state.members.members.filter((member) => {
        return this.blok.members.includes(member.uuid)
      })

      // Enable the ordering of the news previews
      featuredMembers.sort((a, b) => {
        return this.blok.members.indexOf(a.uuid) - this.blok.members.indexOf(b.uuid);
      })

      return featuredMembers
    }
  }
}
</script>
