// quick fix for Cloud9 warning:
/* global $ */
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.
$(document).ready(function() {
//-----------------------Basic Functions-------------------------------  
  
  //Capitalizes the first letter
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  // Returns true if the first letter is a vowel, otherwise false
  function checkVowel(word) {
    if (word.charAt(0) === 'a') {
        return true;
    } else if (word.charAt(0) === 'e') {
        return true;
    } else if (word.charAt(0) === 'i') {
        return true;
    } else if (word.charAt(0) === 'o') {
        return true;
    } else if (word.charAt(0) === 'u') {
        return true;
    } else {
        return false;
    }
  }
  
//---------------------Eng-to-Pig Latin Engine------------------------
  
  // Appends "yay" to the end of the word and returns the word.
  function appendYayToWord(word) {
    return word + 'yay';
  }
  
  // Moves the first consonant to the end of the word, appends "ay" to the end of the word,
  // and returns the word.
  function convertWordWithConsonant(word) {
    return word.substring(1) + word.charAt(0) + 'ay';
  }
  
  //Pig Latinizer
  function engToPigLatin(word) {
    if (checkVowel(word)) {
      return appendYayToWord(word);
    } else {
      return convertWordWithConsonant(word);
    }
  }
  
  function sentenceToPigLatin(sentence) {
    var array = sentence.split(' ');
    for(var i = 0; i < array.length; i = i + 1) {
      var translation = engToPigLatin(array[i]);
      if (i === 0) {
        translation = capitalizeFirstLetter(translation);
      }
      $('#output').append(translation + ' ');
    }
  }
  
//----------------------------Translator------------------------------
  
  $('#translate').click(function() {
    var input = $('#input').val().toLocaleLowerCase();
    sentenceToPigLatin(input);
  });
});