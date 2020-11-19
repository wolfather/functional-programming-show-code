function makeComposition(...fns) {
    return function(value) {
        return fns.reduce(function(previousValue, currentValue) {
            return currentValue(previousValue);
        }, value);
    };
}


try {
    module.exports = {makeComposition};
} catch(e) {
    throw new Error(e)
}