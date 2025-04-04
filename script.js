const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');
const closeButton = document.querySelector('.close-button');
const section = document.getElementById('x');
const home = document.querySelector('.home'&&'.homeN');
const about = document.querySelector('.about'&&'.aboutN') ;
const skills = document.querySelector('.skills');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
const main= document.querySelector('main');
const learnHTML = document.querySelector('#learnHTML');
const learnCSS = document.querySelector('#learnCSS');
const learnJavaScript = document.querySelector('#learnJS');
const css=document.getElementById('css');
const head=document.getElementsByTagName('head');
const contactMe = document.querySelector('.contact');

home.addEventListener('click', () => {
  window.location.reload();
  main.value = 'home'; 
  
});

about.addEventListener('click', () => {
  main.value='about'; 
if(main.value==='about'){

main.innerHTML = `
  <section class="about-section">
  <div class="container-about">
      <section class="aboutPage">
          <h2 data-i18n="about">About Me</h2>
          <div class="about-My-image-container">
            <img src="myProfImg.jpg" alt="About Me Image" class="about-My-image"><br>
            <h3 class="name">Brian Kathurima</h3>
            <h4 class="role" data-i18n="role">software developer</h4>
          </div>
          <p data-i18n="about-me">
              Hi, I'm Brian, a highly motivated and results-oriented Computer Science student with a passion for developing innovative and user-friendly software solutions. 
              I'm currently pursuing my Computer Science diploma at The Meru National Polytechnic. My coursework has provided me with a solid foundation in 
              <strong>programming languages like Java, Python, C++, VB.Net, HTML, CSS, JavaScript, SQL.</strong> Gaining skills in <strong>Web Development, Mobile Development, Data Science, Artificial Intelligence, and Data Analytics</strong>.
              I'm also familiar with Bulma, Foundation, Materialize, Bootstrap, and Vue.js.
              <br><br>
              Beyond academics, I actively seek opportunities to expand my skillset and contribute to real-world projects. I've worked on a movie website and developed logos for Krian Bytes and Shadi Bin Shadi media.
              <br><br>
              In addition to my technical expertise, I have a strong passion for learning and sharing knowledge. I frequently participate in coding competitions, hackathons, and open-source projects to challenge myself and gain hands-on experience. My ability to quickly adapt to new technologies and problem-solving skills allows me to create efficient and scalable solutions.
              <br><br>
              I take pride in my ability to collaborate effectively within teams, contributing to both the technical and creative aspects of projects. I also enjoy mentoring and assisting fellow students, sharing insights into coding practices, best design approaches, and industry trends. My interest in Agile methodologies has strengthened my ability to work in structured, goal-oriented environments.
              <br><br>
              Apart from coding, I have a keen interest in UI/UX design, ensuring that software is not only functional but also aesthetically pleasing and user-friendly. I believe that technology should empower and simplify the lives of users, and I continuously strive to implement best practices in design and development.
              <br><br>
              I'm a quick learner, a collaborative team player, and possess a strong problem-solving aptitude. I'm eager to leverage my skills and enthusiasm to contribute to a challenging and rewarding role in the tech industry.
              <br><br>
              Feel free to connect with me on <a href="https://www.linkedin.com/in/brian-kathurima-8404082b4">LinkedIn</a> or <a href="https://github.com/kbrian1237">GitHub</a>. Let's connect and explore the possibilities together!
          </p>
      </section>
  </div>
  </section>`;
}
});


addEventListener('load', () => {
    section.innerHTML = `
    <div class="skill-card" style="background-image: url('simpleWithSDtexts.jpg'); background-color:rgba(0, 0, 0, 0.45); ">
    <div style="background-color:rgba(0, 0, 0, 0.45);">
      <h1>Welcome to My Portfolio</h1>
      <img src="simpleWithSDtexts.jpg" alt="Skill 1 Image">
      <div class="card-content">
        <h2>I'm Brian Kathurima</h2>
        <p>A very passionate software developer.</p>
      </div>
      <br>
      <h1>I'm skilled in:</h1>
      </div>
    </div>
    <br>
  `;

    setInterval(() => {
        section.innerHTML = `
        <div class="skill-card" style="background-image: url('networking.jpg');">
        <div style="background-color:rgba(0, 0, 0, 0.45);">
          
          <img src="networking.jpg" alt="Skill 2 Image">
          <div class="card-content">
            <h1>Networking</h1>
            <p> a skills that involves understanding and utilizing the principles of networking to establish and maintain effective communication and collaboration within a team or organization. This how to network and build relationships with people in the tech industry.</p>
          </div>
          </div>
        </div>
      `;

        setTimeout(() => {
            section.innerHTML = `
            <div class="skill-card" style="background-image: url('languages.jpg');">
                <div style="background-color:rgba(0, 0, 0, 0.45);">
              
              <img src="languages.jpg" alt="Skill 3 Image">
              <div class="card-content">
                <h1>Programming</h1>
                <p>i can program in a variety of languages, including HTML, CSS, JavaScript, and more.</p>
              </div>
              </div>
            </div>
          `;

            setTimeout(() => {
                section.innerHTML = `
                <div class="skill-card" style="background-image: url('graphicsdesign.jpg');">
                    <div style="background-color:rgba(0, 0, 0, 0.45);">
                  <h1>Graphics Design</h1>
                  <img src="graphicsdesign.jpg" alt="Skill 4 Image">
                  <div class="card-content">
                   <h1>Graphics Design</h1>
                    <p>i have experience in graphic design, including creating logos, brochures, and other visual materials. I am skilled in using Adobe Creative Suite, including Photoshop, Illustrator, and InDesign.</p>
                  </div>
                  </div>
                </div>
              `;

                setTimeout(() => {
                    section.innerHTML = `
                    <div class="skill-card" style="background-image: url('cybersecurity.jpg');">
                        <div style="background-color:rgba(0, 0, 0, 0.45);">
                      
                      <img src="cybersecurity.jpg" alt="Skill 5 Image">
                      <div class="card-content">
                        <h1>Software Engineering</h1>
                        <p> i succesfully got a scholarship in software engineering and have experience in developing and maintaining software applications.</p>
                      </div>
                      </div>
                    </div>
                  `;

                    // Loop back to the welcome message after a delay
                    setTimeout(() => {
                        section.innerHTML = `
                        <div class="skill-card" style="background-image: url('simpleWithSDtexts.jpg');">
                            <div style="background-color:rgba(0, 0, 0, 0.45);">
                          <h1>Welcome to My Portfolio</h1>
                          <img src="simpleWithSDtexts.jpg" alt="Skill 1 Image">
                          <div class="card-content">
                            <p>i'm a skilled computer scientist with a passion for programming and software development. I have experience in a variety of programming languages and technologies, including HTML, CSS, JavaScript, and more. I am also skilled in software engineering, including developing and maintaining software applications.</p>
                          </div>
                          <br>
                          <h1>I'm skilled in:</h1>
                        </div>
                        </div>
                        <br>
                      `;

                        setTimeout(() => {
                            section.innerHTML = `
                            <div class="skill-card" style="background-image: url('webDev.jpg');">
                                <div style="background-color:rgba(0, 0, 0, 0.45);">
                              
                              <img src="webDev.jpg" alt="Skill 6 Image">
                              <div class="card-content">
                                <h1>Web Development</h1>
                                <p> i can create websites and wab apps using html, css, javascript and many other languages.</p>
                              </div>
                              <br>
                            </div>
                            </div>
                            <br>
                          `;

                            setTimeout(() => {
                                section.innerHTML = `
                                <div class="skill-card" style="background-image: url('webDev.jpg');">
                                <div style="background-color:rgba(0, 0, 0, 0.45);">
                                  <h1>Web Development</h1>
                                  <img src="webDev.jpg" alt="Skill 6 Image">
                                  <div class="card-content">
                                    <h2>Skill 6 Title</h2>
                                    <p>This is a brief description of the skill. You can add more details here.</p>
                                  </div>
                                  <br>
                                </div>
                                </div>
                                <br>
                              `;
                            }, 3000);
                        }, 3000);
                    }, 3000); // Delay for the welcome message to appear again

                }, 3000); // Delay for "Contact Me" to be displayed

            }, 3000); // Delay for "Projects" to be displayed

        }, 3000); // Delay for "Explore My Skills" to be displayed

    }, 18000); // Interval for the entire loop
});

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

