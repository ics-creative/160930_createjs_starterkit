declare var images;
declare var ss;

export class LoadAsset {
  constructor() {

  }

  private loader:createjs.LoadQueue;

  private callback:Function;

  init(_callback:Function) {
    this.callback = _callback;

    this.handleFileLoad = this.handleFileLoad.bind(this);
    this.handleComplete = this.handleComplete.bind(this);

    this.loader = new createjs.LoadQueue(false);
    this.loader.addEventListener("fileload", this.handleFileLoad);
    this.loader.addEventListener("complete", this.handleComplete);
    this.loader.loadManifest(lib.properties.manifest);
  }

  handleFileLoad(evt) {
    if (evt.item.type == "image") {
      images[evt.item.id] = evt.result;
    }
  }

  handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (let i = 0; i < ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet({
        "images":[queue.getResult(ssMetadata[i].name)],
        "frames":ssMetadata[i].frames
      })
    }
    this.loader.removeEventListener("fileload", this.handleFileLoad);
    this.loader.removeEventListener("complete", this.handleComplete);

    this.callback();
  }
}