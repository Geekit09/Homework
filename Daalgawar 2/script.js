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

// var ner = prompt("Утга оруулна уу...");
// var aWord = ["Amazing", "Adoroble", "Attractive", "Artful", "Adventurous"];
// var bWord = ["Brilliant", "Brave", "Bold", "Bright", "Baby"];
// var cWord = ["Cute", "Caring", "Courageous", "Charming", "Cool"];
// var dWord = ["Diplomatic", "Dynamic", "Decisive", "Depenable", "DeadMan"];
// var eWord = ["Efficient", "Excitable", "Energetic", "Emotional", "Entertaining"];
// var fWord = ["Friendly", "Fun", "Forceful", "Funny", "Fashionable"];
// var gWord = ["Glow", "Gem", "Giver", "Great", "GLACIER"];
// var hWord = ["Happy", "Handsome", "Healthy", "Helpful", "Hard-Working"];
// var iWord = ["Independent", "innocent", "Integrity", "Impatient", ""];
// var jWord = ["Joyful", "Joking", "Janitor", "Japanese", "Jackbooted"];
// var kWord = ["Kindly", "Kind", "Knight", "King", "Karma"];
// var lWord = ["Lucky", "LuckyGuy", "Luxurious", "Lovable", "LifeSaver"];
// var mWord = ["Major", "Model", "Master", "Mindful", "Motivated"];
// var nWord = ["Nice", "Nature", "Normal", "NERD", "Neighborly"];
// var oWord = ["Optimal", "One-Sided", "Outspoken", "Orderly", "Obnoxious"];
// var pWord = ["Pretty", "Provocative", "Pratical", "Powerful", "Passive"];
// var qWord = ["Quality", "Quantitative", "Quicker", "Questioning", "Queenly"];
// var rWord = ["Radiant", "Raging", "Regular", "Ruled", "Rushed"];
// var sWord = ["Sad", "SchoolBoy", "SchoolGirl", "Scientific", "Shy"];
// var tWord = ["Tiny", "Tall", "Triminator", "Trustworthy", "Thankful"];
// var uWord = ["Unique", "Unafraid", "UnAbashed", "UnBroken", "UnDefeted"];
// var vWord = ["Villain", "Violent", "Vulnerable", "Victorious", "Very"];
// var wWord = ["WarmHearted", "Wandered", "Warrior", "Wizard", "WonderWomen"];
// var xWord = ["Xany", "Xonked", "Xenodochial", "X-Rated", "Xenophobe"];
// var yWord = ["Young", "Yes-Man", "Yummy", "Yielding", "Yokozuna"];
// var zWord = ["Zealous", "Zombie", "Zoomer", "Zen", "Zippy"];

// for (var i = 0; i < ner.length; i++) {
//     var random = parseInt(Math.random() * gWord.length);
//     if (ner[i] === "a") {
//         console.log("A: " + aWord[random]);
//     } else if (ner[i] === "b") {
//         console.log("B: " + bWord[random]);
//     } else if (ner[i] === "c") {
//         console.log("C: " + cWord[random]);
//     } else if (ner[i] === "d") {
//         console.log("D: " + dWord[random]);
//     } else if (ner[i] === "e") {
//         console.log("E: " + eWord[random]);
//     } else if (ner[i] === "f") {
//         console.log("F: " + fWord[random]);
//     }  else if (ner[i] === "g") {
//         console.log("G: " + gWord[random]);
//     }
//     else if (ner[i] === "h") {
//         console.log("H: " + hWord[random]);
//     }
//     else if (ner[i] === "i") {
//         console.log("I: " + iWord[random]);
//     }
//     else if (ner[i] === "j") {
//         console.log("J: " + jWord[random]);
//     }
//     else if (ner[i] === "k") {
//         console.log("K: " + kWord[random]);
//     }
//     else if (ner[i] === "l") {
//         console.log("L: " + lWord[random]);
//     }
//     else if (ner[i] === "m") {
//         console.log("M: " + mWord[random]);
//     }
//     else if (ner[i] === "n") {
//         console.log("N: " + nWord[random]);
//     }
//     else if (ner[i] === "o") {
//         console.log("O: " + oWord[random]);
//     }
//     else if (ner[i] === "p") {
//         console.log("P: " + pWord[random]);
//     }
//     else if (ner[i] === "q") {
//         console.log("Q: " + qWord[random]);
//     }
//     else if (ner[i] === "r") {
//         console.log("R: " + rWord[random]);
//     }
//     else if (ner[i] === "s") {
//         console.log("S: " + sWord[random]);
//     }
//     else if (ner[i] === "t") {
//         console.log("T: " + tWord[random]);
//     }
//     else if (ner[i] === "u") {
//         console.log("U: " + uWord[random]);
//     }
//     else if (ner[i] === "v") {
//         console.log("V: " + vWord[random]);
//     }
//     else if (ner[i] === "w") {
//         console.log("W: " + wWord[random]);
//     }
//     else if (ner[i] === "x") {
//         console.log("X: " + xWord[random]);
//     }
//     else if (ner[i] === "y") {
//         console.log("Y: " + yWord[random]);
//     }
//     else if (ner[i] === "z") {
//         console.log("Z: " + zWord[random]);
//     }
// }

let bat = {
    ner: "Bat",
    tootsoo: [124, 48, 268],
    tip: [],
    finalBill: []
}

for(let i = 0; i < bat.tootsoo.length; i++){
    let percentage = 0;
    if(bat.tootsoo[i] <= 50){
        percentage = .2;
        bat.tip.push(bat.tootsoo[i] * percentage)
    } else if(bat.tootsoo[i] > 50 && bat.tootsoo[i] < 200){
        percentage = .15;
        bat.tip.push(bat.tootsoo[i] * percentage)
    } else {
        percentage = .1;
        bat.tip.push(bat.tootsoo[i] * percentage)
    }

    let tip = 0;
    if(bat.tootsoo[i] <= 50){
        tip = 18.599999999999998;
        bat.finalBill.push(bat.tootsoo[i] + tip)
    } else if(bat.tootsoo[i] <=50){
        tip = 9.600000000000001;
        bat.finalBill.push(bat.tootsoo[i] + tip)
    } else {
        tip = 26.8;
        bat.finalBill.push(bat.tootsoo[i] + tip)
    }
} 