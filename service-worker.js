if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"a7852274dd064869b7f39c190318e8f4"},{url:"article/index.html",revision:"2f8f8b1447b2ad3c1d5df53529ecd804"},{url:"assets/css/0.styles.4ed417ae.css",revision:"526091746706bf5fdfe24254be154a8c"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"assets/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"assets/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"assets/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.c22b0947.js",revision:"9d8239581265b644fc2ed8d599be6b27"},{url:"assets/js/layout-Blog.bb1949fe.js",revision:"1ed0dacbfeb008cbf375f8b87caa1f10"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.63159f00.js",revision:"7107d99a90a93a9ece50e7d994c057b2"},{url:"assets/js/layout-Layout.52ec6446.js",revision:"cb79112149e6ecc0996d0bc2f9b0c9fe"},{url:"assets/js/layout-NotFound.a91efb56.js",revision:"1f51d931ff5a24211b8f74c153539f12"},{url:"assets/js/page-@mr-hopelast-update--1104de32.d21b48ed.js",revision:"417811a61aa92e8101b2fd2375260607"},{url:"assets/js/page-@mr-hopelast-update--ebefb430.0d2d5019.js",revision:"d2140d2ebdb6f33c6150a217c879a59f"},{url:"assets/js/page-@mr-hopepwa--051692f2.a0d265ba.js",revision:"57856da909822e662f62a7460bb7ac32"},{url:"assets/js/page-@mr-hopereading-time--36317372.3ac4b523.js",revision:"976b73da07d2a8121624e73ea9af7c77"},{url:"assets/js/page-@mr-hopereading-time--36b7a178.af583a6b.js",revision:"67dd4f035e2b823eb9ccfa510a885da5"},{url:"assets/js/page-@mr-hopeseo--44db09a4.83b190cb.js",revision:"a869d6a39b65ddd1400b8b6cc37a0bca"},{url:"assets/js/page-@mr-hopeseo--4c19db12.2b4b5ae2.js",revision:"ec567021e191286c15bef41dcbcfe021"},{url:"assets/js/page-@mr-hopesitemap--4bd3dd04.580c3cbf.js",revision:"bb2c5ce3778b642de08240633741c7e5"},{url:"assets/js/page-@mr-hopesitemap--7a219d12.decb527c.js",revision:"77e3e7f3e5b34596a1aaa6b3c8ac54ba"},{url:"assets/js/page-@vuepressplugin-pwa--1c9738b4.ecfda3ba.js",revision:"591a62d479d969c066eb89f95edb9306"},{url:"assets/js/page-AboutVuepress--5d12de02.b349c78c.js",revision:"72562750d0358b07fda5cd564a1f50ef"},{url:"assets/js/page-Basic--29b12659.718338d7.js",revision:"3bb9bb2008118ea4492ca9648b69ce86"},{url:"assets/js/page-Bloghomepage--d988383c.b84686e2.js",revision:"cb3fba26b8f50e45db188a7373260822"},{url:"assets/js/page-Blogrelated--7c1e4552.e0ef683f.js",revision:"2925ec1b3b3ec5aaab484ac1200af56d"},{url:"assets/js/page-CommentFunction--6884a164.1073c64e.js",revision:"6cfbc9c2739dff177ce90df45d2fbd32"},{url:"assets/js/page-Commonproblems--87e54bce.78c2b80f.js",revision:"51d9a8be0d351d1f0b0d144cb990668e"},{url:"assets/js/page-ConfigDocs--2082c612.64741f08.js",revision:"9917deb728dc969e445e70e7e7d1381a"},{url:"assets/js/page-Customalignment--df6a559c.a0d06373.js",revision:"3b7241c69da62a750f413dc25efb4adc"},{url:"assets/js/page-DarkmodeandThemecolor--57fce360.4310909f.js",revision:"43fcfacf8d470f0881e24bbb75334c8f"},{url:"assets/js/page-Demos--cac80116.85849ff5.js",revision:"8a2e3bca548bd4dff310a520812df72c"},{url:"assets/js/page-EmojiList--b946d226.8ef1745e.js",revision:"884dc372dfba110c4da5ddcafb1a57f5"},{url:"assets/js/page-Emoji列表--41bb29b9.21759cc0.js",revision:"8c12a9a91cc2003531c7b04bd4dec499"},{url:"assets/js/page-Encryptionfunction--21c8c5d8.09a316ca.js",revision:"698e1715da1ab6bc73cc369b0ff12cb0"},{url:"assets/js/page-FileStructure--5dff5230.7d7f7c77.js",revision:"3185158d420a993b4d1cc18c53bcdb38"},{url:"assets/js/page-Flowchart--6426e412.77f3afcb.js",revision:"8b03a570363c49647fbaa6f9b6541c7b"},{url:"assets/js/page-Footnote--3a89d162.a7418319.js",revision:"a6ef63f99ee1cf478dc0e5e0277a6b46"},{url:"assets/js/page-HomePage--37b81ca8.cbe63542.js",revision:"364e2200108860a3ad561d36ea6178e5"},{url:"assets/js/page-InstallUsage--5dafe67a.de9323d5.js",revision:"e40bc0916e7541d63c070b16c76c1524"},{url:"assets/js/page-Introduction--0b048d19.6a43f8ea.js",revision:"d3122820d922d9c34a7155d094821dfd"},{url:"assets/js/page-Layout--655201fe.cf4036a0.js",revision:"b6967f4f7662e5641e42ad76d47af35b"},{url:"assets/js/page-MarkdownDEMO--ab10bb74.f79bac18.js",revision:"518d056559076b23dd0cfc402314f32b"},{url:"assets/js/page-MarkdownEnhance--ed59a9f6.9b33fbf9.js",revision:"9d604da318968f2b50f83b49bfe41916"},{url:"assets/js/page-MarkdownIntroduction--25c54f9b.45ad5418.js",revision:"3b0592b21dab4f5f74786b914d9e42cb"},{url:"assets/js/page-Markdown介绍--270989ce.9a6d1265.js",revision:"f4d12a74ed9d53cf6b59d2b5734424af"},{url:"assets/js/page-Markdown增强--ad9dba8e.c9b08b80.js",revision:"1ca991859a5e948c0db99a9c2c7f873d"},{url:"assets/js/page-Markdown示例--c3e1bfdc.446eff11.js",revision:"03a1c38ea6a1e18678e5b3412514909f"},{url:"assets/js/page-Markup--4f1121f0.12317c15.js",revision:"a008b8c9869a8d2f9fcea4a2d402cdf3"},{url:"assets/js/page-Nature--5c9d3e6c.800140a9.js",revision:"b6fe43d90b5c1e48b1eae86630bd83b7"},{url:"assets/js/page-NavBar--262632f4.17d8fbd1.js",revision:"9c681b7bbb0b3b7c124bec1ac196e9c2"},{url:"assets/js/page-NewComponent--2edd3b68.e6a35213.js",revision:"8e00dbb21126453e2ee4104a102bc106"},{url:"assets/js/page-Newfeature--3e66b879.aabb3b39.js",revision:"12a6fc483abf5b00545aa5f7ebe3408f"},{url:"assets/js/page-Object--6d31953c.7b24debc.js",revision:"e38de77c62dcc991133112f662401aa3"},{url:"assets/js/page-Page--26692570.65edbd16.js",revision:"4d42a5ed9fc925d57dee2bbe9ce7fb83"},{url:"assets/js/page-PageConfiguration--493c56dc.22b33dd8.js",revision:"049cf6f8d85e95ff4289c9369059707a"},{url:"assets/js/page-Pageinformation--6abfca0a.1afd7575.js",revision:"e4ec351c712dab79ff9084d4d28ab6a1"},{url:"assets/js/page-People--f94822c8.8a2ad4f2.js",revision:"e72883c57179445d6705ef632514dbe4"},{url:"assets/js/page-photo-swipe--34ea45d2.b88c7c77.js",revision:"d6d60f55d88a452c7303b73f7915390f"},{url:"assets/js/page-photo-swipe--7be1a0aa.88a200b2.js",revision:"19c6a1d037c805a433ad96d0ab2481d2"},{url:"assets/js/page-Place--32291f32.65be20eb.js",revision:"22344cb4791b872eb8734ddaddd62fbd"},{url:"assets/js/page-PluginDescription--b08a3ace.e7272347.js",revision:"80017409574e8698a778743fae04e83d"},{url:"assets/js/page-Plugins--1a5ef242.f9f4253c.js",revision:"79a80d6cd8c341323b0d90bc13beeaec"},{url:"assets/js/page-SEOandSitemap--13a48dac.b669b606.js",revision:"4cdbb7bb13eed71f0a89e6d8ae3db195"},{url:"assets/js/page-SEO和Sitemap--5934b3b2.af2cd9ca.js",revision:"de87adea81f4a00978f9efd4f45f3ede"},{url:"assets/js/page-Sidebar--12800fd2.e66307bb.js",revision:"cee729f217402a18cdb92db2317d79d5"},{url:"assets/js/page-stylusconfiguration--189ec968.422161c9.js",revision:"8b76eea62b669e90bc5d99d0a37c232a"},{url:"assets/js/page-stylus配置--6796cdf2.f000a1d8.js",revision:"dd24858518e2a7218ea517dc3f88b731"},{url:"assets/js/page-SuperscriptandSubscript--d7f5f81c.1bb21f0d.js",revision:"14e8bec57e0ecb902b6a3b461a412b25"},{url:"assets/js/page-Symbol--0b92fe0a.95e9c322.js",revision:"01d8eca8c991627a7f36b55ceed9bebc"},{url:"assets/js/page-TexSupport--f897e69c.20b9c3ac.js",revision:"5a1500f1eeb27c8d2e71bf23b98ba8a7"},{url:"assets/js/page-Tex语法支持--64cb5e50.1df5df34.js",revision:"58c5c1031a9e5aa72336db259078be00"},{url:"assets/js/page-ThemeConfig--085c2edc.eda5ed4a.js",revision:"6400a0c4c0345178959cbd9776850f9c"},{url:"assets/js/page-ThemeConfig--4715c95c.857e1f7b.js",revision:"8e555efafa76b865849a78c8df642c20"},{url:"assets/js/page-TSsupport--165630b2.949a7fbd.js",revision:"51be46b73b2e82953fd267dab4c2bad8"},{url:"assets/js/page-TS支持--09728ac8.a700dab0.js",revision:"ca7ae05d932a235be4bb9983c9a0ec78"},{url:"assets/js/page-Vuepress--4a71114e.0e065831.js",revision:"935e5f9e5e99d4c3b91955686cf6c890"},{url:"assets/js/page-vuepress-plugin-container--31498112.c99a14a1.js",revision:"96886fbfc37625c3e183fad1fd19d6fa"},{url:"assets/js/page-vuepress-plugin-container--f45c2334.b9ef42db.js",revision:"8402b4bb9c479c0684bb101c758355ee"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.1318fbc4.js",revision:"b43297d81933058730ae97aa24ff13f2"},{url:"assets/js/page-vuepress-plugin-copyright--dac5744c.5f4f4383.js",revision:"bb4f8dd83cd56e1413720a29df54a678"},{url:"assets/js/page-vuepress-theme-hope--776d8369.e36951e2.js",revision:"bdca204198298a29c5491a8d2aa44bf5"},{url:"assets/js/page-vuepress-theme-hope--7f862af9.ee567c88.js",revision:"b81f6012c9e8e733b6678f1c5d5ad456"},{url:"assets/js/page-VuepressCases--27d200c8.13056309.js",revision:"a01f0c70628e4adc660c3687fc91fd4c"},{url:"assets/js/page-Vuepresscommands--7e89705c.c28c85cc.js",revision:"9b6903e4c9f20e043e0d21adc807d0e5"},{url:"assets/js/page-Vuepress案例--082972f2.ee264ae6.js",revision:"4b93199be0ba593c31b5ef26c48ff5d4"},{url:"assets/js/page-上下角标--895c91b8.5900bacc.js",revision:"2e3f64372eeb11c8caa310dc3fec2091"},{url:"assets/js/page-主题配置--1120a0ce.0bba8d58.js",revision:"45c35098db1b3a51d14d5b2ba45bf1b1"},{url:"assets/js/page-主题配置--1a859dfc.f4ee22f2.js",revision:"9cc5a93f4c79aae554b937946f8b9a92"},{url:"assets/js/page-人物--2182769c.9c91f239.js",revision:"5f63bbb630e065dc056644b570682f6d"},{url:"assets/js/page-介绍--d4910962.b435ca6e.js",revision:"b7d0013b73dad6f00539237f9c38905d"},{url:"assets/js/page-侧边栏--2fa1ea2c.e0519e7e.js",revision:"f6d3b2373191465ca2c1f48d1990f82f"},{url:"assets/js/page-加密功能--181bdc9c.8bc06ae5.js",revision:"8896f0c4a3a9810cbc8ad743064080bc"},{url:"assets/js/page-博客相关--17c260a2.c2460057.js",revision:"b7bb5e6515194f99daef844c45981eb7"},{url:"assets/js/page-博客首页--64265752.563a0a30.js",revision:"a44882dd20bc0a2af9909b77850d1de7"},{url:"assets/js/page-地点--951cdc00.b603ffbe.js",revision:"3562d8f3a4ee68671c1dc51b89c85970"},{url:"assets/js/page-基础知识--770cb96b.72f37242.js",revision:"108fab11f0093c53961bb7673216d3a5"},{url:"assets/js/page-安装使用--0ab466d2.cde8d0d0.js",revision:"23c385cd46ecd5ffb6fdd8a21efb0c10"},{url:"assets/js/page-对象--16031ab2.fa7b9880.js",revision:"47a175a9f89982bf1b766fe7b20f081b"},{url:"assets/js/page-导航栏--c7bf87dc.bb5ce49d.js",revision:"d96f04d7c9ff359cb903effcc32d2ac1"},{url:"assets/js/page-布局--12bd4f0e.b4c30f97.js",revision:"0d5c7f6133872df9017308f6c59c7213"},{url:"assets/js/page-常见问题--2b571e9b.a81abf36.js",revision:"a077e2c2365d69f25c9c7228d564a1b0"},{url:"assets/js/page-插件--adbf415c.299ffa1a.js",revision:"911c3ba2e4720edc332baebe433f73c9"},{url:"assets/js/page-插件说明--137c6c07.d4f84997.js",revision:"a0285e1f5b5c3df26b672cb9316e4379"},{url:"assets/js/page-文件结构介绍--665a4f1c.7edddeca.js",revision:"16e9a75c51f12035ecc9058957f8e964"},{url:"assets/js/page-新增特性--5136c541.52be345d.js",revision:"8ac78df7eb0299d80b37389014e7a4d1"},{url:"assets/js/page-新增组件--1d138c72.23cca2cb.js",revision:"b40c1e3db2a7ebe2090cfc0b52f84e16"},{url:"assets/js/page-标记--6b1f341c.67e29243.js",revision:"1856efe12f9cd48e80b60a796584785f"},{url:"assets/js/page-流程图支持--7ce6d974.f9ba519c.js",revision:"8eacf512753dad33f7b3ccc67dea4c5d"},{url:"assets/js/page-深色模式与主题色--e23e731c.f51b9d8d.js",revision:"4b8d20862dabb6b2139c4a58c7883efb"},{url:"assets/js/page-符号--a9259c5c.be088bdb.js",revision:"d07f5b724058069418937b68e3c38650"},{url:"assets/js/page-脚注--0c733e52.dcdf03b4.js",revision:"706c1d8879b93cf6e2b3fb432c8242a0"},{url:"assets/js/page-自定义对齐--4f21aa5c.20a33460.js",revision:"2dbd61aab8dde98b3aac86db4315f60d"},{url:"assets/js/page-自然--749fb09c.82683744.js",revision:"1ee1380880871c859f8eb5bb805f0ce1"},{url:"assets/js/page-评论功能--5bb6671c.32d8c23d.js",revision:"30a3280d727e7cebd17461f7ab2f2212"},{url:"assets/js/page-配置文档--35a0a7d9.479fbed8.js",revision:"10b6b017c2775fa9d46b300eba10b5db"},{url:"assets/js/page-页面--af17b59c.ce9efb3e.js",revision:"bf23c4ab1aada9f3c082d733092b58a8"},{url:"assets/js/page-页面信息--71efd5d2.1b13df8b.js",revision:"f343acb9994420f34cc1d5cf950c8503"},{url:"assets/js/page-页面配置--0aacc152.5f6ee738.js",revision:"47b8dc5f3ecba0e3efc37c2383a7f738"},{url:"assets/js/page-项目指令--9f3f316c.c2f56df8.js",revision:"30a3c3ad05d4a3b203f6fb4c19253258"},{url:"assets/js/page-项目案例--f328658e.6f93aeae.js",revision:"2c1ec44b0b42de499871f27bb88666bc"},{url:"assets/js/page-首页--5834599c.256cf313.js",revision:"108a0c3f6f8f9864ae346c27a0d9058b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.b604d1a0.js",revision:"6d12e82a69af36b986fa59a2cd9999cb"},{url:"assets/js/vendors~layout-Layout.83b574c4.js",revision:"e9e9e5780d6b2c821dc01eb06dbace72"},{url:"basic/index.html",revision:"4c5e19e1ae8b643d273d128b9a5b1a5f"},{url:"basic/markdown/demo/index.html",revision:"15e38156db84974a85b71ef5448429bf"},{url:"basic/markdown/emoji/index.html",revision:"a759a46c733e3adb9e19802bd085fb98"},{url:"basic/markdown/emoji/nature/index.html",revision:"b234e0e75f088dff8f7a6c67d0d7429b"},{url:"basic/markdown/emoji/object/index.html",revision:"4acc9180027b6fbb62fcd6a0bdc817c7"},{url:"basic/markdown/emoji/people/index.html",revision:"1ab176d375f5257653fc00f638b9d89b"},{url:"basic/markdown/emoji/place/index.html",revision:"c9e56f1e99c49e3e29edce52977df68b"},{url:"basic/markdown/emoji/symbol/index.html",revision:"52474e9f3ec6300c809f3a0edd1afd55"},{url:"basic/markdown/index.html",revision:"fce2f0c5b247ef6c49769f39d6a47483"},{url:"basic/vuepress/case/index.html",revision:"6e334af8bad0b60762324407b0dfa3e2"},{url:"basic/vuepress/command/index.html",revision:"66a2d799e2654acb8f73f70ad10e13c3"},{url:"basic/vuepress/file/index.html",revision:"eea7adbdcec249ccee73dee6dc228b87"},{url:"basic/vuepress/index.html",revision:"f3dc1db3d781c8af6017184752694956"},{url:"basic/vuepress/plugin/index.html",revision:"6d105a13c6ff88dd3a53acd94be64a4a"},{url:"basic/vuepress/theme/index.html",revision:"67c4499a287d9be7ca33677c30f1cdfc"},{url:"category/config/index.html",revision:"9d54c4a3f8ffe963757193f52e77a713"},{url:"category/config/page/2/index.html",revision:"3bc4c7666ad5d7aa044a43db05be04bc"},{url:"category/config/page/3/index.html",revision:"ffad6705ab3287d53d2bcccce6ea6390"},{url:"category/FAQ/index.html",revision:"d9c2d311cfc83cc1c70cdbf1f4fd679a"},{url:"category/feature/index.html",revision:"4efa07ab786cafd5a67fc4c16febc73e"},{url:"category/feature/page/2/index.html",revision:"b289c4af1feb346f8fd1f34d01aaac97"},{url:"category/index.html",revision:"fa09d8cf5e8130f368f38187c855a66e"},{url:"category/instruction/index.html",revision:"455f3dc9c0befa9afebd52380896e8c6"},{url:"category/layout/index.html",revision:"17d9d10b3f634b71506f2140d8097ab8"},{url:"category/layout/page/2/index.html",revision:"f21d6836d6b3b4950ed59d9d135f5639"},{url:"category/markdown/index.html",revision:"dd4efe5755f629162c99b6c7ce2904db"},{url:"config/index.html",revision:"67709ca1315c2d14bb466eb1ac70e78e"},{url:"config/page/index.html",revision:"227a0c8147277892c5b95fee7cd04a56"},{url:"config/plugin/container/index.html",revision:"4e37d2a7f825f1d3297d9526bbccf860"},{url:"config/plugin/copyright/index.html",revision:"048450a839c5bf7344747b2aec7be442"},{url:"config/plugin/index.html",revision:"93d6390a5a9ad10e520ea40905c65315"},{url:"config/plugin/last-update/index.html",revision:"34f7dc7acc031d474f8843deb120762e"},{url:"config/plugin/photo-swipe/index.html",revision:"1494aba5068b6c6fe155c4af60c8d16b"},{url:"config/plugin/pwa/index.html",revision:"f553a573c815b56b79a85071a9da76fb"},{url:"config/plugin/reading-time/index.html",revision:"044964fc384f9634b6526911aba05ef8"},{url:"config/plugin/seo/index.html",revision:"146a104d18d826dce9b2c0115dc24ad7"},{url:"config/plugin/sitemap/index.html",revision:"8084a94e8b4268986b7255d9ab57a746"},{url:"config/stylus/index.html",revision:"1f1a553fc047dd4247e173d5ad3d4d3a"},{url:"config/themeConfig/index.html",revision:"07494e6ac7ec262a34cb2e65a9a7448f"},{url:"demo/index.html",revision:"3755ad8e4dac87356b0b0d588dbbc7ab"},{url:"en/basic/index.html",revision:"1d815909e3c0129ebeeb7c948f72128a"},{url:"en/basic/markdown/demo/index.html",revision:"748f814c6af1974d844b8cb2707217bf"},{url:"en/basic/markdown/emoji/index.html",revision:"88571bc69203833771f629f2c0d0e3e7"},{url:"en/basic/markdown/emoji/nature/index.html",revision:"80b9f1689847245e7381e4bbf6ed0553"},{url:"en/basic/markdown/emoji/object/index.html",revision:"cd6d185319ac0f9e6d96cf0b70d36f94"},{url:"en/basic/markdown/emoji/people/index.html",revision:"13ab19c15644649417eb0d3daf1b707d"},{url:"en/basic/markdown/emoji/place/index.html",revision:"6919db9720426db2e6501ed3e832cb50"},{url:"en/basic/markdown/emoji/symbol/index.html",revision:"8815d049c6e2730640a86dec158d1a94"},{url:"en/basic/markdown/index.html",revision:"aaac2d70b37545f74ef8fbec165cbfc6"},{url:"en/basic/vuepress/case/index.html",revision:"ef27effc6a83277112e5b2ae6f1d07f6"},{url:"en/basic/vuepress/command/index.html",revision:"c3b0cdb1b2eb7d0853ed5b4a9e31e490"},{url:"en/basic/vuepress/file/index.html",revision:"9422980b92f03e16daede556bafe07e3"},{url:"en/basic/vuepress/index.html",revision:"4bcd2519f14db68dffe5531aed5fabc3"},{url:"en/basic/vuepress/plugin/index.html",revision:"411e59487b3bbbaeef01ebf7b422b52b"},{url:"en/basic/vuepress/theme/index.html",revision:"c7b757d8ea4ba77ea9b69a774188a37f"},{url:"en/config/index.html",revision:"171feaa5ee24274848ce773af541cec1"},{url:"en/config/page/index.html",revision:"1dca140363513cd052122733615a94ad"},{url:"en/config/plugin/container/index.html",revision:"3fc36d78e485cc7e1f132c696c43693d"},{url:"en/config/plugin/copyright/index.html",revision:"2f9b6d50afcb7e0ca1f0f1d95b34a0cc"},{url:"en/config/plugin/index.html",revision:"72b6033463eab0e64e9af3c6c1065d03"},{url:"en/config/plugin/last-update/index.html",revision:"532f93d0e44b102213e51ab9293ff8d3"},{url:"en/config/plugin/photo-swipe/index.html",revision:"1a339efdac0199ed82f31923b8f66721"},{url:"en/config/plugin/pwa/index.html",revision:"a54c2496c0c0db88b69c3d875659b4bb"},{url:"en/config/plugin/reading-time/index.html",revision:"62f8e73e7ab1788691ebb72dc6d95aef"},{url:"en/config/plugin/seo/index.html",revision:"d156d2908ca8fc541d6cd4c36e08ab2d"},{url:"en/config/plugin/sitemap/index.html",revision:"75b0a06c6769ef8d60048d17f67438c6"},{url:"en/config/stylus/index.html",revision:"65120e00e58c511859a28ab6f5ec4342"},{url:"en/config/themeConfig/index.html",revision:"ae795ec73254441ab9e3c65c4faf05c1"},{url:"en/demo/index.html",revision:"e1e8a4072c0cd2daa2aa2d8dba80c5a3"},{url:"en/FAQ/index.html",revision:"123b0ab593bc06dde010889717175c46"},{url:"en/guide/feature/blog/index.html",revision:"6259bb55c4edc304f9c9ae1fe9e35671"},{url:"en/guide/feature/comment/index.html",revision:"9b3a74fb3a8e39b3415194f89ced2a8a"},{url:"en/guide/feature/component/index.html",revision:"bbcc2d34a16a836b7a0e7c1dc6f22b2b"},{url:"en/guide/feature/encrypt/index.html",revision:"dbeb885b9bb279403e73f4895be06733"},{url:"en/guide/feature/index.html",revision:"47b726e3ff1efe827f6c8ad804de20e5"},{url:"en/guide/feature/markdown/align/index.html",revision:"daec499e7a8dc9e0bdb67b7ef71a9ccf"},{url:"en/guide/feature/markdown/flowchart/index.html",revision:"4f4d4bf3ef7a9caf627fcfe4cd9178c9"},{url:"en/guide/feature/markdown/footnote/index.html",revision:"da780e3a5a4af9fae73008509293164f"},{url:"en/guide/feature/markdown/index.html",revision:"0d0ed57b021f8cc4976b5657fd3fdbaf"},{url:"en/guide/feature/markdown/mark/index.html",revision:"56bbf7ca82985e6dc104428db17efb89"},{url:"en/guide/feature/markdown/sup-sub/index.html",revision:"7ab4bacd7b28645493057753df43bb82"},{url:"en/guide/feature/markdown/tex/index.html",revision:"6691b44c4ce01102fbce98c5a0daf724"},{url:"en/guide/feature/page-info/index.html",revision:"958c18d3a515e58a4d3800963ba773e3"},{url:"en/guide/feature/seoAndSitemap/index.html",revision:"e21275f09a75cad08ba6254a6402edf0"},{url:"en/guide/feature/theme/index.html",revision:"3f92999fee88cd08cbc5a8162ce06e2f"},{url:"en/guide/feature/typescript/index.html",revision:"d9907eb374ea475bd127e1bd5670543b"},{url:"en/guide/index.html",revision:"5fa8f7cd937bc1338935c92d67ecb888"},{url:"en/guide/install/index.html",revision:"81a835a457d242cb11795ebdef926397"},{url:"en/guide/layout/blog/index.html",revision:"908204524ba0ff9578afa4db06cc5d66"},{url:"en/guide/layout/home/index.html",revision:"9053a8bc6df6e68a0d0ed0d12b1642e0"},{url:"en/guide/layout/index.html",revision:"b2a82741dde60e93744f11367a85bc15"},{url:"en/guide/layout/navbar/index.html",revision:"99d0d99a96ef4b7af82b039ba1799de5"},{url:"en/guide/layout/page/index.html",revision:"e80c6edad85a4d4433b5a6c2eac77464"},{url:"en/guide/layout/sidebar/index.html",revision:"630110c2e950bd5e467a29fac5f54d02"},{url:"en/index.html",revision:"2933e1160d40d00f89b19cfcc075089d"},{url:"FAQ/index.html",revision:"05de13d55ca05fd90d474c59680207c9"},{url:"guide/feature/blog/index.html",revision:"de9381a5f95ca6eedcc4701efd4928d0"},{url:"guide/feature/comment/index.html",revision:"d837b9bceba4d21388ee62fbd08da2fd"},{url:"guide/feature/component/index.html",revision:"9bdd7fd15d343d35ff743e047d9d2c8b"},{url:"guide/feature/encrypt/index.html",revision:"8e2617a496944e7c2d7d8a8ded9b3076"},{url:"guide/feature/index.html",revision:"f56e6c1115f56448039096f28302fc69"},{url:"guide/feature/markdown/align/index.html",revision:"2f028ae1428d7158dca2e3a9c818b2ce"},{url:"guide/feature/markdown/flowchart/index.html",revision:"262f6da08d0a7d605e3481cd6a961701"},{url:"guide/feature/markdown/footnote/index.html",revision:"4a0fc75aa543b0a9fdaacd7209cb5e86"},{url:"guide/feature/markdown/index.html",revision:"f75f1c1ef2392da1231080098b3fbb40"},{url:"guide/feature/markdown/mark/index.html",revision:"b973889678f0a481807456cdab5fdbf0"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"22d84b9ca7300a22a64d03876282fd01"},{url:"guide/feature/markdown/tex/index.html",revision:"1171f3e614b36846c1021aa0935ec430"},{url:"guide/feature/page-info/index.html",revision:"ce8b6e84d1f24ccae918eac6a6020cc4"},{url:"guide/feature/seoAndSitemap/index.html",revision:"42b1c05aa0bb425bc491bd8e2d5237e8"},{url:"guide/feature/theme/index.html",revision:"b9a03f6a01ebbd6674b5d42561ec9f39"},{url:"guide/feature/typescript/index.html",revision:"a776559e6c5a7f5845859eda012c5bb1"},{url:"guide/index.html",revision:"1df1b06d731ed11388afdd9e02aced10"},{url:"guide/install/index.html",revision:"481a3d5831013a63ad12fb9c48d3640a"},{url:"guide/layout/blog/index.html",revision:"5c3c2e7e68dd5d4ab64c07bf6497cb7d"},{url:"guide/layout/home/index.html",revision:"21bf57b9e5ff56cad2cfb29848ae1232"},{url:"guide/layout/index.html",revision:"c7e954f0ee5e8e3ff705c7983d9421d1"},{url:"guide/layout/navbar/index.html",revision:"d6a30f93787371a16ddd513147aa7900"},{url:"guide/layout/page/index.html",revision:"f0890fd0513f4b0f5e3a1deb1546dd97"},{url:"guide/layout/sidebar/index.html",revision:"bf919a940f7efbe8e417020e506cb90c"},{url:"index.html",revision:"a47fb00bbe666e3c659b3ff9fb27e02e"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/blog/index.html",revision:"28e61bac0cb093b4282f80e4ffa333be"},{url:"tag/comment/index.html",revision:"6bdedefe33413df83a9560c6df9a61a1"},{url:"tag/components/index.html",revision:"754ac66924c4ccdfb4bec8ca529497dd"},{url:"tag/config/index.html",revision:"248831e0f36b5e9e7dc4775e171ed7b7"},{url:"tag/config/page/2/index.html",revision:"436bbb88cdabb34c7775198040717dfe"},{url:"tag/config/page/3/index.html",revision:"b7bfd04d4b77abe60e643fcd2ca48752"},{url:"tag/emoji/index.html",revision:"80fb62717ef87811f2e2d8eb434715d5"},{url:"tag/emoji/page/2/index.html",revision:"d34699b5b53dbf7d9d46cf615da4426f"},{url:"tag/encrypt/index.html",revision:"0fcea4b3f2ffc186567375720d4f3661"},{url:"tag/feature/index.html",revision:"5da4de55e6da59b9c25ef0816219298e"},{url:"tag/feature/page/2/index.html",revision:"789a4d36d8367f9293180b8250719ee5"},{url:"tag/frontmatter/index.html",revision:"abdb636c9900c3e1cdce626ae30706db"},{url:"tag/function/index.html",revision:"5466818c2dee9597042151686c949b65"},{url:"tag/function/page/2/index.html",revision:"a040468e8455347b2a6fa6c715dd4af8"},{url:"tag/home/index.html",revision:"eaf11d0adc146bfc2fa44bff29f407fc"},{url:"tag/index.html",revision:"888393ff5bff43404db25e6eb9630c05"},{url:"tag/intro/index.html",revision:"8eaad123eeb0b244c040a07042640596"},{url:"tag/layout/index.html",revision:"994d2fff3eab839520b9298f7f1109a6"},{url:"tag/layout/page/2/index.html",revision:"bfe28ed8cea0ff915e4442db544a30ca"},{url:"tag/markdown/index.html",revision:"8d8baf98898bf3c45132fd2d31148501"},{url:"tag/markdown/page/2/index.html",revision:"f0b8a23af5d46ec72eb69a37423e2b78"},{url:"tag/markdown/page/3/index.html",revision:"7bfe529fe2ba5f00f9a06920ba4afb2e"},{url:"tag/navbar/index.html",revision:"040ac86f9387b0e2386a732e32defc1b"},{url:"tag/page-info/index.html",revision:"dfcb983d7eb865225756f3cd6b2b289f"},{url:"tag/plugin/index.html",revision:"7535e87c02992acbb7365e811d3aab50"},{url:"tag/plugin/page/2/index.html",revision:"f9a604832d25d417c5d8e724ba649d2f"},{url:"tag/seo/index.html",revision:"2ff549e81b8bd2831472a81b969c6e3d"},{url:"tag/sidebar/index.html",revision:"9de83a6e65e19695130a39581bee667a"},{url:"tag/sitemap/index.html",revision:"092179c1e1832d10d22adbb4bf4d60e7"},{url:"tag/style/index.html",revision:"d418bf18e34a10d4c77abfc9bba06a71"},{url:"tag/themeConfig/index.html",revision:"a39b9ee21ba742e13027a34dbbfc5226"},{url:"tag/typescript/index.html",revision:"4bf61aff4f868ea221049075a0656545"},{url:"tag/vuepress/index.html",revision:"3614ee626b305b9e63eed62c0f13e98a"},{url:"timeline/index.html",revision:"d031c4080e6c87fe70982ffce00a28cb"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
