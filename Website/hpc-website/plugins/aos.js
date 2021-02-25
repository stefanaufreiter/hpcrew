import Vue from 'vue';
import AOS from 'aos';
import "aos/dist/aos.css";

Vue.use(AOS.init({
   startEvent: 'load',
   offset: -250
}));

window.addEventListener('load', function() {
  AOS.refresh();
});
