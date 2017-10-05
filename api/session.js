module.exports = function (router) {
  // Add POST - /api/login
  router.post('/login', (req, res) => {
    if (req.body.usuario === 'demo' && req.body.senha === 'demo') {
      const auth = {
        token: 'JWT',
        usuario: { nome: 'Demo' }
      }
      req.session.auth = auth
      return res.json(auth)
    }
    res.status(401).json({ message: 'Usuário e/ou Senha Inválidos' })
  })

  // Add POST - /api/logout
  router.post('/logout', (req, res) => {
    delete req.session.auth
    res.json({ ok: true })
  })

  return router
}
