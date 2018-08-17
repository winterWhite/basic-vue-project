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

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import HelloComponent from './components/HelloComponent.vue'

@Component({
    components: {
        HelloComponent
    }
})
export default class Index extends Vue{
}
</script>
