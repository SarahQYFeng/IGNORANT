document.addEventListener("mousemove", (e) => {
    const BG = document.getElementById("featherBG");
    
    BG.style.top = `${e.clientY / 450-10}vh`;
    BG.style.left = `${e.clientX / 730-10}vw`;
});

document.getElementById("toLanding").addEventListener("click", function() {
    window.location.href = "index.html";
});

// link to chatGPT article
const chatBox = document.getElementById("chatBox");
const chatTitle = document.getElementById("chatTitle");
const chatAuthor = document.getElementById("chatAuthor");
const thumbnailChat = document.getElementById("thumbnailChat");

chatBox.addEventListener("mouseenter", function() {
    chatTitle.style.color = "#2c72ff"; 
    chatTitle.style.fontFamily = "'Redaction', serif";
    chatTitle.style.fontStyle = "italic";
    chatTitle.style.left = "100px";

    thumbnailChat.style.transform = "scaleX(1)";

    chatAuthor.style.color = "#2c72ff"; 
    chatAuthor.style.fontFamily = "'DiatypeMono', san-serif";
    chatAuthor.style.fontStyle = "italic";
    chatAuthor.style.left = "100px";
});

chatBox.addEventListener("mouseleave", function() {
    chatTitle.style.color = "#474747";
    chatTitle.style.fontFamily = "'Redaction', serif";
    chatTitle.style.fontStyle = "normal";
    chatTitle.style.left = "0px";

    thumbnailChat.style.transform = "scaleX(0)";

    chatAuthor.style.color = "#474747"; 
    chatAuthor.style.fontFamily = "'DiatypeMono', san-serif";
    chatAuthor.style.fontStyle = "normal";
    chatAuthor.style.left = "0px";
});

chatBox.addEventListener("click", function() {
    window.location.href = "subscribe.html"; 
});


//link to what go wrong article
const wrongBox = document.getElementById("wrongBox");
const wrongTitle = document.getElementById("wrongTitle");
const wrongAuthor = document.getElementById("wrongAuthor");
const thumbnailWrong = document.getElementById("thumbnailWrong");

wrongBox.addEventListener("mouseenter", function() {
    wrongTitle.style.color = "#2c72ff"; 
    wrongTitle.style.fontFamily = "'Redaction', serif";
    wrongTitle.style.fontStyle = "italic";
    wrongTitle.style.left = "140px";

    thumbnailWrong.style.transform = "scaleX(1)";

    wrongAuthor.style.color = "#2c72ff"; 
    wrongAuthor.style.fontFamily = "'DiatypeMono', san-serif";
    wrongAuthor.style.fontStyle = "italic";
    wrongAuthor.style.left = "140px";
});

wrongBox.addEventListener("mouseleave", function() {
    wrongTitle.style.color = "#474747";
    wrongTitle.style.fontFamily = "'Redaction', serif";
    wrongTitle.style.fontStyle = "normal";
    wrongTitle.style.left = "0px";

    thumbnailWrong.style.transform = "scaleX(0)";

    wrongAuthor.style.color = "#474747"; 
    wrongAuthor.style.fontFamily = "'DiatypeMono', san-serif";
    wrongAuthor.style.fontStyle = "normal";
    wrongAuthor.style.left = "0px";
});

wrongBox.addEventListener("click", function() {
    window.location.href = "subscribe.html"; 
});


//link to are you there god article
const godBox = document.getElementById("godBox");
const godTitle = document.getElementById("godTitle");
const godAuthor = document.getElementById("godAuthor");
const thumbnailGod = document.getElementById("thumbnailGod");

godBox.addEventListener("mouseenter", function() {
    godTitle.style.color = "#2c72ff"; 
    godTitle.style.fontFamily = "'Redaction', serif";
    godTitle.style.fontStyle = "italic";
    godTitle.style.left = "100px";

    thumbnailGod.style.transform = "scaleX(1)";

    godAuthor.style.color = "#2c72ff"; 
    godAuthor.style.fontFamily = "'DiatypeMono', san-serif";
    godAuthor.style.fontStyle = "italic";
    godAuthor.style.left = "100px";
});

godBox.addEventListener("mouseleave", function() {
    godTitle.style.color = "#474747";
    godTitle.style.fontFamily = "'Redaction', serif";
    godTitle.style.fontStyle = "normal";
    godTitle.style.left = "0px";

    thumbnailGod.style.transform = "scaleX(0)";

    godAuthor.style.color = "#474747"; 
    godAuthor.style.fontFamily = "'DiatypeMono', san-serif";
    godAuthor.style.fontStyle = "normal";
    godAuthor.style.left = "0px";
});

godBox.addEventListener("click", function() {
    window.location.href = "AreYouThereGod.html"; 
});

//link to six reflections article
const sixBox = document.getElementById("sixBox");
const sixTitle = document.getElementById("sixTitle");
const sixAuthor = document.getElementById("sixAuthor");
const thumbnailSix = document.getElementById("thumbnailSix");

sixBox.addEventListener("mouseenter", function() {
    sixTitle.style.color = "#2c72ff"; 
    sixTitle.style.fontFamily = "'Redaction', serif";
    sixTitle.style.fontStyle = "italic";
    sixTitle.style.left = "100px";

    thumbnailSix.style.transform = "scaleX(1)";

    sixAuthor.style.color = "#2c72ff"; 
    sixAuthor.style.fontFamily = "'DiatypeMono', san-serif";
    sixAuthor.style.fontStyle = "italic";
    sixAuthor.style.left = "100px";
});

sixBox.addEventListener("mouseleave", function() {
    sixTitle.style.color = "#474747";
    sixTitle.style.fontFamily = "'Redaction', serif";
    sixTitle.style.fontStyle = "normal";
    sixTitle.style.left = "0px";

    thumbnailSix.style.transform = "scaleX(0)";

    sixAuthor.style.color = "#474747"; 
    sixAuthor.style.fontFamily = "'DiatypeMono', san-serif";
    sixAuthor.style.fontStyle = "normal";
    sixAuthor.style.left = "0px";
});

sixBox.addEventListener("click", function() {
    window.location.href = "subscribe.html"; 
});


//masthead button
const mastheadBox = document.getElementById("mastheadBox");
const mastheadText = document.getElementById("mastheadText");
const mastheadLogo = document.getElementById("mastheadLogo");

mastheadBox.addEventListener("mouseenter", function() {
    mastheadText.style.color = "#474747"; 
    mastheadLogo.src = 'IMGs/masthead.png';
});

mastheadBox.addEventListener("mouseleave", function() {
    mastheadText.style.color = "#2c72ff";
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
    outnowText.style.color = "#474747"; 
    outnowLogo.src = 'IMGs/folderTxt.png';
});

outnowBox.addEventListener("mouseleave", function() {
    outnowText.style.color = "#2c72ff";
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
    subscribeText.style.color = "#474747"; 
    subscribeLogo.src = 'IMGs/trashFull.png';
});

subscribeBox.addEventListener("mouseleave", function() {
    subscribeText.style.color = "#2c72ff";
    subscribeLogo.src = 'IMGs/trash.png';
});

subscribeBox.addEventListener("click", function() {
    window.location.href = "subscribe.html"; 
});

