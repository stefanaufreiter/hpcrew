<template>
    <div class="res-container ">
      <div class="minHeight my-24">
        <h1 class="my-24 text-center separator overview-title">Mitglieder</h1>
            <div class="text-center">
              <ul class="my-24 no-list flex-buttons" data-aos="fade-left" data-aos-duration="500">
                <li class="">
                  <nuxt-link class="welcomeButton no-link" to="/members/mitglieder/alle">Alle</nuxt-link>
                </li>
                <li class="">
                  <nuxt-link class=" welcomeButton no-link" to="/members/mitglieder/vollmitglieder">Vollmitglieder</nuxt-link>
                </li>
                <li class="">
                  <nuxt-link class="welcomeButton no-link" to="/members/mitglieder/anschlussmitglieder">Anschlussmitglieder</nuxt-link>
                </li>
              </ul>
            </div>
            <!--<ul class="py-8 no-list">
              <li
                v-for="member in stories" :key="member._uid"
                class="mb-12 card-container hoverable" >
                  <member-teaser
                    v-if="member.content"
                    :member-link="member.full_slug"
                    :member-content="member.content"/>
                <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">This content loads on save. <strong>Save the entry & reload.</strong></p>
              </li>
            </ul>-->
        <nuxt-child  />
      </div>
    </div>
</template>
<script>
export default {
  layout: "main",
  data () {
    return {
      members: []
    }
  },
  head(){
    return {
      title: "HPCrew - Mitglieder"
    }
  }
}
</script>
