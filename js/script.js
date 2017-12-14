// quick fix for Cloud9 warning:
/* global $ */
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.
$(document).ready(function() {

  // This function should return true if the input word starts with a vowel,
  // otherwise it should return false.
  function wordStartsWithVowel(word) {
    var firstLetter = word.charAt(0);
    if (firstLetter === 'a') {
      return true;
    } else if (firstLetter === 'e') {
      return true;
    } else if (firstLetter === 'i') {
      return true;
    } else if (firstLetter === 'o') {
      return true;
    } else if (firstLetter === 'u') {
      return true;
    } else {
      return false;
    }
  }

  // Appends "yay" to the end of the word and returns the word.
  function appendYayToWord(word) {
    return word + 'yay';
  }

  // Moves the first consonant to the end of the word, appends "ay" to the end of the word,
  // and returns the word.
  function convertWordWithConsonant(word) {
    return word.substring(1) + word.charAt(0) + 'ay'; 
  }

  // If the word starts with a vowel, return the result of appendYayToWord.
  // Otherwise, return the result of convertWordWithConsonant.
  function convertWordToPigLatin(word) {
    var result = '';
    if (wordStartsWithVowel(word)) {
      result = appendYayToWord(word);
    } else {
      result = convertWordWithConsonant(word);
    }
    return result;
  }
  console.log(convertWordToPigLatin('eword'));
  // Create a click handler that takes is triggered when the user clicks the translate button.
  // Gets a word from the input box
  // Transforms the word to pig latin
  // Displays the result on the screen in the output element
});