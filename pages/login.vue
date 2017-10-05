<script>
import CpFormGroup from '~/shared/forms/group.vue'
import CpFormError from '~/shared/forms/error.vue'
import Login from '~/mixins/pages/login'

export default {
  layout: 'auth',
  head: {
    title: 'Login'
  },
  components: { CpFormGroup, CpFormError },
  extends: Login
}
</script>

<template>
  <div>
    <div class="card-body">
      <h3 class="card-title">Login</h3>
      <form @submit.prevent="onSubmit">
        <cp-form-group field="usuario" name="Usuário" :error="errors.has('usuario')">
          <input class="form-control" name="usuario" id="usuario" v-model="form.usuario" v-validate="'required'">
          <cp-form-error v-show="errors.has('usuario')">Usuário é obrigatório</cp-form-error>
        </cp-form-group>
        <cp-form-group field="senha" name="Senha" :error="errors.has('senha')">
          <input type="password" class="form-control" name="senha" id="senha" v-model="form.senha" v-validate="'required'">
          <cp-form-error v-show="errors.has('senha')">Senha é obrigatória</cp-form-error>
        </cp-form-group>
        <button type="submit" class="btn btn-primary btn-block">
          <i class="fa fa-sign-in"></i> Entrar
        </button>
      </form>
    </div>
  </div>
</template>