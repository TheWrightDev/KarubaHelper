const allRoomTiles: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

export class Room {
  constructor(
    public id: string,
    public selectedTiles: number[] = [],
    public lastTileShown: number = 0,
    public isComplete: boolean = false
  ) { }

  public nextTile(): void {
    var nextTileNumber = this.determineNextTile();
    this.selectedTiles.push(nextTileNumber);
    this.lastTileShown = nextTileNumber;
    if (this.selectedTiles.length === 36) {
      this.isComplete = true;
    }
  }

  private determineNextTile(): number {
    let availableTiles = allRoomTiles.filter((v) => {
      return this.selectedTiles.indexOf(v) === -1;
    })
    let nextTile = availableTiles[Math.floor(Math.random() * availableTiles.length)];
    return nextTile;
  }
};