
// NAMES AND INPUTS
var hacker1 = 'Marketa';
console.log("The drivers name is: " + hacker1);
var hacker2 = prompt("What is your name?")
console.log("The navigators name is: " + hacker2);


// CONDITIONAL (IF)
if (hacker1.length > hacker2.length) {
    console.log("The driver has a longer name, " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, the navigator has a longer name, " + hacker2.length + " characters.");
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both got the equally long name " + hacker1.length + " characters.")
}

// LOOPS (FOR)
var nameCapital = "";
for (let i = 0; i < hacker1.length; i++) {
    nameCapital += hacker1[i] + " ";
} console.log(nameCapital.toUpperCase());

var nameReverse = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
    nameReverse += hacker2[j];
} console.log(nameReverse);

if (hacker1 < hacker2) {
    console.log("The drivers name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first")
} else if (hacker1[0] === hacker2[0]) {
    console.log("What! You got the same name.")
}


// BONUS TIME - PALINDROME
var phrase = prompt("Enter a phrase");

function isPalindrome(phrase) {
    phrase = phrase.toLowerCase().replace(/[^a-z0-9]+/g, '');  //  /[^a-z0-9]+/g remove any character which is not between a-z and 0-9
    console.log(phrase);

    var reverse = phrase.split('').reverse().join('');  // split string to array of characters, join is the counterpart of split
    console.log(reverse);

    return reverse === phrase;
}
isPalindrome(phrase);



// BONUS TIME - WORDS COUNT
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra imperdiet malesuada. Sed vitae magna dapibus, pulvinar ante eget, accumsan metus. Nullam dignissim lectus cursus orci ultrices elementum nec vitae purus. Cras orci quam, vulputate dignissim lorem eget, vulputate sodales dui. Nulla dolor nulla, efficitur ut mauris sit amet, efficitur efficitur turpis. Mauris est ipsum, venenatis non elit sed, congue ultricies justo. Donec rutrum rutrum consectetur. Vestibulum vulputate ut nunc vel mattis. Mauris quis posuere nisl. Nunc consectetur sem ex.Nulla ipsum velit, lobortis a cursus vitae, tempus ut lacus.Nulla vitae mi sed sem egestas euismod.Proin egestas, urna eu eleifend lacinia, dolor metus ornare ligula, non iaculis sapien lectus a ante.Duis vitae turpis non velit dignissim auctor vitae pulvinar elit.Proin sodales, nisi non eleifend dapibus, augue felis mattis nisi, et mattis est turpis ac nunc.Nam ultricies venenatis consectetur.Nam lorem libero, varius a mattis eu, vestibulum ut sem.Suspendisse non lorem felis.In ut posuere urna, vitae viverra purus.Ut id pulvinar magna, vitae finibus erat.Quisque at lacinia leo.Morbi erat ex, ultrices at urna ut, accumsan vulputate lacus.Sed venenatis magna ultricies venenatis tempus.In vitae sapien urna.Nulla facilisi.Donec bibendum tortor id nulla efficitur feugiat luctus at nunc.Pellentesque vestibulum odio velit, id dapibus turpis congue ac.In sapien nulla, tincidunt iaculis pellentesque et, aliquet eu diam.Aliquam faucibus aliquam eleifend.Nunc ut feugiat libero.Maecenas vel tortor id velit pharetra hendrerit a vulputate urna.Aliquam eros ipsum, tempus quis porta sit amet, eleifend id nulla.Donec et ante magna."

function countWords(string){
    return string.split(" ").length; 
}

function countEt(string){
     var count = 0;
     arrayOfStrings = string.split(" ");
     
     for ( var i = 0; i < arrayOfStrings.length; i++) {
         if (arrayOfStrings[i] === "et"){
             count++;
         }    
    } return "Occurence of 'et' is: " + count;  
}



