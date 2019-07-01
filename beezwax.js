/** Implement a JavaScript function `highlightMatches`  /* Given an array of strings (`terms`) and a search query (`query`), return all of the terms that match query. 
A term is considered to match a query, if the query appears as a substring in the term. 
The returned matching terms should be modified so that the matching portion of each term is wrapped in a span, 
as shown in the example below.  
For example:  
let query = "Web"; 
let terms = ['Node Website', 'JavaScript Website', 'iOS Application'];  
highlightMatches(query, terms); 
returns:  [   'Node <span class="matchingText">Web</span>site',   'JavaScript <span class="matchingText">Web</span>site' ] */  // TODO: implement `highlightMatches`


//let terms = ['Node Website', 'JavaScript Website', 'iOS Application'];
let terms = ['J', 'S'];
let query = "sba";

function highlightMatches(query, terms) {

    var result = [];
    var leftWrapper = '<span class="matchingText">';
    var rightWrapper = '</span>';
    var length = query.length;

    terms.forEach(term => {
        var i = 0;
        var fullString = '';
        var isMatch = false;

        while (i < term.length) {
            if (match(term.slice(i, i + length), query)) {
                fullString = fullString.concat(leftWrapper).concat(term.slice(i, i + length)).concat(rightWrapper);
                i += length;
                isMatch = true;
            } else {
                fullString += term[i];
                i++;
            }
        }
        
        if (isMatch) result.push(fullString);
    });
    return result;
}


function match(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}

console.log(highlightMatches(query, terms));