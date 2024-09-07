'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6ebd0b8e252e04ceeb02775e39c4f276",
"assets/AssetManifest.bin.json": "5e07b8cf1a616767caa725220578a2a8",
"assets/AssetManifest.json": "ff688e6b144c189883378bfa4870d872",
"assets/assets/1.png": "03bc55ed6c9b2ed11de9b45595836330",
"assets/assets/2.png": "98fbd4b8e65b657ba7f22fd786ffe851",
"assets/assets/3.png": "1d09ad7100aba3b56de22e851a16a8ff",
"assets/assets/4.png": "bb8dfec9317dfb2a96b469d6e9680e68",
"assets/assets/5.png": "17ea23c6990c6e57a7ae2c06890d3b1e",
"assets/assets/7.png": "984e20d59511ec1d7c3ae18b4b895cef",
"assets/assets/alert.png": "be1bc093f7c5bed6868e2191059888d1",
"assets/assets/animation/animationloader.json": "93fa6280a812c848e933667258f3b466",
"assets/assets/animation.json": "402c003d81255c11b459c570d23f590c",
"assets/assets/bag.png": "3a263af62475aa7fc302c32734d599e9",
"assets/assets/bank.png": "4b26843d4e7661cef7fcc042bda47653",
"assets/assets/bikini.png": "54cc3a1ab6f93f1b81b1933766428ea5",
"assets/assets/credit_card.png": "953f8df8f9d57455629b8422a897ac22",
"assets/assets/cross.PNG": "52ab97bca7b70123597cbfd6b8a4037f",
"assets/assets/cross1.png": "ad58882db689ce1ae7ba75f837d536fb",
"assets/assets/delete_icon.png": "a1413140c42d14852e4bf9948e9eb2f3",
"assets/assets/download.png": "697f964c93f93f99ce39dbf0021e9343",
"assets/assets/dress.png": "6d31135091eaa3a9fb37b04630f3f4b4",
"assets/assets/ellipse_105.png": "b81bf6a67500a166017ed6436bdbbec1",
"assets/assets/filter.png": "5c4153b46217575228b029466a306d9c",
"assets/assets/frontlogo.png": "96b7b9fa1daa0d4f39cfddfdad68406e",
"assets/assets/group.png": "4a94cf5d4df5ed8938a787029e98a932",
"assets/assets/icon.png": "ef05cd296ddd0de06fd650aada824b52",
"assets/assets/image_50.png": "e85e1997b31905e0818723fe0ba94c9e",
"assets/assets/image_51.png": "0e6ed9f05c5568e624ce1acd3cf5c788",
"assets/assets/image_55.png": "54266c894b93779062917923d79393d3",
"assets/assets/image_product.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/image_product1.png": "8ce9f23ab7174e08c3f76a9d1480e401",
"assets/assets/image_product2.png": "85f8d13ff3428c6e40da09574e781e8e",
"assets/assets/image_product3.png": "ee6b73d90b4a298d1951d47f5c75ffc3",
"assets/assets/image_product4.png": "036799a708cfb7fab98ceea601cf9225",
"assets/assets/image_product5.png": "8472b147b4403ec631e3070d27d74529",
"assets/assets/image_product6.png": "9f9c3527525e8b118b52afc14eb37a8f",
"assets/assets/image_product7.png": "3c9ea200d1c163a8448e4a5847a87f70",
"assets/assets/Left.png": "e410aecfa66b9fd027e6b26198fb692f",
"assets/assets/location.png": "e83757bf701da16abb3718ccfb3a00cb",
"assets/assets/logo.png": "2d4e8d183e803b3ba704b134c61af0e2",
"assets/assets/man_bag.png": "6b6870f80b18a4b79b3f315a431e47d6",
"assets/assets/man_shoes.png": "ad970bac42fb3aa4568382c35ba3c730",
"assets/assets/man_underwear.png": "44916f692a614f50d6e95f7fbd109991",
"assets/assets/Mic.png": "95b00aee65db530fcea001379ec4c61b",
"assets/assets/not_found.png": "f4eedcd640c0bf5d1e57dcf1fa306cb5",
"assets/assets/paypal.png": "73513d78bd0cd608fa0de7a9385eee6d",
"assets/assets/product_image.png": "68c87324692b0f94f329ac057515525d",
"assets/assets/product_picture01.png": "7d7ca43e9e842b61f466cb301507a17e",
"assets/assets/product_picture02.png": "ac76175389f46db180c887abcb0c72ba",
"assets/assets/product_picture03.png": "2471a7818c0367f6cb8f65d4f81bbb6d",
"assets/assets/Profile%2520Picture%2520(1).png": "587952ce8da0148007d5ec7fe5e3c899",
"assets/assets/profile_picture.png": "b48712ee1fc2e3defddbcf66aa1b036c",
"assets/assets/profile_picture1.png": "55cc5a00c8b0bbd648fc4f1d3954867a",
"assets/assets/profile_picture2.png": "143d8b1f9a702c9487517fbd6c4064da",
"assets/assets/shirt.png": "1044a17fea2dc3281688aa953983f4fe",
"assets/assets/short_icon.png": "03632afd1b19839d680f9a97e65b6fb4",
"assets/assets/skirt.png": "38e21d7cf0059e44b3e03c0fd1649d44",
"assets/assets/trouser.png": "c14553a16875554a7b5359083faa26c7",
"assets/assets/Vector.png": "12265f74c9af94ce2637bb217fa2d174",
"assets/assets/vector1.png": "b332360965853e46bcd0944c07fa3901",
"assets/assets/vector_45.png": "dbbbc664dde2f08e193948e0af31cca0",
"assets/assets/w1.png": "100d7a1a70fee3d0f5c4801a269c2172",
"assets/assets/w2.png": "25006a62747526187003a077968ec9a4",
"assets/assets/w3.png": "af5ca30c5dc74869217770649da15783",
"assets/assets/w4.png": "0ec9d8c8a39f86e9c6e6dd9353a00015",
"assets/assets/w5.png": "d3fc3df928e5ecabeb54e3a8d4570892",
"assets/assets/w7.png": "8b70b608c613f42663292ccaae2d6f15",
"assets/assets/w8.png": "1fb68ed3cf7f54be5b5e32e398c8ec2f",
"assets/assets/woman_bag.png": "163800f11866c02c9865e62dcb7e002d",
"assets/assets/woman_pants.png": "f5aa740b612c04e01e1a098e2375bef9",
"assets/assets/woman_tshirt.png": "b46a3c7855e19e056f6739b95afb951f",
"assets/FontManifest.json": "bf5a5bc7d918cd2adc3ffc0fa0223f7f",
"assets/fonts/Kanit-Bold.ttf": "69646b07726772636b613cc5e12a1f28",
"assets/fonts/MaterialIcons-Regular.otf": "637e8c2a8d8d59b929b22cb91527b3a3",
"assets/fonts/nunito.ttf": "ea0ad4c72a135f9a43ec7bb83f2469aa",
"assets/fonts/pop_bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/pop_extraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/pop_light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/pop_medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/pop_regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/pop_semi_bold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/fonts/pop_thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/fonts/ubantu.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/NOTICES": "9b86fecef39b438b678255a4bbb2c308",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5136e83dc8748c097669012e07db6691",
"/": "5136e83dc8748c097669012e07db6691",
"main.dart.js": "b9b81b12ca47890f50ab1156c2b22296",
"manifest.json": "9a38fc187d60e00ce656447930b7cf80",
"version.json": "ebf38367e585157f99445aa85de037ce"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
