# 準備
## サーバのインストール
### Python

「 http://www.python.jp/ 」からダウンロードしインストールします  

コマンドラインで  
```
$ python -m SimpleHTTPServer  
```
とすると[localhost:8000]で簡易サーバが立ち上がります。  

### Ruby
Rubyは「 https://www.ruby-lang.org/ja/ 」からダウンロードしインストールします  
```
$ ruby -run -e httpd -- -p 8000 .  
```
とすると同じく[localhost:8000]で簡易サーバが立ち上がります。

### Web IDE

Web IDEは多くあり簡易サーバをクライアントにインストール必要がありません  

http://plnkr.co/edit/  
http://jsdo.it/  
http://jsfiddle.net/  
http://phi-jp.github.io/runstant/release/alpha/index.html  

### Windows
IISの機能を有効にすることでアプリケーションサーバを起動することができます。  
設定については割愛します。  

## AngularJSのインストール

「 https://angularjs.org/ 」からダウンロードしインストール  

インストール完了後下記ディレクトリのようにangular.jsファイルを配置します。  
尚、bowerを利用するのであれば  
```
$ bower install angular#1.3.1  
```
でモジュールをダウンロードできます。  
```  
プロジェクトディレクトリ  
|-index.html  
|-bower_components  
　|- angular  
　　|- angular.js  
```  
AngularJSのサイトから落とした場合は index.html と同じ階層に配置してください。
```
プロジェクトディレクトリ  
|-index.html  
|-angular.js  
```

# はじめよう！
## index.htmlにAngularJSを読み込ませる  

index.html に AngularJSのモジュールを読み込ませます。scriptタグの src にダウンロードした angular.js を配置するだけです。
次に bodyタグに ng-app を記載します。こうすると body タグで括られた範囲で angular が有効になります。  
bower を使ってインストールした場合は:
```html
<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title>AngularJSの勉強</title>
  </head>
  <body ng-app>
    <script src="bower_components/angular/angular.js"></script>
  </body>
</html>
```
ダウンロードし配置した場合は：  
```html
<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title>AngularJSの勉強</title>
  </head>
  <body ng-app>
    <script src="angular.js"></script>
  </body>
</html>
```
URLで指定している場合は：  
```html
<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title>AngularJSの勉強</title>
  </head>
  <body ng-app>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.1/angular.js" ></script>
  </body>
</html> 
```
## {{}}を使った簡単な計算

AngularJS が正しく実行されているか確認します。{{}}という少し変わった書き方を使って確認します。  
```html
  <body ng-app>
    {{1+1}}
    <script src="bower_components/angular/angular.js"></script>
  </body>
```
と bodyタグの下に記載してください。表示された結果が  
```
    2  
```
となれば成功です。


## バインディング

AngularJS が注目を集めた機能、双方向バインディングについて触れていきたいと思います。  

### 双方向バインディング{{hoge}}

先ほど {{}} については説明しました。今度はテキストボックスで入力された値を {{}} に表示してみます：  
```html
  <body ng-app>
    <input type="text" ng-model="hoge"><br>
    {{hoge}}
    <script src="bower_components/angular/angular.js"></script>
  </body>
```
これでテキストボックスから {{}} へプログラムらしいプログラムは書かずにバインディングできました。参考までにテキストボックスを二つ作った場合はどうでしょう？行ってみます：  
```html
  <body ng-app>
    <input type="text" ng-model="hoge"><br>
    <input type="text" ng-model="hoge"><br>
    {{hoge}}
    <script src="bower_components/angular/angular.js"></script>
  </body>
```
どちらのテキストボックスに入力してもバインディングされているのが確認できると思います。   

### ワンタイムバインディング{{::hoge}}

バインディングですが一回だけバインドさせるという機能があります。それがワンタイムバインディングと呼ばれるものです。
書き方は簡単で、モデルで指定したプロパティの前に  
```
  ::  
```
を記載するだけです。
```html
  <body ng-app>
    <input type="text" ng-model="hoge"><br>
    <input type="text" ng-model="hoge"><br>
    {{hoge}}<br>
    ワンタイムバインディング:{{::hoge}}
    <script src="bower_components/angular/angular.js"></script>
  </body>
```
## ディレクティブ（ng-xxxを使ってみる）
### ng-model

