// Your code goes here
// notes:   events fire first on most deeply nested target
//          1:04:00 stopPropogation();
//          https://youtu.be/Io8k-9Ozy8Y
//              don't forget to add   <script defer src="js/index.js"></script> between
//              the body text for proper parsing
//

//finished and functioning:---------------------------------------
//changes background and color upon clicking d and 1 & included stopProp
document.addEventListener('keydown', (event)=>{ //also called e or ev
    if (event.key === 'd') {
    document.body.style = 'color: black; background-color: white;'
    }
    else if (event.key === '1'){
        document.body.style = 'color: grey; background-color: yellow;'
    }
    event.stopPropogation();
});

//changes background to black upon scrolling
const body2 = document.querySelector('body');
window.addEventListener('scroll', ()=>{
    body2.style.backgroundColor = 'black';
});

const body3 = document.querySelector('h2');
window.addEventListener('click', ()=>{
    body3.style.backgroundColor = 'white';
});

//prevent default (clicking link not doesn't work) - using prevent
//clicking on home now doesn't send to http://localhost:1234/#
//but instead stays on http://localhost:1234/
const link = document.querySelector('body header div nav');
link.addEventListener('click', (e)=>{
    e.preventDefault();
});

//changes entire body text upon clicking virtually anywhere
const body1 = document.querySelector('body');
body1.addEventListener('click', ()=>{
    body1.style.color = 'red';
});

//resizing the page changes second picture (map) into doge polize
const dogePic = document.querySelector('body section div img');
window.addEventListener('resize', ()=>{
    dogePic.src = 'https://i.imgur.com/UNCVEma.png'
});

//double click turns top picture (bus) into snoop doge
const headerBox = document.querySelector('body div img');
headerBox.addEventListener('dblclick', ()=>{
    headerBox.src = 'https://static.coindesk.com/wp-content/uploads/2021/02/EtkW62iVcAEmi7E-828x628.jpeg'
});

//header transitions to a essentially pixel size when mouse hovers over
const headyHeader = document.querySelector('.main-navigation');
headyHeader.addEventListener('mouseenter', ()=>{
    headyHeader.style.transform = "scale(0.01)"; //somehow "scale(0.5" also works despite missing a bracket, I wonder why
    headyHeader.style.transition = "transform 8s";
});

//header quickly transitions back to original size, idk how it would work without transfom, seems to break without
headyHeader.addEventListener('mouseleave', ()=>{
    headyHeader.style.transform = "scale(1.0)" //or "scale(1)"
    headyHeader.style.transition = "transform 1s" //transition persists but can be changed in time
});

//every click event is logged and described
window.addEventListener('click', event => {
    console.log(`${event.type} happened on the ${event.target} 
    which is the ${event.target.nodeType}nodeType and called ${event.target.nodeName}`);
});

// works but is annoying-------------------------------------------------
// alerts you clicked the header
// let changingHeaderSize = document.querySelector('.logo-heading');
// changingHeaderSize.addEventListener('click', event => {
//     console.log('clicked the header')
//     alert('clicked the header')
// });

// click anywhere to get an alert that says you clicked
// let sampleClick = document.querySelector('html');
// sampleClick.addEventListener('click', event => {
//     alert('You Clicked the Sample Button!')
// });

// (partially) broken ones:--------------------------------------------------
// trying to have the background change upon click
// CURRENTLY only changes upon page load
const random_bg_color = ()=>{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
}
random_bg_color();

let theWindow = document.querySelector('html');
theWindow.addEventListener('click', event => {
    console.log('changing DOM...')
    event.target.style.backgroundColor = random_bg_color;
// event.target.style.color = random_bg_color;
// document.body.style.backgroundColor = random_bg_color;
});

// should change every box but only changes first one
document.querySelectorAll('.destination').forEach( (destinationBox)=>{
   destinationBox.addEventListener('click', ()=>{
        console.log(event); //also called e or ev
        destinationBox.style.color = 'hotpink';
   });
});