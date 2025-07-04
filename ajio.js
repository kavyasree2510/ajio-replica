document.addEventListener('DOMContentLoaded', function () {
  const shirts = document.querySelectorAll('.shirt');

  shirts.forEach(function (shirt) {
    shirt.addEventListener('mouseenter', function () {
      shirt.style.transform = 'scale(1.25)';
      shirt.style.boxShadow = '0 8px 16px rgba(100, 17, 4, 0.3)';
      shirt.style.backgroundColor = 'lightblue'; 
    });
    shirt.addEventListener('mouseleave', function () {
      shirt.style.transform = 'scale(1)';
      shirt.style.boxShadow = '0 4px 8px rgba(2, 15, 2, 0.1)';
      shirt.style.backgroundColor = 'white'; 
    });
  });
});
