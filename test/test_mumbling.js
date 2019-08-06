var chai = require('chai')
var expect = chai.expect
const { accum } = require('../src/mumbling')

describe("Mumbling test suite", function () {
    it('Case 2', () => {
        expect(accum("ZpglnRxqenU")).to.equal("Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
    })

    it('Case 2', () => {
        expect(accum("NyffsGeyylB")).to.equal("N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb")
    })

    it('Case 2', () => {
        expect(accum("MjtkuBovqrU")).to.equal("M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu")
    })

    it('Case 2', () => {
        expect(accum("EvidjUnokmM")).to.equal("E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm")
    })

    it('Case 2', () => {
        expect(accum("HbideVbxncC")).to.equal("H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc")
    })
})