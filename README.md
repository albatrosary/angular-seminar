# 準備
## サーバのインストール
### Python

「 http://www.python.jp/ 」からダウンロードしインストールします  

コマンドラインで  

$ python -m SimpleHTTPServer  

とすると[localhost:8000]で簡易サーバが立ち上がります。  

### Ruby
Rubyは「 https://www.ruby-lang.org/ja/ 」からダウンロードしインストールします  
  
$ ruby -run -e httpd -- -p 8000 .  
  
とすると同じく[localhost:8000]で簡易サーバが立ち上がります。

### Web IDE

Web IDEは多くあり簡易サーバをクライアントにインストール必要がありません  

http://plnkr.co/edit/  
http://jsdo.it/  
http://jsfiddle.net/  

### Windows
IISの機能を有効にすることでアプリケーションサーバを起動することができます。  
設定については割愛します。  

## AngularJSのインストール

「 https://angularjs.org/ 」からダウンロードしインストール  

インストール完了後下記ディレクトリのようにangular.jsファイルを配置します。  
尚、bowerを利用するのであれば  

$ bower install angular#1.3.1  
  
でモジュールをダウンロードできます。  

プロジェクトディレクトリ  
|-index.html  
|-angular.js  
  
もしくは  
  
プロジェクトディレクトリ  
|-index.html  
|-bower_components  
　|- angular  
　　|- angular.js  
  

# 練習
## index.htmlにAngularJSを読み込ませる  

index.html に AngularJSのモジュールを読み込ませます。scriptタグの src にダウンロードした angular.js を配置するだけです。
次に bodyタグに ng-app を記載します。こうすると body タグで括られた範囲で angular が有効になります。  
bower を使ってインストールした場合は:

&lt;!doctype html&gt;  
&lt;html class="no-js"&gt;  
&nbsp;&nbsp;&lt;head&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="utf-8"&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;AngularJSの勉強&lt;/title&gt;  
&nbsp;&nbsp;&lt;/head&gt;  
&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src="bower_components/angular/angular.js"&gt;&lt;/script&gt;  
&nbsp;&nbsp;&lt;/body&gt;  
&lt;/html&gt;  

ダウンロードし配置した場合は：  

&lt;!doctype html&gt;  
&lt;html class="no-js"&gt;  
&nbsp;&nbsp;&lt;head&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="utf-8"&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;AngularJSの勉強&lt;/title&gt;  
&nbsp;&nbsp;&lt;/head&gt;  
&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src="angular.js"&gt;&lt;/script&gt;  
&nbsp;&nbsp;&lt;/body&gt;  
&lt;/html&gt;  

URLで指定している場合は：  

&lt;!doctype html&gt;  
&lt;html class="no-js"&gt;  
&nbsp;&nbsp;&lt;head&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="utf-8"&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;AngularJSの勉強&lt;/title&gt;  
&nbsp;&nbsp;&lt;/head&gt;  
&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.1/angular.js" &gt;&lt;/script&gt;  
&nbsp;&nbsp;&lt;/body&gt;  
&lt;/html&gt;  

## {{}}を使った簡単な計算

AngularJS が正しく実行されているか確認します。{{}}という少し変わった書き方を使って確認します。  

&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;{{1+1}}  

と bodyタグの下に記載してください。表示された結果が  
&nbsp;&nbsp;&nbsp;&nbsp;2  
となれば成功です。


## バインディング

AngularJS が注目を集めた機能、双方向バインディングについて触れていきたいと思います。  

### 双方向バインディング{{hoge}}

先ほど {{}} については説明しました。今度はテキストボックスで入力された値を {{}} に表示してみます：  

&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" ng-model="hoge"&gt;&lt;br&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;{{hoge}}  

これでテキストボックスから {{}} へプログラムらしいプログラムは書かずにバインディングできました。参考までにテキストボックスを二つ作った場合はどうでしょう？行ってみます：  

&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" ng-model="hoge"&gt;&lt;br&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" ng-model="hoge"&gt;&lt;br&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;{{hoge}}  

どちらのテキストボックスに入力してもバインディングされているのが確認できると思います。   

### ワンタイムバインディング{{::hoge}}

バインディングですが一回だけバインドさせるという機能があります。それがワンタイムバインディングと呼ばれるものです。
書き方は簡単で、モデルで指定したプロパティの前に  
&nbsp;&nbsp;::  
を記載するだけです。

&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" ng-model="hoge"&gt;&lt;br&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" ng-model="hoge"&gt;&lt;br&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;{{hoge}}&lt;br&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;ワンタイムバインディング:{{::hoge}}  

## ディレクティブ（ng-xxxを使ってみる）
### ng-model

ng-model については詳しい説明なしに利用しましたし、AngularJS を使うために ng-app も既に触りました。ここまでで実は2つもディレクティブについて学んだということになります。余談ですが AngularJS 既に用意しているディレクティブのことをビルトインディレクティブと呼びます。ディレクティブは開発者自身が作ることができ開発したディレクティブはカスタムディレクティブと呼んでいます。  
話を元に戻して ng-model ですが inputタグや selectタグ、 textareaタグなどの要素にたいして「モデル」と呼ばれるデータを保持しておく領域を管理すると共にバインディングを提供します。このことは先ほどのサンプルで体験済みです！  

### ng-bind

バインディングで {{}} を利用しましたが、アプリケーションを作っているとバインディングに若干の時間が必要になる場合があります。そのときにかっこ悪いかもしれませんが {{}} がチラッと見えることがあります。それを回避させるために ng-bind を利用します。先ほどのサンプルの {{}} を置き換えてみます。

&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" ng-model="hoge"&gt;&lt;br&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" ng-model="hoge"&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;span ng-bind="hoge"&gt;&lt;/span&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;ワンタイムバインディング:&lt;span ng-bind="::hoge"&gt;&lt;/span&gt;  

### ng-show と ng-if

もう少しプログラムチックな動きをさせるために ng-show と ng-if を利用してみます。テキストボックスに入力した値が 1 のときにメッセージを出力するというロジックを記述してみます。  

&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" ng-model="hoge"&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ng-show="hoge==='1'"&gt;&lt;span ng-bind="hoge"&gt;&lt;/span&gt;が入力されました&lt;/div&gt;  

これは  ng-if でも書くことができます。  

&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" ng-model="hoge"&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ng-if="hoge==='1'"&gt;&lt;span ng-bind="hoge"&gt;&lt;/span&gt;が入力されました&lt;/div&gt;  

### ng-repeat
### ng-init
### ng-minlength
### ng-maxlength
### ng-invalid
### ng-dirty
### ng-include
### ng-click
### ng-class
### ng-form
## プログラムを書いてみる
### angular.module
### constant
### value
### controller
