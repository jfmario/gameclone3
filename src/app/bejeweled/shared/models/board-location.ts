
export class BoardLocation {

    constructor ( public x: number, public y: number ) {}

    public copy () { return new BoardLocation ( this.x, this.y ); }
    public isAdjacent ( otherLocation: BoardLocation ): boolean
    {

        if ( ( Math.abs ( this.x - otherLocation.x ) == 1 ) &&
            ( this.y == otherLocation.y ) ) return true;
        if ( ( Math.abs ( this.y - otherLocation.y ) == 1 ) &&
            ( this.x == otherLocation.x ) ) return true;

        return false;
    }
    public isEqual ( otherLocation: BoardLocation ): boolean
    {
        return ( ( this.x == otherLocation.x ) && ( this.y == otherLocation.y ) );
    }
    public up () { return new BoardLocation ( this.x, this.y - 1 ); }
    public down () { return new BoardLocation ( this.x, this.y + 1 ); }
    public left () { return new BoardLocation ( this.x - 1, this.y ); }
    public right () { return new BoardLocation ( this.x + 1, this.y ); }
    public toString (): string
    {
        return "BoardLocation{ x: " + this.x + ", y: " + this.y + " }";
    }
};
