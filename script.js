const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const typedStrings = [
  'Cloud Practitioner',
  'IoT Developer',
  'Android App Creator',
  'AWS Enthusiast'
];
const typedTextElement = document.querySelector('.typed-text');
let typedIndex = 0;
let charIndex = 0;
let isDeleting = false;

function updateTypedText() {
  const currentString = typedStrings[typedIndex];
  if (isDeleting) {
    charIndex -= 1;
  } else {
    charIndex += 1;
  }

  typedTextElement.textContent = currentString.substring(0, charIndex);

  let delay = 120;
  if (isDeleting) {
    delay = 60;
  }

  if (!isDeleting && charIndex === currentString.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typedIndex = (typedIndex + 1) % typedStrings.length;
    delay = 500;
  }

  setTimeout(updateTypedText, delay);
}

if (typedTextElement) {
  updateTypedText();
}

const skillsSlider = document.getElementById('skillsSlider');
const skillPrev = document.querySelector('.slider-button.prev');
const skillNext = document.querySelector('.slider-button.next');

function scrollSkills(offset) {
  if (!skillsSlider) return;
  skillsSlider.scrollBy({ left: offset, behavior: 'smooth' });
}

if (skillPrev) {
  skillPrev.addEventListener('click', () => scrollSkills(-260));
}

if (skillNext) {
  skillNext.addEventListener('click', () => scrollSkills(260));
}
