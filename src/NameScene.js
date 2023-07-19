import Phaser from "phaser";

export default class NameScene extends Phaser.Scene {
  constructor() {
    super("NameScene");
  }

  preload() {
    /*this.load.plugin(
      "rexinputtextplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js",
      true
    );
    this.load.html("form", "assets/form.html");*/
  }

  create() {
    this.nameInput = this.add.dom(640, 360).createFromCache("form");

    /* var inputText = this.add
      .rexInputText(400, 400, 10, 10, {
        type: "textarea",
        text: "hello world",
        fontSize: "12px"
      })
      .resize(100, 100)
      .setOrigin(0.5);*/

    this.message = this.add
      .text(400, 500, "Hello, --", {
        color: "#FFFFFF",
        fontSize: 60,
        fontStyle: "bold"
      })
      .setOrigin(0.5);

    this.add
      .text(400, 900, "Click to start", {
        fontSize: "32px",
        fill: "#fff"
      })
      .setOrigin(0.5);

    this.input.on("pointerup", (pointer) => {
      this.scene.start("Level1");
    });
  }
}
