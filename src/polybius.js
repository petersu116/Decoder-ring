// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// Capital can be ignored
// return false if numbers are not even when decoding.
// output should be a string

const polybiusModule = (function() {
    // you can add any code you want within this function scope

    function polybius(input, encode = true) {
        //Check when decoding, if the input has even number of char excluding spaces.
        if (encode === false) {
            let count = 0;
            for (let num of input) {
                if (num !== " ") count++;
            }
            const countPro = count % 2;
            if (countPro !== 0) return false;
        }

        //Creat a 2D array to store the compare table.
        const square = [
            ["a", "b", "c", "d", "e"],
            ["f", "g", "h", "i/j", "k"],
            ["l", "m", "n", "o", "p"],
            ["q", "r", "s", "t", "u"],
            ["v", "w", "x", "y", "z"]
        ]

        //Encoding part:
        if (encode) {
            let lowercase = input.toLowerCase();
            let result = "";
            for (let letter of lowercase) {
                if (letter === " ") result += letter; //Take care of the spaces. Save runtime when process before another for loop runs.
                //Use two for loops to loop through the 2D array to find the desired value.
                for (let i = 0; i < square.length; i++) {
                    for (let j = 0; j < square[i].length; j++) {
                        if (square[i][j].includes(letter)) {
                            result = result + (j + 1) + (i + 1);
                        }
                    }
                }
            }
            return result;
            //Decoding part: 
        } else {
            let result = "";
            //When having space increase index pointer by one since space only take one space.
            for (let i = 0; i < input.length;) {
                if (input[i] === " ") {
                    result += input[i];
                    i++;
                }
                for (let j = 0; j < square.length; j++) {
                    if (parseInt(input[i]) === j + 1) {
                        for (let k = 0; k < square[j].length; k++) {
                            if (parseInt(input[i + 1]) === k + 1) {
                                result += square[k][j];
                            }
                        }
                        //pointer increased by 2 because we want to skip two numbers since we already used them.
                        i += 2;
                    }
                }
            }
            return result;
        }
    }

    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };