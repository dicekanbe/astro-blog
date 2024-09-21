---
title: PathFinder（QuickLookSatellite）の暴走を解決する方法
date: 2018-05-03T15:40:18+09:00
status: publish
permalink: /entry/pathfinder1
author: user
excerpt: ""
type: post
thumbnail: ../../uploads/2018/05/20180503153403.png
categories:
  - Mac
  - アプリ
tag: []
post_format: []
---

使い勝手良いのでPathFinder（<https://cocoatech.com/>）を使ってるのですが、[MacOS](http://d.hatena.ne.jp/keyword/MacOS) 10.13.3あたりから大した処理もしてないのにファンがウンウンとうるさく鳴りはじめした。

### QuickLookSatelliteの暴走

アクティビモニターでプロセスを確認したとところ、「QuickLookSatellite」というプロセスがCPUパワーを異常に使っているようでした。  
何でしょう？このプロセスは。調べると[プレビュー機能](http://d.hatena.ne.jp/keyword/%A5%D7%A5%EC%A5%D3%A5%E5%A1%BC%B5%A1%C7%BD)に関係しるプロセスのことです。  
また、PathFinderを終了するとこのプロセスもなくなることからPathFinder特有のプロセスのようです。

[Google](http://d.hatena.ne.jp/keyword/Google)で調べるとPathFinderの正式サポートサイト内に関係する記事を見つけました。  
<http://support.cocoatech.com/discussions/problems/93818-quicklooksatellite-hogging-100-cpu>

[プレビュー機能](http://d.hatena.ne.jp/keyword/%A5%D7%A5%EC%A5%D3%A5%E5%A1%BC%B5%A1%C7%BD)を切れば良いようです。  
以下の用に、[プレビュー機能](http://d.hatena.ne.jp/keyword/%A5%D7%A5%EC%A5%D3%A5%E5%A1%BC%B5%A1%C7%BD)を使っていてQuickLookSatelliteの問題が発生してる場合は、プレビューから別の機能へ変更しましょう。

![f:id:psypanica:20180503153403p:plain](https://cdn-ak.f.st-hatena.com/images/fotolife/p/psypanica/20180503/20180503153403.png "f:id:psypanica:20180503153403p:plain")  
変更するとQuickLookSatelliteが出てくることはなくなりファンがうるさく鳴ることはなくなりました。

### おわりに

これ不具合だと思うので、早く直して欲しいところです。  
[プレビュー機能](http://d.hatena.ne.jp/keyword/%A5%D7%A5%EC%A5%D3%A5%E5%A1%BC%B5%A1%C7%BD)はなくても良いのですがあった方が便利ですよね。

ちなみに問題が発生した機種は以下です。

[MacBook Pro](http://d.hatena.ne.jp/keyword/MacBook%20Pro) (13-inch, 2017)
