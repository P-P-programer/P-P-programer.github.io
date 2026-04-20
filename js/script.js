// Funcionalidades del portafolio

const texts = {
  es: {
    subtitle: "Estudiante de Sistemas | Backend Developer | Laravel Enthusiast",
    welcome: "¡Bienvenido a mi portafolio profesional!",
    bioTitle: "Sobre mí",
    bio: "Desarrollador web enfocado en backend (Laravel, PHP). Apasionado por sistemas escalables y buenas prácticas. Aprendiendo React, CI/CD y AWS.",
    thesisTitle: "Proyecto Destacado: S.U.N. Sistema Universal de Notas",
    thesisLink: "S.U.N. Sistema Universal de Notas",
    thesisDesc: "Software para colegios con gestión de notas, matrículas y asistencias. 68% Blade, 35+ tablas, auditoría, roles, gráficas y chatbot. Desarrollado con Laravel, Vite, Node.js y MySQL.",
    thesisRepo: "Ver repositorio",
    projectsTitle: "Proyectos destacados",
    aquasenseTitle: "AquaSense",
    aquasenseDesc: "Sistema de monitoreo de agua para validar potabilidad en una empresa de acueducto local, en alianza con la universidad y bajo supervisión docente. Desarrollado con React y Laravel. En producción y en fase de prototipado para escalar en toda la zona.",
    aquasenseRepo: "Ver repositorio",
    yourfaceTitle: "Your-Face-IA",
    yourfaceDesc: "Software de reconocimiento facial con IA para ESP32. Usa Laravel, Node.js y AJAX. Incluye autenticación segura, auditoría y PWA. En producción con CI/CD en GitHub Actions y despliegue por SSH en Hostinger.",
    yourfaceRepo: "Ver repositorio",
    copidrogasTitle: "Copidrogas",
    copidrogasDesc: "Sistema de inventario con superadmin, proveedores y usuarios. Usa Laravel, Node.js, AJAX y Auth. Escalable, mantenible y responsive.",
    boxeoTitle: "BoxeoEducativo",
    boxeoDesc: "Aplicación Java con arquitectura MVC, enfocada en portabilidad y escalabilidad. Proyecto en desarrollo.",
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
    thesisTitle: "Featured Project: S.U.N. Universal Grading System",
    thesisLink: "S.U.N. Universal Grading System",
    thesisDesc: "Software for schools with grade, enrollment, and attendance management. 68% Blade, 35+ tables, auditing, roles, charts, and chatbot. Developed with Laravel, Vite, Node.js, and MySQL.",
    thesisRepo: "View repository",
    projectsTitle: "Featured Projects",
    aquasenseTitle: "AquaSense",
    aquasenseDesc: "Water monitoring system to validate drinkability for a local water utility company, developed in partnership with the university and supervised by a professor. Built with React and Laravel. In production and currently being prototyped for broader regional rollout.",
    aquasenseRepo: "View repository",
    yourfaceTitle: "Your-Face-IA",
    yourfaceDesc: "Facial recognition software with AI for ESP32. Built with Laravel, Node.js, and AJAX. Includes secure authentication, audit trail, and PWA support. In production with CI/CD via GitHub Actions and SSH deployment on Hostinger.",
    yourfaceRepo: "View repository",
    copidrogasTitle: "Copidrogas",
    copidrogasDesc: "Inventory management system with superadmin, suppliers, and users. Built with Laravel, Node.js, AJAX, and Auth. Scalable, maintainable, and responsive.",
    boxeoTitle: "BoxeoEducativo",
    boxeoDesc: "Java application with MVC architecture, focused on portability and scalability. Project in development.",
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
  document.getElementById('aquasense-title').textContent = texts[lang].aquasenseTitle;
  document.getElementById('aquasense-desc').textContent = texts[lang].aquasenseDesc;
  document.getElementById('aquasense-repo').textContent = texts[lang].aquasenseRepo;
  document.getElementById('yourface-title').textContent = texts[lang].yourfaceTitle;
  document.getElementById('yourface-desc').textContent = texts[lang].yourfaceDesc;
  document.getElementById('yourface-repo').textContent = texts[lang].yourfaceRepo;
  document.getElementById('copidrogas-title').textContent = texts[lang].copidrogasTitle;
  document.getElementById('copidrogas-desc').textContent = texts[lang].copidrogasDesc;
  document.getElementById('boxeo-title').textContent = texts[lang].boxeoTitle;
  document.getElementById('boxeo-desc').textContent = texts[lang].boxeoDesc;
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
