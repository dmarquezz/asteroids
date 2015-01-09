(function() {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  Asteroids.Util = {
    inherits: function(superClass, subClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
    },

    distance: function(obj1, obj2) {
      return Math.sqrt(
        Math.pow((obj1.x - obj2.x), 2) +
        Math.pow((obj1.y - obj2.y), 2)
      );
    }
  };

})();
