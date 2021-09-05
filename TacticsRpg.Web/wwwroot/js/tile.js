export default class Tile {

    constructor(x,y,size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.left = x * size;
        this.top = y * size;
    }

}