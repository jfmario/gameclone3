/**
 * Class representing the score, total and by color.
 */
export class BejeweledScore {

    redScore: number = 0;
    orangeScore: number = 0;
    yellowScore: number = 0;
    greenScore: number = 0;
    blueScore: number = 0;
    purpleScore: number = 0;
    grayScore: number = 0;
    totalScore: number = 0;

    private recalculateTotal ()
    {
        this.totalScore = ( this.redScore + this.orangeScore +
            this.yellowScore +
            this.greenScore + this.blueScore + this.purpleScore );
    }

    public update ( collapseRecord: any, multiplier: number )
    {
        var consecutive = 1;
        var lastColor = 0;
        for ( var i = 0; i < collapseRecord.length; ++i )
        {
            var thisColor = collapseRecord [i] [2];
            if ( thisColor == lastColor ) ++consecutive;
            else
            {
                consecutive = 1;
                lastColor = thisColor;
            }

            var amount = 1;
            if ( consecutive == 4 ) amount = 3;
            if ( consecutive == 5 ) amount = 6;
            amount *= multiplier;

            switch ( thisColor )
            {
                case 1:
                    this.redScore += amount;
                    break;
                case 2:
                    this.greenScore += amount;
                    break;
                case 3:
                    this.blueScore += amount;
                    break;
                case 4:
                    this.orangeScore += amount;
                    break;
                case 5:
                    this.grayScore += amount;
                    break;
                case 6:
                    this.yellowScore += amount;
                    break;
                case 7:
                    this.purpleScore += amount;
                    break;
            }
        }

        this.recalculateTotal ();
    }
};
