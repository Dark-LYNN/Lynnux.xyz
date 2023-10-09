// This is the "Offline copy of pages" service worker

const params = new URLSearchParams(location.search);

self.__WB_DISABLE_DEV_LOGS = true;
self.__WB_CACHE = !params.get('bundle')
  ? 'pwabuilder-offline-common' //
  : 'pwabuilder-offline-' + params.get('bundle');

importScripts('/assets/manifest/workbox-sw.js');

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: self.__WB_CACHE,
  })
);