body.addEventListener('click', (event) => {
    if (!event.target.closest('.sidebar') && !event.target.closest('.menu-button')) {
        sidebar.classList.remove('active');
    }
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
});



document.addEventListener('DOMContentLoaded', function () {
    const themeSelect = document.getElementById('theme-select');
    const languageSelect = document.getElementById('language-select');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme + '-theme';
        themeSelect.value = savedTheme;
    }

    // Theme switcher functionality
    themeSelect.addEventListener('change', function () {
        const theme = this.value;

        // Remove all theme classes
        body.className = '';
        // Add the selected theme class
        body.classList.add(`${theme}-theme`);

        // Save the selected theme to localStorage
        localStorage.setItem('theme', theme);
    });

    // System preference detection (optional)
    if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-theme');
        themeSelect.value = 'dark';
        localStorage.setItem('theme', 'dark');
    }

    // Language translations
    const translations = {
        en: {
            "title": "My Portfolio",
            "role": "Software Developer",
            "about": "About Me",
            "experience": "Experience",
            "education": "Education",
            "skills": "Skills",
            "web-development": "Web Development",
            "databases": "Databases",
            "mobile-development": "Mobile Development",
            "projects": "Projects",
            "project1": "Project 1",
            "project2": "Project 2",
            "project3": "Project 3",
            "choose-theme": "Choose Theme",
            "language": "Language",
            "home": "Home",
            "welcome": "Welcome to My Portfolio",
            "skilled-in": "I'm skilled in:",
            "networking": "Networking",
            "programming": "Programming",
            "graphics-design": "Graphics Design",
            "software-engineering": "Software Engineering",
            "contact-me": "Contact Me",
            "explore-skills": "Explore My Skills",
            "web-development-title": "Web Development",
            "web-development-description": "This is a brief description of the skill. You can add more details here."
        },
        es: {
            "title": "Mi Portafolio",
            "role": "Desarrollador de Software",
            "about": "Sobre Mí",
            "experience": "Experiencia",
            "education": "Educación",
            "skills": "Habilidades",
            "web-development": "Desarrollo Web",
            "databases": "Bases de Datos",
            "mobile-development": "Desarrollo Móvil",
            "projects": "Proyectos",
            "project1": "Proyecto 1",
            "project2": "Proyecto 2",
            "project3": "Proyecto 3",
            "choose-theme": "Elige un Tema",
            "language": "Idioma",
            "home": "Inicio",
            "welcome": "Bienvenido a Mi Portafolio",
            "skilled-in": "Soy hábil en:",
            "networking": "Redes",
            "programming": "Programación",
            "graphics-design": "Diseño Gráfico",
            "software-engineering": "Ingeniería de Software",
            "contact-me": "Contáctame",
            "explore-skills": "Explora Mis Habilidades",
            "web-development-title": "Desarrollo Web",
            "web-development-description": "Esta es una breve descripción de la habilidad. Puedes agregar más detalles aquí."
        },
        fr: {
            "title": "Mon Portfolio",
            "role": "Développeur de Logiciels",
            "about": "À Propos de Moi",
            "experience": "Expérience",
            "education": "Éducation",
            "skills": "Compétences",
            "web-development": "Développement Web",
            "databases": "Bases de Données",
            "mobile-development": "Développement Mobile",
            "projects": "Projets",
            "project1": "Projet 1",
            "project2": "Projet 2",
            "project3": "Projet 3",
            "choose-theme": "Choisir un Thème",
            "language": "Langue",
            "home": "Accueil",
            "welcome": "Bienvenue sur Mon Portfolio",
            "skilled-in": "Je suis compétent en:",
            "networking": "Réseautage",
            "programming": "Programmation",
            "graphics-design": "Conception Graphique",
            "software-engineering": "Ingénierie Logicielle",
            "contact-me": "Contactez-moi",
            "explore-skills": "Explorez Mes Compétences",
            "web-development-title": "Développement Web",
            "web-development-description": "Ceci est une brève description de la compétence. Vous pouvez ajouter plus de détails ici."
        },
        de: {
            "title": "Mein Portfolio",
            "role": "Softwareentwickler",
            "about": "Über Mich",
            "experience": "Erfahrung",
            "education": "Bildung",
            "skills": "Fähigkeiten",
            "web-development": "Webentwicklung",
            "databases": "Datenbanken",
            "mobile-development": "Mobile Entwicklung",
            "projects": "Projekte",
            "project1": "Projekt 1",
            "project2": "Projekt 2",
            "project3": "Projekt 3",
            "choose-theme": "Thema Wählen",
            "language": "Sprache",
            "home": "Startseite",
            "welcome": "Willkommen in Meinem Portfolio",
            "skilled-in": "Ich bin geschickt in:",
            "networking": "Netzwerke",
            "programming": "Programmierung",
            "graphics-design": "Grafikdesign",
            "software-engineering": "Softwaretechnik",
            "contact-me": "Kontaktiere Mich",
            "explore-skills": "Erkunde Meine Fähigkeiten",
            "web-development-title": "Webentwicklung",
            "web-development-description": "Dies ist eine kurze Beschreibung der Fähigkeit. Sie können hier weitere Details hinzufügen."
        },
        ja: {
            "title": "私のポートフォリオ",
            "role": "ソフトウェア開発者",
            "about": "私について",
            "experience": "経験",
            "education": "教育",
            "skills": "スキル",
            "web-development": "ウェブ開発",
            "databases": "データベース",
            "mobile-development": "モバイル開発",
            "projects": "プロジェクト",
            "project1": "プロジェクト 1",
            "project2": "プロジェクト 2",
            "project3": "プロジェクト 3",
            "choose-theme": "テーマを選択",
            "language": "言語",
            "home": "ホーム",
            "welcome": "私のポートフォリオへようこそ",
            "skilled-in": "私は以下のスキルを持っています:",
            "networking": "ネットワーキング",
            "programming": "プログラミング",
            "graphics-design": "グラフィックデザイン",
            "software-engineering": "ソフトウェア工学",
            "contact-me": "お問い合わせ",
            "explore-skills": "私のスキルを探る",
            "web-development-title": "ウェブ開発",
            "web-development-description": "これはスキルの簡単な説明です。ここに詳細を追加できます。"
        }
    };

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language') || 'en';
    languageSelect.value = savedLanguage;
    setLanguage(savedLanguage);

    // Language switcher functionality
    languageSelect.addEventListener('change', function () {
        
        const lang = this.value;
        setLanguage(lang);
        localStorage.setItem('language', lang);
    });

    // Set language function
    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

     // Observe DOM changes to dynamically update translations
     const observer = new MutationObserver(() => {
      const lang = languageSelect.value;
      setLanguage(lang);
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

document.addEventListener('DOMContentLoaded', function() {
  const timeline = document.querySelector('.timeline');
  const roadmapData = [
      {
          title: "Primary",
          description: "completed primary education school",
          date: "2018",
          completed: true
      },
      {
          title: "High school",
          description: "completed high school education.",
          date: "2022",
          completed: true
      },
      {
          title: "College",
          description: "Joined The Meru National polytechnic for a diploma in computer science.",
          date: "2023- current date",
          completed: false
      },
      {
          title: "joined huawei ai course training",
          description: "joined for a certificate in Ai developmaent.",
          date: "2025- current date",
          completed: false
      },
      {
          title: "joined The Power Learn Project",
          description: "joined for a certificate in Software developmaent.",
          date: "2025- current date",
          completed: false
      }
  ];

  // Create roadmap items
  roadmapData.forEach((item, index) => {
      const roadmapItem = document.createElement('div');
      roadmapItem.className = `roadmap-item ${index % 2 === 0 ? 'left' : 'right'}`;
      
      const statusClass = item.completed ? 'completed' : 'pending';
      
      roadmapItem.innerHTML = `
          <div class="item-content ${statusClass}">
              <h3 class="item-title">${item.title}</h3>
              <p class="item-description">${item.description}</p>
              <span class="item-date">${item.date}</span>
              <div class="status-indicator">${item.completed ? '✓' : '...'}</div>
              <div class="tooltip">${item.completed ? 'Completed' : 'Pending'}</div>
              <div class="progress-bar"></div>
          </div>
      `;
      
      timeline.appendChild(roadmapItem);
  });

  // Animate items on scroll
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });

  document.querySelectorAll('.roadmap-item').forEach(item => {
      observer.observe(item);
  });

  // Add click interaction
  document.querySelectorAll('.item-content').forEach(item => {
      item.addEventListener('click', function() {
          this.classList.toggle('expanded');
      });
  });
});
learnHTML.addEventListener('click', () => {
  main.value='learnHTML'; 
if (main.value==='learnHTML'){
  head.innerHTML+=`<link rel="stylesheet" href="learnhtml.css">`;
  main.innerHTML = `
  <section class="lh">
   <header>
        <div class="container">
            <h1>HTML Adventure</h1>
            <p>Learn HTML through interactive lessons and challenges!</p>
        </div>
    </header>
    
    <div class="container">
        <div class="progress-container">
            <div class="progress-bar" id="progressBar">0%</div>
        </div>
        
        <div class="game-area">
            <div class="tabs">
                <button class="tab active" data-tab="lesson">Lesson</button>
                <button class="tab" data-tab="quiz">Quiz</button>
                <button class="tab" data-tab="playground">Playground</button>
                <button class="tab" data-tab="achievements">Achievements</button>
            </div>
            
            <div class="tab-content active" id="lesson">
                <div class="lesson-content">
                    <h2>Welcome to HTML Basics!</h2>
                    <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that tell the browser how to display content.</p>
                    
                    <h3>Basic HTML Structure</h3>
                    <p>Every HTML document starts with a document type declaration and has a basic structure:</p>
                    
                    <div class="code-example">
                        &lt;!DOCTYPE html&gt;<br>
                        &lt;html&gt;<br>
                        &lt;head&gt;<br>
                        &nbsp;&nbsp;&lt;title&gt;Page Title&lt;/title&gt;<br>
                        &lt;/head&gt;<br>
                        &lt;body&gt;<br>
                        &nbsp;&nbsp;&lt;h1&gt;My First Heading&lt;/h1&gt;<br>
                        &nbsp;&nbsp;&lt;p&gt;My first paragraph.&lt;/p&gt;<br>
                        &lt;/body&gt;<br>
                        &lt;/html&gt;
                    </div>
                    
                    <h3>HTML Elements</h3>
                    <p>HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag:</p>
                    <p class="code-example">&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</p>
                    
                    <p>Common HTML elements include:</p>
                    <ul>
                        <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong> - Headings</li>
                        <li><strong>&lt;p&gt;</strong> - Paragraphs</li>
                        <li><strong>&lt;a&gt;</strong> - Links</li>
                        <li><strong>&lt;img&gt;</strong> - Images</li>
                        <li><strong>&lt;div&gt;</strong> - Division or section</li>
                    </ul>
                    
                    <div class="feedback" id="lessonFeedback"></div>
                    
                    <div class="nav-buttons">
                        <button id="prevLesson" class="secondary" disabled>Previous</button>
                        <button id="nextLesson">Next Lesson</button>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="quiz">
                <h2>Test Your Knowledge</h2>
                <p>Answer these questions to check your understanding of the lesson.</p>
                
                <div class="quiz-question">
                    <p>1. What does HTML stand for?</p>
                    <div class="quiz-options">
                        <div class="quiz-option">Hyperlinks and Text Markup Language</div>
                        <div class="quiz-option correct">HyperText Markup Language</div>
                        <div class="quiz-option">Home Tool Markup Language</div>
                        <div class="quiz-option">Hyper Text Making Language</div>
                    </div>
                </div>
                
                <div class="quiz-question">
                    <p>2. Which of these is the correct HTML element for the largest heading?</p>
                    <div class="quiz-options">
                        <div class="quiz-option">&lt;heading&gt;</div>
                        <div class="quiz-option">&lt;h6&gt;</div>
                        <div class="quiz-option correct">&lt;h1&gt;</div>
                        <div class="quiz-option">&lt;head&gt;</div>
                    </div>
                </div>
                
                <div class="quiz-question">
                    <p>3. What is the correct HTML for inserting an image?</p>
                    <div class="quiz-options">
                        <div class="quiz-option">&lt;img url="image.png"&gt;</div>
                        <div class="quiz-option">&lt;image src="image.png"&gt;</div>
                        <div class="quiz-option correct">&lt;img src="image.png" alt="My Image"&gt;</div>
                        <div class="quiz-option">&lt;img href="image.png"&gt;</div>
                    </div>
                </div>
                
                <div class="feedback" id="quizFeedback"></div>
                
                <div class="nav-buttons">
                    <button id="checkQuiz">Check Answers</button>
                    <button id="resetQuiz" class="secondary">Try Again</button>
                </div>
            </div>
            
            <div class="tab-content" id="playground">
                <h2>HTML Playground</h2>
                <p>Practice what you've learned by writing HTML code and seeing the results immediately!</p>
                
                <div class="playground-area">
                    <div class="playground-editor">
                        <textarea class="playground-code" id="htmlCode" placeholder="Write your HTML code here...">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;This is my first HTML page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</textarea>
                        <iframe class="playground-preview" id="previewFrame"></iframe>
                    </div>
                    <div class="playground-controls">
                        <button id="runCode">Run Code</button>
                        <button id="resetCode" class="secondary">Reset</button>
                        <button id="challengeBtn">Give Me a Challenge</button>
                    </div>
                </div>
                
                <div class="feedback" id="playgroundFeedback"></div>
            </div>
            
            <div class="tab-content" id="achievements">
                <h2>Your Achievements</h2>
                <p>Earn badges by completing lessons and challenges!</p>
                
                <div class="achievements">
                    <div class="achievement" id="firstLesson">
                        <div class="achievement-icon">📖</div>
                        <h3>First Lesson</h3>
                        <p>Complete your first HTML lesson</p>
                    </div>
                    
                    <div class="achievement" id="quizMaster">
                        <div class="achievement-icon">🧠</div>
                        <h3>Quiz Master</h3>
                        <p>Score 100% on a quiz</p>
                    </div>
                    
                    <div class="achievement" id="codeExplorer">
                        <div class="achievement-icon">🔍</div>
                        <h3>Code Explorer</h3>
                        <p>Try the playground for the first time</p>
                    </div>
                    
                    <div class="achievement" id="challengeCompleted">
                        <div class="achievement-icon">🏆</div>
                        <h3>Challenge Completed</h3>
                        <p>Complete a playground challenge</p>
                    </div>
                    
                    <div class="achievement" id="htmlExpert">
                        <div class="achievement-icon">🌟</div>
                        <h3>HTML Expert</h3>
                        <p>Complete all lessons and challenges</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

  `
  
const gameState = {
  currentLesson: 1,
  totalLessons: 5,
  quizCompleted: false,
  playgroundUsed: false,
  challengeCompleted: false,
  achievements: {
      firstLesson: false,
      quizMaster: false,
      codeExplorer: false,
      challengeCompleted: false,
      htmlExpert: false
  }
};

// DOM Elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const progressBar = document.getElementById('progressBar');
const lessonFeedback = document.getElementById('lessonFeedback');
const quizFeedback = document.getElementById('quizFeedback');
const playgroundFeedback = document.getElementById('playgroundFeedback');
const nextLessonBtn = document.getElementById('nextLesson');
const prevLessonBtn = document.getElementById('prevLesson');
const checkQuizBtn = document.getElementById('checkQuiz');
const resetQuizBtn = document.getElementById('resetQuiz');
const runCodeBtn = document.getElementById('runCode');
const resetCodeBtn = document.getElementById('resetCode');
const challengeBtn = document.getElementById('challengeBtn');
const htmlCode = document.getElementById('htmlCode');
const previewFrame = document.getElementById('previewFrame');

// Tab switching
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      
      // Hide all tab contents
      tabContents.forEach(content => {
          content.classList.remove('active');
      });
      
      // Deactivate all tabs
      tabs.forEach(t => {
          t.classList.remove('active');
      });
      
      // Activate selected tab
      tab.classList.add('active');
      document.getElementById(tabId).classList.add('active');
      
      // Special actions for certain tabs
      if (tabId === 'playground') {
          runCode();
          if (!gameState.playgroundUsed) {
              unlockAchievement('codeExplorer');
              gameState.playgroundUsed = true;
          }
      }
  });
});

