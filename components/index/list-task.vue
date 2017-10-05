<script>
import cpLayoutModal from '~/shared/layout/modal.vue'
import listTask from '~/mixins/pages/index/list-task'

export default {
  extends: listTask,
  components: { cpLayoutModal }
}
</script>

<template>
  <div class="card mt-3">
    <table class="table table-condensed">
      <thead>
        <tr>
          <th colspan="3">Todas as Tarefas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.nome" :class="{'feita': item.feita}">
          <td class="action">
            <button v-b-tooltip.hover.auto title="Feito" class="btn btn-sm btn-link" @click="tarefaFeita(item)">
              <i class="fa fa-check-circle icon-feito"></i>
            </button>
          </td>
          <td class="nome">{{ item.nome }}</td>
          <td class="action">
            <button v-b-tooltip.hover.auto title="Exluir" class="btn btn-sm btn-link" @click="deletaFeita(item)">
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>      
    </table>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/scss/config';

  tr.feita {
    .icon-feito {
      color: $primary;
    }
    td.nome {
      text-decoration: line-through;
    }
  }
</style>

