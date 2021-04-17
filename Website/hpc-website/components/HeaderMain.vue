<template>
  <header>
    <nav role="navigation" class="navigationMain">
      <div class="nav-content">
        <div class="left">
          <nuxt-link
            class=""
            to="/">
            <img src="~/assets/img/Logo_small_dark.svg" class="LogoMain" alt="Logo"></img>
          </nuxt-link>
        </div>
        <ul class="topnav">
          <div class="nav-icon cancel-btn">
              <i class="fas fa-times"></i>
          </div>
          <!--<li>
            <nuxt-link
              class="button buttonTextLarge buttonStyle"
              to="/">
              Startseite
            </nuxt-link>
          </li>-->
          <li>
            <nuxt-link
              class="button buttonTextLarge buttonStyle"
              to="/news">
              News
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="button buttonTextLarge buttonStyle"
              to="/projects/projekte/alle">
              Projekte
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="button buttonTextLarge buttonStyle"
              to="/events">
              Bilder
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="button buttonTextLarge buttonStyle"
              to="/members/mitglieder/alle">
              Mitglieder
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="button buttonTextLarge buttonStyle"
              to="/geschichte">
              Geschichte
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="active button buttonTextLarge buttonStyle"
              to="/kontakt">
              Kontakt
            </nuxt-link>
          </li>
        </ul>
        <div class="nav-icon menu-btn">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </nav>
      <a id="button" alt="Back-To-Top Button"></a>
  </header>
</template>

<script>
  export default {
    head() {
      return {
        script: [
            {src: '/js/HamburgerMenuMain.js', body: true},
            {src: '/js/BTTMain.js', body: true}
        ]
      }
    }
  }
</script>
