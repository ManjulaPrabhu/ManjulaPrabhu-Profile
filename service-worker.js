"use strict";var precacheConfig=[["/ManjulaPrabhu-Profile/index.html","5863a350a7fa0e709d846011ccd156b1"],["/ManjulaPrabhu-Profile/static/css/main.abbe9693.css","73d86114f6ca4c3ac6f58296124ee692"],["/ManjulaPrabhu-Profile/static/js/main.d9664df3.js","a205aeffbf04c69ecafafaba33810884"],["/ManjulaPrabhu-Profile/static/media/BigData_Project.5322fc06.jpg","5322fc067775acbf9464c7a14fecf31c"],["/ManjulaPrabhu-Profile/static/media/Cloud_Project.abab4722.jpg","abab4722db10803187ac8bbe261b7692"],["/ManjulaPrabhu-Profile/static/media/ContactPicture.76b749c1.jpg","76b749c155fb2ea9e7e020fb394b223e"],["/ManjulaPrabhu-Profile/static/media/ManjulaBashiniPrabhu_Resume.f8461f9f.pdf","f8461f9f136b9edf662b6b1b061f0caf"],["/ManjulaPrabhu-Profile/static/media/Profile_Picture_1.1c8fcc57.jpg","1c8fcc57f6ee197613a229484be0d5d8"],["/ManjulaPrabhu-Profile/static/media/owlz.862b2d07.png","862b2d07247e33f0765c1553d9f94adb"],["/ManjulaPrabhu-Profile/static/media/priceComparison.817ad9a8.png","817ad9a8d3b010655546d45fcd71c808"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var r="/ManjulaPrabhu-Profile/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});