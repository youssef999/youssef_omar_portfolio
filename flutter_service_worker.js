'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "078a9c70d53c961e22a421c575d71d46",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "7a2e3a0d6693ce89aa4cd4c348fd6ca9",
"/": "7a2e3a0d6693ce89aa4cd4c348fd6ca9",
"main.dart.js": "a1c75f09b653da94901f20339d9fcd06",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "3403721192bb21bc5b40c7c2e1309a7d",
"icons/Icon-192.png": "3403721192bb21bc5b40c7c2e1309a7d",
"icons/Icon-maskable-192.png": "3403721192bb21bc5b40c7c2e1309a7d",
"icons/Icon-maskable-512.png": "3403721192bb21bc5b40c7c2e1309a7d",
"icons/Icon-512.png": "3403721192bb21bc5b40c7c2e1309a7d",
"manifest.json": "4b00e8b2ef4c0e8167b470ab1cb3d8a3",
".git/config": "94251f41ebaa01d4e77090bb93d35cd7",
".git/objects/95/a35a2f2c2e3d828b7489434b7afb483ac9b054": "aeccc332fadf4129bba202cab4f96495",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3e/ab480dc15677cd0744a83d3bee8ec951a1c464": "cf48b7caae2db196fa6744978547dede",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/51/da74b95d73ce25055212c3f39a74227e4c51fe": "7271593ec2dc962f12da2cdc7a566ea3",
".git/objects/3d/ae308b3991e375a8073c5c0d4f92e03af468d7": "ef1adc79a957720b8805478cdb457ad5",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/93/78357599d51c2313c5681528c7c5ad45cdbd8b": "453453d2a2c99b8c155d121b387dbca2",
".git/objects/02/92722ded176d23345194ff0a2e5a56a0d4c8c6": "f3c0ef579ad77da31218cfc40f198d43",
".git/objects/b5/ca2465b83256adecede724a4faa67961494371": "39797c3dab5f3ceefe56c947a2fe1761",
".git/objects/ad/1185c24d473519b2a4068ee98471c686f7e32d": "f591aa19d5254b0e4cec8d1cd77f1239",
".git/objects/bb/5469ea475d330bb176535e91694a70ac4817b7": "12329f72bfd6886df81c46318c1f80b9",
".git/objects/bb/88b1b3842fae1a4a208e22c942542ee97f38a1": "ec8f35f50013e11d1b803711ab4687c4",
".git/objects/d0/24df7dacf1f1593ab939614408afacb17c0e12": "6a3a4f88d19c3810fcf9e863b78aeaa2",
".git/objects/d8/239a0fc0e5fab6007e19e7021b1a119c14be38": "1ac68b8d26ed98f43519a320b68b6036",
".git/objects/d8/89e50d338042aeb1f2da4e1ec609234f167c84": "98a6ba1be286c82850731ae31367c391",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fd/3981ecbef0282cb7a588a51c9e1e9334776bf3": "b08fdc349a4148f29c1a0ea5e8b5a732",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/ba1108a1ca61fd390e00c1a8611c7ebaa09901": "6eb52bf779ac8c41694fc4f148531f69",
".git/objects/4b/48e5b132e4be1eee87158930ff035062f2f3d1": "ac23161baf20cbe9522f87dd6f628dd9",
".git/objects/7d/c5f8b1761ebb9df254812384672349779651bd": "f23c6a3c3e9228bebd98e6bfef95d43e",
".git/objects/45/0323d7b939e4e7342f0459d77af7496d600872": "15bb6f03975665538a146c17a5856cd0",
".git/objects/1a/0090dfc258ef9e7e7331883d55a6008f6a8086": "e2a577429da9107a14d881885c796187",
".git/objects/1a/0a5867385a5e9c387e9bdf1cc1466e2e4fe812": "e8a2b6fcc60695018f0cf135a98b5524",
".git/objects/7b/b5776141067fb5ea35eb931f92b43adae34eb4": "d40af48eaa699b260e7239f2d888ac4e",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/75/c2ad91c78cb74c18fed511982abeaf70e1c6b9": "c1b81119d8d9e1bf73cd3f3f136d4e06",
".git/objects/86/26c061e10ba215365d57dc5f97b2213834a933": "cea4db68d1336004aad7df954992d7ab",
".git/objects/2a/aafa5eaeaed7aa208e0d4bcf9e803e6c8a2381": "7b2dcfc614ec6452f57fb67cd2f09c45",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/88/4c7868e3cc40fdcb72b105bd8a54e820d6a160": "1854fbbc98a208dea512890046ad3779",
".git/objects/9f/76e41048968296dc0f8f37961c1d7407a7c5be": "41f6ebd4012c362aeb73fbb73df276e3",
".git/objects/6b/73ba92859f16a3318ce1d106c08dfeb580352e": "da74da987a59ad46de0a0d5b525d54a1",
".git/objects/6b/030829307b003a65a4b7c053d6745c844a3f27": "bdb7681c326dcc712e7d8b26a94c81bb",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/36/eaffe7579f558f68a723a235c8027ccff7db41": "cfc7c36071b44ca1bb68a923a32d4e0a",
".git/objects/96/f61cf9e8f3f0bb52c47c9125ce6b3daf54e023": "20f7718be930b9c6a49b78729e6ab6c0",
".git/objects/54/e641f9e02159f96cff0cb3c58ae3e901ebfad0": "291d67b0c1edf3736857f875e4a5140e",
".git/objects/39/7d9840daa8ee8b9337317aaa04054635e4674d": "aacb3f547553400b7b13e05544f7ca87",
".git/objects/55/e964e223126a88ca232623f2ed30900d9c1e5e": "c3dec36334e8b04bfe81fed9106edae0",
".git/objects/0f/bbe018ad798af3b44cc586b2f0a72a44214113": "0417899ff6015eb6b3c08ae94640fccb",
".git/objects/64/59bbe435d00d69de6ab2b773d3b743586f6d04": "202c889b6353ca1175fce57f5c0cef76",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/5565450f5a8ebddf712f514be8cdca7e70536e": "a88396f8d49a630116ffe961322fed25",
".git/objects/b1/ef313f31fa8ddbc5e78eaadb081095c79d33d7": "289f6373879f55cb85135e726f04439e",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/a9/715342ba33612920eec944df0b1d9e0fd9141b": "ce0ad80b46f6e2aecaf0aa22acf81f9d",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f8/5809b9c3129d97308e8dd9b287dee3ad9e25ad": "e2b666a5fba74681ab55595ecd8b866c",
".git/objects/46/750ea314531462f621511f315f88e4ca712085": "a978364602a84aa02700f8467572f670",
".git/objects/79/522b127f4cab85ef17acb7439f41ae002dd523": "7d65ded49d5203058a3c65cc19de73c0",
".git/objects/79/4036a29d6ce8014f3fb9fdaeb64054d411993a": "1e98e4ea12a58708247da58a3749a546",
".git/objects/1b/c212f8b5c577d2a3f26b42884f672ff57cd9e7": "4bdbdb8cc1f9ef50b12a0cad4473d64a",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/4a/a321cb92dbe3068992ce6157d616d0bfb7f0de": "18a1edcc84fb45882e05ab6012c0ab97",
".git/objects/23/c3243abe54ad964f0d05d5138b369965aaee38": "e27fafca983ba8f311ba4040af72d550",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/15/ac6ce609c7a6cb369ab8d8f0c656d91c94b965": "03ddc3be3cb8e29e66869f7cb257fa8b",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
".git/objects/2b/452ed4dff58936a3f8a5b17b0aae767fc1a51f": "61ad8fb1936919d801677937ce31e744",
".git/objects/47/01a2a80e69998f5b568598e23ee03e4dd49346": "7b488d145ab8fc8a1fd774d8ed98ce4d",
".git/objects/8b/2cba58814f6700a25e450761c60b9fb6160992": "3a92cc1d6f030a4fdc87610bf38cd11f",
".git/objects/14/264a7556742241ac90d09ced198ef857460040": "4e295ccb47c48d5f2e7e57f9466e124e",
".git/objects/8e/fc3cb863d76da3893ec959a8234c6712a6e7c6": "cf8307203f2f18713e7810ee82dac605",
".git/objects/22/0120b8927c49853842555eb8f020abb2c0d293": "eb4dc3473e347f8f771a0ce882e16eca",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d88cd46a1a763163ebc620c54f41c5d9",
".git/logs/refs/heads/master": "d88cd46a1a763163ebc620c54f41c5d9",
".git/logs/refs/remotes/origin/HEAD": "95068af99d38308d868ffa5ff4a1a91a",
".git/logs/refs/remotes/origin/master": "ef95ee297c32b25cc52d0b85d04d2c5f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "fb43102e005a03fa6939b699a68368db",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "fb43102e005a03fa6939b699a68368db",
".git/index": "013a13d3e2129ef42ef9db3f84d1ebec",
".git/COMMIT_EDITMSG": "87c0a0816ee34adc6ce9793e5a5d96ed",
".git/FETCH_HEAD": "fa878c89e7cd34930b114dcbebca0d0e",
"assets/AssetManifest.json": "30dcc0e04a7942bbbb253ed78d86ba36",
"assets/NOTICES": "53b4a28705f355f1e2304a5ec602f95d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "893a81d7665ca870110e7a8a083a0874",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2e3dc24ddcbd67d0d93b88dc6883a453",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4053c55f2effc9a1a6bd2a3a9298a96f",
"assets/fonts/MaterialIcons-Regular.otf": "e44ad8decf5213bd5bca5db1f12e8642",
"assets/assets/images/joo.png": "3403721192bb21bc5b40c7c2e1309a7d",
"assets/assets/images/g_play.png": "8412cc2c8fb288c9c3cb9063e2e2aa11",
"assets/assets/images/apple_store.png": "f61db4d9cbc3e2e2eba1e7c17081c2f8",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
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
