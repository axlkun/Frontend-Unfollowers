export function scrollToSection(targetSection, routeName) {

  if (routeName == '/') {
    const section = document.getElementById(targetSection);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    window.location.href = `/#${targetSection}`;
  }
}