import Phaser from 'phaser';
import './style.css';

console.log(Phaser);
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
`;

function preload() {

}

function create() {
  
}

const config = {
  type: Phaser.AUTO,
  width: '100%',
  height: '100%',
  parent: 'app',
  scene: {
    preload,
    create
  }
}

const game = new Phaser.Game(config);
