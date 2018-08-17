<template>
  <h1 @click="onClick">Hello {{ name }}!</h1>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    name: String
  }
})
export default class HelloComponent extends Vue {
  onClick ():void {
    alert(this.$props.name)
  }
}
</script>
<style lang="scss" scoped>
    h1 {
        color: red;
    }
</style>
