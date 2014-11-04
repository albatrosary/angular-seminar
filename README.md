# 準備
## サーバのインストール

「 http://www.python.jp/ 」からダウンロードしインストール  

コマンドラインで  
$ python -m SimpleHTTPServer  
とすると[localhost:8000]で簡易サーバが立ち上がります。  

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