ng-model については詳しい説明なしに利用しましたし、AngularJS を使うために ng-app も既に触りました。ここまでで実は2つもディレクティブについて学んだということになります。余談ですが AngularJS 既に用意しているディレクティブのことをビルトインディレクティブと呼びます。ディレクティブは開発者自身が作ることができ開発したディレクティブはカスタムディレクティブと呼んでいます。  
話を元に戻して ng-model ですが inputタグや selectタグ、 textareaタグなどの要素にたいして「モデル」と呼ばれるデータを保持しておく領域を管理すると共にバインディングを提供します。このことは先ほどのサンプルで体験済みです！  

### ng-bind

バインディングで {{}} を利用しましたが、アプリケーションを作っているとバインディングに若干の時間が必要になる場合があります。そのときにかっこ悪いかもしれませんが {{}} がチラッと見えることがあります。それを回避させるために ng-bind を利用します。先ほどのサンプルの {{}} を置き換えてみます。
```html
  <body ng-app>
    <input type="text" ng-model="hoge"><br>
    <input type="text" ng-model="hoge">
    <span ng-bind="hoge"></span>
    ワンタイムバインディング:<span ng-bind="::hoge"></span>
    <script src="bower_components/angular/angular.js"></script>
  </body>
```
### ng-show と ng-if

もう少しプログラムチックな動きをさせるために ng-show と ng-if を利用してみます。テキストボックスに入力した値が 1 のときにメッセージを出力するというロジックを記述してみます。  
```html
  <body ng-app>
    <input type="text" ng-model="hoge">
    <div ng-show="hoge==='1'"><span ng-bind="hoge"></span>が入力されました</div>
    <script src="bower_components/angular/angular.js"></script>
  </body>
```  
これは  ng-if でも書くことができます。  
```html
  <body ng-app>
    <input type="text" ng-model="hoge">
    <div ng-if="hoge==='1'"><span ng-bind="hoge"></span>が入力されました</div>
    <script src="bower_components/angular/angular.js"></script>
  </body>
``` 
### ng-invalid と ng-dirty

テキストボックスに対してバリデーションチェックを行います。簡単に必須チェックを行いましょう。先ほどのサンプルはテキストボックスに required を入れることで必須項目となります。
```html
  <body ng-app>
    <input type="text" ng-model="hoge" required >
    <div ng-if="hoge==='1'"><span ng-bind="hoge"></span>が入力されました</div>
    <script src="bower_components/angular/angular.js"></script>
  </body>
```
画面上、警告も何も表示されないので何が起きているのか確認できませんが、カスケードスタイルシートを定義するとよく理解できます。headタグの中に次の定義をしてください：  
```html
  <head>
    <meta charset="utf-8">
    <title>AngularJSの勉強</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <style>
      input.ng-invalid {
        border-color: #ff0000;
      }
    </style>
  </head>
```
何も入力されていないときにはテキストボックスの縁が赤くなっていることが確認できます。ただ、これだと入力前から赤いので UI としてはイマイチといった感じです。ここで ng-dirty を利用します。カスケードスタイルシートを次のように変更してください：  
```html
  <head>
    <meta charset="utf-8">
    <title>AngularJSの勉強</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <style>
      input.ng-invalid.ng-dirty {
        border-color: #ff0000;
      }
    </style>
  </head>
```
こうすることで入力前は警告なしで、入力後、空欄にした場合は赤くなることが確認できます。

### $invalid と $dirty を利用する（ちょっと寄り道）

入力されてなかった場合、赤くなりましたがメッセージも表示します。メッセージを表示するためには formタグ を用意し「名前」をつける必要があります。formタグ名前を「demo」としテキストボックスの名前を「username」とします。警告メッセージは「必須入力です」にしましょう。するとbodyタグの中身は次のようになります。
```html
  <body ng-app>
    <form name="demo">
      <input type="text" name="username" ng-model="hoge" required>
      <div ng-show="hoge==='1'"><span ng-bind="hoge"></span>が入力されました</div>
      <p ng-show="demo.username.$invalid && demo.username.$dirty">必須入力です</p>
    </form>
    <script src="bower_components/angular/angular.js"></script>
  </body>
```
### ng-minlength と ng-maxlength

