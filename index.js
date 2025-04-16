const images = [
    "https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg",
    "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-thien-nhien-19.jpg",
    "https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-phong-c%E1%BA%A3nh-m%E1%BA%B7t-h%E1%BB%93-ph%E1%BA%B3ng-l%E1%BA%B7ng.jpg",
     ];
  
  let currentIndex = 0;
  
  function updateImage() {
    document.getElementById("slide").src = images[currentIndex];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }
