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

### ng-invalid と ng-dirty

テキストボックスに対してバリデーションチェックを行います。簡単に必須チェックを行いましょう。先ほどのサンプルはテキストボックスに required を入れることで必須項目となります。

&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" ng-model="hoge" required &gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ng-if="hoge==='1'"&gt;&lt;span ng-bind="hoge"&gt;&lt;/span&gt;が入力されました&lt;/div&gt;  

画面上、警告も何も表示されないので何が起きているのか確認できませんが、カスケードスタイルシートを定義するとよく理解できます。headタグの中に次の定義をしてください：  

&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;AngularJSの勉強&lt;/title&gt;  
&nbsp;&nbsp;&lt;style&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;input.ng-invalid {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-color: #ff0000;  
&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&lt;/style&gt;  
&nbsp;&nbsp;&lt;/head&gt;  

何も入力されていないときにはテキストボックスの縁が赤くなっていることが確認できます。ただ、これだと入力前から赤いので UI としてはイマイチといった感じです。ここで ng-dirty を利用します。カスケードスタイルシートを次のように変更してください：  

&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;AngularJSの勉強&lt;/title&gt;  
&nbsp;&nbsp;&lt;style&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;input.ng-invalid.ng-dirty {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-color: #ff0000;  
&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&lt;/style&gt;  
&nbsp;&nbsp;&lt;/head&gt;  

こうすることで入力前は警告なしで、入力後、空欄にした場合は赤くなることが確認できます。

### $invalid と $dirty を利用する（ちょっと寄り道）

入力されてなかった場合、赤くなりましたがメッセージも表示します。メッセージを表示するためには formタグ を用意し「名前」をつける必要があります。formタグ名前を「demo」としテキストボックスの名前を「username」とします。警告メッセージは「必須入力です」にしましょう。するとbodyタグの中身は次のようになります。

&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;form name="demo"&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" name="username" ng-model="hoge" required&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ng-show="hoge==='1'"&gt;&lt;span   ng-bind="hoge"&gt;&lt;/span&gt;が入力されました&lt;/div&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p ng-show="demo.username.$invalid && demo.username.$dirty"&gt;必須入力です&lt;/p&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;  

### ng-minlength と ng-maxlength

更に、入力された文字の長さを定義することができます。usernameの長さを4文字以上、8文字未満として定義します。

&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;form name="demo"&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" name="username" ng-model="hoge" ng-minlength="4" ng-maxlength="8" required&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ng-show="hoge==='1'"&gt;&lt;span   ng-bind="hoge"&gt;&lt;/span&gt;が入力されました&lt;/div&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p ng-show="demo.username.$invalid && demo.username.$dirty"&gt;必須入力です&lt;/p&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;  

機能に合わせてメッセージも変更します。$errorを使うことでメッセージの幅が広がります。

&nbsp;&nbsp;&lt;body ng-app&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;form name="demo"&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" name="username" ng-model="hoge" ng-minlength="4" ng-maxlength="8" required&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ng-show="hoge==='1'"&gt;&lt;span   ng-bind="hoge"&gt;&lt;/span&gt;が入力されました&lt;/div&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p ng-show="demo.username.$invalid && demo.username.$dirty"&gt;入力された値が不正です&lt;/p&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p ng-show="demo.username.$error.minlength"&gt;4文字以下です&lt;/p&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p ng-show="demo.username.$error.maxlength"&gt;8文字以上入力されています&lt;/p&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;  

入力系の画面を作成する場合は、こういった AngularJS の機能を使うことでJavaScriptを書かなくても多くの機能を実装することができます。ビルトインディレクティブの威力といったところです。次に一覧を作成し、さらにディレクティブの機能について触れていきます。

### ng-init と ng-repeat

ng-init は AngularJS で何か処理を行わせるための前処理を行う部分です。ここに一覧表示させるデータを定義し ng-repeat で定義したデータを表示します。  
先ほどのform終了タグの下に追加します。

&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ng-init="  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;demoData = [  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: '山田', age: 24},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: '田中', age: 28},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: '佐藤', age: 18},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: '井上', age: 32},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: '高橋', age: 46}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]  
&nbsp;&nbsp;&nbsp;&nbsp;"&gt;&lt;/div&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li ng-repeat="data in demoData"&gt;{{data.name}} - {{data.age}}&lt;/li&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;  

一覧表示されました。ここからバインディングの威力が問われます。filter という機能を実装します。  

&nbsp;&nbsp;ng-repeat="data in demoData"  

の部分に手を加えます。

&nbsp;&nbsp;ng-repeat="data in demoData | filter search" 

次に ng-model として search と定義したテキストボックスを用意います。先ほどのサンプルは  

&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" ng-model="search"&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ng-init="  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;demoData = [  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: '山田', age: 24},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: '田中', age: 28},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: '佐藤', age: 18},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: '井上', age: 32},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: '高橋', age: 46}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]  
&nbsp;&nbsp;&nbsp;&nbsp;"&gt;&lt;/div&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li ng-repeat="data in demoData | filter search"&gt;{{data.name}} - {{data.age}}&lt;/li&gt;  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;  

簡易検索ができました。たったこれだけのことで今まででは高機能だったものを実装することができました。

### ng-include

今までの流れとは異なりますがここで便利機能 ng-include を使っていましょう。これを使うことでいろいろなページに共通のHTMLファイルを埋め込むことができます。例えばサイトのタイトルやメニューなどでこの機能を利用することが可能です。  
はじめに header.html というファイルを index.html と同じディレクトリに作成してください。  

プロジェクトディレクトリ  
|-index.html  
|-header.html  

header.html の中身は  

&lt;h1&gt;AngularJS勉強会&lt;/h1&gt;  

としましょう。これを ng-include で取り込みます。bodyタグの下に

&nbsp;&nbsp;&lt;body ng-app&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ng-include="'header.html'"&gt;&lt;/div&gt;

と記載してください。うまくタイトルが表示されます。

## プログラムを書いてみる
### angular.module
### constant
### value
### controller
