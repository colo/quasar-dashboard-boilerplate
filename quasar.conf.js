// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

const path = require('path')
const ProvidePlugin = require('webpack/lib/ProvidePlugin')//for jQuery

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      // 'creativetimargon',
      // 'creativetimblack',
      // 'flatlogiclightblue',
      // 'flatlogicsingapp',
      // 'i18n',
      'custom-flatlogiclightblue',
      // 'custom-flatlogicsingapp',
      // 'custom-creativetimblack',
      // 'custom-creativetimargon',
      'axios',
    ],

    css: [
      'app.styl'
    ],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v3',
      'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    framework: {
      // iconSet: 'ionicons-v4',
      // lang: 'de', // Quasar language

      // all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        // 'QList',
        // 'QItem',
        // 'QItemSection',
        // 'QItemLabel'
        'QSpace',
        'QSelect',
        'QTable',
        'QTh',
        'QTr',
        'QTd',
        'QRange',
        'QInnerLoading',
        'QSpinnerGears',
        'QSeparator',
        'QBtn'
      ],

      directives: [
        'Ripple'
      ],

      // Quasar plugins
      plugins: [
        'Notify',
        'AddressbarColor',
      ]
    },

    supportIE: true,

    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint').CLIEngine.getFormatter('stylish'),
            fix: true
          }
        })

        cfg.resolve.alias = {
          ...cfg.resolve.alias, // This adds the existing alias


          // Add your own alias like this
          '@libs': path.resolve(__dirname, './src/libs'),
          '@etc': path.resolve(__dirname, './src/etc'),
          '@components': path.resolve(__dirname, './src/components'),
          '@mixins': path.resolve(__dirname, './src/components/mixins'),
          '@wrappers': path.resolve(__dirname, './src/components/wrappers'),
          '@apps': path.resolve(__dirname, './src/apps'),
          // '@styles': path.resolve(__dirname, './src/styles'),
          // '@assets': path.resolve(__dirname, './src/assets'),
          '@skins': path.resolve(__dirname, './src/skins')
        }

        /**
        * jQuery (admin-lte)
        **/
        cfg.plugins.push(
          new ProvidePlugin({
             $: "jquery",
             jQuery: "jquery",
             // "window.jQuery": "jquery'",
             // "window.$": "jquery"
         })
        )
      }
    },

    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {}, // only for NON InjectManifest
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar App',
        // description: 'A Quasar Framework app',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'mngr-ui-admin-logs'
      }
    }
  }
}
