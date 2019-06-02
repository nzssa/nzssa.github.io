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
    "url": "webpack-runtime-2b83ca29430558022b8f.js"
  },
  {
    "url": "app-931151288efbb7b25e88.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5d879d3bd385c40b8d57.js"
  },
  {
    "url": "index.html",
    "revision": "3c1c48491fdbf9df305db7076d8118c2"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fec12ea664c145ddfccc8280b4d9d90a"
  },
  {
    "url": "styles.59f2b6d59b8604bd8574.css"
  },
  {
    "url": "component---src-pages-index-jsx-68ff0bd16f0a5fabda9d.js"
  },
  {
    "url": "2-da92997ddaa8fe08f600.js"
  },
  {
    "url": "1-6929de2cacad43408087.js"
  },
  {
    "url": "styles-29a512d1ac3c8680d953.js"
  },
  {
    "url": "static/d/57/path---index-6a9-5fieToVOamT6Ta4vVu7EWOtoWg.json",
    "revision": "78d9e0474fe8d1d862a3f6d499e4d7a6"
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