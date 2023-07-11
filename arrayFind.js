// Find

Array.prototype.find = function (callback, thisArg) {
    if (!callback || typeof callback !== 'function') throw TypeError();
    const size = this.length;
    const that = thisArg || this;
    for (var i = 0; i < size; i++) {
        try {
            if (!!callback.apply(that, [this[i], i, this])) {
                return this[i];
            }
        } catch (e) {
            return undefined;
        }
    }
    return undefined;
}
