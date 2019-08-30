const abc = 'abcdefghijklmnopqrstuvwxyz'

function solve(arr) {
    return arr.map(inner => inner.split('').filter((c, i) => abc.indexOf(c.toLowerCase()) === i).length)
};