// Lesson navigation
nextLessonBtn.addEventListener('click', () => {
  if (gameState.currentLesson < gameState.totalLessons) {
      gameState.currentLesson++;
      updateLessonContent();
      updateProgress();
      
      if (gameState.currentLesson === 1) {
          unlockAchievement('firstLesson');
      }
      
      if (gameState.currentLesson === gameState.totalLessons) {
          nextLessonBtn.textContent = 'Finish Course';
          unlockAchievement('htmlExpert');
      }
  } else {
      // Course completed
      showFeedback(lessonFeedback, 'Congratulations! You have completed the HTML course!', 'success');
  }
  
  prevLessonBtn.disabled = gameState.currentLesson === 1;
});

prevLessonBtn.addEventListener('click', () => {
  if (gameState.currentLesson > 1) {
      gameState.currentLesson--;
      updateLessonContent();
      updateProgress();
      nextLessonBtn.textContent = 'Next Lesson';
  }
  
  prevLessonBtn.disabled = gameState.currentLesson === 1;
});

// Quiz functionality
checkQuizBtn.addEventListener('click', () => {
  const correctAnswers = document.querySelectorAll('.quiz-option.correct');
  let selectedCorrect = 0;
  
  correctAnswers.forEach(option => {
      if (option.classList.contains('selected')) {
          selectedCorrect++;
      }
  });
  
  const score = Math.round((selectedCorrect / correctAnswers.length) * 100);
  
  if (score === 100) {
      showFeedback(quizFeedback, `Perfect! You got ${score}%!`, 'success');
      gameState.quizCompleted = true;
      unlockAchievement('quizMaster');
  } else if (score >= 50) {
      showFeedback(quizFeedback, `Good job! You got ${score}%. Try again to get 100%!`, 'success');
  } else {
      showFeedback(quizFeedback, `You got ${score}%. Review the lesson and try again!`, 'error');
  }
});

