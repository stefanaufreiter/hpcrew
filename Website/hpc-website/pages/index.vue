<template>
    <section>
      <!--<div class="loader-wrapper">
        <span class="loader"><img class="" src="../assets/img/reifen.svg" alt="" /></span>
      </div>-->
      <component
        v-if="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
        :is="story.content.component" />
    </section>
</template>

<script>
export default {
  head(){
    return {
      script: [
          { src: '/js/LoadingGif.js'}
      ]
    }
  },
  data () {
    return {
      story: { content: {} }
    }
  },
  head(){
    return {
      title: "HPC - High Performance Crew"
    }
  },
  mounted () {
    // Use the input event for instant update of content
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
      }
    })
    // Use the bridge to listen the events
    this.$storybridge.on(['published', 'change'], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      })
    })
  },
  asyncData (context) {
    // // This what would we do in real project
     const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
     const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path

    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi.get('cdn/stories/home', {
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Konnte keine Daten von der API liefern.' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  },
  async fetch(context) {
    // Loading reference data - News in our case
    if(context.store.state.news.loaded !== '1') {

      let newsRefRes = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'news/', version: 'draft' })
      context.store.commit('news/setNews', newsRefRes.data.stories)
      context.store.commit('news/setLoaded', '1')
    }
  }
}
</script>
