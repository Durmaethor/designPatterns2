
// Chaining helps to reduce character length. The idea behind the chain design pattern is to return the value of this, or at least an object that represents the next point in your API call, allowing the user to execute continuous functions based off of that.

var Calc = function (start) {
    var that = this;
    this.add = function(x) {
        start = start + x;
        return that;
    };

    this.multiply = function(x) {
        start = start * x;
        return that;
    };

    this.equals = function(callback) {
        callback(start);
        return that;
    };
}

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function(result) {
        console.log(result)
    });

    // This: represents the current state which the method was invoked off of; meaning that when it's the chained API, the first time we call add, the this value will be the calculator.