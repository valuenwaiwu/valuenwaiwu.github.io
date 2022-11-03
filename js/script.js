function toggleMenu() {
  var x = document.getElementById("mobilenav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function darkMode() {
  document.documentElement.classList.toggle('darkmode');
}

function darkMode2() {
  document.querySelectorAll('.inverted').forEach((result) => {
    result.classList.toggle('invert');
  })
}

let mybutton = document.getElementById("backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var discord = document.querySelector('.discord');

function showDiscord() {
  discord.style.display = 'block';
}

function hideDiscord() {
  discord.style.display = 'none';
}

var copy = '@valuenwaiwu#4127'

function copyToClipboard() {
  navigator.clipboard.writeText(copy);

  copybtn.textContent = 'Copied. Copy again?'
}

var copybtn = document.querySelector('.copy')

function showBtn() {
  copybtn.style.display = 'block';
}

function hideBtn() {
  copybtn.style.display = 'none';
}
