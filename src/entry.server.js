import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const app = createApp()
    const router = app.$router
    const store = app.$store
    const { url } = context
    const { fullPath } = router.resolve(url).route
    if(fullPath !== url){
      return reject({
        url: fullPath
      })
    }

    router.push(url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if(!matchedComponents.length){
        return reject({
          code: 404
        })
      }
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}