resetQuizBtn.addEventListener('click', () => {
  document.querySelectorAll('.quiz-option').forEach(option => {
      option.classList.remove('selected', 'correct', 'incorrect');
  });
  quizFeedback.classList.remove('success', 'error');
  quizFeedback.style.display = 'none';
});

// Quiz option selection
document.querySelectorAll('.quiz-option').forEach(option => {
  option.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
          // Remove selection from siblings
          this.parentNode.querySelectorAll('.quiz-option').forEach(sibling => {
              sibling.classList.remove('selected');
          });
          
          // Select this option
          this.classList.add('selected');
      }
  });
});

// Playground functionality
runCodeBtn.addEventListener('click', runCode);

resetCodeBtn.addEventListener('click', () => {
  htmlCode.value = `<!DOCTYPE html>
<html>
<head>
<title>My Page</title>
</head>
<body>
<h1>Hello, World!</h1>
<p>This is my first HTML page.</p>
</body>
</html>`;
  runCode();
  showFeedback(playgroundFeedback, 'Code has been reset to the default template.', 'success');
});

challengeBtn.addEventListener('click', () => {
  const challenges = [
      {
          title: "Create a Link",
          description: "Add a link to https://www.example.com with the text 'Visit Example'",
          solution: /<a\s+href=["']https:\/\/www\.example\.com["']>Visit Example<\/a>/i
      },
      {
          title: "Add an Image",
          description: "Add an image with source 'image.jpg' and alternative text 'My Image'",
          solution: /<img\s+src=["']image\.jpg["']\s+alt=["']My Image["']\s*\/?>/i
      },
      {
          title: "Create a List",
          description: "Create an unordered list with three items: 'First', 'Second', and 'Third'",
          solution: /<ul>\s*<li>First<\/li>\s*<li>Second<\/li>\s*<li>Third<\/li>\s*<\/ul>/i
      }
  ];
  
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  
  htmlCode.value = `<!DOCTYPE html>
<html>
<head>
<title>Challenge</title>
</head>
<body>
<!-- ${randomChallenge.description} -->
<h1>Challenge: ${randomChallenge.title}</h1>
</body>
</html>`;
  
  showFeedback(playgroundFeedback, `Challenge: ${randomChallenge.description}`, 'success');
  
  // Check for solution periodically
  const challengeCheck = setInterval(() => {
      if (randomChallenge.solution.test(htmlCode.value)) {
          clearInterval(challengeCheck);
          showFeedback(playgroundFeedback, `Congratulations! You completed the challenge: ${randomChallenge.title}`, 'success');
          gameState.challengeCompleted = true;
          unlockAchievement('challengeCompleted');
      }
  }, 1000);
});

function runCode() {
  const code = htmlCode.value;
  const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  
  previewDoc.open();
  previewDoc.write(code);
  previewDoc.close();
}

// Achievement system
function unlockAchievement(achievementId) {
  if (!gameState.achievements[achievementId]) {
      gameState.achievements[achievementId] = true;
      document.getElementById(achievementId).classList.add('unlocked');
      
      // Show achievement notification
      const achievement = document.getElementById(achievementId);
      const achievementName = achievement.querySelector('h3').textContent;
      showFeedback(document.getElementById(`${achievementId.split('-')[0]}Feedback`), 
          `Achievement Unlocked: ${achievementName}!`, 'success');
  }
}

// Helper functions
function updateProgress() {
  const progress = (gameState.currentLesson / gameState.totalLessons) * 100;
  progressBar.style.width = `${progress}%`;
  progressBar.textContent = `${Math.round(progress)}%`;
}

function showFeedback(element, message, type) {
  element.textContent = message;
  element.className = 'feedback';
  element.classList.add(type);
}

function updateLessonContent() {
  // In a full implementation, this would load different lesson content
  // For this demo, we'll just update the lesson number
  document.querySelector('.lesson-content h2').textContent = `Lesson ${gameState.currentLesson}: ${getLessonTitle(gameState.currentLesson)}`;
  
  // Update lesson content based on currentLesson
  // This would be expanded with actual lesson content in a full implementation
}

function getLessonTitle(lessonNumber) {
  const titles = [
      "HTML Basics",
      "HTML Elements",
      "HTML Attributes",
      "HTML Links and Images",
      "HTML Tables and Lists"
  ];
  return titles[lessonNumber - 1] || "HTML Lesson";
}

// Initialize the game
updateProgress();
updateLessonContent();
runCode();
}
const gameState = {
  currentLesson: 1,
  totalLessons: 5,
  quizCompleted: false,
  playgroundUsed: false,
  challengeCompleted: false,
  achievements: {
      firstLesson: false,
      quizMaster: false,
      codeExplorer: false,
      challengeCompleted: false,
      htmlExpert: false
  }
};

// DOM Elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const progressBar = document.getElementById('progressBar');
const lessonFeedback = document.getElementById('lessonFeedback');
const quizFeedback = document.getElementById('quizFeedback');
const playgroundFeedback = document.getElementById('playgroundFeedback');
const nextLessonBtn = document.getElementById('nextLesson');
const prevLessonBtn = document.getElementById('prevLesson');
const checkQuizBtn = document.getElementById('checkQuiz');
const resetQuizBtn = document.getElementById('resetQuiz');
const runCodeBtn = document.getElementById('runCode');
const resetCodeBtn = document.getElementById('resetCode');
const challengeBtn = document.getElementById('challengeBtn');
const htmlCode = document.getElementById('htmlCode');
const previewFrame = document.getElementById('previewFrame');

// Tab switching
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      
      // Hide all tab contents
      tabContents.forEach(content => {
          content.classList.remove('active');
      });
      
      // Deactivate all tabs
      tabs.forEach(t => {
          t.classList.remove('active');
      });
      
      // Activate selected tab
      tab.classList.add('active');
      document.getElementById(tabId).classList.add('active');
      
      // Special actions for certain tabs
      if (tabId === 'playground') {
          runCode();
          if (!gameState.playgroundUsed) {
              unlockAchievement('codeExplorer');
              gameState.playgroundUsed = true;
          }
      }
  });
});

