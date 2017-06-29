var Calc = function (start) {
    this.add = function(x) {
        start = start + x;
        return this;
    };

    this.multiply = function(x) {
        start = start * x;
        return this;
    };

    this.equals = function(callback) {
        callback(start);
        return this;
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