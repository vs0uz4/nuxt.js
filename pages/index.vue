<script>
import PageIndex from '~/mixins/pages/index'
import AppNewTask from '~/components/index/new-task.vue'
import AppListTask from '~/components/index/list-task.vue'

export default {
  extends: PageIndex,
  head: {
    title: 'Index'
  },
  components: { AppNewTask, AppListTask }
}
</script>

<template>
  <div>    
    <app-new-task></app-new-task>
    <app-list-task></app-list-task>
  </div>
</template>

<style>
</style>