// Lesson navigation
nextLessonBtn.addEventListener('click', () => {
  if (gameState.currentLesson < gameState.totalLessons) {
      gameState.currentLesson++;
      updateLessonContent();
      updateProgress();
      
      if (gameState.currentLesson === 1) {
          unlockAchievement('firstLesson');
      }
      
      if (gameState.currentLesson === gameState.totalLessons) {
          nextLessonBtn.textContent = 'Finish Course';
          unlockAchievement('htmlExpert');
      }
  } else {
      // Course completed
      showFeedback(lessonFeedback, 'Congratulations! You have completed the HTML course!', 'success');
  }
  
  prevLessonBtn.disabled = gameState.currentLesson === 1;
});

prevLessonBtn.addEventListener('click', () => {
  if (gameState.currentLesson > 1) {
      gameState.currentLesson--;
      updateLessonContent();
      updateProgress();
      nextLessonBtn.textContent = 'Next Lesson';
  }
  
  prevLessonBtn.disabled = gameState.currentLesson === 1;
});

// Quiz functionality
checkQuizBtn.addEventListener('click', () => {
  const correctAnswers = document.querySelectorAll('.quiz-option.correct');
  let selectedCorrect = 0;
  
  correctAnswers.forEach(option => {
      if (option.classList.contains('selected')) {
          selectedCorrect++;
      }
  });
  
  const score = Math.round((selectedCorrect / correctAnswers.length) * 100);
  
  if (score === 100) {
      showFeedback(quizFeedback, `Perfect! You got ${score}%!`, 'success');
      gameState.quizCompleted = true;
      unlockAchievement('quizMaster');
  } else if (score >= 50) {
      showFeedback(quizFeedback, `Good job! You got ${score}%. Try again to get 100%!`, 'success');
  } else {
      showFeedback(quizFeedback, `You got ${score}%. Review the lesson and try again!`, 'error');
  }
});

