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
  'Web Developer',
  'Android Developer',
  'IoT Systems',
  'AWS & Cloud',
  'Linux Enthusiast'
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
const techStackGrid = document.getElementById('techStackGrid');
const skillPrev = document.querySelector('.slider-button.prev');
const skillNext = document.querySelector('.slider-button.next');

function scrollSkills(offset) {
  if (!skillsSlider) return;
  skillsSlider.scrollBy({ left: offset, behavior: 'smooth' });
}

function scrollTech(offset) {
  if (!techStackGrid) return;
  techStackGrid.scrollBy({ left: offset, behavior: 'smooth' });
}

if (skillPrev) {
  skillPrev.addEventListener('click', () => scrollTech(-340));
}

if (skillNext) {
  skillNext.addEventListener('click', () => scrollTech(340));
}

let techAutoScroll = null;

function startTechAutoScroll() {
  if (!techStackGrid) return;
  if (techAutoScroll) clearInterval(techAutoScroll);
  techAutoScroll = setInterval(() => {
    if (!techStackGrid) return;
    const nextPosition = techStackGrid.scrollLeft + techStackGrid.clientWidth;
    if (nextPosition >= techStackGrid.scrollWidth - 10) {
      techStackGrid.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      techStackGrid.scrollBy({ left: 340, behavior: 'smooth' });
    }
  }, 4200);
}

function stopTechAutoScroll() {
  if (techAutoScroll) {
    clearInterval(techAutoScroll);
    techAutoScroll = null;
  }
}

if (techStackGrid) {
  startTechAutoScroll();
  techStackGrid.addEventListener('mouseenter', stopTechAutoScroll);
  techStackGrid.addEventListener('mouseleave', startTechAutoScroll);
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section, .hero-copy');
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      section.classList.add('reveal');
    }
  });
});