更に、入力された文字の長さを定義することができます。usernameの長さを4文字以上、8文字未満として定義します。
```html
  <body ng-app>
    <form name="demo">
      <input type="text" name="username" ng-model="hoge" ng-minlength="4" ng-maxlength="8" required>
      <div ng-show="hoge==='1'"><span ng-bind="hoge"></span>が入力されました</div>
      <p ng-show="demo.username.$invalid && demo.username.$dirty">必須入力です</p>
    </form>
    <script src="bower_components/angular/angular.js"></script>
  </body>
```
機能に合わせてメッセージも変更します。$errorを使うことでメッセージの幅が広がります。
```html
  <body ng-app>
    <form name="demo">
      <input type="text" name="username" ng-model="hoge" ng-minlength="4" ng-maxlength="8" required>
      <div ng-show="hoge==='1'"><span ng-bind="hoge"></span>が入力されました</div>
      <p ng-show="demo.username.$invalid && demo.username.$dirty">入力された値が不正です</p>
      <p ng-show="demo.username.$error.minlength">4文字以下です</p>
      <p ng-show="demo.username.$error.maxlength">8文字以上入力されています</p>
    </form>
    <script src="bower_components/angular/angular.js"></script>
  </body>
```
入力系の画面を作成する場合は、こういった AngularJS の機能を使うことでJavaScriptを書かなくても多くの機能を実装することができます。ビルトインディレクティブの威力といったところです。次に一覧を作成し、さらにディレクティブの機能について触れていきます。

### ng-init と ng-repeat

ng-init は AngularJS で何か処理を行わせるための前処理を行う部分です。ここに一覧表示させるデータを定義し ng-repeat で定義したデータを表示します。  
先ほどのform終了タグの下に追加します。
```html
    <div ng-init="
      demoData = [
        {name: '山田', age: 24},
        {name: '田中', age: 28},
        {name: '佐藤', age: 18},
        {name: '井上', age: 32},
        {name: '高橋', age: 46}
      ]
    "></div>
    <ul>
      <li ng-repeat="data in demoData">{{data.name}} - {{data.age}}</li>
    </ul>
```
一覧表示されました。ここからバインディングの威力が問われます。filter という機能を実装します。  
```
  ng-repeat="data in demoData"
```
の部分に手を加えます。
```
  ng-repeat="data in demoData | filter: search"
```
次に ng-model として search と定義したテキストボックスを用意います。先ほどのサンプルは  
```html
    <input type="text" ng-model="search">
    <div ng-init="
      demoData = [
        {name: '山田', age: 24},
        {name: '田中', age: 28},
        {name: '佐藤', age: 18},
        {name: '井上', age: 32},
        {name: '高橋', age: 46}
      ]
    "></div>
    <ul>
      <li ng-repeat="data in demoData | filter: search">{{data.name}} - {{data.age}}</li>
    </ul>
```
簡易検索ができました。たったこれだけのことで今まででは高機能だったものを実装することができました。

### ng-options

配列が定義されてますので selectタグを使ってみます。selectタグで利用されるのが ng-options です

```html
  <body ng-app>
    <div ng-init="
      demoData = [
        {name: '山田', age: 24},
        {name: '田中', age: 28},
        {name: '佐藤', age: 18},
        {name: '井上', age: 32},
        {name: '高橋', age: 46}
      ]
    "></div>
    <select ng-model="name" ng-options="data.name for data in demoData">
      <option value="">何か入力してください<option>
    </select>
    <div>選択されたのは:{{name}}</div>
    <script src="bower_components/angular/angular.js"></script>
  </body>
```

### ng-value

次に radioボタンを作ってみます。その時に利用するのが ng-value です。