resetQuizBtn.addEventListener('click', () => {
  document.querySelectorAll('.quiz-option').forEach(option => {
      option.classList.remove('selected', 'correct', 'incorrect');
  });
  quizFeedback.classList.remove('success', 'error');
  quizFeedback.style.display = 'none';
});

// Quiz option selection
document.querySelectorAll('.quiz-option').forEach(option => {
  option.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
          // Remove selection from siblings
          this.parentNode.querySelectorAll('.quiz-option').forEach(sibling => {
              sibling.classList.remove('selected');
          });
          
          // Select this option
          this.classList.add('selected');
      }
  });
});

// Playground functionality
runCodeBtn.addEventListener('click', runCode);

resetCodeBtn.addEventListener('click', () => {
  htmlCode.value = `<!DOCTYPE html>
<html>
<head>
<title>My Page</title>
</head>
<body>
<h1>Hello, World!</h1>
<p>This is my first HTML page.</p>
</body>
</html>`;
  runCode();
  showFeedback(playgroundFeedback, 'Code has been reset to the default template.', 'success');
});

challengeBtn.addEventListener('click', () => {
  const challenges = [
      {
          title: "Create a Link",
          description: "Add a link to https://www.example.com with the text 'Visit Example'",
          solution: /<a\s+href=["']https:\/\/www\.example\.com["']>Visit Example<\/a>/i
      },
      {
          title: "Add an Image",
          description: "Add an image with source 'image.jpg' and alternative text 'My Image'",
          solution: /<img\s+src=["']image\.jpg["']\s+alt=["']My Image["']\s*\/?>/i
      },
      {
          title: "Create a List",
          description: "Create an unordered list with three items: 'First', 'Second', and 'Third'",
          solution: /<ul>\s*<li>First<\/li>\s*<li>Second<\/li>\s*<li>Third<\/li>\s*<\/ul>/i
      }
  ];
  
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  
  htmlCode.value = `<!DOCTYPE html>
<html>
<head>
<title>Challenge</title>
</head>
<body>
<!-- ${randomChallenge.description} -->
<h1>Challenge: ${randomChallenge.title}</h1>
</body>
</html>`;
  
  showFeedback(playgroundFeedback, `Challenge: ${randomChallenge.description}`, 'success');
  
  // Check for solution periodically
  const challengeCheck = setInterval(() => {
      if (randomChallenge.solution.test(htmlCode.value)) {
          clearInterval(challengeCheck);
          showFeedback(playgroundFeedback, `Congratulations! You completed the challenge: ${randomChallenge.title}`, 'success');
          gameState.challengeCompleted = true;
          unlockAchievement('challengeCompleted');
      }
  }, 1000);
});

function runCode() {
  const code = htmlCode.value;
  const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  
  previewDoc.open();
  previewDoc.write(code);
  previewDoc.close();
}

// Achievement system
function unlockAchievement(achievementId) {
  if (!gameState.achievements[achievementId]) {
      gameState.achievements[achievementId] = true;
      document.getElementById(achievementId).classList.add('unlocked');
      
      // Show achievement notification
      const achievement = document.getElementById(achievementId);
      const achievementName = achievement.querySelector('h3').textContent;
      showFeedback(document.getElementById(`${achievementId.split('-')[0]}Feedback`), 
          `Achievement Unlocked: ${achievementName}!`, 'success');
  }
}

// Helper functions
function updateProgress() {
  const progress = (gameState.currentLesson / gameState.totalLessons) * 100;
  progressBar.style.width = `${progress}%`;
  progressBar.textContent = `${Math.round(progress)}%`;
}

function showFeedback(element, message, type) {
  element.textContent = message;
  element.className = 'feedback';
  element.classList.add(type);
}

function updateLessonContent() {
  // In a full implementation, this would load different lesson content
  // For this demo, we'll just update the lesson number
  document.querySelector('.lesson-content h2').textContent = `Lesson ${gameState.currentLesson}: ${getLessonTitle(gameState.currentLesson)}`;
  
  // Update lesson content based on currentLesson
  // This would be expanded with actual lesson content in a full implementation
}

function getLessonTitle(lessonNumber) {
  const titles = [
      "HTML Basics",
      "HTML Elements",
      "HTML Attributes",
      "HTML Links and Images",
      "HTML Tables and Lists"
  ];
  return titles[lessonNumber - 1] || "HTML Lesson";
}

// Initialize the game
updateProgress();
updateLessonContent();
runCode();
});
learnCSS.addEventListener('click', () => {
  main.value='learnCSS'; 
if (main.value==='learnCSS'){
  main.innerHTML = `<section class="lc">
        <header>
        <h1>CSS Adventure</h1>
        <p>Learn CSS in a fun, interactive way!</p>
    </header>

    <div class="nav-container">
        <ul class="nav-tabs">
            <li><button class="nav-btn active" data-target="intro">Introduction</button></li>
            <li><button class="nav-btn" data-target="selectors">Selectors</button></li>
            <li><button class="nav-btn" data-target="box-model">Box Model</button></li>
            <li><button class="nav-btn" data-target="colors">Colors</button></li>
            <li><button class="nav-btn" data-target="typography">Typography</button></li>
            <li><button class="nav-btn" data-target="layout">Layout</button></li>
            <li><button class="nav-btn" data-target="flexbox">Flexbox</button></li>
            <li><button class="nav-btn" data-target="grid">Grid</button></li>
            <li><button class="nav-btn" data-target="transitions">Transitions</button></li>
            <li><button class="nav-btn" data-target="animations">Animations</button></li>
        </ul>
    </div>

    <div class="container">
        <!-- Introduction Section -->
        <section id="intro" class="lesson-section active">
            <h2 class="lesson-title">Introduction to CSS</h2>
            <div class="lesson-content">
                <p>Welcome to <strong>CSS Adventure</strong>! In this game, you'll learn how to style web pages using CSS (Cascading Style Sheets).</p>
                <p>CSS is what makes websites look beautiful and engaging. It controls colors, layouts, fonts, animations, and much more!</p>
                <p>In each lesson, you'll:</p>
                <ul>
                    <li>Learn key CSS concepts</li>
                    <li>See live examples</li>
                    <li>Practice with interactive exercises</li>
                    <li>Earn achievements as you progress</li>
                </ul>
                <p>Ready to begin your CSS adventure? Click on the next lesson to get started!</p>
            </div>

            <div class="exercise">
                <h3 class="exercise-title"><i>✓</i> Quick Quiz</h3>
                <p class="exercise-instruction">What does CSS stand for?</p>
                <div class="quiz-options">
                    <label><input type="radio" name="css-quiz" value="A"> Computer Style Sheets</label><br>
                    <label><input type="radio" name="css-quiz" value="B"> Creative Style System</label><br>
                    <label><input type="radio" name="css-quiz" value="C"> Cascading Style Sheets</label><br>
                    <label><input type="radio" name="css-quiz" value="D"> Colorful Style Syntax</label>
                </div>
                <button class="check-btn" onclick="checkQuiz('css-quiz', 'C')">Check Answer</button>
                <div class="feedback"></div>
            </div>
        </section>

        <!-- Selectors Section -->
        <section id="selectors" class="lesson-section">
            <h2 class="lesson-title">CSS Selectors</h2>
            <div class="lesson-content">
                <p>CSS selectors are patterns used to select the HTML elements you want to style.</p>
                <p>Here are some common selectors:</p>
                <ul>
                    <li><code>element</code> - selects all elements of that type (e.g., <code>p</code> selects all paragraphs)</li>
                    <li><code>.class</code> - selects all elements with that class (e.g., <code>.header</code>)</li>
                    <li><code>#id</code> - selects the element with that ID (e.g., <code>#main</code>)</li>
                    <li><code>selector1, selector2</code> - selects all elements that match either selector</li>
                </ul>
                
                <div class="playground">
                    <div class="code-editor">
                        <div class="code-editor-header">
                            <span class="code-editor-title">CSS Editor</span>
                            <button class="reset-btn" onclick="resetCode('selectors-code')">Reset</button>
                        </div>
                        <textarea class="code-input" id="selectors-code">/* Try changing the color of all paragraphs */
p {
    color: blue;
}

/* Make elements with class="special" stand out */
.special {
    font-weight: bold;
}

/* Style the element with id="unique" */
#unique {
    border: 2px solid red;
}</textarea>
                    </div>
                    <div class="preview">
                        <div class="preview-content" id="selectors-preview">
                            <p>This is a regular paragraph.</p>
                            <p class="special">This paragraph has a special class.</p>
                            <div class="special">This div is also special.</div>
                            <p id="unique">This paragraph has a unique ID.</p>
                            <p>Another regular paragraph.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="exercise">
                <h3 class="exercise-title"><i>✓</i> Selector Challenge</h3>
                <p class="exercise-instruction">Write CSS to make all elements with class "highlight" have a yellow background and all h2 elements green.</p>
                <div class="playground">
                    <div class="code-editor">
    <div class="code-editor-header">
        <span class="code-editor-title">CSS Editor</span>
        <button class="reset-btn" onclick="resetCode('selector-exercise')">Reset</button>
    </div>
    <textarea class="code-input" id="selector-exercise">/* Write your CSS here */
.highlight {
    /* Your code for highlight class */
}

h2 {
    /* Your code for h2 elements */
}</textarea>
</div>
<div class="preview">
    <div class="preview-content" id="selector-exercise-preview">
        <h2>This is a heading</h2>
        <p class="highlight">This should be highlighted</p>
        <div>Regular content</div>
        <h2>Another heading</h2>
        <span class="highlight">This should also be highlighted</span>
    </div>
</div>
<button class="check-btn" onclick="checkSelectorExercise()">Check Solution</button>
<div class="feedback"></div>
</div>
</section>

<!-- Box Model Section -->
<section id="box-model" class="lesson-section">
    <h2 class="lesson-title">The Box Model</h2>
    <div class="lesson-content">
        <p>Every element in CSS is a rectangular box with these properties:</p>
        <ul>
            <li><strong>Content</strong> - The actual content (text, image, etc.)</li>
            <li><strong>Padding</strong> - Space between content and border</li>
            <li><strong>Border</strong> - A line around the padding</li>
            <li><strong>Margin</strong> - Space outside the border</li>
        </ul>
        
        <div class="demo-box" id="box-model-demo"></div>
        
        <div class="playground">
            <div class="code-editor">
                <div class="code-editor-header">
                    <span class="code-editor-title">CSS Editor</span>
                    <button class="reset-btn" onclick="resetCode('box-model-code')">Reset</button>
                </div>
                <textarea class="code-input" id="box-model-code">#box-model-demo {
    width: 200px;
    height: 200px;
    background-color: var(--secondary);
    /* Try adding padding, border, and margin */
    padding: 20px;
    border: 5px solid var(--primary);
    margin: 30px;
}</textarea>
            </div>
            <div class="preview">
                <div class="preview-content">
                    <div id="box-model-visualization">
                        <div class="margin">
                            Margin
                            <div class="border">
                                Border
                                <div class="padding">
                                    Padding
                                    <div class="content">
                                        Content
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="exercise">
        <h3 class="exercise-title"><i>✓</i> Box Model Challenge</h3>
        <p class="exercise-instruction">Create a box with 40px padding, 10px solid border, and 20px margin.</p>
        <button class="check-btn" onclick="checkBoxModelExercise()">Check Solution</button>
        <div class="feedback"></div>
    </div>
</section>

<!-- Continue with other sections... -->

<!-- Progress Section -->
<div class="progress-container">
    <h3 class="progress-title">Your Progress</h3>
    <div class="progress-bar">
        <div class="progress-fill" id="progress-fill"></div>
    </div>
    <p class="progress-text"><span id="progress-percent">0</span>% Complete</p>
</div>

<!-- Achievement Badge -->
<div class="achievement-badge" id="achievement-badge">
    <span class="badge-icon">🏆</span>
    <span class="badge-text">New Achievement Unlocked!</span>
</div>


  </section>
`
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', function() {
      // Remove active class from all buttons and sections
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.lesson-section').forEach(s => s.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show corresponding section
      const target = this.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
      
      // Update progress
      updateProgress();
  });
});

