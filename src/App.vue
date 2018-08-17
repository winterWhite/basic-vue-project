<template>
  <div class="full-width center-content">
    <hello-component name="World" />
  </div>
</template>

<style scoped lang="scss">
    h1 {
        color: #ebebeb;
    }
</style>

<script>
import HelloComponent from './components/HelloComponent.vue'
export default {
  components: {
    HelloComponent
  }
}
</script>
