const { expect } = require("chai");
const caesarTest = require("../src/caesar").caesar
    /*
    For the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), 
    the tests that you write should test that the following is true:
    */
describe("Caesar shift should return an encoded or decoded message based on the arguments.", () => {
    it("Should encode a string with a given shift parameter", () => {
        const actual = caesarTest("Zebra Magazine", 3);
        const expected = "cheud pdjdclqh";
        expect(actual).to.eql(expected)
    })
    it("Should decode a string with a given shift parameter", () => {
        const actual = caesarTest("Zebra Magazine", 3, false);
        const expected = "wbyox jxdxwfkb";
        expect(actual).to.eql(expected)
    })

})
describe("It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
    it("Should return false if the shift value is equal to 0", () => {
        const actual = caesarTest("Zebra Magazine", 0);
        expect(actual).to.be.false
    })
    it("Should return false if the shift value is less than -25", () => {
        const actual = caesarTest("Zebra Magazine", -26);
        expect(actual).to.be.false
    })
    it("Should return false if the shift value is greater than 25", () => {
        const actual = caesarTest("Zebra Magazine", 26);
        expect(actual).to.be.false
    })
    it("Should return false if the shift value is not present", () => {
        const actual = caesarTest("Zebra Magazine", );
        expect(actual).to.be.false
    })
})
describe("It should ignore capital letters.", () => {
    it("Capital letters are ignored.", () => {
        const actual = caesarTest("Zebra Magazine", 3);
        const expected = caesarTest("zebra magazine", 3);
        expect(actual).to.eql(expected)
    })
})
describe("Should handle shifts which go past the end of the alphabet in either direction", () => {
    it("Should handle moving past Z with a positive shift", () => {
        const actual = caesarTest("z", 1)
        const expected = "a"
        expect(actual).to.eql(expected)
    })
    it("Should handle moving past A with a negative shift", () => {
        const actual = caesarTest("a", -1)
        const expected = "z"
        expect(actual).to.eql(expected)
    })
})
describe("It maintains spaces and other nonalphabetic symbols in the message", () => {
    it("Keeps all symbols before and after encoding", () => {
        const actual = caesarTest("Zebra Magazine!", 3);
        const expected = "cheud pdjdclqh!";
        expect(actual).to.eql(expected)
    })
})