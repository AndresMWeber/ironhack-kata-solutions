function sumTwoSmallestNumbers(numbers) {
    return numbers.sort(function (a, b) { return a - b; }).slice(0, 2).reduce((a, b) => a + b)
}

module.exports = { sumTwoSmallestNumbers }
