function XO(str) {
    const counts = {
        'o': 0,
        'x': 0
    }
    str.toLowerCase().trim().split('').forEach(char => {
        if (['x', 'o'].includes(char)) counts[char] += 1
    })
    return counts['o'] === counts['x']
}

module.exports = {
    XO
}