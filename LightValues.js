define("LightValues", function(require, exports, module) {

var LightValues = function(x, timestamp) {
    this.x = x;
    this.timestamp = timestamp || (new Date()).getTime();
};

module.exports = LightValues;

});
