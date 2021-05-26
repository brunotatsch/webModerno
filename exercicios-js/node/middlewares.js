const passo1 = (ctx, next) => {
  ctx.valor = 'Mid1'
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'Mid2'
  next()
}

const passo3 = (ctx, next) => {
  ctx.valor3 = 'Mid3'
  next()
}

const exec = (ctx, ...middlewares) => {
  const execPasso = indice =>
  {
    middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1))
  }
  execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

