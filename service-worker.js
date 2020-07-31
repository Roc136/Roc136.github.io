/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/WorkSpace/Blog/public/404.html","e020fdbe7f3169527df7a35741c4c32b"],["D:/WorkSpace/Blog/public/404/404.html","878d84980d063f536264fdc4dc878a17"],["D:/WorkSpace/Blog/public/404/index.html","70e5658c7adfd3b08e5cf708787e632b"],["D:/WorkSpace/Blog/public/about/index.html","7c5e93398e2a8a06233cab5648a21d83"],["D:/WorkSpace/Blog/public/archives/2020/06/index.html","331c38f1421fe86edb09ff53c7396a91"],["D:/WorkSpace/Blog/public/archives/2020/07/index.html","a67e9712acf6d32a857068a508ed70a8"],["D:/WorkSpace/Blog/public/archives/2020/index.html","387208c26beb059debf15e5c98c4dbbd"],["D:/WorkSpace/Blog/public/archives/index.html","847cf5d6938aa3006fd19854ed0ad299"],["D:/WorkSpace/Blog/public/baidu_verify_VHJnAdJeWb.html","8f74fa9d425bb0ebf85744b58db23edc"],["D:/WorkSpace/Blog/public/baidu_verify_r4fwX08cv5.html","2c42deceba920b1cffc733265b36ab28"],["D:/WorkSpace/Blog/public/categories/NJU/index.html","9e92264a69b11f6f759f76434cc3047e"],["D:/WorkSpace/Blog/public/categories/blog/index.html","82955afb5ec174c8c00576ae1b08ed97"],["D:/WorkSpace/Blog/public/categories/blog/提升/index.html","6bf2281cd4aa26fae51bf77eb7be172b"],["D:/WorkSpace/Blog/public/categories/blog/搭建/index.html","123f99620634cda1214138177247ddd2"],["D:/WorkSpace/Blog/public/categories/blog/美化/index.html","e27a9d7040479830624e24bc5e10ae77"],["D:/WorkSpace/Blog/public/categories/blog/补充/index.html","2aee5ef1b72f194105763438767af85a"],["D:/WorkSpace/Blog/public/categories/index.html","802278092fb310cd888b902e85ff91cd"],["D:/WorkSpace/Blog/public/categories/linux/index.html","69d30a3ee7d8c12afdcc51ba1fb440d3"],["D:/WorkSpace/Blog/public/categories/recommend/index.html","b6369d8312b195950c941626684c25d3"],["D:/WorkSpace/Blog/public/categories/作业/index.html","0b68106ab6742f5a28fd846d7ee60f2a"],["D:/WorkSpace/Blog/public/categories/作业/深入理解计算机系统/index.html","031755bc2492fe346f4205e306e7bffa"],["D:/WorkSpace/Blog/public/categories/前端学习/index.html","d25431ae420e84581154b96c2d0c2cf5"],["D:/WorkSpace/Blog/public/categories/垃圾文章/index.html","9178f9c0c9f41bb0ec44f5ae4bd33fed"],["D:/WorkSpace/Blog/public/categories/复习/index.html","c76f599048e1b918a82e93a181154e76"],["D:/WorkSpace/Blog/public/categories/复习/微积分/index.html","e26af9d864a8b195f14cfa01582fd19a"],["D:/WorkSpace/Blog/public/categories/笔记/index.html","8b86d621ab3f92ec7e3655444892809f"],["D:/WorkSpace/Blog/public/categories/笔记/汇编/index.html","043f58b4f3aa54c36d3d8d18c5fc948a"],["D:/WorkSpace/Blog/public/css/index.css","b154f9a6a5af225553e148c81a098059"],["D:/WorkSpace/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/WorkSpace/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/WorkSpace/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/WorkSpace/Blog/public/img/alipay.jpg","efaf88fb4c568039867d6efd05c6f3ea"],["D:/WorkSpace/Blog/public/img/archive.jpg","5eefcffeb8e745e507caf12bf9842fd8"],["D:/WorkSpace/Blog/public/img/avatar.jpg","d59e97cdab860e839903974c21d5c865"],["D:/WorkSpace/Blog/public/img/background/bj1.jpg","9c4fc096b8ac9c287882eda8b317d4be"],["D:/WorkSpace/Blog/public/img/background/bj10.jpg","e862907a75398d1681b122bb635f95b9"],["D:/WorkSpace/Blog/public/img/background/bj11.jpg","bdc5d3ffe65c5a9531b66d647955fb22"],["D:/WorkSpace/Blog/public/img/background/bj12.jpg","fe6333bb93367bab52d252f441d35488"],["D:/WorkSpace/Blog/public/img/background/bj13.jpg","e6dd241da11907ed683d8c35ad1fff7b"],["D:/WorkSpace/Blog/public/img/background/bj14.jpg","4048f3d40074a7373ad71add0ff07c84"],["D:/WorkSpace/Blog/public/img/background/bj15.jpg","0f33c533143cb70b8d511636ef2d12f8"],["D:/WorkSpace/Blog/public/img/background/bj16.jpg","03ee42f40d3cbac238bc943e12ebbaf9"],["D:/WorkSpace/Blog/public/img/background/bj17.jpg","96a2cca7868a01267f776fe046556819"],["D:/WorkSpace/Blog/public/img/background/bj18.jpg","aa8233cdd2f5f77be34275398c42f2e9"],["D:/WorkSpace/Blog/public/img/background/bj19.jpg","87c67acdb78a6bef101999dfeb14788c"],["D:/WorkSpace/Blog/public/img/background/bj2.jpg","19cf807c2ce5ed7a3c9ee4df005727c0"],["D:/WorkSpace/Blog/public/img/background/bj20.jpg","6a703343aa04b7edf18bb7f39d68c616"],["D:/WorkSpace/Blog/public/img/background/bj21.jpg","e9553dfe572e71ba82811a3dad2def52"],["D:/WorkSpace/Blog/public/img/background/bj22.jpg","8dd3f560b406dc226ac04833443119ca"],["D:/WorkSpace/Blog/public/img/background/bj23.jpg","761f17e3225fc373936f386c8f324712"],["D:/WorkSpace/Blog/public/img/background/bj24.jpg","c11e53e9922a0682d71912d1a0d35ad3"],["D:/WorkSpace/Blog/public/img/background/bj25.jpg","294507a4bb6b78f7193bab77d7060d18"],["D:/WorkSpace/Blog/public/img/background/bj26.jpg","4bd4a6a66baaf872cff7f39e64283717"],["D:/WorkSpace/Blog/public/img/background/bj27.jpg","f032a7e3933956a9f0bf6434677611a9"],["D:/WorkSpace/Blog/public/img/background/bj28.jpg","a7a61199d14a3f641acce5add6a371a4"],["D:/WorkSpace/Blog/public/img/background/bj29.jpg","37cd97b322e52240e2b85c6ff67edad2"],["D:/WorkSpace/Blog/public/img/background/bj3.jpg","a2d4a1935703d7f36044710bfaacf321"],["D:/WorkSpace/Blog/public/img/background/bj30.jpg","1ff0597480e2ef8999a2bc86a69f6a3e"],["D:/WorkSpace/Blog/public/img/background/bj31.jpg","b4794c9683b71439c3295f6313607e3b"],["D:/WorkSpace/Blog/public/img/background/bj4.jpg","b10cb402d409fdab3c448f89da6d872f"],["D:/WorkSpace/Blog/public/img/background/bj5.jpg","5eefcffeb8e745e507caf12bf9842fd8"],["D:/WorkSpace/Blog/public/img/background/bj6.jpg","cf59b42b48a64d2cc7274ee680c1ad96"],["D:/WorkSpace/Blog/public/img/background/bj7.jpg","3b803d1e74f589f6c030e5512164272a"],["D:/WorkSpace/Blog/public/img/background/bj8.jpg","02db43ee400b60fae2fa3c62199741c2"],["D:/WorkSpace/Blog/public/img/background/bj9.jpg","b60078b107f08b88b6013382586f5a68"],["D:/WorkSpace/Blog/public/img/bg.jpg","bdc5d3ffe65c5a9531b66d647955fb22"],["D:/WorkSpace/Blog/public/img/categories.jpg","e862907a75398d1681b122bb635f95b9"],["D:/WorkSpace/Blog/public/img/favicon-16x16-next.png","261068a0b2cd4025a7c9d7567a949fbb"],["D:/WorkSpace/Blog/public/img/favicon-32x32-next.png","a0eef795969232995929927d168c9746"],["D:/WorkSpace/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/WorkSpace/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/WorkSpace/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/WorkSpace/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/WorkSpace/Blog/public/img/tag.jpg","a2d4a1935703d7f36044710bfaacf321"],["D:/WorkSpace/Blog/public/img/wechat.jpg","fcc1e6e2d15e106bef55339df1831ac2"],["D:/WorkSpace/Blog/public/index.html","ffce78bb1c47106d6e0ee4bd5bf0c7dd"],["D:/WorkSpace/Blog/public/js/main.js","4166e77361dd0a65b0809e6fa5027065"],["D:/WorkSpace/Blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/WorkSpace/Blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/WorkSpace/Blog/public/js/src/Valine.min.js","c2a73c84470b91464ddab3d18a378948"],["D:/WorkSpace/Blog/public/js/src/clock.js","07f2567a4975cf8f3c2868613fd803de"],["D:/WorkSpace/Blog/public/js/src/link.js","806ea7d7695398690c02604ff2c34dd6"],["D:/WorkSpace/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/WorkSpace/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/WorkSpace/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/WorkSpace/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/WorkSpace/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/WorkSpace/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/WorkSpace/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/WorkSpace/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/WorkSpace/Blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/WorkSpace/Blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/WorkSpace/Blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/WorkSpace/Blog/public/links/index.html","f4a6b0f60cb87f913eba825f073ca687"],["D:/WorkSpace/Blog/public/live2d-widget/README.html","5c77be61502684fd49ddc5da50caa86f"],["D:/WorkSpace/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/WorkSpace/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/WorkSpace/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/WorkSpace/Blog/public/live2d-widget/autoload.js","ac10b38a6d545c2acf909e282234ff9b"],["D:/WorkSpace/Blog/public/live2d-widget/demo/demo.html","a751dc0489e9e030e0e8054ad8d14c47"],["D:/WorkSpace/Blog/public/live2d-widget/demo/login.html","b12e4dbb2611fe51f614900c843dbb79"],["D:/WorkSpace/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/WorkSpace/Blog/public/live2d-widget/waifu-left.css","147936ed7961b6d16ba1b56bcd14cf30"],["D:/WorkSpace/Blog/public/live2d-widget/waifu-right.css","e8adef5300485da13a603b4cf53beecf"],["D:/WorkSpace/Blog/public/live2d-widget/waifu-tips.js","db7954ef08e9cd78695386d2ff4af4a7"],["D:/WorkSpace/Blog/public/others/index.html","ce0528bcf60390d58ae1adf751cfa3d8"],["D:/WorkSpace/Blog/public/page/2/index.html","bf031561e625599be389165b852c6998"],["D:/WorkSpace/Blog/public/page/3/index.html","c9ef46b40f451ad63470ce6010ac1b40"],["D:/WorkSpace/Blog/public/photos/index.html","35788f4811faa3539c1106d509a61091"],["D:/WorkSpace/Blog/public/posts/blog-building/beautify-1/index.html","fa2af8193b3e3e8b24a1a5c96e2121e7"],["D:/WorkSpace/Blog/public/posts/blog-building/beautify-2/index.html","ad3b11c5d38b321350653ea09c70b027"],["D:/WorkSpace/Blog/public/posts/blog-building/beautify-3/index.html","bccff7b4ab63ccf6877b8f86d838581a"],["D:/WorkSpace/Blog/public/posts/blog-building/beautify-4/index.html","d69238353ed3dc5903db9d7496f55cd6"],["D:/WorkSpace/Blog/public/posts/blog-building/beginning/index.html","41a82e4431ff05d275064f7c439980d7"],["D:/WorkSpace/Blog/public/posts/blog-building/end/index.html","a029b42227c64194144118096bb5d6c7"],["D:/WorkSpace/Blog/public/posts/blog-building/high-1/index.html","e946887828e37d8c766a6446599b769f"],["D:/WorkSpace/Blog/public/posts/blog-building/high-2/index.html","3ceab04259937fb567cb169d03973f0a"],["D:/WorkSpace/Blog/public/posts/coding-pages/index.html","7be52302c19bc492ae329e70d9f04e5d"],["D:/WorkSpace/Blog/public/posts/crontab/index.html","12b66cf78bc1a5f019c289ea719b0eae"],["D:/WorkSpace/Blog/public/posts/cros/index.html","d1a16ef707e7625ed582fec51838ef93"],["D:/WorkSpace/Blog/public/posts/csapp/homework1/index.html","410d4f85d45d77f82e9a1f305e6335bc"],["D:/WorkSpace/Blog/public/posts/csapp/homework2/index.html","050cb13e729b2fe007fd32681cd889f2"],["D:/WorkSpace/Blog/public/posts/csapp/homework3/index.html","52a1d8ad89d445d6ef78183790fd6c15"],["D:/WorkSpace/Blog/public/posts/csapp/homework4/index.html","ccaf68bcfd2c7d68b241d0e6cb0bd213"],["D:/WorkSpace/Blog/public/posts/csapp/homework5/index.html","229b640f27c031dd72dc956f9df8c9ac"],["D:/WorkSpace/Blog/public/posts/gdbwarning/index.html","948c873027620294ea411c35d98c244f"],["D:/WorkSpace/Blog/public/posts/live2d/index.html","22e819be93dad9649894f4ea53325c46"],["D:/WorkSpace/Blog/public/posts/notes/gdb/index.html","1032b459e96a2778c356463b0d570c98"],["D:/WorkSpace/Blog/public/posts/php-hide-index/index.html","9f9ab0887edd3d82121d0a30600a6771"],["D:/WorkSpace/Blog/public/posts/recommend/drawboardpdf/index.html","98eccf9b063fde3284a33ed8d6a94552"],["D:/WorkSpace/Blog/public/posts/review/calculus5/index.html","177506155b8a0180c9b330103705f90f"],["D:/WorkSpace/Blog/public/posts/xiangnan2/index.html","b776f8dcd325e7259cf194afaeb1746d"],["D:/WorkSpace/Blog/public/posts/zuan/index.html","5078b49afd0f725920b513aaf9896e15"],["D:/WorkSpace/Blog/public/schedule/index.html","9ec24e89d593c4be0f132637f97a9731"],["D:/WorkSpace/Blog/public/tags/CentOS-7/index.html","3559de35806c5a631f7c6f0cfbe12238"],["D:/WorkSpace/Blog/public/tags/Hexo/index.html","f1b57d1bdcfea3905af3efccb8f2437a"],["D:/WorkSpace/Blog/public/tags/NJU/index.html","663ffdd059af9ff887a23af93cb7928d"],["D:/WorkSpace/Blog/public/tags/PDF/index.html","8d2cb57816dfefaccf903b0524cca260"],["D:/WorkSpace/Blog/public/tags/blog/index.html","abeebfd33f975b365b3c64572c18c0d9"],["D:/WorkSpace/Blog/public/tags/coding/index.html","64ae74dab74c4326d27f1fd62b890dd7"],["D:/WorkSpace/Blog/public/tags/cros/index.html","3624b913f61975162eb0ccf5f6bbb9a8"],["D:/WorkSpace/Blog/public/tags/gdb/index.html","8b83e19b1fae0e50f592c8d5fb93dcb6"],["D:/WorkSpace/Blog/public/tags/index.html","1ff6a9edcd1d6d0718c57ae179a5ab24"],["D:/WorkSpace/Blog/public/tags/linux/index.html","c0a830b3856658c1643c574bd968a35a"],["D:/WorkSpace/Blog/public/tags/nginx/index.html","e473d201632a6b4230a1e84d7cb5a73f"],["D:/WorkSpace/Blog/public/tags/多元函数微分学/index.html","63cca474898ffc14b990aa9eeba00749"],["D:/WorkSpace/Blog/public/tags/定时任务/index.html","52452706b800f8fbefb4a9991682f14d"],["D:/WorkSpace/Blog/public/tags/微积分/index.html","94c0b237c4f7e87e153d3bc4c1f729e5"],["D:/WorkSpace/Blog/public/tags/深入理解计算机系统/index.html","7c55f97b74b7b3a888e1a8cd9246b3cb"],["D:/WorkSpace/Blog/public/tags/祖安神器/index.html","ceb94adf40522354fb687c22911ddf22"],["D:/WorkSpace/Blog/public/tags/跨域/index.html","878f5f6602c5aadc0fad3786a12505d8"],["D:/WorkSpace/Blog/public/wall/index.html","e9506eba75dd5274e227c052cdad2b9b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







