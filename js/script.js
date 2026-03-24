// Funcionalidades del portafolio

const texts = {
  es: {
    subtitle: "Estudiante de Sistemas | Backend Developer | Laravel Enthusiast",
    welcome: "¡Bienvenido a mi portafolio profesional!",
    bioTitle: "Sobre mí",
    bio: "Desarrollador web enfocado en backend (Laravel, PHP). Apasionado por sistemas escalables y buenas prácticas. Aprendiendo React, CI/CD y AWS.",
    thesisTitle: "🌟 Proyecto Destacado: S.U.N. Sistema Universal de Notas",
    thesisLink: "S.U.N. Sistema Universal de Notas",
    thesisDesc: "Software para colegios con gestión de notas, matrículas y asistencias. 68% Blade, 35+ tablas, auditoría, roles, gráficas y chatbot. Desarrollado con Laravel, Vite, Node.js y MySQL.",
    thesisRepo: "Ver repositorio",
    projectsTitle: "Proyectos destacados",
    skillsTitle: "Tecnologías que uso",
    devopsTitle: "DevOps & Cloud",
    devopsCicd: "<strong>CI/CD:</strong> Experiencia real con GitHub Actions, despliegue automático en Hostinger vía SSH y manejo de secrets (Your-Face-IA).",
    devopsDocker: "<strong>Docker & AWS:</strong> En proceso de aprendizaje y práctica.",
    devopsGit: "<strong>Git & GitHub:</strong> Uso constante de buenas prácticas y control de versiones en todos los proyectos.",
    contactTitle: "Contacto"
  },
  en: {
    subtitle: "Systems Engineering Student | Backend Developer | Laravel Enthusiast",
    welcome: "Welcome to my professional portfolio!",
    bioTitle: "About Me",
    bio: "Web developer focused on backend (Laravel, PHP). Passionate about scalable systems and best practices. Currently learning React, CI/CD, and AWS.",
    thesisTitle: "🌟 Featured Project: S.U.N. Universal Grading System",
    thesisLink: "S.U.N. Universal Grading System",
    thesisDesc: "Software for schools with grade, enrollment, and attendance management. 68% Blade, 35+ tables, auditing, roles, charts, and chatbot. Developed with Laravel, Vite, Node.js, and MySQL.",
    thesisRepo: "View repository",
    projectsTitle: "Featured Projects",
    skillsTitle: "Technologies I Use",
    devopsTitle: "DevOps & Cloud",
    devopsCicd: "<strong>CI/CD:</strong> Real experience with GitHub Actions, automatic deployment to Hostinger via SSH and secrets management (Your-Face-IA).",
    devopsDocker: "<strong>Docker & AWS:</strong> Currently learning and practicing.",
    devopsGit: "<strong>Git & GitHub:</strong> Consistent use of best practices and version control in all projects.",
    contactTitle: "Contact"
  }
};

function setLanguage(lang) {
  document.getElementById('subtitle').textContent = texts[lang].subtitle;
  document.getElementById('welcome-msg').textContent = texts[lang].welcome;
  document.getElementById('bio-title').textContent = texts[lang].bioTitle;
  document.getElementById('bio-text').textContent = texts[lang].bio;
  document.getElementById('thesis-title').textContent = texts[lang].thesisTitle;
  document.getElementById('thesis-link').textContent = texts[lang].thesisLink;
  document.getElementById('thesis-desc').textContent = texts[lang].thesisDesc;
  document.getElementById('thesis-repo').textContent = texts[lang].thesisRepo;
  document.getElementById('projects-title').textContent = texts[lang].projectsTitle;
  document.getElementById('skills-title').textContent = texts[lang].skillsTitle;
  document.getElementById('devops-title').textContent = texts[lang].devopsTitle;
  document.getElementById('devops-cicd').innerHTML = texts[lang].devopsCicd;
  document.getElementById('devops-docker').innerHTML = texts[lang].devopsDocker;
  document.getElementById('devops-git').innerHTML = texts[lang].devopsGit;
  document.getElementById('contact-title').textContent = texts[lang].contactTitle;
}

document.getElementById('lang-en').onclick = function() { setLanguage('en'); };
document.getElementById('lang-es').onclick = function() { setLanguage('es'); };

// Inicializa en español
setLanguage('es');

document.getElementById('thesis-link').href = 'tesis.html'; // Si tienes una versión en inglés, cámbiala aquí
