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
    "url": "webpack-runtime-f2ae5791c8e62a480bdc.js"
  },
  {
    "url": "app-e46b8d19c52f70286cf5.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5d879d3bd385c40b8d57.js"
  },
  {
    "url": "index.html",
    "revision": "58525c97fc501d2de124dbbc8b14f67d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a43818403956dc133950600e612bcfb2"
  },
  {
    "url": "styles.59f2b6d59b8604bd8574.css"
  },
  {
    "url": "styles-29a512d1ac3c8680d953.js"
  },
  {
    "url": "1-ef18782774d97b40fa40.js"
  },
  {
    "url": "2-6cf84de36d8702097a35.js"
  },
  {
    "url": "component---src-pages-index-jsx-896499d0eb82c95191c8.js"
  },
  {
    "url": "static/d/938/path---index-6a9-w3471hZeQIwAwqKgnfvArInrg.json",
    "revision": "be998e78ca53080784c48c98d42936db"
  },
  {
    "url": "component---src-pages-404-jsx-f546f030d9aa343b2f8b.js"
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