'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae85254f906289c0d00ec842eec59d97",
"assets/AssetManifest.bin.json": "14cc918e1cf97547576225a1832f9591",
"assets/AssetManifest.json": "21922f6825307d32af9e387c54b5306f",
"assets/assets/adres.jpeg": "631518d63ccffddced117d2df5278d02",
"assets/assets/arrow.png": "6d0d6967c9c2e65faa2d5b2f8b84e321",
"assets/assets/assured.png": "e413543f44e57626fcb2a67bde2b8680",
"assets/assets/cas.jpeg": "06670aa4d50ddbc5ed407e02d71f6ff2",
"assets/assets/cd.jpeg": "50b272193cefbf5c873551c9b572c41a",
"assets/assets/delvery.png": "5e42acdd4bd2fd191bd07f7cf76b49aa",
"assets/assets/detail.jpeg": "78962132b7bb402bfefd9829e5d418e7",
"assets/assets/detlsnd.jpeg": "f7e08ccc70731314358e6529e5a279fa",
"assets/assets/dfrth.jpeg": "abc5d6fa6740424cba173577018c0406",
"assets/assets/dfst.jpeg": "bac9654e9fee340324ce55af63c1d6c4",
"assets/assets/dfv.jpeg": "da66bf8571c28fc73839b89f0567c42f",
"assets/assets/dsnd.jpeg": "859708814b9407e49d6b9895adedbfbd",
"assets/assets/dtrdk.jpeg": "47b72c9d1671d84616ea7c7aa43b41cd",
"assets/assets/frwd.png": "b438c4d863be3981d5790d87b424251f",
"assets/assets/fstfothgr.jpeg": "c700e598f216c7473925876ac3ad4102",
"assets/assets/hpy.jpeg": "1b30679f0ec36c340485a6c6b617fab8",
"assets/assets/ldmdev.jpeg": "cb1121e2bb32b35a37c7b1f77b1536e7",
"assets/assets/mhdgf.jpeg": "a20321e7a8d2c36cffb2a0e595954250",
"assets/assets/modfgdonu.jpeg": "0a10f6618c5d9ecc8892d4d05cb31576",
"assets/assets/modfgknhu.jpeg": "e09b8d28b2b98f2c3a49948c33ac35c1",
"assets/assets/moreinfo.jpeg": "d53a745b30dec5cd2bcd17ab82aad31c",
"assets/assets/nt.jpeg": "97230a814b3e3706ff060fad4fa7c066",
"assets/assets/office.png": "9fc24002047b08cb1a1a3b735ec2ff91",
"assets/assets/padrah.jpeg": "74fe3c73e1de7a79b49a55ca2fa9d66f",
"assets/assets/paynav.jpeg": "6fe7dfbbdecb21c636c383fa3caaedb6",
"assets/assets/pdrahbadk.jpeg": "bffbfcdba099dbcc14a7cec36a8d7f25",
"assets/assets/pendding.png": "9db84acd6cc8b3bf499f18cb98c36678",
"assets/assets/pht1.jpeg": "58aa8ab99ecb36c949b9f40ef5ba9c37",
"assets/assets/pht2.jpeg": "96de92e6f31494dcf56d5b1013806ac0",
"assets/assets/pht3.jpeg": "f4c7db16072dcf09645432e3bf22db18",
"assets/assets/pluslogo.jpg": "bf5beda3da1da6a5f3701ce60b1af2bc",
"assets/assets/prod1.jpeg": "f494d974a47987448fa6dfa4b9af8dae",
"assets/assets/prod2.jpeg": "8f4ec3b46f382aa9749b11edb2ec13c8",
"assets/assets/prod3.jpeg": "25be110d3cb448d23b34645a1573cb13",
"assets/assets/prod4.jpeg": "3a754d30d2044222c85a9dccfbf70bcc",
"assets/assets/rting.jpeg": "e91ea1e9d1b669f82cf57165ea59b891",
"assets/assets/rvewr.jpeg": "d31ac76cb2e0f2925a30d44ea69a1037",
"assets/assets/s1.jpeg": "b7a179193a8c406720827b763950fcb5",
"assets/assets/s2.jpeg": "5b3fdc4fed5c596569b3a02f67efbcfc",
"assets/assets/s3.jpeg": "3071b5970937751f422a1b9ec77518f3",
"assets/assets/s4.jpeg": "39d86ba01a079ac81285f525a24cf850",
"assets/assets/s5.jpeg": "b44efadd0754b311cf592fc163b87439",
"assets/assets/s6.jpeg": "037aa0a6e50f3b07d61996089d67ecf3",
"assets/assets/s7.jpeg": "b92deab9f13f30ee475a9fcb79b9257b",
"assets/assets/s8.jpeg": "d21141699a07f68bc97bdf4638232a54",
"assets/assets/s9.jpeg": "3ebafb0a1826ad0e6ed5a4c6e183976a",
"assets/assets/sbdfotthgr.jpeg": "4c856b0bcc2a91064e5a075af4cb6c42",
"assets/assets/sf1.jpeg": "24ed5c7882a2e64fec81f9d5b3d3614e",
"assets/assets/sf10.jpeg": "6a5a23f0087ba2ab071de0d0621757da",
"assets/assets/sf11.jpeg": "877aece12dd9122fa00c56cf2a42513c",
"assets/assets/sf2.jpeg": "0a0bd4fe6792314ad12006db50341c08",
"assets/assets/sf3.jpeg": "bf68cac870fed27106d935ca96fd992d",
"assets/assets/sf4.jpeg": "adfa305577e26ec8348e38773ee154c6",
"assets/assets/sf5.jpeg": "2752c9884bad997fcd725c2b3fb214f2",
"assets/assets/sf6.jpeg": "bc220d60ff4654035a9829ce1ca886e9",
"assets/assets/sf7.jpeg": "e1a6e6e0a958ba22bdf3d75128d65482",
"assets/assets/sf8.jpeg": "8358078025f207f5fd8763b2aa68e982",
"assets/assets/sf9.jpeg": "7e3b9650061d5cebeec3a9cd58b25baf",
"assets/assets/smery.jpeg": "3e132277f96f94cefdaa78f1a537f9e6",
"assets/assets/sumfst.jpeg": "835f736a22ff91afd56499b45a3b6000",
"assets/assets/sumlst.png": "89bf9febbc3be3dfdd3b6029ca203e7d",
"assets/assets/sumsnd.jpeg": "3622bb39cd34d223dfcd71a07548f6f2",
"assets/assets/thfdrh.jpeg": "fda4ab322da9b55c1af6c7b6fd2c354e",
"assets/assets/up.jpeg": "45678d922ca0494cf76b52a6eb6a8147",
"assets/assets/wt.jpeg": "f33308978492400883582228216222c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "614a36ece3283b1383e3b410b61cd57e",
"assets/NOTICES": "78e76108858ece6ac371c7cd0ad63802",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "3ec0edef171a9e5227aaf2457cfa8726",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d178e1a874bdd46af28096869e65cfa7",
"icons/Icon-192.png": "3ec0edef171a9e5227aaf2457cfa8726",
"icons/Icon-512.png": "3ec0edef171a9e5227aaf2457cfa8726",
"icons/Icon-maskable-192.png": "3ec0edef171a9e5227aaf2457cfa8726",
"icons/Icon-maskable-512.png": "3ec0edef171a9e5227aaf2457cfa8726",
"index.html": "327797a5db24285714da884900c3e673",
"/": "327797a5db24285714da884900c3e673",
"main.dart.js": "0080040a3a44b9f6fe240f432ae50256",
"manifest.json": "99ccce89b24a23c1886aafa6ffd9837a",
"version.json": "9929c3bcf8023089b099875a750d4153"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
