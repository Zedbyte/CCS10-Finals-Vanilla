/* 
   ==================
      PRELOADER
   ==================
*/

const preloader = document.querySelector('.preloader');

function preload() {
    preloader.classList.add('inactive');
}

function addNone() {
    preloader.classList.add('none');
}
//add display none after some time


/* 
   ==================
    PRELOADER END
   ==================
*/




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
    setTimeout(typingEffect, 100);
    
}

const cursor = document.querySelector('.cursor');
function removeCursor() {
    cursor.innerHTML = "";
}

const h1Line = document.querySelector('.heading-h1')

function underLine() {
    h1Line.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typingEffect, 6000);
    setTimeout(removeCursor, 12500); //added 5s
    setTimeout(underLine, 12800); //added 5s
    setTimeout(preload, 5000);
    setTimeout(addNone, 8500);
});

// If preloader is removed, execute typing effect
