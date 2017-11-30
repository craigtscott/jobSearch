const palindrome = (dict) => {
  var pairs = []
  for (var i = 0; i < dict.length - 1; i++) {
    for (var j = 1; j < dict.length; j++) {
      if (isPalindrome(dict[i], dict[j])) {
        pairs.push(dict[i] + "," + dict[j]);
      }
    }
  }
  
  console.log(pairs);
};

const isPalindrome = (word1, word2) => {
  var opt1 = word1 + word2;
  var opt2 = word2 + word1;
  if (opt1 === rev(opt1) || opt2 === rev(opt2) ) {
    return true;
  } else {
    return false;
  }
  
};

const rev = (word) => {
  var drow = word.split('').reverse().join('');
  return drow;
};


const dict = ['badd', 'ab', 'bada', "cda", "dc", "ddc", "cd"];
// palindrome(dict);

/*
Can you explain the difference between these 3 selectors? div div, div > div, div + div

div div: This selects all div elements that are instide a div.
      eg.
        <div>
          <section>
            <div></div> <--- this div would be selected.
          </section>
          <div></div> <--- this div would be selected. 
        </div>

div > div: This selects all div elements where its parent is a div.
      eg.
        <div>
            <div></div> <--- this div would be selected.
            <section>
              <div></div> <--- this div would not be selected.
            </section> 
        </div>

div + div: This selets any div immediatly after another div
      eg.
        <div>
        </div>
        <div></div> <--- this div would be selected.
        <section></section>
        <div></div> <--- this div would not be selected.

Choose 5 other CSS selectors and explain what they do and why you might use them in a real application of some sort.
CLass: if you have class="stuffNthings":
  .stuffNthings {} would select all elements with that class.

ID: if you have id="stuffNthings":
  .stuffNthings {} would select all elements with that id.
  
p ~ div: this selects every div perceded by a p:
      eg.
            <div></div> <--- this div would be selected.
            <p></p>
            <div></div> <--- this div would not be selected.
            
Links:  :link is a link you have not visited
        :visited is a link you visited
        
Attribute$=value: selects elements that end with selected value
  div[class$ = ".pdf"]{}  this selects all divs that class attribute end with ".pdf"
  

What kinds of things would you look at if you needed to decide when to upgrade the database server or your application server layer?

Something i would look at is the speed ond efficancy of the database. I would look at if the needs for the databace changed. You If you need redundancy or beter protection would be a reason to upgrade. If you are reaching the limit of the databace.

*/