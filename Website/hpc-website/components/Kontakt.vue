<template>
  <div
  v-editable="blok"
  class="my-24" data-aos="fade-up" data-aos-duration="500">
      <div class="my-24 news-div">
        <h1 class="my-24 overview-title text-center separator">Kontakt</h1>
        <div class="my-24 mx-auto news-body white">
          <div class="wrapper">
            <h2>{{blok.subname}}</h2>
            <input type="radio" name="slider" id="kStandort" checked>
            <input type="radio" name="slider" id="kEmail">
            <input type="radio" name="slider" id="kLinks">
            <nav>
              <label for="kStandort" class="kontaktStandort"><i :class="convertIcon(blok.icon1.icon)"></i><span>{{blok.info1}}</span></label>
              <label for="kEmail" class="kontaktEmail"><i :class="convertIcon(blok.icon2.icon)"></i><span>{{blok.info2}}</span></label>
              <label for="kLinks" class="kontaktLinks"><i :class="convertIcon(blok.icon3.icon)"></i><span>{{blok.info3}}</span></label>
              <div class="slider"> </div>
            </nav>
            <section class="kontaktSection">
              <div class="kontaktContent kontaktContent-1" id="location">
                <div class="kontaktTitle">{{blok.paragraph1}}</div>
                <iframe class="iframe" :src="blok.maps.cached_url" width="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
              <div class="kontaktContent kontaktContent-2">
                <div class="kontaktTitle">{{blok.paragraph2}}</div>
                <p>{{blok.subparagraph2}}</p>
              </div>
              <div class="kontaktContent kontaktContent-3">
                <div class="kontaktTitle">{{blok.paragraph3}}</div>
                <table class="LinkTable">
                  <thead>
                    <tr>
                        <th v-for="th in blok.subparagraph3.thead">{{ th.value }}</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(tr, index) in blok.subparagraph3.tbody">
                          <td v-for="td in tr.body">{{ td.value }}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          <form method="post" role="form" class="contactform" action="https://getsimpleform.com/messages?form_api_token=a32192aa713a18f6dea30b25b7414577">
            <div class="container">
              <h2>Kontaktformular</h2>
              <div class="row100">
                <div class="col">
                  <div class="inputBox">
                    <input name="vname" type="text" required>
                    <span class="text">Vorname</span>
                    <span class="line"></span>
                  </div>
                </div>
                <div class="col">
                  <div class="inputBox">
                    <input name="nname" type="text" required>
                    <span class="text">Nachname</span>
                    <span class="line"></span>
                  </div>
                </div>
              </div>
              <div class="row100">
                <div class="col">
                  <div class="inputBox">
                    <input name="email" type="text" required>
                    <span class="text">Email</span>
                    <span class="line"></span>
                  </div>
                </div>
                <div class="col">
                  <div class="inputBox">
                    <input name="telnr" type="text" required>
                    <span class="text">Tel-Nr</span>
                    <span class="line"></span>
                  </div>
                </div>
              </div>
              <div class="row100">
                <div class="col">
                  <div class="inputBox textarea">
                    <textarea name="message" required></textarea>
                    <span class="text">Nachricht eingeben:</span>
                    <span class="line"></span>
                  </div>
                </div>
              </div>
                <div class="row100">
                  <div class="col">
                    <input class="welcomeButton" type="submit" value="Absenden" name="send">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  methods: {
    convertIcon(icon){
      return "fas " + icon;
    }
  },
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
