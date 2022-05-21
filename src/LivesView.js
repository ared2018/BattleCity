function LivesView(lives) {
    this._lives = lives;
}

LivesView.prototype.draw = function (ctx) {
    ctx.fillStyle = "#000000";
    ctx.font = "16px prstart"

    ctx.drawImage(ImageManager.getImage('roman_one'), 468, 256);

    ctx.fillText("P", 482, 286 - 16);
    ctx.fillText(this._lives.getCount(), 482, 286);

    ctx.drawImage(ImageManager.getImage('lives'), 465, 272);
};