// // const title0 = document.querySelectorAll(".garchig")
// // // const title1 = document.querySelector("#title1");
// // // const title2 = document.querySelector("#title2");
// // // const title3 = document.querySelector("#title3");
// // // const title4 = document.querySelector("#title4");
// // const unknown = document.getElementById("unknown");
// // // function changeStyle(){
// // //     title0.classList.toggle("up0")
// // //     title2.classList.toggle("up1")
// // //     title3.classList.toggle("up2")
// // //     title4.classList.toggle("up3")
// // //     title1.classList.toggle("up4")
// // // }

// // // let obj = {
// // //     ner = "Noob",
// // //     nas = 25
// // // }
// // // className "garchig ulaan"
// // //classList = [""]

// // //Reserved words - operatoruudiig helne (function, or , for,)
// // //className
// // //htmlFor

// // // background-color salangad vgnvvd niilj orj irne Gehdee niilj orj irj bga vgnii ehnii vseg tomoor bichne... (backgroundColor)

// //tag.onclick = function(){}

// // // getElementsByClassName("classNer")--- elementvvdiig className-eer ni songoh.(oruulj irj bolno)[]array orj irdeg

// // // getElementByID("id") - Dom element bn,, HTML tag baina gesen vg.

// // function changeStyle(){
    
// //     for(let i = 0; i < title0.length; i++){

// //         title0[i].classList.toggle("up--" + i);
// //     }
// // }

const boxes = document.querySelectorAll('.box');
// Hoisting  function-nii daraa orj irwel helne
for(let i = 0; i < boxes.length; i++){
    boxes[i].onclick = function(){
        removeActive();
        boxes[i].classList.add('active')
    }
}

function removeActive(){
    for(let i = 0; i < boxes.length; i++)
    boxes[i].classList.remove('active')
}
let doli = 0;
let second = 0;
let minute = 0;
let hour = 0;
setInterval (function(){
    boxes[2].innertext = hour + " : " + minute + " : " + second + " : " + doli
    doli++;
    if(doli === 100)
         

}, 10)

// ehnii callback, hugatsaa

