<template>
  <section>
    {{ members }}
    <ul class="py-8 no-list">
      <li
        v-for="member in stories" :key="member._uid"
        class="mb-12 card-container hoverable" data-aos="fade-up" data-aos-duration="500">
          <member-teaseranschluss
            v-if="member.content"
            :member-link="member.full_slug"
            :member-content="member.content"/>
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">This content loads on save. <strong>Save the entry & reload.</strong></p>
      </li>
    </ul>

  </section>
</template>

<script>
export default {
  layout: 'main',
  head: {
    script: [
      { src: '/js/jquery-cycle2-min.js', body: true, ssr: false},
      { src: '/js/cycleAnschluss.js', body: true, ssr: false}
    ]
  },
  data () {
    return {
      members: []
    }
  },
  head(){
    return {
      title: "HPCrew - Anschlussmitglieder"
    }
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      'filter_query[vollmitglied][is]': false,
      per_page: 60,
      starts_with: 'members/',
      sort_by:'created_at:asc',
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
