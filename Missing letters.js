function fearNotLetter(str) {
    var i=str.charCodeAt(0), 
        j = 0, 
        m = 122;
    if (str) {
        while (i <= m && j < str.length) {
            if (String.fromCharCode(i) !== str.charAt(j)) {
                return String.fromCharCode(i);
            }
            i++; j++;
        }
    }
    return undefined;
}
