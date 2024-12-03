document.addEventListener("mousemove", (e) => {
    const BG = document.getElementById("featherBG");
    
    BG.style.top = `${e.clientY / 450-10}vh`;
    BG.style.left = `${e.clientX / 730-10}vw`;
});

//tolanding button
const toLanding = document.getElementById("toLanding");

toLanding.addEventListener("click", function() {
    window.location.href = "index.html"; 
});

//masthead button
const mastheadBox = document.getElementById("mastheadBox");
const mastheadText = document.getElementById("mastheadText");
const mastheadLogo = document.getElementById("mastheadLogo");

mastheadBox.addEventListener("mouseenter", function() {
    mastheadText.style.color = "#2c72ff"; 
    mastheadLogo.src = 'IMGs/masthead.png';
});

mastheadBox.addEventListener("mouseleave", function() {
    mastheadText.style.color = "white";
    mastheadLogo.src = 'IMGs/notepad.png';
});

mastheadBox.addEventListener("click", function() {
    window.location.href = "pixelate.html"; 
});

//outnow button
const outnowBox = document.getElementById("outnowBox");
const outnowText = document.getElementById("outnowText");
const outnowLogo = document.getElementById("outnowLogo");

outnowBox.addEventListener("mouseenter", function() {
    outnowText.style.color = "#2c72ff"; 
    outnowLogo.src = 'IMGs/folderTxt.png';
});

outnowBox.addEventListener("mouseleave", function() {
    outnowText.style.color = "white";
    outnowLogo.src = 'IMGs/folder.png';
});

outnowBox.addEventListener("click", function() {
    window.location.href = "content.html"; 
});

//subscribe button
const subscribeBox = document.getElementById("subscribeBox");
const subscribeText = document.getElementById("subscribeText");
const subscribeLogo = document.getElementById("subscribeLogo");

subscribeBox.addEventListener("mouseenter", function() {
    subscribeText.style.color = "#2c72ff"; 
    subscribeLogo.src = 'IMGs/trashFull.png';
});

subscribeBox.addEventListener("mouseleave", function() {
    subscribeText.style.color = "white";
    subscribeLogo.src = 'IMGs/trash.png';
});

subscribeBox.addEventListener("click", function() {
    window.location.href = "subscribe.html"; 
});

