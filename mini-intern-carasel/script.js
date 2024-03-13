document.addEventListener('DOMContentLoaded', function() {
    let sliderImages = document.querySelectorAll('.slider-image');
    let currentImageIdx = 0;
  
    function showImage(index) {
      sliderImages.forEach((img, idx) => {
        img.style.display = idx === index ? 'block' : 'none';
      });
    }
  
    document.querySelector('.prev-btn').addEventListener('click', function() {
      currentImageIdx = currentImageIdx > 0 ? currentImageIdx - 1 : sliderImages.length - 1;
      showImage(currentImageIdx);
    });
  
    document.querySelector('.next-btn').addEventListener('click', function() {
      currentImageIdx = currentImageIdx < sliderImages.length - 1 ? currentImageIdx + 1 : 0;
      showImage(currentImageIdx);
    });
  
    showImage(currentImageIdx);
  });
  