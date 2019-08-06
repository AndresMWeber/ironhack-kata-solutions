var chai = require('chai')
var expect = chai.expect
const { XO } = require('../src/exs_and_ohs')

describe('Exs and Ohs test suite', () => {
    it('Case 1', () => {
        expect(XO('xo')).to.equal(true)
    })
    it('Case 2', () => {
        expect(XO("xxOo")).to.equal(true)

    })
    it('Case 3', () => {
        expect(XO("xxxm")).to.equal(false)
    })
    it('Case 4', () => {
        expect(XO("Oo")).to.equal(false)
    })
    it('Case 5', () => {
        expect(XO("ooom")).to.equal(false)
    })
})

