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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "27d5ad1cde6108230079f64ffebd97d0"
  },
  {
    "url": "assets/css/10.styles.d99d0492.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.89879e2d.css",
    "revision": "ba8196b0d1933d0a47ae4bf8aeddab4a"
  },
  {
    "url": "assets/css/3.styles.d1135fb2.css",
    "revision": "e8c1ac99f865baa32941df042e9ef9c3"
  },
  {
    "url": "assets/css/4.styles.3c39ce02.css",
    "revision": "2143f2d4484ea7767f828377b70df11c"
  },
  {
    "url": "assets/css/5.styles.0674e744.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.161477b3.css",
    "revision": "601987b527922f54468fe70f090e262f"
  },
  {
    "url": "assets/img/alpha.7c97e5f2.png",
    "revision": "7c97e5f201b6974aade8301c3a6b60f4"
  },
  {
    "url": "assets/img/beta.b5dedc51.png",
    "revision": "b5dedc5145d80cbbf9ef72e29aa3793d"
  },
  {
    "url": "assets/img/blaming.35f65a20.jpg",
    "revision": "35f65a201266ce2eab55dfad40c7a062"
  },
  {
    "url": "assets/img/browsertabs.5fc5ee29.jpg",
    "revision": "5fc5ee29bc6b18f06097e94d16287cb3"
  },
  {
    "url": "assets/img/changingstuff.693561af.jpg",
    "revision": "693561afd2ffa5ea27c1d11672d694eb"
  },
  {
    "url": "assets/img/coffee.6c969335.jpg",
    "revision": "6c96933553ddec1259e42de46f721490"
  },
  {
    "url": "assets/img/copypaste.a83b7be1.jpg",
    "revision": "a83b7be1353cc31a2479a06b8adb1e55"
  },
  {
    "url": "assets/img/dependecies.4ae662bd.jpg",
    "revision": "4ae662bd5fccb8bab36a87e4f6e166b9"
  },
  {
    "url": "assets/img/drunk.43d9d2b7.jpg",
    "revision": "43d9d2b716c24311366e631d269696ae"
  },
  {
    "url": "assets/img/gamma.9df42cf9.png",
    "revision": "9df42cf9d48469ed17b9bd6f6333bb87"
  },
  {
    "url": "assets/img/gitcommit.00c17f5c.jpg",
    "revision": "00c17f5c40ccafad534c9c9369135794"
  },
  {
    "url": "assets/img/googling.a13b9982.jpg",
    "revision": "a13b9982ebe3978a6c994a6a8d81399a"
  },
  {
    "url": "assets/img/html-5.676e8188.svg",
    "revision": "676e8188f003ed5d4882a0d0f378dad3"
  },
  {
    "url": "assets/img/itdepends.7db97e1b.jpg",
    "revision": "7db97e1b33c9e9db18261d4e6b92d995"
  },
  {
    "url": "assets/img/javascript.61ed8b05.svg",
    "revision": "61ed8b054178d0e8d1285ad8f29f4045"
  },
  {
    "url": "assets/img/millenials.605e3a0f.png",
    "revision": "605e3a0f5cc3784d6e07d1097ee7ec49"
  },
  {
    "url": "assets/img/nobodycanread.cd028e84.jpg",
    "revision": "cd028e847a6bf8e44ca0838d9c7cbb51"
  },
  {
    "url": "assets/img/postman.e8767bf7.png",
    "revision": "e8767bf7b9f3473621ff68d1513a69ba"
  },
  {
    "url": "assets/img/regex.d6235383.jpg",
    "revision": "d6235383e8b3104177e1300ef46837e4"
  },
  {
    "url": "assets/img/rewriting.81099a5a.jpg",
    "revision": "81099a5a36de521a99f87e367263b20b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/security.4e012d30.jpg",
    "revision": "4e012d30073d61948f6168b4993503d1"
  },
  {
    "url": "assets/img/tryingstuff.5e42d5a4.jpg",
    "revision": "5e42d5a442ad7945e3aa9c3c0dcf2c68"
  },
  {
    "url": "assets/img/unittests.5b0c691f.jpg",
    "revision": "5b0c691f44441f4406930c9ca4344385"
  },
  {
    "url": "assets/img/weekend.10bc2c6a.jpg",
    "revision": "10bc2c6a24edd57fc91b32a650f4afd0"
  },
  {
    "url": "assets/img/whiteboard.06cf807b.jpg",
    "revision": "06cf807b105e5d578065801ef76d1d7f"
  },
  {
    "url": "assets/img/workarounds.039678c0.jpg",
    "revision": "039678c030df9ba399eb9da3b6a71c57"
  },
  {
    "url": "assets/img/zindex.ad33d2ad.jpg",
    "revision": "ad33d2adfc09a506e9ed0abb2de8b4f6"
  },
  {
    "url": "assets/js/1.90525082.js",
    "revision": "a69e160e99907fcf6d4e84fd702e0c75"
  },
  {
    "url": "assets/js/10.d99d0492.js",
    "revision": "91f2101e747efa0223d26a6cad9ca010"
  },
  {
    "url": "assets/js/100.a51652fa.js",
    "revision": "e79947daa2ddb11d847090a2259d417c"
  },
  {
    "url": "assets/js/101.ebda8a67.js",
    "revision": "af8256a8d12e8d8ed3d79dad4829a88d"
  },
  {
    "url": "assets/js/102.c46704bf.js",
    "revision": "80925ee225b5b47102adeabee57caf6b"
  },
  {
    "url": "assets/js/103.40bb9060.js",
    "revision": "2f9e60459315b0c8509a96aa4198d16b"
  },
  {
    "url": "assets/js/104.a8b7f2b8.js",
    "revision": "644b75957d384b83a4961f40217f6b4e"
  },
  {
    "url": "assets/js/105.ee0fb878.js",
    "revision": "85d9fe39a80ec2791d1f4160554ba511"
  },
  {
    "url": "assets/js/106.0dfbd97e.js",
    "revision": "2c9e443e93c6dc6c09d4720256610a46"
  },
  {
    "url": "assets/js/107.94f331db.js",
    "revision": "a7cd1deeddc39dc34cce4563a0417c0e"
  },
  {
    "url": "assets/js/108.7db36670.js",
    "revision": "87370a55614acc3ca95504a584c2d9cf"
  },
  {
    "url": "assets/js/109.672d9509.js",
    "revision": "d299c837c201899a848bffb0235613b4"
  },
  {
    "url": "assets/js/11.880d1297.js",
    "revision": "56eb9e7c38cf36985ffe7d94f2f516c1"
  },
  {
    "url": "assets/js/110.aa6ba046.js",
    "revision": "404103e541380b92e27f95a437d2f96f"
  },
  {
    "url": "assets/js/111.00cd7578.js",
    "revision": "6759a6ca783a53d23e77efacc74e956b"
  },
  {
    "url": "assets/js/112.13f0312f.js",
    "revision": "9972a55efc808add99573c6e41a48526"
  },
  {
    "url": "assets/js/113.edb7ae8b.js",
    "revision": "304b297f3aaf89466f95785aa492c276"
  },
  {
    "url": "assets/js/114.082a48e0.js",
    "revision": "e89807e422424eec7fdbc0ec1ad74233"
  },
  {
    "url": "assets/js/115.e209d64c.js",
    "revision": "e1bb7d010f7a37bca94208caee222beb"
  },
  {
    "url": "assets/js/116.13dae645.js",
    "revision": "9beeac74a426270d81762d2a3ec52c3a"
  },
  {
    "url": "assets/js/117.2e00f7a3.js",
    "revision": "06b9d6eba2b214e62882fea226dcba0a"
  },
  {
    "url": "assets/js/118.b9220662.js",
    "revision": "707569323fa94aa4311a4c59fc31fb4d"
  },
  {
    "url": "assets/js/119.639ea1f8.js",
    "revision": "54ccd743b5c87904d815a38306afbb59"
  },
  {
    "url": "assets/js/12.eeb78f5b.js",
    "revision": "2de504844194456542e6445809e2c686"
  },
  {
    "url": "assets/js/120.db83d1c0.js",
    "revision": "20bc1006b902ba612a595bbf49b284d2"
  },
  {
    "url": "assets/js/13.14b72cc5.js",
    "revision": "af73e7a2ffc7d41b6a179e8d18106fa7"
  },
  {
    "url": "assets/js/14.608d1340.js",
    "revision": "348a007df873a4bb4b3cb4b73645a888"
  },
  {
    "url": "assets/js/15.1a719b53.js",
    "revision": "90b872bc7e6d0c58d7f690515f4413c7"
  },
  {
    "url": "assets/js/16.44054bce.js",
    "revision": "dcac4abce7e9be60c242b2c10f666e11"
  },
  {
    "url": "assets/js/17.a64e2b93.js",
    "revision": "4991ccb9cf315f4615b9c9df1f241122"
  },
  {
    "url": "assets/js/18.26032476.js",
    "revision": "1c246e6ba2513847b6eee5327b4af111"
  },
  {
    "url": "assets/js/19.d4faffd9.js",
    "revision": "7acfc1d6f041ae153055591b46c7c6da"
  },
  {
    "url": "assets/js/2.89879e2d.js",
    "revision": "581729cb17164bed32a5b5b70ac003ae"
  },
  {
    "url": "assets/js/20.2177c24e.js",
    "revision": "2556f1f9f7da5a7565bb5d95420b41d2"
  },
  {
    "url": "assets/js/21.8b5227a1.js",
    "revision": "d0e353aecbe780572f214f44254ddec7"
  },
  {
    "url": "assets/js/22.6df7a417.js",
    "revision": "e13782c81e4a36500f9e7536fc544b49"
  },
  {
    "url": "assets/js/23.93f40a84.js",
    "revision": "ffe20a375b40488b5c50280adb5ab475"
  },
  {
    "url": "assets/js/24.577528c4.js",
    "revision": "787d31a9c66a18d0ef2482ddd5d4897b"
  },
  {
    "url": "assets/js/25.911378ba.js",
    "revision": "0ccdb0cce91466c8016e5b41690a1061"
  },
  {
    "url": "assets/js/26.d0f3d364.js",
    "revision": "d8ebb51d6ddeaa755af84937af7f2b92"
  },
  {
    "url": "assets/js/27.95b25f33.js",
    "revision": "9e9dfe7ee42b923072c361661492ac1a"
  },
  {
    "url": "assets/js/28.635acf1f.js",
    "revision": "54a84bcc2755b8ac6af8980b4905e7fc"
  },
  {
    "url": "assets/js/29.615ee212.js",
    "revision": "c25980ec19dc7ab857668a57759cb0ba"
  },
  {
    "url": "assets/js/3.d1135fb2.js",
    "revision": "d600bdf819681c9b5d2bbe2981dc270b"
  },
  {
    "url": "assets/js/30.febd0694.js",
    "revision": "e548f0e6a400353bf941505fab3db728"
  },
  {
    "url": "assets/js/31.74492fb9.js",
    "revision": "d03fcfbc0d15942982f901275bcb0b69"
  },
  {
    "url": "assets/js/32.f72bd391.js",
    "revision": "1a388d46837f9464f42238a511dc2f6d"
  },
  {
    "url": "assets/js/33.acaf523a.js",
    "revision": "b99ed3a186049bc40c9c357969974508"
  },
  {
    "url": "assets/js/34.472f3350.js",
    "revision": "83e1581058ca25d71f8eede5552830b0"
  },
  {
    "url": "assets/js/35.7da38d80.js",
    "revision": "e26dd5178278a6f6742ac6b19eb62b80"
  },
  {
    "url": "assets/js/36.9f0e4556.js",
    "revision": "a9e24ed0969ec9877b2f7d92034dd957"
  },
  {
    "url": "assets/js/37.1e13097b.js",
    "revision": "0ef3744d45452b8a9e302189415a5f67"
  },
  {
    "url": "assets/js/38.fa1f8b10.js",
    "revision": "1bf3aa712497a811498bd56b9c246b4d"
  },
  {
    "url": "assets/js/39.7d1cbf36.js",
    "revision": "28974fbece1c2035d62fa4ee99f02cc0"
  },
  {
    "url": "assets/js/4.3c39ce02.js",
    "revision": "a4dc17d076eb619c75efe9ea4a876e50"
  },
  {
    "url": "assets/js/40.c15d081d.js",
    "revision": "abe7b01daead9762c636066ff7701e60"
  },
  {
    "url": "assets/js/41.ed688e2a.js",
    "revision": "1ea47dd600d95a0b74777f1e990b5ddc"
  },
  {
    "url": "assets/js/42.dc9c2c88.js",
    "revision": "0b6d245ecaf9bc85de59eec524579807"
  },
  {
    "url": "assets/js/43.29dd184d.js",
    "revision": "16d845b73acb133e212698c7404da68f"
  },
  {
    "url": "assets/js/44.c2f0cb19.js",
    "revision": "84f4481c8910ea06cbe5d720aab6d2d1"
  },
  {
    "url": "assets/js/45.4b5d7e99.js",
    "revision": "576bfe26ce241d16685c5e90df723439"
  },
  {
    "url": "assets/js/46.0ef2236e.js",
    "revision": "7b83f8cd0fcfe8738d3d02c3757936e9"
  },
  {
    "url": "assets/js/47.a057e109.js",
    "revision": "42ce9f9de6eb799ab6cde0438edf1d5a"
  },
  {
    "url": "assets/js/48.caa09084.js",
    "revision": "8985bbff299c1106662f205a6327a99d"
  },
  {
    "url": "assets/js/49.a42529ab.js",
    "revision": "baa58ffe94c2bca63730c913d85c9887"
  },
  {
    "url": "assets/js/5.0674e744.js",
    "revision": "02a53528d8f722c74ca014c260d32543"
  },
  {
    "url": "assets/js/50.b3946f0a.js",
    "revision": "640dc7c5737a0075c8cad157b8bbda95"
  },
  {
    "url": "assets/js/51.6f8f17e1.js",
    "revision": "2f6088487b1de3c9610652bdb7ba0010"
  },
  {
    "url": "assets/js/52.45ee0eea.js",
    "revision": "cccd3e277986c7625f0c09bdb28d2501"
  },
  {
    "url": "assets/js/53.6fd28726.js",
    "revision": "3d73684a00cb23526db3e29f9b869a0b"
  },
  {
    "url": "assets/js/54.4838cf21.js",
    "revision": "371075657b762d3513441e712b4526d1"
  },
  {
    "url": "assets/js/55.2e862fad.js",
    "revision": "1ae28d90446c408f063b9eb39ff87b48"
  },
  {
    "url": "assets/js/56.748370ce.js",
    "revision": "8db2b73d6eb41472e179aeb13755bfc5"
  },
  {
    "url": "assets/js/57.54a7cd86.js",
    "revision": "21fea8cc7a261b0b7bb768300c0eb5d8"
  },
  {
    "url": "assets/js/58.dd2d15e8.js",
    "revision": "7283e7fec77d7febd22f654cc5f5f448"
  },
  {
    "url": "assets/js/59.51f72f9b.js",
    "revision": "f5f38d3f3298d14e3d06a707d3ba4bd1"
  },
  {
    "url": "assets/js/6.b4a36cd1.js",
    "revision": "081afed443ee3a1ae507ac09600760f1"
  },
  {
    "url": "assets/js/60.a96bb87c.js",
    "revision": "b5b8d5639ed72712decabf16679ac865"
  },
  {
    "url": "assets/js/61.0197c703.js",
    "revision": "88c879aa94ff324eca58e7cdc8a23dd6"
  },
  {
    "url": "assets/js/62.8bfee825.js",
    "revision": "3b1d39439a1f4b57548294d47343ac97"
  },
  {
    "url": "assets/js/63.a878a654.js",
    "revision": "3f7f4a1e9697188ae599e36c2cfe2fb4"
  },
  {
    "url": "assets/js/64.cfe3bd76.js",
    "revision": "a0617ac02f9dbf06c24ab8415ae34b1b"
  },
  {
    "url": "assets/js/65.62232491.js",
    "revision": "e33cef18bd881574101ff374d10ed754"
  },
  {
    "url": "assets/js/66.bbb2ee36.js",
    "revision": "748b84e95b74cb2bbaca398bf6bb0e61"
  },
  {
    "url": "assets/js/67.9f79940d.js",
    "revision": "eded29cb6c982c9fd5957d11ee60c50e"
  },
  {
    "url": "assets/js/68.be40e02a.js",
    "revision": "1f2a47d6ecab97a6419040adf38e3af5"
  },
  {
    "url": "assets/js/69.f9264501.js",
    "revision": "78f5748e496c481a56459e0bcf967ed9"
  },
  {
    "url": "assets/js/7.d2c77c42.js",
    "revision": "ad14b65e8a067c4fa0cfb3161d80bcab"
  },
  {
    "url": "assets/js/70.8df4828d.js",
    "revision": "4a8152c1141960eb04280eeeb946afbe"
  },
  {
    "url": "assets/js/71.be73c125.js",
    "revision": "aad9f327d585adc6f4b093f2025ed3b6"
  },
  {
    "url": "assets/js/72.2fcd939f.js",
    "revision": "f0b62b8ce0d80debbe7e707647d1d220"
  },
  {
    "url": "assets/js/73.85be86a4.js",
    "revision": "3012815ed310785c9e0f8f3ccf72c94d"
  },
  {
    "url": "assets/js/74.bce4711f.js",
    "revision": "e547d6f8bc8f9306b0b56047c8dacaba"
  },
  {
    "url": "assets/js/75.1b7cf108.js",
    "revision": "ff9e3e82cc8c18b377cb7345ba97be77"
  },
  {
    "url": "assets/js/76.5a46780a.js",
    "revision": "9476211e8cfb7855d729db950173fdec"
  },
  {
    "url": "assets/js/77.748112c2.js",
    "revision": "feb5a8b7627d73f9d32ffd90f91a8b3b"
  },
  {
    "url": "assets/js/78.705c96a8.js",
    "revision": "56e4ddf8dd39df2a20c201e12e346527"
  },
  {
    "url": "assets/js/79.cb1a4f69.js",
    "revision": "c1876cae4afbb144db81059fa615d34b"
  },
  {
    "url": "assets/js/8.151deae8.js",
    "revision": "3803e0265d06a9ed309c20cfb62d32b5"
  },
  {
    "url": "assets/js/80.690fa53f.js",
    "revision": "ad8664b5579d6e765cd5679d6d46fa78"
  },
  {
    "url": "assets/js/81.176fba7a.js",
    "revision": "9882da921d76c8055f22f2968f1d736c"
  },
  {
    "url": "assets/js/82.54acafa2.js",
    "revision": "0be430aa8b70396787dc09e1f2776b35"
  },
  {
    "url": "assets/js/83.04dd420c.js",
    "revision": "172eef9696a76351ca665998a3e7e046"
  },
  {
    "url": "assets/js/84.4ed8a36f.js",
    "revision": "e8c7c555bf177b897cfda61955243dbd"
  },
  {
    "url": "assets/js/85.d8e6815f.js",
    "revision": "b7c62761696fdddbcde033675c606f90"
  },
  {
    "url": "assets/js/86.b0bf66f8.js",
    "revision": "745941ea6f58685f847047014b095652"
  },
  {
    "url": "assets/js/87.b7e1c9ed.js",
    "revision": "d9610e227cdd0e6bce360613c800dbaf"
  },
  {
    "url": "assets/js/88.d074e39b.js",
    "revision": "9fc889b8aa630b3458d2057edb15c2f7"
  },
  {
    "url": "assets/js/89.f35ece9d.js",
    "revision": "e475e3498fd29cef7c62a7cfb2f6ae2a"
  },
  {
    "url": "assets/js/9.3b1b8ae9.js",
    "revision": "f83bdc9a5e226bffd515f826eaa49723"
  },
  {
    "url": "assets/js/90.9fa14945.js",
    "revision": "a1263351cdad4964d29e0133e62d0377"
  },
  {
    "url": "assets/js/91.50982c8b.js",
    "revision": "3c0d0c37e88ebaea5bc6d3666f9ebd26"
  },
  {
    "url": "assets/js/92.ee19c829.js",
    "revision": "46675ce82a8cb4b1403d76e9e15c3a4e"
  },
  {
    "url": "assets/js/93.4b23c937.js",
    "revision": "f1bdb4977506d133f62ce5ab57fcf555"
  },
  {
    "url": "assets/js/94.f1c73bf9.js",
    "revision": "7aa93f88a247dc686368e90c9fd044f5"
  },
  {
    "url": "assets/js/95.fa67bfbb.js",
    "revision": "74d8d24ef3bd966168b1538574f7fc85"
  },
  {
    "url": "assets/js/96.42e50dec.js",
    "revision": "1ab5b06106eb19d560cfff8fb5a7b48d"
  },
  {
    "url": "assets/js/97.3cdf5c6d.js",
    "revision": "e919a622b1db22e958a4e1a728ec33ff"
  },
  {
    "url": "assets/js/98.1fdf2c21.js",
    "revision": "eef377186eef1897d7fe9f8bb605d6a1"
  },
  {
    "url": "assets/js/99.4baf74da.js",
    "revision": "4c21b69d1cea7aa9b213030cfc56dd02"
  },
  {
    "url": "assets/js/app.161477b3.js",
    "revision": "a996c1c3b6ceede4b918fa22fabfebf8"
  },
  {
    "url": "assignments/api.html",
    "revision": "cf4dd6f0db3cd8b9594ddf9dbc77da1d"
  },
  {
    "url": "assignments/canvas.html",
    "revision": "9a1adcdb28d7ab1856d030f033acdaf7"
  },
  {
    "url": "assignments/index.html",
    "revision": "24dcc10e9e3c0871d61c804447041df5"
  },
  {
    "url": "assignments/not-exercises.html",
    "revision": "1e0947952634f948d998130f517b5ab7"
  },
  {
    "url": "assignments/practice.html",
    "revision": "b3ec22db1d14eb0d3b176db75ca279f3"
  },
  {
    "url": "assignments/project-setup.html",
    "revision": "6167cad99c85196681bf17bfefe12e43"
  },
  {
    "url": "assignments/projects.html",
    "revision": "57a6b782090f51bd2377ee73eeeee12b"
  },
  {
    "url": "HeadshotPlaceholder.png",
    "revision": "dd905cc985945c4b067ad8e177bbefe0"
  },
  {
    "url": "hero.png",
    "revision": "a77ff0e74d076093d400c27e493f4974"
  },
  {
    "url": "index.html",
    "revision": "da95e30e9508b6d3c479817206b9a039"
  },
  {
    "url": "instructor-notes.html",
    "revision": "a9368664ee274a01deb7afc0ebed6810"
  },
  {
    "url": "modules/query.html",
    "revision": "8194e776e7c935f0a81f680a6fcb3baf"
  },
  {
    "url": "modules/sample.html",
    "revision": "f9542793aad7e00cc0fe45237c028d2e"
  },
  {
    "url": "modules/week1/canvas.html",
    "revision": "5b713e87fbb6eb2acdcb4005627c365b"
  },
  {
    "url": "modules/week1/git.html",
    "revision": "7178d84150cd500aef2a8769d50b083d"
  },
  {
    "url": "modules/week1/index.html",
    "revision": "2e0f348aad1cbdf147dbe4ad4b583810"
  },
  {
    "url": "modules/week1/npm.html",
    "revision": "38d512063757c637099b042ca1489bfa"
  },
  {
    "url": "modules/week1/vscode.html",
    "revision": "21a11e7114b4753068898b21f22c8290"
  },
  {
    "url": "modules/week1/yarn.html",
    "revision": "fc19bcc52318f6bb415090c1c5e523e7"
  },
  {
    "url": "modules/week10/device-orient.html",
    "revision": "283d1ce0edca61b269be12796a41a575"
  },
  {
    "url": "modules/week10/fullscreen.html",
    "revision": "3a341c8a2c60220442dea50bbacfdb85"
  },
  {
    "url": "modules/week10/index.html",
    "revision": "b860e7442df6a0f5ab7e62c2eb9f6792"
  },
  {
    "url": "modules/week10/network.html",
    "revision": "d1f4b16e50302237bc542b677fb76d53"
  },
  {
    "url": "modules/week10/page-visibility.html",
    "revision": "d321402d1c8a938342c014a19777417e"
  },
  {
    "url": "modules/week10/screen-orient.html",
    "revision": "e8ace4e8aaafddd332c2faae75d4ec40"
  },
  {
    "url": "modules/week10/vibration.html",
    "revision": "6d2471bc5f3fe684c9628d6ae2128201"
  },
  {
    "url": "modules/week11/async-await.html",
    "revision": "b6e9b7a15c8cdab21a1290e880e2b1af"
  },
  {
    "url": "modules/week11/dataset-props.html",
    "revision": "5b69ec75d48bcef81719a2f1b587f3a5"
  },
  {
    "url": "modules/week11/index.html",
    "revision": "0d5a8ae605af38dc7056586bac1c40c5"
  },
  {
    "url": "modules/week11/iterator-generator.html",
    "revision": "1c7fce789065fc11fa9f7ecffb75ac7a"
  },
  {
    "url": "modules/week11/payment-request.html",
    "revision": "83f5b89797517df00b76cc7c21afd995"
  },
  {
    "url": "modules/week11/web-rtc.html",
    "revision": "b75c390dfb80e714da1b42c17394d55e"
  },
  {
    "url": "modules/week12/common-regexp.html",
    "revision": "7cfe5e5eb014f3ca470cc9c971bbf8f6"
  },
  {
    "url": "modules/week12/es6-classes.html",
    "revision": "acb7cf54b25b76a129d04385321046f2"
  },
  {
    "url": "modules/week12/hex-bin-64.html",
    "revision": "4c98a4e3c2c16e9b0b2c68293e7f3f01"
  },
  {
    "url": "modules/week12/index.html",
    "revision": "972e28a6191039ad09367e905496b592"
  },
  {
    "url": "modules/week12/regexp.html",
    "revision": "5367527d6e745a981aadb759c04de3a3"
  },
  {
    "url": "modules/week12/speech.html",
    "revision": "86f8b91496317da3d6e459144660d078"
  },
  {
    "url": "modules/week12/steganography.html",
    "revision": "8ebdf18a112e8b26b1300fd3cc066543"
  },
  {
    "url": "modules/week12/typed-arrays.html",
    "revision": "d99cbbc601ee1fdc228304858afa3178"
  },
  {
    "url": "modules/week12/upload-files-fetch.html",
    "revision": "f285829cc7342c5f5ef7d839c12cd5c8"
  },
  {
    "url": "modules/week13/import-export.html",
    "revision": "41a48e7db1fc4bb0ecc07a86a5f5a78c"
  },
  {
    "url": "modules/week13/index.html",
    "revision": "c7d3a0131c76b81b168089a010133314"
  },
  {
    "url": "modules/week13/permission-api.html",
    "revision": "2eb812a992d829fd9c7ab52b60c6ac66"
  },
  {
    "url": "modules/week13/postman.html",
    "revision": "53713921630af5608e24b8f62562cfc3"
  },
  {
    "url": "modules/week13/web-share.html",
    "revision": "0422edc61ef49fb48f27bb6cd0221c21"
  },
  {
    "url": "modules/week13/web-worker.html",
    "revision": "457131fd3019374007bffc12b86a2085"
  },
  {
    "url": "modules/week14/html-templates.html",
    "revision": "47213507c6fc2efaa1039d0288c3da7d"
  },
  {
    "url": "modules/week14/index.html",
    "revision": "eb004d7bb09f54bf14fd39a773aefe99"
  },
  {
    "url": "modules/week14/maps-sets.html",
    "revision": "d8c63a048cb71e56843562f011238cfd"
  },
  {
    "url": "modules/week14/optional-chaining.html",
    "revision": "ca4c70fc7551d09f2b4cb9892935be7c"
  },
  {
    "url": "modules/week14/qr-codes.html",
    "revision": "5a0edb4d4c5cf52ed8c30131a1cea827"
  },
  {
    "url": "modules/week14/service-worker.html",
    "revision": "339ffc4f6f6272e2b7db6f91c2c5a5ea"
  },
  {
    "url": "modules/week14/shadow-dom.html",
    "revision": "30509f8c0cd18417a557f3db44a50358"
  },
  {
    "url": "modules/week14/template-strings.html",
    "revision": "269e10f48b717fb2922740f6f2d93fff"
  },
  {
    "url": "modules/week14/web-components.html",
    "revision": "41900b29abbfe6428d3200144eb989a6"
  },
  {
    "url": "modules/week2/arrays.html",
    "revision": "4c70fca30388359bd8220bed29616b16"
  },
  {
    "url": "modules/week2/index.html",
    "revision": "cb1f277555c6a50ecbd458532654bb9a"
  },
  {
    "url": "modules/week2/trig.html",
    "revision": "09238ab6d18e1c8154fcd14dc142b67d"
  },
  {
    "url": "modules/week3/android.html",
    "revision": "0a459c440aa355def1bcf84823f031bc"
  },
  {
    "url": "modules/week3/cordova-commands.html",
    "revision": "521ce2cfd719ff2a4e294847a33009d4"
  },
  {
    "url": "modules/week3/cors.html",
    "revision": "4b1a4e0d035a88715f972de4decf6377"
  },
  {
    "url": "modules/week3/csp.html",
    "revision": "6a5e3ea8c6774e6ab1af5dff4c864e7c"
  },
  {
    "url": "modules/week3/history.html",
    "revision": "5c71cf7aa3fc8dd634f842961b4bef88"
  },
  {
    "url": "modules/week3/index.html",
    "revision": "16de661cb616f53ccec3b17cc42a7b0f"
  },
  {
    "url": "modules/week3/orly.html",
    "revision": "4c25ae86bbec77b74efb3470e09624fa"
  },
  {
    "url": "modules/week3/spa.html",
    "revision": "a6e0f0756d25197b7734d566b65fb25c"
  },
  {
    "url": "modules/week3/timers.html",
    "revision": "f7f3172bc706f41c79b761663ef4be80"
  },
  {
    "url": "modules/week4/cordova-camera.html",
    "revision": "12edfbb64172b441bb53a33eb6b304da"
  },
  {
    "url": "modules/week4/deep-shallow.html",
    "revision": "ce538eb063fc5d876988050c66b53d65"
  },
  {
    "url": "modules/week4/icons.html",
    "revision": "276c5e9b62057c9e6886904dbe89dd3b"
  },
  {
    "url": "modules/week4/index.html",
    "revision": "cda1a58bc9b286f904a048b96456a7cc"
  },
  {
    "url": "modules/week4/markdown.html",
    "revision": "60490845889ff37cdc555e83fc560781"
  },
  {
    "url": "modules/week4/star-rating-system.html",
    "revision": "52df969b22a27a523f0db757e4bbf68b"
  },
  {
    "url": "modules/week4/throw-catch.html",
    "revision": "13adbc465e61b3e354f28dfb6d1287dd"
  },
  {
    "url": "modules/week5/closure-curry.html",
    "revision": "bc89aa4a069c1534b85693708e3c86b3"
  },
  {
    "url": "modules/week5/cordova-media.html",
    "revision": "3ae8d135be68c2dccd74c1f054a80718"
  },
  {
    "url": "modules/week5/default-params.html",
    "revision": "11070f1fa6ee2648e4f9f0da46a3efff"
  },
  {
    "url": "modules/week5/event-loop.html",
    "revision": "0ff74c68c5326b93fa336cf2696de2f9"
  },
  {
    "url": "modules/week5/file-assets.html",
    "revision": "e224f668ce0fad302f5474ddafdaf5a6"
  },
  {
    "url": "modules/week5/index.html",
    "revision": "7e42d0aca7d07cf1afd4e67cb91d00bd"
  },
  {
    "url": "modules/week5/object-prototypes.html",
    "revision": "634d657243c1ba09200f7f307cfe3787"
  },
  {
    "url": "modules/week5/spashscreens.html",
    "revision": "24dbbd1de3f00ed2a5dabebf797ea0cd"
  },
  {
    "url": "modules/week6/call-apply-bind.html",
    "revision": "2d996add21b9398f851d1c8ed7342e01"
  },
  {
    "url": "modules/week6/dates.html",
    "revision": "5d634b499a2dbe9df45f8aadcdc94de9"
  },
  {
    "url": "modules/week6/index.html",
    "revision": "2cd6357978298ec52dd777e1b1125522"
  },
  {
    "url": "modules/week6/ios.html",
    "revision": "e48144f92eda8983875c1e2e4ba3ed99"
  },
  {
    "url": "modules/week6/local-notify.html",
    "revision": "e9f62abf7c12070d4eb00902f9b626bb"
  },
  {
    "url": "modules/week6/luxon.html",
    "revision": "2193f6aa17cd2ca4bf0263f932fc28e5"
  },
  {
    "url": "modules/week6/private-data.html",
    "revision": "4c5e4cd870a77bab216c28290495ab8e"
  },
  {
    "url": "modules/week6/short-circuit.html",
    "revision": "49a21e72e8b451afab93627b14019531"
  },
  {
    "url": "modules/week6/web-notify.html",
    "revision": "d935af04cd72004d01446ecc4066a832"
  },
  {
    "url": "modules/week7/cordova-geolocation.html",
    "revision": "86c4c0bfcd03069838f45ef32cd6461a"
  },
  {
    "url": "modules/week7/cordova-status.html",
    "revision": "c69bafe1290b90bf30a69d20e01f658d"
  },
  {
    "url": "modules/week7/geolocation.html",
    "revision": "dc2591d48455a91db610299b5c7825fa"
  },
  {
    "url": "modules/week7/google-maps-controls.html",
    "revision": "7e4a052adb0d2c573d6535fdccfc0a0a"
  },
  {
    "url": "modules/week7/google-maps-events.html",
    "revision": "db5f1f99fd29d01c3c44a5bea35033a3"
  },
  {
    "url": "modules/week7/google-maps-markers.html",
    "revision": "41ee9f0337343c5641a4abcc340b5f45"
  },
  {
    "url": "modules/week7/google-maps.html",
    "revision": "f35d7c993cd23ab677a27bdc7b37c0e7"
  },
  {
    "url": "modules/week7/index.html",
    "revision": "5a1a82317a1e592ab13b88287a3c8190"
  },
  {
    "url": "modules/week7/rest-spread.html",
    "revision": "85678593298c8654186b267eb17c5597"
  },
  {
    "url": "modules/week8/canvas-thumbnails.html",
    "revision": "9fc14026e668334bad7599a078f43b69"
  },
  {
    "url": "modules/week8/cordova-files.html",
    "revision": "8b51c7d024be0dcf5f874a7cb664ac89"
  },
  {
    "url": "modules/week8/destructuring.html",
    "revision": "fb97374c4d0bc929fe62780aa43aa745"
  },
  {
    "url": "modules/week8/index.html",
    "revision": "2aefbc4812c73401a916d2d7c1f3d006"
  },
  {
    "url": "modules/week8/media-capture.html",
    "revision": "c1129dc7c803927c2155e2bdf423b499"
  },
  {
    "url": "modules/week8/promises.html",
    "revision": "4dfe1f22fbefc804d5838c16b111211d"
  },
  {
    "url": "modules/week8/property-descriptors.html",
    "revision": "1015986669f81d7078ba084ce98bb28b"
  },
  {
    "url": "modules/week8/sizing-notes.html",
    "revision": "7a45840d6a51e06e4f4a69e590319d51"
  },
  {
    "url": "modules/week9/cordova-sql.html",
    "revision": "c409eec2ffcb317447ec99dc0e19d00f"
  },
  {
    "url": "modules/week9/gestures.html",
    "revision": "d6bb68b47df7079cc9f96b9f5876b97b"
  },
  {
    "url": "modules/week9/index.html",
    "revision": "d8acdd1f82763494f8b77f66b3d2319b"
  },
  {
    "url": "modules/week9/sql-sample.html",
    "revision": "c658b0bd777f1bf8171b7cb0619f05d1"
  },
  {
    "url": "modules/week9/tinyshell.html",
    "revision": "c985b8035ba83ec77d13b45613bb6852"
  },
  {
    "url": "overview/contacts.html",
    "revision": "52a5e72b7481ad7a07ac7906122bc7c6"
  },
  {
    "url": "overview/course-section-information.html",
    "revision": "654a1a6d3662c8277400c74ba5fcabe3"
  },
  {
    "url": "overview/index.html",
    "revision": "dc3af0bf2a19977256e8b21123def02e"
  },
  {
    "url": "steve-griffith.jpeg",
    "revision": "3fb81c0d91a190afe01fd27de65080f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
