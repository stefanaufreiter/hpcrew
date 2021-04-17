<template>
  <header>
    <nav role="navigation" class="navigation">
      <div class="nav-content">
        <div class="left">
          <img src="~/assets/img/Logo_small_dark.svg" class="Logo" alt="Logo"> </img>
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
    <a id="button" title="Back-To-Top Button"></a>
  </header>
</template>

<script>
  export default {
    head() {
      return {
        script: [
            {src: '/js/HamburgerMenu.js', body: true},
            {src: '/js/BTT.js', body: true}
        ]
      }
    }
  }
</script>
