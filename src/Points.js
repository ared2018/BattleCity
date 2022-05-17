function Points(eventManager) {
    Sprite.call(this, eventManager);
    this._value = 0;
    this._duration = 10;
    this._timer = 0;
}

Points.subclass(Sprite);

Points.Event = {};
Points.Event.DESTROYED = 'Points.Event.DESTROYED';

Points.prototype.setValue = function (value) {
    this._value = value;
};
Points.prototype.getValue = function () {
    return this._value;
};
Points.prototype.setDuration = function (duration) {
    this._duration = duration;
};
Points.prototype.updateTimer = function () {
    this._timer++;
    if (this._timer > this._duration) {
        this.destroy();
    }
};
Points.prototype.updateHook = function () {
    this.updateTimer();
};
Points.prototype.getImage = function () {
    return 'points_' + this._value;
};
Points.prototype.draw = function (ctx) {
    ctx.drawImage(ImageManager.getImage(this.getImage()), this._x, this._y);
};

Points.prototype.destroyHook = function () {
    this._eventManager.fireEvent({ 'name': Points.Event.DESTROYED, 'points': this });
};