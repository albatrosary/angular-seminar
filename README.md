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

### webide

Web IDEは多くあり簡易サーバをクライアントにインストール必要がありません  

http://plnkr.co/edit/  
http://jsdo.it/  
http://jsfiddle.net/  

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
## {{}}を使った簡単な計算
## バインディング
### 双方向バインディング{{hoge}}
### ワンタイムバインディング{{::hoge}}
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
## プログラムを書いてみる
### angular.module
### constant
### value
### controller