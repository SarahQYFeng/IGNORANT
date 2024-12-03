document.addEventListener("mousemove", (e) => {
    const BG = document.getElementById("featherBG");
    
    BG.style.top = `${e.clientY / 450-10}vh`;
    BG.style.left = `${e.clientX / 730-10}vw`;
});

// subscribe font change
// 字体列表（包含字体名、粗细和斜体）
const fonts = [
    { fontFamily: "Redaction0, serif", fontWeight: "normal", fontStyle: "normal" },
    { fontFamily: "Redaction0, serif", fontWeight: "bold", fontStyle: "normal" },
    { fontFamily: "Redaction0, serif", fontWeight: "normal", fontStyle: "italic" },
    { fontFamily: "Redaction10, serif", fontWeight: "normal", fontStyle: "normal" },
    { fontFamily: "Redaction10, serif", fontWeight: "bold", fontStyle: "normal" },
    { fontFamily: "Redaction10, serif", fontWeight: "normal", fontStyle: "italic" },
    { fontFamily: "Redaction20, serif", fontWeight: "normal", fontStyle: "normal" },
    { fontFamily: "Redaction20, serif", fontWeight: "bold", fontStyle: "normal" },
    { fontFamily: "Redaction20, serif", fontWeight: "normal", fontStyle: "italic" },
    { fontFamily: "Redaction35, serif", fontWeight: "normal", fontStyle: "normal" },
    { fontFamily: "Redaction35, serif", fontWeight: "bold", fontStyle: "normal" },
    { fontFamily: "Redaction35, serif", fontWeight: "normal", fontStyle: "italic" },
    { fontFamily: "Redaction50, serif", fontWeight: "normal", fontStyle: "normal" },
    { fontFamily: "Redaction50, serif", fontWeight: "bold", fontStyle: "normal" },
    { fontFamily: "Redaction50, serif", fontWeight: "normal", fontStyle: "italic" },
    { fontFamily: "Redaction70, serif", fontWeight: "normal", fontStyle: "normal" },
    { fontFamily: "Redaction70, serif", fontWeight: "bold", fontStyle: "normal" },
    { fontFamily: "Redaction70, serif", fontWeight: "normal", fontStyle: "italic" },
    { fontFamily: "Redaction100, serif", fontWeight: "normal", fontStyle: "normal" },
    { fontFamily: "Redaction100, serif", fontWeight: "bold", fontStyle: "normal" },
    { fontFamily: "Redaction100, serif", fontWeight: "normal", fontStyle: "italic" },
  ];
  
  // 获取文本元素
  const textElement = document.getElementById("text");
  
  // 定义一个函数来随机切换字体、粗细和斜体
  function changeFont() {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    textElement.style.fontFamily = randomFont.fontFamily;
    textElement.style.fontWeight = randomFont.fontWeight;
    textElement.style.fontStyle = randomFont.fontStyle;
  }
  
  // 每秒调用一次 changeFont
  setInterval(changeFont, 150);
  

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

