let images = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg',
    'images/pic6.jpg',
    'images/pic7.jpg',


];
let imageIndex = 0
const imageElment = document.getElementById('slider-img')
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex];
    imageElment.setAttribute('src', imgUrl);
    console.log(imgUrl);
    imageIndex++;
}, 1500)