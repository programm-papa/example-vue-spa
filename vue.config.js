
// vue.config.js
module.exports = {
  pwa: {
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
          swSrc: 'src/service-worker.js',
          exclude: [
              /\.map$/, 
              /manifest\.json$/ 
          ],
      },
      name: 'Март',
      themeColor: '#4f4f4f',
      // iconPaths:{
      //   faviconSVG: 'src/assets/icons/favicon.svg',
      //   favicon32: 'src/assets/icons/favicon-32x32.png',
      //   favicon16: 'src/assets/icons/favicon-16x16.png',
      //   appleTouchIcon: 'src/assets/icons/apple-touch-icon-152x152.png',
      //   maskIcon: 'src/assets/icons/safari-pinned-tab.svg',
      //   msTileImage: 'src/assets/icons/msapplication-icon-144x144.png'
      // }      
  },
}