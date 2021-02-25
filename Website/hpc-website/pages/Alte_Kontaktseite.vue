<template>
  <div class="res-container">
    <div class="my-24">
      <div class="my-24 mx-auto news-div">
        <div class="separator">
          <span class="title news-title">Kontakt</span>
        </div>
        <div class="my-24 mx-auto news-body white">
          <div class="wrapper">
            <h2>Kontaktinformationen</h2>
            <input type="radio" name="slider" id="kStandort" checked>
            <input type="radio" name="slider" id="kEmail">
            <input type="radio" name="slider" id="kLinks">
            <nav>
              <label for="kStandort" class="kontaktStandort"><i class="fas fa-thumbtack"></i><span>Standort</span></label>
              <label for="kEmail" class="kontaktEmail"><i class="fas fa-envelope-square"></i><span>Email</span></label>
              <label for="kLinks" class="kontaktLinks"><i class="fas fa-link"></i><span>Links</span></label>
              <div class="slider"> </div>
            </nav>
            <section class="kontaktSection">
              <div class="kontaktContent kontaktContent-1" id="location">
                <div class="kontaktTitle">Hier kommt der Standort hin...</div>
                <iframe class="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10555.903608664077!2d15.444764579726613!3d48.591160261734494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477294f6722314b3%3A0xb6c4fb3311a6aa64!2sKrumau%20am%20Kamp%20104%2C%203543%20Krumau%20am%20Kamp!5e0!3m2!1sde!2sat!4v1612446928423!5m2!1sde!2sat" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
              <div class="kontaktContent kontaktContent-2">
                <div class="kontaktTitle">Hier kommt die Email hin...</div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              </div>
              <div class="kontaktContent kontaktContent-3">
                <div class="kontaktTitle">Hier kommen die Links hin...</div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              </div>
            </section>
          </div>
          <div class="contactform">
            <div class="container">
              <h2>Kontaktformular</h2>
              <div class="row100">
                <div class="col">
                  <div class="inputBox">
                    <input type="text" required>
                    <span class="text">Vorname</span>
                    <span class="line"></span>
                  </div>
                </div>
                <div class="col">
                  <div class="inputBox">
                    <input type="text" required>
                    <span class="text">Nachname</span>
                    <span class="line"></span>
                  </div>
                </div>
              </div>
              <div class="row100">
                <div class="col">
                  <div class="inputBox">
                    <input type="text" required>
                    <span class="text">Email</span>
                    <span class="line"></span>
                  </div>
                </div>
                <div class="col">
                  <div class="inputBox">
                    <input type="text" required>
                    <span class="text">Tel-Nr</span>
                    <span class="line"></span>
                  </div>
                </div>
              </div>
              <div class="row100">
                <div class="col">
                  <div class="inputBox textarea">
                    <textarea required></textarea>
                    <span class="text">Nachricht eingeben:</span>
                    <span class="line"></span>
                  </div>
                </div>
              </div>
                <div class="row100">
                  <div class="col">
                    <input type="submit" value="Absenden">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
  head() {
    return {
      script: [
        {
          src:
            'https://kit.fontawesome.com/a076d05399.js'
        }
      ]
    }
  }
}
</script>
