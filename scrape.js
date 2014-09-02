// ==UserScript==
// @name       Bing Auto Searcher
// @namespace  bing
// @version    1.0
// @description  Opens new windows to auto search Bing.
// @copyright  2014, Zachary Donato
// @include     http://www.bing.com/search?*
// ==/UserScript==

var numSearches = getURLParameter("numSearches");
if (numSearches == null)
    numSearches = 0;

numSearches = parseInt(numSearches) + 1; 

if (numSearches > 31) {
    window.alert("You have completed your searches for today!");
    return false; 
}

var randomWord = function(length) {
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var vowels = ["a", "e", "i", "o", "u"];
    var word = ""; 
    var len = parseInt(length); 

    var random = function(lim) {
        return Math.floor(Math.random() * lim);
    }

    for (var i = 0; i < len/2; i++) {
        var randConsonant = consonants[random(consonants.length)];
        var randVowel = vowels[random(vowels.length)];

        if (i===0)
            word += randConsonant.toUpperCase();
        else
            word += randConsonant;
        word += randVowel; 
    }
    return word; 
}
    var searchBing = function() {
	var randNum = Math.floor((Math.random() * 8) + 1); 

	var query = randomWord(randNum); 
	var URL = "http://www.bing.com/search?q=";

	window.location.replace(URL + query + "&numSearches=" + numSearches); 
    }

    // Function to get the number of searches from the URL. 
    // Copied from //http://stackoverflow.com/questions/11582512/how-to-get-url-parameters-with-javascript.
	function getURLParameter(name) {
	    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
		}

window.setTimeout(searchBing()); 