import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6Lf0gZApAAAAALr6K5whAlGO6AgYA-w_RWc3uFW1',
        // 6Lf0gZApAAAAAJDenChzGUbjPFYAdhRHh4Snyziu -> secretKey 
        loaderOptions: {
            autoHideBadge: false,
        },
    });
});