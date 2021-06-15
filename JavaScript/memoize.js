function memoize(f) {
    const cache_lookup = {};

    return function () {
        const key = Array.prototype.join.call(arguments, '-');

        /*Refactored if else check utilizing guard clauses 
        Return early from condition once clause has been satisfied 
        Removes unecessary nesting, if/else key words*/
        if (key in cache_lookup) return cache_lookup[key];
        return cache_lookup[key] = f.apply(this, arguments);
    }
}

function dummy(a, b, c) {
    console.log('executing...please wait...');
    return a + b + c;
}

const memoized_dummy = memoize(dummy);
memoized_dummy(1, 2, 3);
memoized_dummy(1, 2, 3);
