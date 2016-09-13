import { Injectable } from '@angular/core';

@Injectable()
export class GemService {

    constructor () {}

    private makeBlueTriangle ( x: number, y: number )
    {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#00f' ).moveTo ( x + 25, y + 5 )
            .lineTo ( x + 45, y + 45 ).lineTo ( x + 5, y + 45 )
            .lineTo ( x + 25, y + 5 );
        shape.jfmType = 3;
        return shape;
    }
    private makeGrayCircle ( x: number, y: number )
    {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#888' ).drawCircle ( x + 25, y + 25, 20 );
        shape.jfmType = 5;
        return shape;
    }
    private makeGreenX ( x: number, y: number )
    {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#0f0' )
            .moveTo ( x + 10, y + 5 ).lineTo ( x + 25, y + 20 )
            .lineTo ( x + 40, y + 5 )
            .lineTo ( x + 45, y + 10 ).lineTo ( x + 30, y + 25 )
            .lineTo ( x + 45, y + 40 )
            .lineTo ( x + 40, y + 45 ).lineTo ( x + 25, y + 30 )
            .lineTo ( x + 10, y + 45 )
            .lineTo ( x + 5, y + 40 ).lineTo ( x + 20, y + 25 )
            .lineTo ( x + 5, y + 10 )
            .lineTo ( x + 10, y + 5 );
        shape.jfmType = 2;
        return shape;
    }
    private makeOrangeSquare ( x: number, y: number )
    {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#f80' ).drawRect ( x + 5, y + 5, 40, 40 );
        shape.jfmType = 4;
        return shape;
    }
    private makePurpleDiamond ( x: number, y: number )
    {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#80f' ).moveTo ( x + 5, y + 25 )
            .lineTo ( x + 25, y + 5 ).lineTo ( x + 45, y + 25 )
            .lineTo ( x + 25, y + 45 ).lineTo ( x + 5, y + 25 );
        shape.jfmType = 7;
        return shape;
    }
    private makeRedPentagon ( x: number, y: number ) {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#f00' )
            .moveTo ( x + 25, y + 5 ).lineTo ( x + 45, y + 25 )
            .lineTo ( x + 37, y + 45 )
            .lineTo ( x + 13, y + 45 ).lineTo ( x + 5, y + 25 )
            .lineTo ( x + 25, y + 5 );
        shape.jfmType = 1;
        return shape;
    }
    private makeYellowHex ( x: number, y: number )
    {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#ff0' ).moveTo ( x + 13, y + 5 )
            .lineTo ( x + 38, y + 5 ).lineTo ( x + 45, y + 25 )
            .lineTo ( x + 38, y + 45 ).lineTo ( x + 13, y + 45 )
            .lineTo ( x + 5, y + 25 ).lineTo ( x + 13, y + 5 );
        shape.jfmType = 6;
        return shape;
    }

    getGem ( n: number, x: number, y: number )
    {
        switch ( n )
        {
            case 1: return this.makeRedPentagon ( x, y );
            case 2: return this.makeGreenX ( x, y );
            case 3: return this.makeBlueTriangle ( x, y );
            case 4: return this.makeOrangeSquare ( x, y );
            case 5: return this.makeGrayCircle ( x, y );
            case 6: return this.makeYellowHex ( x, y );
            default: return this.makePurpleDiamond ( x, y );
        }
    }
    getSelectionMarker ( x: number, y: number )
    {
        var marker = new createjs.Shape ();
        marker.graphics.beginFill ( '#fff' ).drawCircle ( x + 2, y + 2, 2 );
        marker.graphics.beginFill ( '#fff' ).drawCircle ( x + 48, y + 2, 2 );
        marker.graphics.beginFill ( '#fff' ).drawCircle ( x + 48, y + 48, 2 );
        marker.graphics.beginFill ( '#fff' ).drawCircle ( x + 2, y + 48, 2 );
        return marker;
    }
};
