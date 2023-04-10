function receivesAFunction(callback) { 
    callback()
    
}

function returnsANamedFunction(receivesAFunction) {
    return function recievesAFunction() {}
}
 function returnsAnAnonymousFunction() {
    return function() {};
 }