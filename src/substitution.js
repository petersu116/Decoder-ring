// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function() {
    // you can add any code you want within this function scope

    function substitution(input, alphabet, encode = true) {
        //Checking if alphabet is not entered or not have a length of 26.
        if (!alphabet || alphabet.length !== 26) return false;

        // Using the nested for loop to check if alphabet has dupilicate letters.
        for (let i = 0; i < alphabet.length - 1; i++) {
            for (let j = i + 1; j < alphabet.length; j++) {
                if (alphabet[i] === alphabet[j]) return false;
            }
        }

        const subTable = "abcdefghijklmnopqrstuvwxyz"; //Creating the compare table;
        const lowercaeInput = input.toLowerCase(); //Ignore capital letters.
        let result = ""; //Creating a String for output cumulation. 

        //Encoding part:
        if (encode) {
            //The first for loop to loop through the input.
            for (let letter of lowercaeInput) {
                if (letter === " ") { //if the letter is a space, concat it to result directly.
                    result += letter;
                } else {
                    //Secong for loop to loop through the alphabet, when find the match, add the letter in subTable which at the same index.
                    for (let i in alphabet) {
                        if (letter === subTable[i]) {
                            result += alphabet[i];
                        }
                    }
                }
            }
            return result;
            // Decoding part: Everthing works the same except reverse the output part when the letter is not a space.
        } else {
            for (let letter of lowercaeInput) {
                if (letter === " ") {
                    result += letter;
                } else {
                    for (let i in alphabet) {
                        if (letter === alphabet[i]) {
                            result += subTable[i];
                        }
                    }
                }
            }
            return result;
        }
    }

    return {
        substitution,
    };
})();

module.exports = { substitution: substitutionModule.substitution };