// Code editor functionality
function setupCodeEditor(editorId, previewId) {
  const editor = document.getElementById(editorId);
  const preview = document.getElementById(previewId);
  
  editor.addEventListener('input', function() {
      try {
          const style = document.createElement('style');
          style.textContent = editor.value;
          
          // Remove old style
          const oldStyle = preview.querySelector('style');
          if (oldStyle) oldStyle.remove();
          
          // Add new style
          preview.appendChild(style);
      } catch (e) {
          console.error(e);
      }
  });
  
  // Trigger initial update
  editor.dispatchEvent(new Event('input'));
}

// Reset code to default
function resetCode(editorId) {
  const editor = document.getElementById(editorId);
  const defaultCode = editor.dataset.default || '';
  editor.value = defaultCode;
  editor.dispatchEvent(new Event('input'));
}

// Quiz checking
function checkQuiz(name, correctAnswer) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  const feedback = document.querySelector(`.exercise .feedback`);
  
  if (!selected) {
      feedback.textContent = 'Please select an answer!';
      feedback.className = 'feedback error';
      return;
  }
  
  if (selected.value === correctAnswer) {
      feedback.textContent = 'Correct! Well done!';
      feedback.className = 'feedback success';
      unlockAchievement('Quiz Master');
  } else {
      feedback.textContent = 'Not quite right. Try again!';
      feedback.className = 'feedback error';
  }
}

