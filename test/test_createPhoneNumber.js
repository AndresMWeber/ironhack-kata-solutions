var chai = require('chai')
var expect = chai.expect
const { createPhoneNumber } = require('../src/create_phone_number')

describe("createPhoneNumber test suite", function () {
    it('Default', () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).to.equal("(123) 456-7890")
    })
});