/*
DESCRIPTION:
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
*/

function formatWords(words){
    if (!words || words.length === 0) {
        return '';
    }
    words = words.filter(function(word) {
        return word.length;
    });
    if (words.length == 0) {
        return '';
    }
    else if (words.length == 1) {
        return words[0];
    } else {
        return [words.slice(0, words.length -1).join(', '), words.slice(words.length - 1)[0]].join(' and ');
    }
}