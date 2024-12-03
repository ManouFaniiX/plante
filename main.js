const  typedTextSPan=document.queryselector('.typed-text');
const cursorSpan=document.querySelector('.cursor');
const textArray=[
    "meilleur que nous"
    "meilleur que vous"
    "meilleur que tous"
]
const typingDelay=200;
const erasinDelay=100;
const newTextDelay=2000;

let textArrayIndex=0;
let charIndex=0;
function type(){
    if(charIndex < textArray[textArrayIndex].length){
        if(!cursorSpan.classList.contains("typing")){
            cursorSpan.classList.add("typing");
        }
        typedTextSPan.textContent+-textArray[textArrayIndex].charAt(charIndex);              
        charIndex++;
        setTimeout(erase,newTextDelay)    
    }
}
function eraseOP(){
    if (charIndex<0){
        if( )
    }
}
 