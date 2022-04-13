const { expect } = require("chai");
const substitution = require("../src/substitution").substitution;

describe("Unit testing for substitution fuction", () => {
    it("Should return false if the given alphabet isn't exctly 26 long", () => {
        const actual = substitution("message", "qwertyuiopasdfghjklzxcvbn");
        expect(actual).to.be.false;
    });
    it("Should correctly translate the given phrase", () => {
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq")
        const expected = "ykrrpik"
        expect(actual).to.eql(expected)
    })
    it("Should decode the given phrase", () => {
            const actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false)
            const expected = "message"
            expect(actual).to.eql(expected)
        })
        //It returns false if there are any duplicate characters in the given alphabet.
    it("Should return false if there are any duplicate characters in the given alphabet", () => {
            //extra a added to the alphabet
            const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaa")
            expect(actual).to.be.false
        })
        //It maintains spaces in the message, before and after encoding or decoding.
    it("Should maintain spaces in the message", () => {
            const actual = substitution("mes sage", "plmoknijbuhvygctfxrdzeswaq")
            const expected = "ykr rpik"
            expect(actual).to.eql(expected)
        })
        //It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("Should ignore capital letters", () => {
        const actual = substitution("MESSAGE", "plmoknijbuhvygctfxrdzeswaq")
        const expected = "ykrrpik"
        expect(actual).to.eql(expected)
    })
})