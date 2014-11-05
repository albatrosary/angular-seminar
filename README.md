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
### ng-show
### ng-if
### ng-repeat
### ng-init
### ng-minlength
### ng-maxlength
### ng-invalid
### ng-dirty
### ng-bind
### ng-include
### ng-click
### ng-class
### ng-form
## プログラムを書いてみる
### angular.module
### constant
### value
### controller
