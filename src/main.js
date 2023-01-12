import Firstscene from "./scenes/Firstscene.js";
import Phaser from "phaser";
const config = {
  title: "Phaser Game",

  pixelArt: true,

  type: Phaser.AUTO,
  width: 900,
  height: 360,
  parent: "container",
  backgroundColor: "#34495E",

  banner: {
    hidePhaser: true,
    text: "#000000",
    background: ["red", "yellow", "red", "transparent"]
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },

  scene: [Firstscene]
};

const game = new Phaser.Game(config);
