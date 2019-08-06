var chai = require('chai')
var expect = chai.expect
const { removeUrlAnchor } = require('../src/url_anchor_remove')

describe("URL anchor remove test suite", function () {
    it('Case 1', () => {
        expect(removeUrlAnchor('www.codewars.com#about')).to.equal('www.codewars.com')
    })
    it('Case 2', () => {
        expect(removeUrlAnchor('www.codewars.com/katas/')).to.equal('www.codewars.com/katas/')
    })
})
