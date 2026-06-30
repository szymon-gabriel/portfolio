/* ==========================================================================
   0. INTERNATIONALIZATION
   ========================================================================== */
const translations = {
    pl: {
        nav_about: "O mnie",
        nav_skills: "Umiejętności",
        nav_projects: "Projekty",
        nav_contact: "Kontakt",
        hero_bio: `<span class="purple-glow-text">Tech DNA & Analytical Mindset.</span> Zorientowany na detale deweloper z analitycznym podejściem do rozwiązywania problemów. Projektuję i koduję wydajne aplikacje webowe oraz rozszerzenia automatyzujące procesy biznesowe.`,
        hero_btn: "Zobacz Projekty",
        hero_cv: "Pobierz CV",
        about_title_1: "O mnie",
        about_subtitle: "Pasja poparta realnymi wdrożeniami",
        about_p1: `Moja przygoda z programowaniem zaczęła się od czystej ciekawości, która szybko przerodziła się w pasję tworzenia narzędzi rozwiązujących realne problemy. Choć formalnie chcę zdobyć swoje <span class="purple-glow-text">pierwsze komercyjne doświadczenie w branży IT</span>, w praktyce dostarczyłem już działające rozwiązania.`,
        about_p2: `W mojej obecnej pracy stworzyłem i z powodzeniem wdrożyłem aplikacje webowe oraz wtyczki optymalizujące procesy operacyjne i automatyzujące analizę danych z plików Excel, co realnie podniosło efektywność zespołu. Mam na koncie także projekty realizowane od A do Z samodzielnie – od analizy UX/UI, przez design, aż po czysty kod (jak nowoczesna wizytówka <a href="https://idde.studio/" target="_blank" rel="noopener" class="about-inline-link">idde.studio</a>). Moje techniczne początki to także aplikacje desktopowe w Java Core, np. program typu notes (<a href="https://github.com/szymon-gabriel/notesS.G" target="_blank" rel="noopener" class="about-inline-link">GitHub</a>).`,
        about_p3: `Prywatnie nieustannie się doszkalam, jednak moim głównym celem jest wejście do profesjonalnej firmy technologicznej. Szukam miejsca, gdzie pod okiem doświadczonych deweloperów będę mógł wymieniać się wiedzą, stawiać czoła złożonym wyzwaniom i rozwijać się każdego dnia jako Full-stack Developer.`,
        about_loc_label: "Lokalizacja:",
        about_loc_val: "Ostrowiec Świętokrzyski, Polska (oraz zdalnie)",
        about_email_label: "E-mail bezpośredni:",
        skills_title: "Umiejętności & Technologie",
        projects_title: "Moje ostatnie projekty",
        p1_desc: "Autorski plugin do przeglądarki usprawniający zarządzanie kolejką połączeń poprzez system powiadomień real-time.",
        p2_desc: "Dedykowane narzędzie webowe dla koordynatorów do monitorowania statusów procesowych w czasie rzeczywistym.",
        p3_desc: "Aplikacja webowe automatyzująca analizę danych z plików Excel, znacząco podnosząca efektywność pracy operacyjnej.",
        p4_desc: "Kompleksowe wdrożenie responsywnej strony internetowej typu 'business card' od zera, połączone z optymalizacją wydajnościową.",
        p5_desc: "Moje osobiste portfolio zaprojektowane od zera, wyposażone w płynne animacje, architekturę wielojęzyczności (i18n) oraz pełną responsywność.",
        p6_desc: "Mój pierwszy samodzielny projekt z 2023 roku – klasyczna aplikacja okienkowa do zarządzania notatkami, napisana w celu opanowania fundamentów programowania obiektowego.",
        btn_live: "Uruchom Demo",
        btn_code: "Zobacz Kod",
        btn_case: "Analiza",
        btn_visit: "Zobacz Strone",
        form_name: "Imię i nazwisko / Firma",
        form_email: "Adres e-mail",
        form_subject: "Temat wiadomości",
        form_msg: "Twoja wiadomość...",
        form_btn: "Wyślij wiadomość",
        footer_status: "Dostępny do nowych projektów",
        footer_connect: "Porozmawiajmy",
        footer_text: "Jestem otwarty na propozycje pracy. Z chęcią podejmę się nowych wyzwań, by wciąż zwiększać swoje doświadczenie oraz wiedzę programistyczną i projektową."
    },
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_bio: `<span class="purple-glow-text">Tech DNA & Analytical Mindset.</span> Detail-oriented developer with an analytical approach to problem-solving. I design and code high-performance web applications and extensions tailored for business process automation.`,
        hero_btn: "Explore Projects",
        hero_cv: "Download CV",
        about_title_1: "About me",
        about_subtitle: "Passion backed by real-world deployments",
        about_p1: `My journey with programming began with pure curiosity, which quickly transformed into a passion for building tools that solve real problems. While my goal is to secure my <span class="purple-glow-text">first commercial IT role</span>, I have practical experience delivering fully functional, production-ready solutions.`,
        about_p2: `In my current role, I developed and successfully deployed web applications and browser extensions optimizing operational workflows and automating Excel data processing, which significantly boosted team efficiency. I also manage end-to-end projects independently—from UX/UI analysis and design to clean code execution (such as the modern landing page <a href="https://idde.studio/" target="_blank" rel="noopener" class="about-inline-link">idde.studio</a>). My core technical roots also include desktop apps built in Java Core, like a custom note-taking tool (<a href="https://github.com/szymon-gabriel/notesS.G" target="_blank" rel="noopener" class="about-inline-link">GitHub</a>).`,
        about_p3: `Privately, I am constantly upskilling, with the primary objective of joining a professional technology company. I am looking for a collaborative environment where I can learn from experienced developers, tackle complex technical challenges, and grow daily as a Full-stack Developer.`,
        about_loc_label: "Location:",
        about_loc_val: "Ostrowiec Swietokrzyski, Poland (and remote)",
        about_email_label: "Direct Email:",
        skills_title: "Skills & Technologies",
        projects_title: "Some of my recent work",
        p1_desc: "A custom browser plugin designed to streamline call queue management via a real-time notification system.",
        p2_desc: "A dedicated web tool built for coordinators to monitor business workflow and process statuses in real time.",
        p3_desc: "A web application automating complex Excel data analysis, driving significant growth in operational workspace efficiency.",
        p4_desc: "End-to-end deployment of a custom, fully responsive business card website built from scratch, focused on high performance and speed optimization.",
        p5_desc: "My personal developer portfolio designed completely from scratch, featuring interactive micro-interactions, custom i18n multilingual architecture, and flawless responsiveness.",
        p6_desc: "My very first standalone project from 2023 – a classic desktop text editor and notes utility built to master the core fundamentals of Object-Oriented Programming (OOP).",
        btn_live: "View Demo",
        btn_code: "Check Code",
        btn_case: "View Case",
        btn_visit: "Visit Website",
        form_name: "Full Name / Company",
        form_email: "Email Address",
        form_subject: "Message Subject",
        form_msg: "Your message...",
        form_btn: "Send Message",
        footer_status: "Available for new opportunities",
        footer_connect: "Let's connect",
        footer_text: "I am actively open to job opportunities. I am eager to take on new challenges to continuously expand my development expertise and project delivery standards."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // --- LANGUAGE SWITCHER CORE LOGIC ---
    const langButtons = document.querySelectorAll(".lang-btn");
    
    const setLanguage = (lang) => {
        const elementsToTranslate = document.querySelectorAll("[data-i18n]");
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        document.documentElement.lang = lang;

        langButtons.forEach(btn => {
            if (btn.getAttribute("data-lang") === lang) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        localStorage.setItem("portfolio_lang", lang);
    };

    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedLang = button.getAttribute("data-lang");
            setLanguage(selectedLang);
        });
    });

    const savedLang = localStorage.getItem("portfolio_lang") || "pl";
    setLanguage(savedLang);


