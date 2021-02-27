<template>
  <div
    v-editable="blok"
    class="my-24">
    <h1 class="my-24 overview-title text-center separator">Geschichte</h1>
    <div class="tl-container">
      <div class="timeline">
        <ul
        v-editable="blok">
          <li
          :key="blok._uid"
          v-for="blok in blok.milestones">
            <component :blok="blok" :is="blok.component" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
