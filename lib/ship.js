(function() {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function(properties) {
    Asteroids.MovingObject.call(this, properties);
  };

  Asteroids.Util.inherits(Asteroids.MovingObject, Ship);


  Ship.prototype.shoot = function() {};

  Ship.prototype.accelerate = function(velocityArr) {
    this.vel[0] += velocityArr[0];
    this.vel[1] += velocityArr[1];
  };
  
})();
