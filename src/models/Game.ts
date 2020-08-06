import { Engine, DisplayMode } from 'excalibur';

import Player from './Player';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

class Game extends Engine {
  players: Player[] = [];

  constructor() {
    super({
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      displayMode: DisplayMode.FullScreen,
    });
  }

  private addPlayers() {
    const playerOne = new Player();
    this.players.push(playerOne);
    this.players.forEach((player) => this.add(player));
  }

  public startNewGame() {
    this.addPlayers();
    this.start();
  }
}

export default Game;
