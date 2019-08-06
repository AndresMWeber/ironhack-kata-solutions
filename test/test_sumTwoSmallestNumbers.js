var chai = require('chai')
var expect = chai.expect
const { sumTwoSmallestNumbers } = require('../src/sum_of_tlpi')

describe("URL anchor remove test suite", function () {
    it('Sum should be 13', () => {
        expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).to.equal(13)
    })
    it('Sum should be 6', () => {
        expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).to.equal(6)
    })
    it('Sum should be 10', () => {
        expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).to.equal(10)
    })
    it('Sum should be 24', () => {
        expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).to.equal(24)
    })
    it('Sum should be 16', () => {
        expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).to.equal(16)
    })
});