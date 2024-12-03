document.addEventListener("mousemove", (e) => {
    const BG = document.getElementById("featherBG");
    
    BG.style.top = `${e.clientY / 450-10}vh`;
    BG.style.left = `${e.clientX / 730-10}vw`;
});

document.getElementById("toLanding").addEventListener("click", function() {
    window.location.href = "index.html";
});

document.getElementById("logoBox").addEventListener("click", function() {
    window.location.href = "AreYouThereGod.html";
});

const image = document.getElementById("heading");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  
  const maxScroll = 50; 
  const opacity = Math.max(0, 1 - scrollTop / maxScroll);
  
  image.style.opacity = opacity;
});

// 获取图片和提示框元素
const left_arrow = document.getElementById("leftArrow");
const left_tooltip = document.getElementById("lefttooltip");

// 监听鼠标移动
left_arrow.addEventListener("mousemove", (event) => {
    var rect = left_arrow.getBoundingClientRect();
    
    var tooltipX = event.clientX - rect.left;
    var tooltipY = event.clientY - rect.top;

    var offsetX = 15;
    var offsetY = 15;

    left_tooltip.style.left = (tooltipX + offsetX) + 'px';
    left_tooltip.style.top = (tooltipY + offsetY) + 'px';
    left_tooltip.style.visibility = 'visible';

  // Debug 输出
  console.log("Mouse move detected", event.pageX, event.pageY);
});

// 监听鼠标移出
left_arrow.addEventListener("mouseleave", () => {
  // 隐藏提示框
  left_tooltip.style.visibility = 'hidden';
});

// 监听点击事件
left_arrow.addEventListener("click", () => {
  // 跳转到另一个网页
  window.location.href = "subscribe.html";
});

const right_arrow = document.getElementById("rightArrow");
const right_tooltip = document.getElementById("righttooltip");

// 监听鼠标移动
right_arrow.addEventListener("mousemove", (event) => {
    var rect = right_arrow.getBoundingClientRect();
    
    var tooltipX = event.clientX - rect.left;
    var tooltipY = event.clientY - rect.top;

    var offsetX = 15;
    var offsetY = 15;

    right_tooltip.style.left = (tooltipX + offsetX) + 'px';
    right_tooltip.style.top = (tooltipY + offsetY) + 'px';
    right_tooltip.style.visibility = 'visible';

  // Debug 输出
  console.log("Mouse move detected", event.pageX, event.pageY);
});

// 监听鼠标移出
right_arrow.addEventListener("mouseleave", () => {
  // 隐藏提示框
  right_tooltip.style.visibility = 'hidden';
});

// 监听点击事件
right_arrow.addEventListener("click", () => {
  // 跳转到另一个网页
  window.location.href = "subscribe.html";
});

// document.getElementById("previous").addEventListener("click", function() {
//     window.location.href = "index.html";
// });

// document.getElementById("next").addEventListener("click", function() {
//     window.location.href = "index.html";
// });


//load article
function loadArticle() {
    fetch('article.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('article').innerHTML = data;
    })
      .catch(error => console.log('Error loading article:', error));
}

window.onload = loadArticle;


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

