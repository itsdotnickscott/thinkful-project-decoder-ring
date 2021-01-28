// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

	/**
	 * Encodes and decodes messages in Caesar form.
	 * 
	 * @param		{string}	input 	The message to be en/decoded.
	 * @param		{number}	shift 	The amount the message is shifted by.
	 * @param		{boolean} encode 	Whether to encode or decode.
	 * @returns {string}	The translated message.
	 */
	function caesar(input, shift, encode = true) {
    // invalid shift amount
    if(!shift || shift === 0 || shift < -25 || shift > 25) return false;

    const chars = input.toLowerCase().split("");

    if(!encode) shift = 0 - shift; // decoding means we are going backwards

    const secret = chars.map((letter) => {
      let ascii = letter.charCodeAt(0) - 97; // lowercase 'a' begins at 97
      if (ascii < 0 || ascii > 26) return letter; // an nonalphabetic symbol

      ascii = ascii + shift;
      if (ascii < 0) ascii += 26; // handles wrapping of alphabet
      ascii = ascii % 26;

      ascii += 97;
      return String.fromCharCode(ascii);
    });

    return secret.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
