const texts = ['Hello!', 'Welcome to my profile!', 'Scroll down to learn...', 'more About me!'];
const textElement = document.getElementById("text-to-animate");

let currentTextIndex = 0;

function animateText() {
  const currentText = texts[currentTextIndex];

  const letters = currentText.split('');

  textElement.innerHTML = '';
  var text_anim = '';

for (let i = 0; i < letters.length; i++) {
    setTimeout(function() {
        text_anim += letters[i];
        textElement.innerHTML = text_anim;
    }, (i + 1) * 50);
}
  // Increment the current text index, wrapping around to 0 if necessary
  currentTextIndex = (currentTextIndex + 1) % texts.length;
}

animateText();

setInterval(animateText, 3000);


const rainbowColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"];
const text = document.getElementById("rainbow-text");
const textContent = text.textContent;
let newContent = "";

for (let i = 0; i < textContent.length; i++) {
  const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  newContent += `<span style="color: ${randomColor};">${textContent.charAt(i)}</span>`;
}

text.innerHTML = newContent;

// slider
const slidingItems = document.querySelectorAll('.sliding-item');
let currentIndex = 0;

setInterval(() => {
  // slide out the current item
  slidingItems[currentIndex].classList.add('slide-out');
  
  // calculate the index of the next item
  currentIndex = (currentIndex + 1) % slidingItems.length;
  
  // slide in the next item
  slidingItems[currentIndex].classList.remove('slide-out');
  slidingItems[currentIndex].classList.add('slide-in');
}, 3000);
