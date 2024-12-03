// landing shadow move

document.addEventListener("mousemove", (e) => {
    const shadow = document.getElementById("shadowIgnorant");
  
    const offsetX = - (e.clientX - window.innerWidth / 2) / 10;
    const offsetY = - (e.clientY - window.innerHeight / 2) / 1000;
    
    shadow.style.transform = `scale(0.97, ${offsetY}) skew(${offsetX}deg, 0deg)`;
});


// draggable items

// draggable Masthead
const draggableBox = document.getElementById("draggableBox");
const draggableMasthead = document.getElementById("draggableMasthead");

let offsetX = 0, offsetY = 0, startX = 0, startY = 0;

draggableBox.onmousedown = (e) => {
  e.preventDefault();
  startX = e.clientX;
  startY = e.clientY;


  document.onmousemove = dragElement;
  document.onmouseup = stopDragging;
};

function dragElement(e) {
  offsetX = e.clientX - startX;
  offsetY = e.clientY - startY;
  startX = e.clientX;
  startY = e.clientY;

  draggableBox.style.top = (draggableBox.offsetTop + offsetY) + "px";
  draggableBox.style.left = (draggableBox.offsetLeft + offsetX) + "px";
}

function stopDragging() {
  document.onmousemove = null;
  document.onmouseup = null;
}

draggableMasthead.addEventListener("click", function() {
  window.location.href = "pixelate.html"; 
});

// draggable Out now
const draggableBox2 = document.getElementById("draggableBox2");
const draggableOutnow = document.getElementById("draggableOutnow");

let offsetX2 = 0, offsetY2 = 0, startX2 = 0, startY2 = 0;

draggableBox2.onmousedown = (e) => {
  e.preventDefault();
  startX2 = e.clientX;
  startY2 = e.clientY;

  console.log(222);

  document.onmousemove = dragElement2;
  document.onmouseup = stopDragging2;
};

function dragElement2(e) {
  offsetX2 = e.clientX - startX2;
  offsetY2 = e.clientY - startY2;
  startX2 = e.clientX;
  startY2 = e.clientY;

  draggableBox2.style.top = (draggableBox2.offsetTop + offsetY2) + "px";
  draggableBox2.style.left = (draggableBox2.offsetLeft + offsetX2) + "px";
}

function stopDragging2() {
  document.onmousemove = null;
  document.onmouseup = null;
}

draggableOutnow.addEventListener("click", function() {
    window.location.href = "content.html"; 
});


// draggable Subscribe
const draggableBox3 = document.getElementById("draggableBox3");
const draggableSubscribe = document.getElementById("draggableSubscribe");

let offsetX3 = 0, offsetY3 = 0, startX3 = 0, startY3 = 0;

draggableBox3.onmousedown = (e) => {
  e.preventDefault();
  startX3 = e.clientX;
  startY3 = e.clientY;

  console.log(333);

  document.onmousemove = dragElement3;
  document.onmouseup = stopDragging3;
};

function dragElement3(e) {
  offsetX3 = e.clientX - startX3;
  offsetY3 = e.clientY - startY3;
  startX3 = e.clientX;
  startY3 = e.clientY;

  draggableBox3.style.top = (draggableBox3.offsetTop + offsetY3) + "px";
  draggableBox3.style.left = (draggableBox3.offsetLeft + offsetX3) + "px";
}

function stopDragging3() {
  document.onmousemove = null;
  document.onmouseup = null;
}

draggableSubscribe.addEventListener("click", function() {
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

