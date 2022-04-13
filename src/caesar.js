// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// make input lowercase
// (a=97, z=122)

const caesarModule = (function() {
    // you can add any code you want within this function scope

    function caesar(input, shift, encode = true) {
        //check the conditions for shift.
        if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
        const lowercasedInput = input.toLowerCase();
        let output = "";
        //Ecoding part:
        if (encode === true) {
            for (let i = 0; i < lowercasedInput.length; i++) { //loop the input.
                let character = lowercasedInput[i];
                if (character.match(/[a-z]/)) { //check if letters in input are letters between a to z.
                    let code = lowercasedInput.charCodeAt(i); //get the ASCII for letters.
                    let diff = (code - 97 + shift) % 26; //find the direction and how many steps a letter need to be move.
                    if (diff >= 0) { //addition from a.
                        character = String.fromCharCode(diff + 97);
                        output += character;
                    } else { //subtrction from {.
                        character = String.fromCharCode(diff + 123);
                        output += character;
                    }
                } else {
                    output += character;
                }
            }
        } else {
            for (let i = 0; i < lowercasedInput.length; i++) {
                let character = lowercasedInput[i];
                if (character.match(/[a-z]/)) {
                    let code = lowercasedInput.charCodeAt(i) - shift;
                    if (code < 97) {
                        character = String.fromCharCode(123 - (97 - code));
                        output += character;
                    } else if (code > 122) {
                        character = String.fromCharCode((code - 122) + 96);
                        output += character;
                    } else {
                        output += String.fromCharCode(code);
                    }

                } else {
                    output += character;
                }
            }
        }
        return output;
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };