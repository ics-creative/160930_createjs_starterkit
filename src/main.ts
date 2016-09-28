import MyAsset = lib.MyAsset1;
import {LoadAsset} from "./load-asset";

var stage = null;
var asset:MyAsset = null;

//  ウィンドウのロードが終わり次第、初期化コードを呼び出す。
window.addEventListener("load", function () {
  new LoadAsset().init(startCreateJS);
});

function startCreateJS() {
  // Stageオブジェクトを作成します。表示リストのルートになります。
  stage = new createjs.Stage("myCanvas");
  asset = new MyAsset();

  stage.addChild(asset);

  // フレームレートの設定
  createjs.Ticker.setFPS(lib.properties.fps);
  // requestAnimationFrameに従った呼び出し
  createjs.Ticker.timingMode = createjs.Ticker.TIMEOUT;
  // 定期的に呼ばれる関数を登録
  createjs.Ticker.addEventListener("tick", handleTick);
}

function handleTick() {
  // 描画を更新する
  stage.update();
  console.log(asset.hamham.x);
}