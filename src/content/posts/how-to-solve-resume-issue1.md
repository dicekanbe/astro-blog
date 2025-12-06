---
title: 'MacBook Pro (13-inch, 2017, Two Thunderbolt 3 ports)がスリープから復帰しなくなっった'
date: '2018-05-11T22:19:12+09:00'
status: publish
permalink: /entry/how-to-solve-resume-issue1
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

またまた私の[MacBook Pro](http://d.hatena.ne.jp/keyword/MacBook%20Pro) (13-inch, 2017, Two Thunderbolt 3 [ports](http://d.hatena.ne.jp/keyword/ports))がスリープから復帰しなくなってしまいました。

電源ボタンを押しても、全く反応がなく、ディスプレイに何も表示されない状態でしたが、電源コードを付け直したり、電源ボタンを押したりしていると、アップルマークが表示され、起動するようになりなりました。

GW明けで、久しぶりに起動させたのでバッテリーが空になってたのかと思い、バッテリー状態を確認してみましたが、30%程度でまだ余裕はあります。  
とりあえずNVRAM（[PRAM](http://d.hatena.ne.jp/keyword/PRAM))のリセットとSMSのリセットを行い、次の日、様子をみることにしましたが、次の日の朝も復帰せず、リセットの効果はありませんでした。

NVRAM（[PRAM](http://d.hatena.ne.jp/keyword/PRAM)）のSMCのリセット方法は以下です。

<iframe class="embed-card embed-blogcard" frameborder="0" scrolling="no" src="https://hatenablog-parts.com/embed?url=http%3A%2F%2Fwww.exp-cards.net%2Fentry%2Fhow-to-reset-nvram-macbookpro2017" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;" title="MacBook Pro（2017）でのNVRAM（PRAM)リセット方法 - 経験値カード"></iframe><cite class="hatena-citation">[www.exp-cards.net](http://www.exp-cards.net/entry/how-to-reset-nvram-macbookpro2017)</cite>

<iframe class="embed-card embed-blogcard" frameborder="0" scrolling="no" src="https://hatenablog-parts.com/embed?url=http%3A%2F%2Fwww.exp-cards.net%2Fentry%2Fhow-to-rest-smc-macbookpro2017" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;" title="MacbookPro(2017)がスリープから復帰しなくなったのでSMCをリセットしてみた - 経験値カード"></iframe><cite class="hatena-citation">[www.exp-cards.net](http://www.exp-cards.net/entry/how-to-rest-smc-macbookpro2017)</cite>

前回でもそうだったのですが、スリープ後、短時間後の復帰なら問題ないです。  
長時間放置（一晩とか）した後に復帰で問題が発生していて、復帰できなくなります。  
復帰ができず、今回は、完全にフリーズ状態になっているようです。  
画面は真っ黒でキーを押しても何も反応しません。  
しかも、電源ボタンを押してもすぐには反応しなくなってしまいました。

調べてみると、似たようなケースが発生したとの報告を発見しました。

どうも原因はHigh [Sierra](http://d.hatena.ne.jp/keyword/Sierra)のバグがあり、セーフスリープからの復帰時に問題があるようです。（私のOSのバーションは10.13.4で、現時点で最新です。）

解決策というか回避策は、セーフスリープを使わず普通のスリープを使うとのことですが、セーフスリープとスリープの違いは何でしょう。

- [スリープの種類（Mac）](#%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%97%E3%81%AE%E7%A8%AE%E9%A1%9EMac)
  - [スリープ](#%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%97)
  - [セーフスリープ](#%E3%82%BB%E3%83%BC%E3%83%95%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%97)
  - [ディープスリープ](#%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%97)
- [スリープの種類の確認方法](#%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%97%E3%81%AE%E7%A8%AE%E9%A1%9E%E3%81%AE%E7%A2%BA%E8%AA%8D%E6%96%B9%E6%B3%95)
- [セールスリープからノーマルスリープへ変更する方法](#%E3%82%BB%E3%83%BC%E3%83%AB%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%97%E3%81%8B%E3%82%89%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%97%E3%81%B8%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)
- [おわりに](#%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB)

### スリープの種類（[Mac](http://d.hatena.ne.jp/keyword/Mac)）

[Mac](http://d.hatena.ne.jp/keyword/Mac)には以下の３種のスリープがあるようです。

・スリープ  
・セーフスリープ  
・ディープスリープ

#### スリープ

「スリープ」は復帰時に、メモリ内のデータのみ利用しますので、常にメモリへ電力を供給しておく必要があります。  
つまりバッテリーが空になりメモリへ電力が供給されなくなると、データは消えてしまうんですね。  
作成中のドキュメントを保存してなかったりすると、消えてしまいますが、私としては、バッテリー空の状態になるケースってのがほとんどないし、定期的にドキュメントの保存はするので、スリープでも問題ないかなと思ってます。

#### セーフスリープ

「セーフリープ」は、「スリープ」とほぼ同じですが、メモリだけじゃなく、スリープ時のデータを[ファイルシステム](http://d.hatena.ne.jp/keyword/%A5%D5%A5%A1%A5%A4%A5%EB%A5%B7%A5%B9%A5%C6%A5%E0)へも保存するんですね。  
だからバッテリーがなくなって、メモリ上のスリープデータが消えてしまっても、ディスク上にも同じデータがあるので、そちらを使い復帰できるというわけです。  
というわけで、「スリープ」より高機能ですが、今回バグが出てるのも、このセーフリープでして、このバグを回避するために、セーフリープを使わないようにしました。

#### ディープスリープ

最後に「ディープスリープ」についてですが、スリープデータを[ファイルシステム](http://d.hatena.ne.jp/keyword/%A5%D5%A5%A1%A5%A4%A5%EB%A5%B7%A5%B9%A5%C6%A5%E0)へ書き出し、復帰時もそのデータを利用するスリープです。  
ですので、電力消費がほとんどなくなるのですが、復帰時時間がかかります。

### スリープの種類の確認方法

デフォルトではセーフスリープが設定されているので、変更した覚えがない人は、セーフスリープが設定されているはずですが、念の為のため確認しましょう。

以下のコマンドで確認できます。

```
<pre class="code lang-css" data-lang="css" data-unlink="">pmset -g
```

すると、以下のように表示されるかと思います。

```
<pre class="code lang-css" data-lang="css" data-unlink="">System-wide power settings:
Currently in use:
standbydelay         10800
standby              1
halfdim              1
hibernatefile        /var/vm/sleepimage
powernap             0
gpuswitch            2
disksleep            10
sleep                1 (sleep prevented by sharingd, coreaudiod)
autopoweroffdelay    28800
hibernatemode        3
autopoweroff         1
ttyskeepawake        1
displaysleep         2
tcpkeepalive         1
acwake               0
lidwake              1
```

注目すべきは以下の箇所で

```
<pre class="code lang-css" data-lang="css" data-unlink=""> hibernatemode        3
```

「３」がデフォルト値である「セーフリープ」を意味します。

つまり、上記の結果では現在は「セーフリープ」が設定されているんですね。

そして、０が「スリープ」、25が「ディープスリープ」を意味します。

今回はセーフリープからスリープへ変更したいので、hibernatemodeの値を０へ設定します。設定コマンドは以下になります。

### セールスリープからノー[マルス](http://d.hatena.ne.jp/keyword/%A5%DE%A5%EB%A5%B9)リープへ変更する方法

```
<pre class="code lang-css" data-lang="css" data-unlink=""> sudo pmset -a hibernatemode 0
```

上記コマンド起動にはパスワードが必要ですので、入力しましょう。

再度以下のコマンドで0が設定されたか確認しましょう。

```
<pre class="code lang-css" data-lang="css" data-unlink="">pmset -g
```

```
<pre class="code lang-css" data-lang="css" data-unlink="">System-wide power settings:
Currently in use:
standbydelay         10800
standby              1
halfdim              1
hibernatefile        /var/vm/sleepimage
powernap             0
gpuswitch            2
disksleep            10
sleep                1 (sleep prevented by sharingd, coreaudiod)
autopoweroffdelay    28800
<strong>hibernatemode        0</strong>
autopoweroff         1
ttyskeepawake        1
displaysleep         2
tcpkeepalive         1
acwake               0
lidwake              1
```

０へ変更されてるのを確認し、OSを再起動しましょう。

### おわりに

結局のところ、これの不具合が原因ではなかったようで、この方法では解決しませんでした。引き続き問題を調査したいと思います。
