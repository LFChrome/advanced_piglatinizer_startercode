// quick fix for Cloud9 warning:
/* global $ */
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.
$(document).ready(function() {
//-----------------------Global variables-----------------------------
  var selected = 'engToPigLatin';
  var output = '';
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
  
//------------------------Select language----------------------------
  
  //Select English-to-pigLatin translation
  $('#engToPigLatin').click(function(){
    selected = 'engToPigLatin';
    console.log(selected);
  });
  
  //Select pigLatin-to-English translation
  $('#pigLatinToEng').click(function(){
    selected = 'pigLatinToEng';
    console.log(selected);
  });
  
//---------------------Pig Latinizer Engine---------------------------
  
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

//----------------------------Translator------------------------------
  
  $('#translate').click(function() {
    var input = $('#input').val().toLocaleLowerCase();
    //English to Pig Latin
    if (selected === 'engToPigLatin') {
      output = engToPigLatin(input);
    }
    //Pig Latin to English 
    else if (selected === 'pigLatinToEng') {
      
    }
    // Capitalize first letter
    output = capitalizeFirstLetter(output);
    $('#output').html(output);
  });
});