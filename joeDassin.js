var isset = function isset () {
    var argument = arguments;
    var i = 0;
    var indefini;
    
    if (argument.length === 0) {
        return false;
    }
    
    for (var i=0 ; i<argument.length ; i++) {
        if (argument[i] === indefini || argument[i] === null) {
            return false
        }
    }
    
    return true
}