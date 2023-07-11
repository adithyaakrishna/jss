// ForEach

Array.prototype.myForEach = function (callbackFn, context) {

    for (var i = 0; i < this.length; i++) {
        /* call the callback function for every value of this array with the context provided
        */
        callbackFn.call(context, this[i], i, this);
    }
}
