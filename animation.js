const texts = ['Hello!', 'Welcome to my Profile!', 'Scroll down to learn more About me!'];
const textElement = document.getElementById("text-to-animate");

let currentTextIndex = 0;

function animateText() {

  var text_block = "";

    for (let j = 0; j < texts.length; j++) {
      setTimeout(function () {

     let letters = texts[j].split('');
    // alert(letters.length + " " + letters);

    for (let i = 0; i < letters.length; i++) {
      setTimeout(function () {
        // text_anim += letters[i];
        text_block += letters[i];
        textElement.innerHTML = text_block;
        // console.log(text_block);
      }, (i + 1) * 45);
    };

    setTimeout(function () {
      text_block += "<br>"
      textElement.innerHTML = text_block;
    }, (letters.length + 1) * 45);

  }, (j + 1) * 1600)
  };

  // currentTextIndex = (currentTextIndex + 1) % texts.length;
}

animateText();

// setInterval(animateText, 3000);

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


// Get all elements with the class "fade-in"
const fadeTargets = document.querySelectorAll('.fade-in');

// Set up an IntersectionObserver for each element
const options = {
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the CSS class that will gradually increase the element's opacity
      entry.target.classList.add('fade-in-visible');
      // Stop observing the element so the fade-in effect only happens once
      observer.unobserve(entry.target);
    }
  });
}, options);

fadeTargets.forEach(target => {
  observer.observe(target);
});


const image = document.getElementById('image-to-change');

document.addEventListener('mousemove', event => {
  // Get the cursor position relative to the center of the window
  const x = event.clientX - window.innerWidth / 2;
  const y = event.clientY - window.innerHeight / 2;
  
  // Update the image based on the cursor position
  if (x > 0 && y > 0) {
    image.src = 'images/Denny-Juliette-det.png';
  } else if (x < 0 && y > 0) {
    image.src = 'images/Denny-Juliette-det1.png';
  } else if (x < 0 && y < 0) {
    image.src = 'images/Denny-Juliette-det2.png';
  } else {
    image.src = 'images/Denny-Juliette-det3.png';
  }
});
