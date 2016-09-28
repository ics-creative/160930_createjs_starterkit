declare module lib {

	export class properties implements Object {
		static width: number;
		static height: number;
		static fps: number;
		static color: string;
		static manifest: Object[];
	}

	export var ssMetadata:any[];

	export class frame0001 extends createjs.Sprite {
	}

	export class frame0002 extends createjs.Sprite {
	}

	export class frame0003 extends createjs.Sprite {
	}

	export class frame0004 extends createjs.Sprite {
	}

	export class frame0005 extends createjs.Sprite {
	}

	export class frame0006 extends createjs.Sprite {
	}

	export class frame0007 extends createjs.Sprite {
	}

	export class frame0008 extends createjs.Sprite {
	}

	export class MyHamster extends createjs.MovieClip {
		nominalBounds: createjs.Rectangle;
		instance: frame0001;
		instance_1: frame0002;
		instance_2: frame0003;
		instance_3: frame0004;
		instance_4: frame0005;
		instance_5: frame0006;
		instance_6: frame0007;
		instance_7: frame0008;
	}

	export class MyAsset2 extends createjs.MovieClip {
		nominalBounds: createjs.Rectangle;
		text: createjs.Text;
		shape: createjs.Shape;
	}

	export class MyAsset1 extends createjs.MovieClip {
		nominalBounds: createjs.Rectangle;
		hamham: MyHamster;
	}

	export class assetsmain extends createjs.MovieClip {
		nominalBounds: createjs.Rectangle;
		instance: MyAsset1;
	}

}

