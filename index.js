const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx) => {
  ctx.body = 'Hello from koa.js!';
});

module.exports = app.callback();