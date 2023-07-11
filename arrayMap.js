// Map

Array.prototype.myMap = function (callbackFn) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        /* call the callback function for every value of this array and       push the returned value into our resulting array
        */
        arr.push(callbackFn(this[i], i, this));
    }
    return arr;
}
