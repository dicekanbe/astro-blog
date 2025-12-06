---
title: はてなブログでhttpsを利用する方法
date: '2018-06-14T20:32:06+09:00'
status: publish
permalink: /entry/hatena-blog-on-https
author: user
excerpt: ''
type: post
thumbnail: ../../uploads/2018/06/20180614120748.png
categories:
  - ブログ
tag:
  - ブログ
  - 執筆
  - 情報発信
  - トレンド
  - 情報
post_format: []
---

はてなブログをhttps化しましたので、その方法をシェアしたいと思います。サイトの信頼性を上げるためにやっておきましょう。

- [httpsの設定](#httpsの設定)
- [混在コンテンツ（Mixed Content）の対応](#混在コンテンツmixed-contentの対応)
- [おわりに](#おわりに)

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
