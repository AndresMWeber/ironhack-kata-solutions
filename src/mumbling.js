function accum(s) {
    let output = ''
    for (i = 0; i < s.length; i++) {
        output += (s[i].toUpperCase() + Array(i).fill(s[i].toLowerCase()).join('') + ((i === s.length - 1) ? '' : '-'))
    }
    return output
}

module.exports = {
    accum
}