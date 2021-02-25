<template>
  <div
    v-editable="blok"
    class="my-24">
    <div class="separator">
      <span class="title project-title white">{{ blok.name }}</span>
    </div>
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
