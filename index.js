function receivesAFunction(callback) {
console.log(callback());
}

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function() {}
}