<template>
  <div>
    <HeaderMain />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderMain from '~/components/HeaderMain.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    HeaderMain,
    Footer
  }
}
</script>
