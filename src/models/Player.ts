import { Actor, Color, Vector } from 'excalibur';

const PLAYER_WIDTH = 25;
const PLAYER_HEIGHT = 25;

class Player extends Actor {
  constructor() {
    super({
      pos: new Vector(150, 150),
      width: PLAYER_WIDTH,
      height: PLAYER_HEIGHT,
      color: new Color(255, 255, 255),
    });
  }
}

export default Player;
