(function() {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function(properties) {
    var combinedProperties = _.extend(this.defaults, properties);
    _.extend(this, combinedProperties);
  };

  MovingObject.prototype = {
    defaults: {
      'x'        : 0,
      'y'        : 0,
      'radius'   : 1,
      'velocity' : [0, 0],
      'color'    : '#333'
    },

    isCollidedWith: function(otherObj) {
      return Asteroids.Util.distance(this, otherObj)
      < this.radius + otherObj.radius;
    }
  };

})();
