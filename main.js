
/* 
   ==================
    CHANGING IMAGE
   ==================
*/

const wrapperBG = document.querySelector('.wrapper');
const bgValue = ["url('ocean-boat.jpg')", "url('ocean-boat.jpg')", "url('ocean-boat.jpg')"];

setInterval(function () {
    wrapperBG.style.backgroundImage = "url('ocean-boat.jpg')";
}, 3000);


// (function() {   
//     let i = 0;
//     function imageSwap() {
//         wrapperBG.style.backgroundImage = bgValue[i];         
//         i = (i + 1) % bgValue.length; 
//     }
//     toggle()
//     setInterval(imageSwap, 3000);
// })();  

setInterval(function () {
    wrapperBG.style.backgroundImage = "url('ocean-sun.jpg')";
}, 6000);

/* 
   ==================
   CHANGING IMAGE END
   ==================
*/







/* 
   ==================
    TYPING EFFECT 
   ==================
*/

const heading1 = document.querySelector('.heading-h1Span');
const h1Text = "Inter-Community Alliance for the Restoration of the Earth.";
let h1TextIndex = 0;

function typingEffect() {
    heading1.textContent += h1Text.charAt(h1TextIndex);
    h1TextIndex++;
    setTimeout(typingEffect, 300);
    
}

const cursor = document.querySelector('.cursor');
function removeCursor() {
    cursor.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
    typingEffect();
});