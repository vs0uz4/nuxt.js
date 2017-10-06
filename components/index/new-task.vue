<script>
import newTask from '~/mixins/components/index/new-task'
import cpInputGroup from '~/shared/forms/input-group.vue'

export default {
  extends: newTask,
  components: { cpInputGroup }
}
</script>

<template>
  <form class="row" @submit.prevent="onSubmit">
    <div class="col-12">
      <cp-input-group field="nome" name="Nova Tarefa" :error="errors.has('nome')">
        <input slot="input" class="form-control" name="nome" id="nome" v-model="newTask.nome" v-validate="'required'">
        <button slot="button" class="btn btn-primary" type="submit">
          <i class="fa fa-plus"></i>
        </button>
      </cp-input-group>
    </div>
  </form>
</template>

