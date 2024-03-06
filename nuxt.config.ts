// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@stefanobartoletti/nuxt-social-share", "@sidebase/nuxt-auth"],
  auth: {
    baseURL: '/api/auth',
    globalAppMiddleware: true, 
      provider: {
          type: 'local',
          endpoints: {
            signIn: { path: '/login', method: 'post' },
            signOut: { path: '/logout', method: 'post' },
            signUp: { path: '/register', method: 'post' },
            getSession: { path: '/session', method: 'get' }
          },
          token: { signInResponseTokenPointer: '/token/accessToken' },
          pages: {
            login: '/login', 
          }
      },
  }
})