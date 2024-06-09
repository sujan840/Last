// JavaScript code for cursor animations and interactivity
document.addEventListener('mousemove', function(e) {
  const cursor1 = document.querySelector('.cursor-1');
  const cursor2 = document.querySelector('.cursor-2');
  cursor1.style.left = e.clientX + 'px';
  cursor1.style.top = e.clientY + 'px';
  cursor2.style.left = e.clientX + 'px';
  cursor2.style.top = e.clientY + 'px';
});

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseover', () => {
    document.querySelector('.cursor-1').classList.add('active');
    document.querySelector('.cursor-2').classList.add('active');
  });
  link.addEventListener('mouseout', () => {
    document.querySelector('.cursor-1').classList.remove('active');
    document.querySelector('.cursor-2').classList.remove('active');
  });
});


function openModal(contentId) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal-content').innerHTML = document.getElementById(contentId).innerHTML;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function() {
    navbar.classList.toggle("open");
  });
});

