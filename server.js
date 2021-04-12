const path = require('path')
const Koa = require('koa')
const router = require('koa-router')()
const static = require('koa-static')
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
const app = require('./dist/bundle.server.js').default

const koa = new Koa()
koa.use(static(path.join(__dirname,'./dist')))

router.get('/(.*)', async (ctx, next) => {
  const context = {
    url: ctx.url
  }
  let htmlStr
  await app(context).then( res => {
    renderer.renderToString(res, context, (err,html)=>{
      if(!err){
        htmlStr = html
      }
    })
  })
  ctx.body = htmlStr
});

koa.use(router.routes())

koa.on("error",(err,ctx)=>{
  console.log(new Date()," : ",err);
});

koa.listen(9000, () => {
  console.log('server is listening in 9000');
});