// Selector exercise check
function checkSelectorExercise() {
  const code = document.getElementById('selector-exercise').value;
  const feedback = document.querySelector('#selectors .feedback');
  
  try {
      const style = document.createElement('style');
      style.textContent = code;
      document.head.appendChild(style);
      
      // Check if highlights are yellow
      const highlights = document.querySelectorAll('#selector-exercise-preview .highlight');
      const allHighlighted = Array.from(highlights).every(el => 
          window.getComputedStyle(el).backgroundColor === 'rgb(255, 255, 0)');
      
      // Check if h2s are green
      const h2s = document.querySelectorAll('#selector-exercise-preview h2');
      const allH2Green = Array.from(h2s).every(el => 
          window.getComputedStyle(el).color === 'rgb(0, 128, 0)');
      
      document.head.removeChild(style);
      
      if (allHighlighted && allH2Green) {
          feedback.textContent = 'Perfect! You got it right!';
          feedback.className = 'feedback success';
          unlockAchievement('Selector Pro');
      } else {
          feedback.textContent = 'Almost there! Check your colors again.';
          feedback.className = 'feedback error';
      }
  } catch (e) {
      feedback.textContent = 'There\'s a syntax error in your CSS.';
      feedback.className = 'feedback error';
  }
}

// Box model exercise check
function checkBoxModelExercise() {
  const code = document.getElementById('box-model-code').value;
  const feedback = document.querySelector('#box-model .feedback');
  
  try {
      const style = document.createElement('style');
      style.textContent = code;
      document.head.appendChild(style);
      
      const demo = document.getElementById('box-model-demo');
      const computed = window.getComputedStyle(demo);
      
      const paddingCorrect = computed.padding === '40px';
      const borderCorrect = computed.borderWidth === '10px' && computed.borderStyle === 'solid';
      const marginCorrect = computed.margin === '20px';
      
      document.head.removeChild(style);
      
      if (paddingCorrect && borderCorrect && marginCorrect) {
          feedback.textContent = 'Excellent! You understand the box model!';
          feedback.className = 'feedback success';
          unlockAchievement('Box Model Expert');
      } else {
          feedback.textContent = 'Not quite. Check your padding, border, and margin values.';
          feedback.className = 'feedback error';
      }
  } catch (e) {
      feedback.textContent = 'There\'s a syntax error in your CSS.';
      feedback.className = 'feedback error';
  }
}

// Achievement system
function unlockAchievement(title) {
  const badge = document.getElementById('achievement-badge');
  const badgeText = badge.querySelector('.badge-text');
  
  badgeText.textContent = `Achievement Unlocked: ${title}!`;
  badge.classList.add('show');
  
  setTimeout(() => {
      badge.classList.remove('show');
  }, 3000);
}

// Progress tracking
function updateProgress() {
  const sections = document.querySelectorAll('.lesson-section');
  const completed = Array.from(sections).filter(section => {
      return section.classList.contains('active') || 
             section.querySelector('.feedback.success');
  }).length;
  
  const percent = Math.round((completed / sections.length) * 100);
  document.getElementById('progress-fill').style.width = `${percent}%`;
  document.getElementById('progress-percent').textContent = percent;
  
  if (percent === 100) {
      unlockAchievement('CSS Master');
  }
}

// Initialize code editors
document.addEventListener('DOMContentLoaded', function() {
  setupCodeEditor('selectors-code', 'selectors-preview');
  setupCodeEditor('box-model-code', 'box-model-demo');
  setupCodeEditor('selector-exercise', 'selector-exercise-preview');
  
  // Set default codes
  document.getElementById('selectors-code').dataset.default = 
      document.getElementById('selectors-code').value;
  document.getElementById('box-model-code').dataset.default = 
      document.getElementById('box-model-code').value;
  document.getElementById('selector-exercise').dataset.default = 
      document.getElementById('selector-exercise').value;
});

}




});
contactMe.addEventListener('click', () => {
  main.value='contactMe';
  if (main.value==='contactMe'){
    main.innerHTML = `<section class="contact-section">
      <div class="contact-container">
        <h2>Contact Me</h2>
        <p>If you have any questions or just want to say hi, feel free to reach out!</p>

        <form onsubmit="sendEmail()" reset(); return false; class="contact-form">
          <div class="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
    <script src=" https://smtpjs.com/v3/smtp.js">
      
    </script>
    <script>
     function sendEmail() {
     Email.send({
    Host : "s1.maildns.net",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
     }
    </script>
`
function sendEmail() {
  Email.send({
 Host : "smtp.gmail.com",
 Username : "kbrian1237@gmail.com",
 Password : "k2189114",
 To : 'kbrian1445@gmail.com',
 From : document.querySelector('input[name="email"]').value,
 Subject : "This is the subject",
 Body : "And this is the body"
}).then(
message => alert(message)
);
  }
  }


});
/* Function to handle screen size changes
function handleScreenResize() {
    const skillCards = document.querySelectorAll('.skill-card');
    const width = window.innerWidth;
    const about=document.querySelector('.about');

    skillCards.forEach((card, index) => {
        // Remove any existing <br> tags after skill cards
        const nextSibling = card.nextElementSibling;
        if (nextSibling && nextSibling.tagName === 'BR') {
            nextSibling.remove();
        }

        // Add a <br> tag after each skill card if the screen width is less than 600px
        if (width < 600) {
            const br = document.createElement('br');
            card.parentNode.insertBefore(br, about.nextSibling);
        }
    });
}

// Attach the resize event listener
window.addEventListener('resize', handleScreenResize);

// Call the function initially to handle the current screen size
handleScreenResize();*/
