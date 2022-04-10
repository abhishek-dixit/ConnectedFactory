'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a47afcea2e25e3e4a983f2880b4033d1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/images/assembly.png": "896333c2ed74b179d91475d9ae2184a7",
"assets/images/assembly_desel.png": "f968aae136c9084ae275869ac64a8c25",
"assets/images/blue_gradient.jpg": "adbc099b8cfc9c461e78bcb641113e60",
"assets/images/circle.png": "17e3c003828d7ee45ea9ee1f41e581ba",
"assets/images/circle_blue.png": "9fe655ace10c4bdbf974f3ff19da3d68",
"assets/images/circle_desel.png": "3dbb734d8819a3dfb789254a6efcbcb1",
"assets/images/connected_factory.png": "16599a74c4d3d1113012e4ba08f2a5b4",
"assets/images/icon_assembly.png": "ce6a1beb872c266edb475519828108b5",
"assets/images/icon_buzzer.png": "588f2042ba3445ad24617a74d3dceb6d",
"assets/images/icon_fire.png": "5edef83fca9c21f47e3a8a49b5c5d303",
"assets/images/icon_humidity.png": "a31b0c7b351f345ec2cda7c0c27fea2a",
"assets/images/icon_painting.png": "a68658ef7d427fe9c02df681c091718e",
"assets/images/icon_smoke.png": "25d3bd10a0c559df7b7d9345e14338f3",
"assets/images/icon_stamping.png": "211a434a93a94742e0cb5d7984873a02",
"assets/images/icon_temp.png": "a081b4b817ea5c490e70ae42f7c86ece",
"assets/images/icon_welding.png": "1316c193c418d7125091240d17caa9c1",
"assets/images/logo.png": "31517ead8398fe8357bbc8428b1b2481",
"assets/images/painting.png": "2e2f9ef982d711d9208666703f383644",
"assets/images/painting_desel.png": "3a7601ebc59c1b38472a171a60e415bf",
"assets/images/rectangle.png": "8e8b1bab6efe59cf5019706d1da6c628",
"assets/images/rectangle_desel.png": "b2c1532748b90a04ed968155e78e28f1",
"assets/images/reset.png": "e07925f34d79128d94f9a3b5e55dddc9",
"assets/images/shift1.png": "b630f70fb12d6b0af8f5f720d883f140",
"assets/images/shift1_desel.png": "fc91550eab60b7e643c4ae5dcb1f10a4",
"assets/images/shift2.png": "60c6bf1a93458432a0c13e2f06ba8ef6",
"assets/images/shift2_desel.png": "1be75c7bd561ee60350d9ecc920d3592",
"assets/images/shift3.png": "ed83b9d8fcc8bd9b754eba68f87123fb",
"assets/images/shift3_desel.png": "376970c86e404551dc864142435a376c",
"assets/images/stamping.png": "226e405d099ffd2ce687ae2dec7360d4",
"assets/images/stamping_desel.png": "aca35ca5191f36aea68c252a81d69362",
"assets/images/start.png": "c0dbe4e73f3a493bb1b54bb9802862b3",
"assets/images/start_desel.png": "38640cdd134ddff554cdd05e1175362c",
"assets/images/stop.png": "ef1590b03ccf7997c01ccdba8c6af3ae",
"assets/images/stop_desel.png": "1c7667a55ad577f398058cd12776ce5a",
"assets/images/toggle_switch.png": "216572012b303817c6473b89a59cc8f7",
"assets/images/triangle.png": "e10723def7709700a0a8eeca6cd9331b",
"assets/images/triangle_desel.png": "5db77314a7e9563627b519989c2ecb9a",
"assets/images/welding.png": "8ef3ccea604c960d000637e78077dc51",
"assets/images/welding_desel.png": "05a4951b955c48a07594c32387b07f7b",
"assets/NOTICES": "b327a648083f0eda0fbe4a9d6d2ad605",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cbfde40b4f475f77f99fd2552ccc8566",
"/": "cbfde40b4f475f77f99fd2552ccc8566",
"main.dart.js": "6a68b6cca590e5ffa0196609e46d1973",
"manifest.json": "06bfed6021830676823dc9fbd6f36b93",
"version.json": "fc7cb7e381c52fcda814d5f20e649450"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
