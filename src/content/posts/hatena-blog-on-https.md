---
title: はてなブログでhttpsを利用する方法
date: 2018-06-14T20:32:06+09:00
status: publish
permalink: /entry/hatena-blog-on-https
author: user
excerpt: ""
type: post
thumbnail: ../../uploads/2018/06/20180614120748.png
categories:
  - ブログ
tag: []
post_format: []
---

はてなブログをhttps化しましたので、その方法をシェアしたいと思います。サイトの信頼性を上げるためにやっておきましょう。

- [httpsの設定](#https%E3%81%AE%E8%A8%AD%E5%AE%9A)
- [ 混在コンテンツ（Mixed Content）の対応](#%E6%B7%B7%E5%9C%A8%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84Mixed-Content%E3%81%AE%E5%AF%BE%E5%BF%9C)
- [ おわりに](#%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB)

### httpsの設定

はてなブログの設定の詳細設定にHTTPS配信という項目があるので、そちらから設定できます。  
注意点としては一度HTTPS設定を行ってしまった場合、HTTPへ戻せないということです（笑）。

![f:id:psypanica:20180614120748p:plain](https://cdn-ak.f.st-hatena.com/images/fotolife/p/psypanica/20180614/20180614120748.png "f:id:psypanica:20180614120748p:plain")

### 混在コンテンツ（Mixed Content）の対応

おそらく、ほとんど方がhttpsへの移行後でも、 ブログ内でhttp://から始まるURLが記載されてるのでないかと思います。httpsサイトにhttpが混在していると、ブラウザで「これは安全はWebサイトではない」とでちゃいますので、以下のコードをブログの詳細設定の「headに要素を追加」エリアへ追加しましょう。

こちらのコードを追加しておけば、Webページ内のリンクURLが http:// になっていても、ブラウザが https:// として扱ってくれます。

> &lt;meta http-equiv=”Content-Security-Policy” content=”upgrade-insecure-requests”&gt;

![f:id:psypanica:20180614120754p:plain](https://cdn-ak.f.st-hatena.com/images/fotolife/p/psypanica/20180614/20180614120754.png "f:id:psypanica:20180614120754p:plain")

### おわりに

<iframe class="embed-card embed-blogcard" frameborder="0" scrolling="no" src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fwww.exp-cards.net%2Fentry%2Ferror-on-https" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;" title="httpsへ変更したらブログが表示されなくなった。。。 - 経験値カード"></iframe><cite class="hatena-citation">[www.exp-cards.net](https://www.exp-cards.net/entry/error-on-https)</cite>

上記のように私の場合、証明書の生成に失敗して、上記の設定後、「この接続ではプライバシーが保護されません」と表示され、まとものブログが表示されないトラブルが発生してました。１時間以上、上記のトラブルが発生してる場合は、はてなスタッフへ問い合わせしましょう。

<div class="booklink-box" style="text-align: left; padding-bottom: 20px; font-size: small; /zoom: 1; overflow: hidden;"><div class="booklink-image" style="float: left; margin: 0 15px 10px 0;">[![](https://images-fe.ssl-images-amazon.com/images/I/51D91EXjxVL._SL160_.jpg)](http://www.amazon.co.jp/exec/obidos/asin/4844366475/psypanica02-22/)</div><div class="booklink-info" style="line-height: 120%; /zoom: 1; overflow: hidden;"><div class="booklink-name" style="margin-bottom: 10px; line-height: 120%;">[Web担当者のためのセキュリティの教科書](http://www.amazon.co.jp/exec/obidos/asin/4844366475/psypanica02-22/)<div class="booklink-powered-date" style="font-size: 8pt; margin-top: 5px; font-family: verdana; line-height: 120%;">posted with [ヨメレバ](https://yomereba.com)</div></div><div class="booklink-detail" style="margin-bottom: 5px;">株式会社アズジェント/中山貴禎 エムディエヌコーポレーション 2017-03-02</div><div class="booklink-link2" style="margin-top: 10px;"><div class="shoplinkamazon" style="display: inline; margin-right: 5px;">[Amazon](http://www.amazon.co.jp/exec/obidos/asin/4844366475/psypanica02-22/)</div><div class="shoplinkkindle" style="display: inline; margin-right: 5px;">[Kindle](http://www.amazon.co.jp/exec/obidos/ASIN/B06XBSV54T/psypanica02-22/)</div><div class="shoplinkrakuten" style="display: inline; margin-right: 5px;">[楽天ブックス](https://hb.afl.rakuten.co.jp/hgc/16c2f0d7.b600e952.16c2f0d8.0750ca08/yomereba_201806141129401426?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14730278%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F)</div></div></div><div class="booklink-footer" style="clear: left;"> </div></div>