```html
  <body ng-app>
    <div ng-init="name.selected=''"></div>
    <div ng-init="
      demoData = [
        {name: '山田', age: 24},
        {name: '田中', age: 28},
        {name: '佐藤', age: 18},
        {name: '井上', age: 32},
        {name: '高橋', age: 46}
      ]
    "></div>

    <ul>
      <li ng-repeat="data in demoData">
        <input type="radio" name="hoge" ng-model="name.selected" ng-value="data.name">{{data.name}}
      </li>
    </ul>
    <div>選択されたのは:{{name.selected}}</div>
    <script src="bower_components/angular/angular.js"></script>
  </body>
```
inputタグに対してもAngularJSはいろいろなディレクティブを用意しています。

### ng-copy と ng-paste 、ng-cut

少し面白いディレクティブに ng-copy、ng-paste、ng-cutといったディレクティブがあります。
```html
  <body ng-app>
    <input ng-paste="paste=true" ng-init="paste=false" placeholder='paste here'>pasted: {{paste}}<br>
    <input ng-copy="copied=true" ng-init="copied=false; copyvalue='copy me'" ng-model="copyvalue">copied: {{copied}}<br>
    <input ng-cut="cut=true" ng-init="cut=false; cutvalue='cut me'" ng-model="cutvalue">cut: {{cut}}<br>
    <script src="bower_components/angular/angular.js"></script>
  </body>
```
こうしたキー操作（ng-keydown、ng-keypress、ng-keyupなど）やマウス操作（ng-mousedown、ng-mousemove、ng-mouseoverなど）様々なディレクティブが用意されています。


### ng-include

今までの流れとは異なりますがここで便利機能 ng-include を使っていましょう。これを使うことでいろいろなページに共通のHTMLファイルを埋め込むことができます。例えばサイトのタイトルやメニューなどでこの機能を利用することが可能です。  
はじめに header.html というファイルを index.html と同じディレクトリに作成してください。  
```
プロジェクトディレクトリ  
|-index.html  
|-header.html  
```
header.html の中身は  
```html
<h1>AngularJS勉強会</h1>
```
としましょう。これを ng-include で取り込みます。bodyタグの下に
```html
  <body ng-app>
    <div ng-include="'header.html'"></div>
```
と記載してください。うまくタイトルが表示されます。

## プログラムを書いてみる

せっかくですので JavaScript を少しだけ記述してみます。JavaScriptを記載する場所を定義します。
```html
<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title>勉強</title>
  </head>
  <body ng-app>
    <div ng-include="'header.html'"></div>
    <script src="bower_components/angular/angular.js" ></script>
    <script>
(function (){
// ここにJavaScriptを書きます

})();
    </script>
  </body>
</html> 
```
### angular.module

はじめましょう！  
まず、ng-appを ng-app="app" とAngularJSアプリケーションに名前をつけます。これで再度実行してみてください。エラーになるはずです。ここで angular.module をJavascript に定義します。
```html
(function (){
// ここにJavaScriptを書きます
  angular.module('app', []);
})();  
```
これで再度実行してみてください。ちゃんと見出しが表示できていると思います。これで準備ができました。今は宣言だけをしましたので、実際のプログラムを書く場所を定義します。

### controller

コントローラーを配置することでいろいろな処理を記載することができます。
```
(function (){
  // ここにJavaScriptを書きます
  var Ctrl = function ($scope){
    // controllerの中身
  };

  angular.module('app', [])
    .controller('ctrl', Ctrl);
})();
```
$scope というのがありますが、アプリケーションを作るときには威力を発揮します。