/* ==========================================================================
   1. PROJECTS CAROUSEL (SLIDER)
   ========================================================================== */
    const slider = document.getElementById("projectSlider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (slider && prevBtn && nextBtn) {
        const getScrollAmount = () => {
            const firstCard = slider.querySelector(".project-card");
            if (!firstCard) return 364; 
            
            const cardWidth = firstCard.getBoundingClientRect().width;
            const computedStyle = window.getComputedStyle(slider);
            const gap = parseFloat(computedStyle.gap) || 0;
            
            return cardWidth + gap;
        };

        nextBtn.addEventListener("click", () => {
            slider.scrollBy({
                left: getScrollAmount(),
                behavior: "smooth"
            });
        });

        prevBtn.addEventListener("click", () => {
            slider.scrollBy({
                left: -getScrollAmount(),
                behavior: "smooth"
            });
        });
    }

/* ==========================================================================
   2. JUMP TO TOP WITH PROGRESS ACCENT
   ========================================================================== */
    const progressWrap = document.getElementById('progress-wrap');
    const progressPath = document.querySelector('#progress-wrap svg path');

    if (progressWrap && progressPath) {
        const pathLength = progressPath.getTotalLength();
        
        progressPath.style.transition = progressPath.style.webkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.webkitTransition = 'stroke-dashoffset 10ms linear';
        
        const updateProgress = () => {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
            
            if (scroll > 150) {
                progressWrap.classList.add('active-progress');
            } else {
                progressWrap.classList.remove('active-progress');
            }
        };
        
        window.addEventListener('scroll', updateProgress);
        
        progressWrap.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        updateProgress();
    }

/* ==========================================================================
   3. DYNAMIC SCROLL - MENU LINK HIGHLIGHTING
   ========================================================================== */
    const menuLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");

    const scrollSpyOptions = {
        rootMargin: "-25% 0px -30% 0px",
        threshold: 0
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");
                
                menuLinks.forEach((link) => {
                    link.classList.remove("active");
                    
                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, scrollSpyOptions);

    sections.forEach((section) => {
        scrollSpyObserver.observe(section);
    });
    
/* ==========================================================================
   4. AJAX FORM SUBMISSION (FORMSPREE)
   ========================================================================== */
    const form = document.getElementById("my-form");
    const status = document.getElementById("form-status");

    if (form && status) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            
            const data = new FormData(form);
            const currentLang = document.documentElement.lang || "pl";
            
            // Komunikaty w zależności od wybranego języka strony
            const msgSending = currentLang === "pl" ? "Wysyłanie..." : "Sending...";
            const msgSuccess = currentLang === "pl" ? "Dzięki! Wiadomość została wysłana pomyślnie." : "Thanks! Your message has been sent successfully.";
            const msgError = currentLang === "pl" ? "Ups! Wystąpił problem podczas wysyłania." : "Oops! There was a problem submitting your form.";

            status.innerHTML = msgSending;
            status.style.color = "var(--text-muted)";

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.innerHTML = msgSuccess;
                    status.style.color = "#10b981";
                    form.reset();
                } else {
                    const responseData = await response.json();
                    if (Object.hasOwn(responseData, 'errors')) {
                        status.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.innerHTML = msgError;
                    }
                    status.style.color = "#ef4444";
                }
            } catch (error) {
                status.innerHTML = msgError;
                status.style.color = "#ef4444";
            }
        });
    }
});