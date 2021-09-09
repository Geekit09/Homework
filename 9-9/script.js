// var i = "Gantulga";

// for (var i = 0; i < ner.lenght; i++) {
//    console.log(ner[i]);
// }

// Arrays - Data structure
//array - Массив

// var array = ["geekit", 23, true];
// console.log([array]);

// var ar = ["geekit", 25, false, true, 26];
// // // for (var i = 0; i < ar.length; i++) {
// // //    if (typeof array[i] === "string") {
// // //       console.log(ar[i]);
// // //    }
// // // }

// for (el of ar) {
//    if (typeof el === "number") {
//       console.log(el);
//    }
// }

var ner = prompt("Утга оруулна уу...");
var aWord = ["Amazing", "Adoroble", "Attractive", "Artful", "Adventurous"];
var bWord = ["Brilliant", "Brave", "BraveStone", "Bright", "Baby"];
var cWord = ["Cute", "Caring", "Courageous", "Charming", "Cool"];
var dWord = ["Diplomatic", "Dynamic", "Decisive", "Depenable", "DeadMan"];
var eWord = ["Efficient", "Excitable", "Energetic", "Emotional", "Entertaining"];
var fWord = ["Friendly", "Fun", "Forceful", "Funny", "Fashionable"];
var gWord = ["Glow", "Gem", "Giver", "Great", "GLACIER"];
var hWord = ["Happy", "Handsome", "Healthy", "Helpful", "Hard-Working"];
var iWord = ["Independent", "innocent", "Integrity", "Impatient", ""];
var jWord = ["", "", "", "", ""];
var kWord = ["", "", "", "", ""];
var lWord = ["Lucky", "LuckyGuy", "Luxurious", "Lovable", "LifeSaver"];
var mWord = ["", "", "", "", ""];
var nWord = ["Nice", "Nature", "Normal", "NERD", "Neighborly"];
var oWord = ["", "", "", "", ""];
var pWord = ["", "", "", "", ""];
var qWord = ["", "", "", "", ""];
var rWord = ["", "", "", "", ""];
var sWord = ["", "", "", "", ""];
var tWord = ["Tiny", "Tall", "Triminator", "Trustworthy", "Thankful"];
var uWord = ["Unique", "Unafraid", "UnAbashed", "UnBroken", "UnDefeted"];
var vWord = ["", "", "", "", ""];
var wWord = ["", "", "", "", ""];
var xWord = ["", "", "", "", ""];
var yWord = ["", "", "", "", ""];
var zWord = ["", "", "", "", ""];

for (var i = 0; i < ner.length; i++) {
   var random = parseInt(Math.random() * gWord.length);
   if (ner[i] === "G") {
      console.log("G: " + gWord[random]);
   } else if (ner[i] === "a") {
      console.log("A: " + aWord[random]);
   } else if (ner[i] === "n") {
      console.log("N: " + nWord[random]);
   } else if (ner[i] === "t") {
      console.log("T: " + tWord[random]);
   } else if (ner[i] === "u") {
      console.log("U: " + uWord[random]);
   } else if (ner[i] === "l") {
      console.log("L: " + lWord[random]);
   } else if (ner[i] === "g") {
      console.log("G: " + gWord[random]);
   }
}
