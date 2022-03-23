const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"bc6b7ef0b24087af328aa117455d72f4","url":"./404.html"},{"revision":"153fb76bb64cb914a87944f17ec4fbb0","url":"./about/experience/index.html"},{"revision":"17cec34309d040b8f43a6643ee6217fb","url":"./about/index.html"},{"revision":"bc2b1af46f677ca49a2be8877c1e37d3","url":"./about/updates/index.html"},{"revision":"536077ca92604fd64e8e2ea2bef4c473","url":"./archives/2020/08/index.html"},{"revision":"d865c984b8a05e5672698937373a0062","url":"./archives/2020/11/index.html"},{"revision":"05fa7790b04e7a0bb4d8043ebfd9034b","url":"./archives/2020/index.html"},{"revision":"53b234ef371b275b2fa3ec1f28fee7f3","url":"./archives/2021/01/index.html"},{"revision":"884107b8f9218a3a057163a39219c642","url":"./archives/2021/04/index.html"},{"revision":"2653bed3999e98ea448495904f959f26","url":"./archives/2021/05/index.html"},{"revision":"46a8421234180f9892e0d826a9570bd6","url":"./archives/2021/06/index.html"},{"revision":"82a418f81622dc86806de60dbdad7a9d","url":"./archives/2021/07/index.html"},{"revision":"96a2d371d98ecd5fe44f87e1c038c16c","url":"./archives/2021/10/index.html"},{"revision":"dd49fd868c3d38e8a1992edf9335ec16","url":"./archives/2021/11/index.html"},{"revision":"c9e7dcc94be2ec4a6f34188a2da039a7","url":"./archives/2021/index.html"},{"revision":"6cbf9352ae6a402976e1d971dc780e5b","url":"./archives/2021/page/2/index.html"},{"revision":"3653d4d64700869012634b9a750d78e7","url":"./archives/index.html"},{"revision":"4d4f0dcf510a00420bf48b5f838d80a7","url":"./archives/page/2/index.html"},{"revision":"0edbc1e6566e7749c38f3fcef73e77c2","url":"./atom.xml"},{"revision":"7c01f64a801b7d20b8d93f067732096e","url":"./bing.json"},{"revision":"1e2c8eaef69e6a82855684871ce429b3","url":"./categories/index.html"},{"revision":"ccd7931622028a523831d30c2819f155","url":"./categories/博客/index.html"},{"revision":"720409dc1b664794a5edaf9d6e44d4f9","url":"./categories/小说/index.html"},{"revision":"1a45e93a634a96a124874f03a34ab883","url":"./categories/教程/index.html"},{"revision":"ff42254c02b9068cbede71bac2472b5f","url":"./categories/教程/Minecraft/index.html"},{"revision":"2840cdb000666b8f7c8328276bb02b67","url":"./categories/教程/系统/index.html"},{"revision":"36d999af33a0d80ccf6a8fa34a21d99f","url":"./categories/教程/系统/Manjaro/index.html"},{"revision":"fed5948f6611200e51fa9f59877da103","url":"./categories/数学/index.html"},{"revision":"fd5910457c88001ff9929bfedd3ddd28","url":"./categories/日记/index.html"},{"revision":"5dc2dff0c521977b4a4b3f29e1ff6f17","url":"./categories/日记/校园/index.html"},{"revision":"198abcf501daa17177b5cd0a20eeee52","url":"./categories/测试/index.html"},{"revision":"fd567b664600461658d5f15664cadedd","url":"./categories/游戏/index.html"},{"revision":"3525b0df817577daf7d268334926ceda","url":"./categories/游戏/Minecraft/index.html"},{"revision":"79134285e91ff9bf82f072ec73e7f193","url":"./categories/番剧/index.html"},{"revision":"6b9148ad06ff7d6e2a7aad767def324e","url":"./categories/视频/index.html"},{"revision":"bd0b60f7e9c718f1bca1d62e5e1af6e6","url":"./categories/编程/index.html"},{"revision":"99b3e851899ac004b725ea7a207e8cf9","url":"./categories/编程/Java/index.html"},{"revision":"99678e1b336b320916d4481837972141","url":"./categories/评测/index.html"},{"revision":"541d0c90fc68008a61ed803bdd79be23","url":"./collectingBox/bilibili/index.html"},{"revision":"cb77e35b55a52589e1404d1b7a4071d6","url":"./collectingBox/diaries/200901/index.html"},{"revision":"82e5643f391111f51e4cb73a61364e55","url":"./collectingBox/diaries/210308/index.html"},{"revision":"18697c371b226a6dbc8f31c479211a0f","url":"./collectingBox/diaries/210604/index.html"},{"revision":"1a337a138801ce016ae6d5d65145651e","url":"./collectingBox/diaries/210804/index.html"},{"revision":"a82d081a6bb3281b5d5ca4c0a4933b5a","url":"./collectingBox/diaries/210919/index.html"},{"revision":"6fbe3d26a12ab4aee6dd9898f68aaed5","url":"./collectingBox/diaries/211029/index.html"},{"revision":"f5ba0d5d81cc997bee16bdfae603f914","url":"./collectingBox/diaries/index.html"},{"revision":"ab0b352286b1b16e345ffa170487a51b","url":"./collectingBox/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./css/APlayer.min.css"},{"revision":"e6c8fc063df80cccd45ae921d0479c7b","url":"./css/custom.css"},{"revision":"3502100a933b368b49367eba86cd94b4","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"e7b1968c467be588a3e2b71c48a13277","url":"./design/avatar/index.html"},{"revision":"3403a5bc29f05504511e3f1f3faa896b","url":"./design/avatarBackground/index.html"},{"revision":"c4557eaae4bc343cf9cc925021ff2385","url":"./design/index.html"},{"revision":"3bb6a6ae651a69abd9bf8e554d39a614","url":"./img/pwaicons/browserconfig.xml"},{"revision":"26a775e96cdeb223586b993a8ca18211","url":"./img/pwaicons/README.html"},{"revision":"b27d9eb2ed150bb376c526a567c8d285","url":"./index.html"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./js/APlayer.min.js"},{"revision":"e3cb181486e07987661ee2d2afa8457a","url":"./js/main.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./js/Meting.min.js"},{"revision":"070800c6c73a4f86541bd394a7aa5ec4","url":"./js/plf.js"},{"revision":"6e26d60a32e953e23fd1b220d60b9b01","url":"./js/search/algolia.js"},{"revision":"f02b713e766f4ff54b75ff5a01b95a65","url":"./js/search/local-search.js"},{"revision":"4b84207e490168db8faf5b25d98027e9","url":"./js/tw_cn.js"},{"revision":"99e08ac0de591eba9d189d638d17f3d7","url":"./js/utils.js"},{"revision":"d0ab65409ea49eaf62c98ce6ee23f99e","url":"./link/index.html"},{"revision":"ffc1aa7fe9eab8e83727e5127a9ae030","url":"./music/index.html"},{"revision":"0767e9d2e8127b430f6501c7c84b52f8","url":"./page/2/index.html"},{"revision":"3c3ed834a89e4ba0d8d3b9eb8a239820","url":"./photo/202009/index.html"},{"revision":"ce269ea35e7a74361f55806170e034dc","url":"./photo/202012/index.html"},{"revision":"bbea81e4d4d1aef115e8d601b871eec5","url":"./photo/202103/index.html"},{"revision":"d3cfb0697fe58754834184c024a51197","url":"./photo/202106/index.html"},{"revision":"b0d7c114f655e8f129425eeeb0344cdb","url":"./photo/202109/index.html"},{"revision":"563d93562725c754ec7f34cb5c8fe2bf","url":"./photo/index.html"},{"revision":"ef953ec9f987fc3c1b615579df45f5ce","url":"./posts/0000/index.html"},{"revision":"ea46328454f52f6e7ea3085e0e12f286","url":"./posts/0002/index.html"},{"revision":"030073d08cb3150d8e4d5584af480d6e","url":"./posts/0003/index.html"},{"revision":"4a3501e3a30bc65c20f8cedf746933e7","url":"./posts/0005/index.html"},{"revision":"448c7df741b3250bc15ceeb530df59b2","url":"./posts/0006/index.html"},{"revision":"0d18d9758964b526a744cc318bd7beda","url":"./posts/0007/index.html"},{"revision":"7cbef47915bb2f3d10879bd5f51019a7","url":"./posts/0008/index.html"},{"revision":"8c25224a3489a21832e2fc126272228f","url":"./posts/0010/index.html"},{"revision":"7f4f22d894544aa382c23551616a65e9","url":"./posts/0011/index.html"},{"revision":"8b15ea70b8abc8a188fe35601e2de21e","url":"./posts/0012/index.html"},{"revision":"233c781ab40b2e78a2053c43b1da1201","url":"./posts/0016/index.html"},{"revision":"4a0a7b308a3a29ac4d942d132a50dce7","url":"./posts/0017/index.html"},{"revision":"190930a049f66f7495ea8945d0e562ba","url":"./posts/0018/index.html"},{"revision":"9aae4679d07dedce1aa7d6be4b60980e","url":"./posts/0019/index.html"},{"revision":"7ef932e05e11fd8c1a222b3ac30977d7","url":"./posts/0021/index.html"},{"revision":"86b7076ae761ef993eb5e6d2e0b8141a","url":"./posts/hello-world/index.html"},{"revision":"121f39beeb3a948826c5dec41f154c7c","url":"./recommend/index.html"},{"revision":"12c3404199a9b060c10adf5ab06a4cc2","url":"./search.xml"},{"revision":"650ccd84c402d8e7387ec0a4f77c8282","url":"./sitemap.xml"},{"revision":"5c928c315fdeba7ac6eade5b071dc471","url":"./tags/AtsiusWorld/index.html"},{"revision":"9fe9091bfefa0a51644c16e3c55afe6b","url":"./tags/ColorOS/index.html"},{"revision":"e234259d43b0a6957e68f687060bc645","url":"./tags/index.html"},{"revision":"6d6cdda5e69ce66b21d73944fd13e771","url":"./tags/Java/index.html"},{"revision":"73689816907d71a4ba3ad19657ad1c4a","url":"./tags/Manjaro/index.html"},{"revision":"67396888241bde5b72dedd8af1250ebc","url":"./tags/Minecraft/index.html"},{"revision":"7b34f8bec1acd4c3295978be17e35f0c","url":"./tags/Windows/index.html"},{"revision":"ef3b89c510c77c34135bd30c5147695a","url":"./tags/博客/index.html"},{"revision":"906ec50c2ca860f0a713a6d368988488","url":"./tags/小说/index.html"},{"revision":"87ae8d747d592b43e28417253327ebcc","url":"./tags/手机/index.html"},{"revision":"f9368617d5fe64d209b7771248b60790","url":"./tags/教程/index.html"},{"revision":"4351af79c3a76b3b7dd232757f646cf8","url":"./tags/数学/index.html"},{"revision":"36bca9725e41491532d4db53b7864787","url":"./tags/日记/index.html"},{"revision":"60f9b0acaf7cceb30e01e5c302410365","url":"./tags/校园/index.html"},{"revision":"4cf45fa21fd8f6c5b36d54e767a49afb","url":"./tags/流水账/index.html"},{"revision":"97fac7d201d640daf73c234d5ed4b3fe","url":"./tags/测试/index.html"},{"revision":"fb5c9dbb86f3f9a5c95366ea1fd57596","url":"./tags/游戏/index.html"},{"revision":"d8fd780c8272a744ac8d31fc26cd6589","url":"./tags/生活/index.html"},{"revision":"3abc40d027775ebd65a4696faedf4dbc","url":"./tags/番剧推荐/index.html"},{"revision":"b026fff247966b981fa25e63a1dba6df","url":"./tags/编程/index.html"},{"revision":"370297167baa33d8e08bc49be46443be","url":"./tags/评测/index.html"},{"revision":"5f26e2a2a3bdd2969190084ff96a3d86","url":"./WebGame/index.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();
// 可选内容 start 都选可能造成缓存过多 酌情保留。
// 图片资源
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 字体文件
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 谷歌字体
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// jsdelivr的CDN资源
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);
// 可选内容 end 都选可能造成缓存过多 酌情保留。
workbox.googleAnalytics.initialize();