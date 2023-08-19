export function scrollToSection(targetSection) {
    const section = document.getElementById(targetSection);
    section.scrollIntoView({ behavior: 'smooth' });
  }