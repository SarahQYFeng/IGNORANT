let pixelImgSrcArray = ['NEW/pixel_masthead.png'];
let pixelImgArray = [];

for (let i = 0; i< pixelImgSrcArray.length; i++){
    let section = document.createElement('section');
    let div = document.createElement('div');
    div.classList.add('pixelate_img_container');
    let pixelate_img = document.createElement('img');
    pixelate_img.src = pixelImgSrcArray[i];

    div.appendChild(pixelate_img);
    section.appendChild(div);
    document.body.appendChild(section);
}

let options = {
    rootMargin: '0px',
    threshold: 0.0
}

let callback = (entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            pixelImgArray[+entry.target.classList[0]].reveal();
        }
    });
})

let observer = new IntersectionObserver(callback, options)

class PixelImg{
    constructor(idx, img, width, height){
        this.idx = idx;
        this.img = img;
        this.styleWidth = width;
        this.styleHeight = height;
        this.width = width * window.devicePixelRatio;
        this.height = height * window.devicePixelRatio;
        this.percent = .001;
        this.applyCanvas();
        this.draw();
    }

    applyCanvas(){
        this.canvas = document.createElement('canvas');
        this.canvas.classList.add(this.idx);
        this.ctx = this.canvas.getContext('2d');
        this.img.parentElement.appendChild(this.canvas);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.width = `${this.styleWidth}px`;
        this.canvas.style.height = `${this.styleHeight}px`;
        this.scaleWidth = this.width * this.percent;
        this.scaleHeight = this.height * this.percent;

        this.ctx.msImageSmoothingEnabledimageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;

        observer.observe(this.canvas);
    }

    draw() {
        this.ctx.drawImage(this.img, 0, 0, this.scaleWidth, this.scaleHeight);
        this.ctx.drawImage(this.canvas, 0, 0, this.scaleWidth, this.scaleHeight, 0, 0, this.width, this.height);
    }

    reveal() {
        this.canvas.classList.add('active');
        this.percent = this.percent < .1 ? this.percent += .0008 : this.percent += .02;
        if(this.percent > 1) {
            this.percent = 1;
            window.location.href = "masthead.html";
        }
        this.scaleWidth = this.width * this.percent;
        this.scaleHeight = this.height * this.percent;

        this.draw();
        if(this.percent < 1) requestAnimationFrame(this.reveal.bind(this));
    }
}

function generatePixelImgs(){
    let imgs = [...document.querySelectorAll('img')]
    imgs.forEach((img, idx) => {
        let {width, height} = img.getBoundingClientRect();
        let pixelImg = new PixelImg(idx, img, width, height);
        pixelImgArray.push(pixelImg);
    })
}

setTimeout(() => {
    generatePixelImgs();
}, 100)