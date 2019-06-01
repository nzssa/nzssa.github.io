/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-4cf1192c9d914149d28c.js"
  },
  {
    "url": "app-931151288efbb7b25e88.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5d879d3bd385c40b8d57.js"
  },
  {
    "url": "index.html",
    "revision": "11a61c24e6bfaca24ab5ae348baf9038"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8aa9948b39c418aa8193aba390b1ca24"
  },
  {
    "url": "styles.59f2b6d59b8604bd8574.css"
  },
  {
    "url": "component---src-pages-index-jsx-800dcdf3f77c082b95c5.js"
  },
  {
    "url": "2-ecf8c90aa262dc1257aa.js"
  },
  {
    "url": "1-6929de2cacad43408087.js"
  },
  {
    "url": "styles-29a512d1ac3c8680d953.js"
  },
  {
    "url": "static/d/531/path---index-6a9-k1woy5v8Ntx8pEYkWS2F1kRiE.json",
    "revision": "c173d74ba09d12dd22abc51003c63953"
  },
  {
    "url": "component---src-pages-404-jsx-419bd50a49c8200e32b4.js"
  },
  {
    "url": "static/d/285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8.json",
    "revision": "02094403799cfe9d216f51de06d00d63"
  },
  {
    "url": "static/d/604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8.json",
    "revision": "e0f3b054b6dcf2c5a113801b73f75867"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "63fa2c00486dbe76266c65a5e0e2b095"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});