const tarefas = [
  { feita: true, nome: 'Lavar a Louça' },
  { feita: false, nome: 'Arrumar a casa' },
  { feita: false, nome: 'Ir no mercado' }
]

module.exports = function (router) {
  router.get('/tarefa', (req, res) => {
    res.json(tarefas)
  })

  router.put('/tarefa', (req, res) => {
    tarefas.push(req.body)
    res.json({ ok: true })
  })

  router.post('/tarefa/feita', (req, res) => {
    let indice = false
    tarefas.forEach((el, i) => {
      if (el.nome === req.body.nome) indice = i
    })
    tarefas[indice].feita = !tarefas[indice].feita
    res.json({ ok: true })
  })

  router.post('/tarefa/excluir', (req, res) => {
    let indice = false
    tarefas.forEach((el, i) => {
      if (el.nome === req.body.nome) indice = i
    })
    tarefas.splice(indice, 1)
    res.json({ ok: true })
  })

  return router
}
