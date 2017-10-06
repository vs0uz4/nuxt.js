import PageTemplate from '~/mixins/template/page'

export default {
  extends: PageTemplate,
  middleware: ['auth']
}
