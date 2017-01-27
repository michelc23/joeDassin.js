var isset = function isset () {
    var argument = arguments;
    var taille_arg = argument.length;
    var i = 0;
    var indefini;
    
    if (taille_arg === 0) {
        throw new Error('Empty isset')
    }
    
    /*while (i !== taille_arg) {
        if (argument[i] === indefini || argument[i] === null) {
            return false
        }
        i++
    }
    */
    for (var i=0 ; i<argument.length ; i++) {
        if (argument[i] === indefini || argument[i] === null) {
            return false
        }
    }
    
    return true
}