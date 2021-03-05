<template>
  <section>
    <div class="res-container">
      <div class="error-container flex-3">
        <div v-if="error.statusCode === 404">
          <div class="error-div-right right mx-auto">
            <img src="~/assets/img/error_transparent.gif" alt="Gif von einem kaputten Auto">
          </div>
          <div class="error-trenn">

          </div>
          <div class="error-div-left left text-center">
            <p class="error-font">404-Fehler</p>
            <p class="error-par cicd-gelb">Schade! Die Zielstrecke war ungenau.<br> Am besten Sie fangen wieder am Start an. </p><br><br>
            <NuxtLink class="welcomeButton mx-auto" to="/">Zurück zum Start</NuxtLink>
          </div>
        </div>
        <div v-else>
          <div class="error-div-right right mx-auto">
            <img src="~/assets/img/error_transparent.gif" alt="">
          </div>
          <div class="error-trenn">
          </div>
          <div class="error-div-left left text-center">
            <p class="error-font">Ein Fehler ist aufgetreten</p>
            <p class="error-par cicd-gelb">Schade! Ein Motorschaden ist aufgetreten.<br> Am besten Sie fangen wieder am Start an. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'main',
  head(){
    return {
      title: "HPCrew - Errorseite"
    }
  },
}
</script>