このコントローラが扱うコンテンツの部分をHTMLに定義します。
```html
    <div ng-include="'header.html'"></div>
    <div ng-controller="ctrl">
    <!-- 何かを記載 -->

    </div>
    <script src="bower_components/angular/angular.js" ></script>  
```
画面上にメッセージを表示します。「AngularJSアプリケーション」と表示しましょう。まずJavaScriptのコントローラーに  
```
  var Ctrl = function ($scope){
    // controllerの中身
    $scope.message = "AngularJSアプリケーション";
  };
```
と定義します。次にコンテンツであるHTMLのコントローラー部分に、呼び出す記載をします。実はこれについては既に学習済みです。
```html
    <div ng-include="'header.html'"></div>
    <div ng-controller="ctrl">
    <!-- 何かを記載 -->
      <span ng-bind="::message"></span>
    </div>
    <script src="bower_components/angular/angular.js" ></script>
```
いかがでしょう！  
さらにボタンを使って何か処理をさせましょう。クリックしてメッセージを表示する機能を追加します。まずボタンから  
```html
    <div ng-include="'header.html'"></div>
    <div ng-controller="ctrl">
    <!-- 何かを記載 -->
      <input type="button" value="クリックでメッセージ表示" ng-click="onClick()">
      <span ng-bind="::message"></span>
    </div>
    <script src="bower_components/angular/angular.js" ></script>
```
コントローラーは  
```
  var Ctrl = function ($scope){
    // controllerの中身
    $scope.onClick = function () {
      $scope.message = "AngularJSアプリケーション";
    };
  };
```
かなり本格できなアプリケーションになってきたと思います。プログラムを書き始めると $scope が目立ってきます。AngularJSはこの $scope で厳密なスコープ定義をしているとても重要なファクターです。実際にフッターというコントローラーを追加してみます。コンテンツ部分は
```html
    <div ng-include="'header.html'"></div>
    <div ng-controller="ctrl">
    <!-- 何かを記載 -->
      <input type="button" value="クリックでメッセージ表示" ng-click="onClick()">
      <span ng-bind="::message"></span>
    </div>
    <div ng-controller="footerCtrl">
    <!-- 何かを記載 -->
      <input type="button" value="クリックでメッセージ表示" ng-click="onClick()">
      <span ng-bind="::message"></span>
    </div>
    <script src="bower_components/angular/angular.js" ></script>
```
JavaScript の部分は  
```
(function (){
  // ここにJavaScriptを書きます
  var Ctrl = function ($scope){
  // controllerの中身
    $scope.onClick = function () {
      $scope.message = "AngularJSアプリケーション";
    };
  };
  var FooterCtrl = function ($scope){
    // controllerの中身
    $scope.onClick = function () {
      $scope.message = "ここはフッター";
    };
  };

  angular.module('app', [])
    .controller('ctrl', Ctrl)
    .controller('footerCtrl', FooterCtrl);
})();
```
それぞれ独立した処理になっていますので、確認してください。このコントローラーネストすることも可能です。具体的には  

```html
    <div ng-include="'header.html'"></div>
    <div ng-controller="ctrl">
    <!-- 何かを記載 -->
      <input type="button" value="クリックでメッセージ表示" ng-click="onClick()">
      <span ng-bind="::message"></span>
      <div ng-controller="footerCtrl">
        <!-- 何かを記載 -->
        <input type="button" value="クリックでメッセージ表示" ng-click="onClick()">
        <span ng-bind="::message"></span>
      </div>
    </div>
    <script src="bower_components/angular/angular.js" ></script>
```


### factory

factoryを使うことでより柔軟な機能実装ができると共に単体テストも行いやすくなります。既存のコンテンツで JavaScript を拡張しましょう  
```
(function (){
  // ここにJavaScriptを書きます
  var Ctrl = function ($scope, factory){
    // controllerの中身
    $scope.onClick = function () {
      $scope.message = factory.showMassage("AngularJSアプリケーション");
    };
  };
  var FooterCtrl = function ($scope, factory){
    // controllerの中身
    $scope.onClick = function () {
      $scope.message = factory.showMassage("ここはフッター");
    };
  };
  var Factory = function () {
    // 共通処理
    var DEFUALT_MESSAGE = "AngularJS";
    return {
      showMassage: function (message) {
        return DEFUALT_MESSAGE + ':' + message;
      }
    }
  };
  angular.module('app', [])
    .controller('ctrl', Ctrl)
    .controller('footerCtrl', FooterCtrl)
    .factory('factory', Factory);
})();
```
これで AngularJS の基本的な部分については終了です。これにルーティングを追加すれば Single-page Application もわけなく実装できます。
