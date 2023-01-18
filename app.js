
function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

slides[activeSlide].classList.add('active')

for(const slide of slides) {
    slide.addEventListener('click', ()=> {
        clearActiveClases()

        slide.classList.add('active')
    })
}

function clearActiveClases() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
}

slidesPlugin(4)

const buyButton = document.querySelector('.buy-button');
const popup = document.getElementById('popup');

// Add an event listener to the "Buy" button
buyButton.addEventListener('click', function() {
  // Show the pop-up
  popup.style.display = 'block';
});

// Get the "Close" button
const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', function() {
    // Check if the pop-up is displayed
    if (popup.style.display === 'block') {
      // Hide the pop-up
      popup.style.display = 'none';
    }
  });

  const element = document.querySelector('body');

// Set the animation delay and duration
element.style.animationDelay = '11s';
element.style.animationDuration = '34s';


function sostavChisla(massivChisel, chislo) {
  // Helper function to find all combinations of a given array
  function findCombinations(array, n, index, data, i) {
      if (index === n) {
          if (data.reduce((a, b) => a + b, 0) === chislo) {
              result.push([...data]);
          }
          return;
      }

      if (i >= array.length) {
          return;
      }

      data[index] = array[i];
      findCombinations(array, n, index + 1, data, i + 1);

      findCombinations(array, n, index, data, i + 1);
  }

  const result = [];
  for (let i = 1; i <= massivChisel.length; i++) {
      for (let j = 0; j < massivChisel.length; j++) {
          findCombinations(massivChisel, i, 0, [], j);
      }
  }
  return result;
}
sostavChisla()

const bar = document.querySelector('.feedback-slider__bar');
const options = document.querySelectorAll('.feedback-slider__option');

options.forEach((option, index) => {
  option.addEventListener('click', () => {
    bar.style.width = `${(index + 1) * 20}%`;
  });
});