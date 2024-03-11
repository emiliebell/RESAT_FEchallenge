let slideIndex = 0;
showSlides(slideIndex);
let playSlide;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-images")[0].getElementsByTagName("img");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function startAutoPlay() {
    clearInterval(playSlide);  // 기존 타이머를 초기화
    playSlide = setInterval(function() {
        moveSlide(1);
    }, 1500); // 2초 마다 이미지 자동 전환
}

function stopAutoPlay() {
    clearInterval(playSlide);
}

document.querySelector('.carousel').addEventListener('mouseover', stopAutoPlay);
document.querySelector('.carousel').addEventListener('mouseout', startAutoPlay);

startAutoPlay();
