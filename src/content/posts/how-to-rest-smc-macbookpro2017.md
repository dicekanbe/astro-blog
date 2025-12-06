---
title: MacbookPro(2017)がスリープから復帰しなくなったのでSMCをリセットしてみた
date: '2017-08-23T23:51:27+09:00'
status: publish
permalink: /entry/how-to-rest-smc-macbookpro2017
author: user
excerpt: ''
type: post
categories:
  - Mac
tags:
  - Mac
  - 技術
  - プログラミング
  - 開発
  - ツール
post_format: []
---

こちらでも書きましたが、

<iframe class="embed-card embed-blogcard" frameborder="0" scrolling="no" src="https://hatenablog-parts.com/embed?url=http%3A%2F%2Fwww.exp-cards.net%2Fentry%2Fhow-to-reset-nvram-macbookpro2017" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;" title="MacBook Pro（2017）でのNVRAM（PRAM)リセット方法 - 経験値カード"></iframe><cite class="hatena-citation">[www.exp-cards.net](http://www.exp-cards.net/entry/how-to-reset-nvram-macbookpro2017)</cite>

[Macbook Pro](http://d.hatena.ne.jp/keyword/Macbook%20Pro)(2017)で、長時間スリープしていると復帰しない場合があるので、NVRAMのリセットをしてみましたが、変化ないなようです。ですので、SMCのリセットをしてみました。  
すると、問題が発生しなくなりました。ただ、この問題は常に発生してたわけではなく、１週間に１回程度の頻度で発生してたので、もう少し様子を見る必要があるでしょう。  
というわけで今回はMacbookPro(2017)のSMSのリセット方法を調べたのでシェアしたいと思います。

- [SMCのリセットが必要だと思われる場合の兆候](#SMC%E3%81%AE%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%A0%E3%81%A8%E6%80%9D%E3%82%8F%E3%82%8C%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AE%E5%85%86%E5%80%99)
- [SMCをリセットする方法](#SMC%E3%82%92%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)
- [おわりに](#%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB)

### SMCのリセットが必要だと思われる場合の兆候

アップルのサポートサイトにSMCにリセットが必要だと思われる症状がありましたので、参考にしていただければと思います。SMCリセットで解決するかもしれません。

- コンピュータへの負荷が高くなく、正しく通気されているにもかかわらず、コンピュータのファンが高速で回転する。
- キーボードのバックライトが正しく機能しない。
- ステータスランプ (SIL) (搭載されている場合) が正しく機能しない。
- バッテリーランプ (搭載されている場合) が正しく機能しない (バッテリー内蔵の [Mac](http://d.hatena.ne.jp/keyword/Mac) ノートブックの場合)。
- ディスプレイのバックライトが周囲の明るさの変化に正しく反応しない。
- [Mac](http://d.hatena.ne.jp/keyword/Mac) が電源ボタンを押しても反応しない。
- [Mac](http://d.hatena.ne.jp/keyword/Mac) ノートブックが蓋を開閉したときに正しく反応しない。
- [Mac](http://d.hatena.ne.jp/keyword/Mac) が予期せずスリープ状態になったりシステム終了したりする。
- バッテリーが適切に充電されない。
- MagSafe 電源アダプタの LED (搭載されている場合) が適切な動作状態を示していない。
- CPU に異常に負荷がかかっているわけでもないのに、[Mac](http://d.hatena.ne.jp/keyword/Mac) の動作速度が通常よりも遅い。
- ターゲットディスプレイモード対応のコンピュータで、思うようにターゲットディスプレイモードにしたり、ターゲットディスプレイモードを解除したりできない。または、予期せずターゲットディスプレイモードになったり、ターゲットディスプレイモードが解除されたりする。
- [Mac Pro](http://d.hatena.ne.jp/keyword/Mac%20Pro) (Late 2013) の入出力ポート付近のイルミネーションが、コンュータを動かすと点灯しない。

### SMCをリセットする方法

私は[Macbook Pro](http://d.hatena.ne.jp/keyword/Macbook%20Pro)(2017)を使ってますが、[MacBook Pro](http://d.hatena.ne.jp/keyword/MacBook%20Pro) (Early 2009) 以降、MacBookAirの全モデルでも方法は同じです。

1. [Mac](http://d.hatena.ne.jp/keyword/Mac) をシステム終了します。
2. 内蔵キーボードを使い、左側の「shift + control + option」キーを押しながら、電源ボタンを押します。これらのキーと電源ボタンを 10 秒間押し続けてください。<span style="color: #666666;">Touch ID を搭載した [MacBook Pro](http://d.hatena.ne.jp/keyword/MacBook%20Pro) をお使いの場合は、Touch ID ボタンが電源ボタンも兼ねています。</span>
3. すべてのキーを放します。
4. 電源ボタンをもう一度押して、[Mac](http://d.hatena.ne.jp/keyword/Mac) の電源を入れます。

### おわりに

SMCリセットをしても、何か音がなる訳でもなく、何かのランプが点灯するわけでもないので、リセットがされたのかどうかわからないかもしれませんが、これリセットされてるそうです。  
ただ長期間放置後に復帰しなくなる問題がSMCリセットで解決したのか正直まだよくわからないです。  
今日は発生しませんでしたが、明日また発生するかもしれませんので、もう少し様子見します。  
あとUSB-Cハブに[HDMI](http://d.hatena.ne.jp/keyword/HDMI)や電源、キーボードやマウス等の結構多めのデ[バイス](http://d.hatena.ne.jp/keyword/%A5%D0%A5%A4%A5%B9)をつけているのでその影響があるのかもしれません。

**【2017/9/23 追記】**

上記のSMCリセット以降、[Macbook](http://d.hatena.ne.jp/keyword/Macbook)が復帰しなく問題は発生しなくなりました。

SMCリセットで解決したみたいですね。
