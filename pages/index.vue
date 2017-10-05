<script>
import ApiTarefa from '~/mixins/api/tarefa'
import AppNewTask from '~/components/index/new-task.vue'
import AppListTask from '~/components/index/list-task.vue'

export default {
  middleware: ['auth'],
  async fetch ({ store }) {
    let { data } = await ApiTarefa.get()
    store.commit('tarefa/SETALL', data)
  },
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
