const translations = {
    en: {
        heroEyebrow: "Oleksandr · Junior infrastructure/DevOps profile",
        heroTitle: "DevOps apprentice focused on Linux, virtualization, and CI/CD foundations.",
        heroLead: "Based in Liège, Belgium. Hands-on Windows/Linux administration, virtualization practice, and current security-oriented DevOps training (Docker, Kubernetes, Jenkins, Ansible, monitoring).",
        ctaCollaborate: "Email",
        ctaProjects: "View projects",
        stat1Label: "Professional programming diploma - Professional College, Ukraine (EQF 5)",
        stat2Label: "Bachelor in Computer Science - Tavrija State Agrotechnological University, Ukraine (EQF 6)",
        stat3Label: "Security-oriented DevOps apprentice - Technifutur",
        stat4Label: "Languages spoken fluently/comfortably",
        architectureTitle: "Toolkit I'm learning right now",
        architectureCode: `./pve-manager.py clone
./pve-manager.py start
./pve-manager.py inventory

ansible all -i inventory.ini -m ping
ansible-playbook -i inventory.ini -u olex playbook.yml --vault-password-file ~/.ansiblevault.txt

ssh docker
docker service ls
docker service ps web
docker service logs web`,
        collegeProjectsTitle: "🎓 College Projects (Database & Production Systems)",
        collegeProject1Title: "Production Database System for Electric Motor Manufacturing",
        collegeProject1Lead: "Relational production database in MS Access to track orders across assembly, testing, painting, packaging, storage, and shipment.",
        collegeProject1List: [
            "Modeled normalized schemas and SQL queries for production workflows.",
            "Built user forms to register orders, stages, and inventory movement.",
            "Generated structured production reports for tracking and audits."
        ],
        collegeProject2Title: "Production Control Application for Electric Motor Manufacturing",
        collegeProject2Lead: "Desktop production control tool combining a WPF interface with SQLite and role-based access.",
        collegeProject2List: [
            "Implemented production stage monitoring, status updates, and validation.",
            "Designed role-aware screens for operators and supervisors.",
            "Linked WPF UI to SQLite persistence for day-to-day tracking."
        ],
        universityProjectsTitle: "🎓 University Projects (SDLC, Web App, ERP MVP)",
        universityProject1Title: "Software Engineering Lifecycle Project",
        universityProject1Lead: "Academic SDLC project focused on requirements analysis, system design, and project evaluation.",
        universityProject1List: [
            "Analyzed domain and specified functional and non-functional requirements.",
            "Produced UML diagrams (use case, activity, component, sequence).",
            "Designed system architecture and selected development methodology.",
            "Estimated project complexity and cost using Function Point Analysis."
        ],
        universityProject2Title: "Web Application Development",
        universityProject2Lead: "Full-stack academic web project focused on responsive UI, dynamic content, and database-driven workflows.",
        universityProject2List: [
            "Structured frontend with adaptive navigation and interactive components.",
            "Backend with PHP form handling, validation, and MySQL persistence.",
            "Relational database design with ER modeling and normalization.",
            "Responsive layout optimized for desktop and mobile devices."
        ],
        universityProject3Title: "Thesis Project - ERP System Prototype",
        universityProject3Lead: "Graduation project focused on designing and implementing a prototype ERP system for manufacturing process management.",
        universityProject3List: [
            "Analyzed production workflows and defined system requirements.",
            "Designed architecture, UML models, and relational data schema.",
            "Implemented a desktop ERP prototype using Python and Qt.",
            "Included order tracking, production stages, documents, and analytics."
        ],
        technifuturProjectsTitle: "🏭 Technifutur Projects (Automation, Infrastructure & Web)",
        technifuturProject1Title: "Linux administration & Automation",
        technifuturProject1Lead: "Practical administration of systems and networks in a virtualized lab: Linux automation with Python, Bash, and Ansible; Proxmox infrastructure (VMs and LXC containers); network configuration (routing, DNS, DHCP); and deployment of application services such as HAProxy, Apache, Nginx, MariaDB, and PostgreSQL.",
        technifuturProject1List: [
            "Automated Linux administration workflows with Bash, Python, and Ansible playbooks.",
            "Managed Proxmox virtual infrastructure with VMs and LXC containers for multi-service labs.",
            "Configured network services including routing, DNS, and DHCP for isolated enterprise-like scenarios.",
            "Deployed and tested core services: HAProxy, Apache, Nginx, MariaDB, and PostgreSQL."
        ],
        technifuturProject2Title: "Backend development & API integration",
        technifuturProject2Lead: "Design and development of a full-stack application in a lab environment: implementation of a layered architecture with ASP.NET Core Web API, integration of external APIs, database management with SQL Server, and frontend interaction through Blazor WebAssembly.",
        technifuturProject2List: [
            "Developed a multi-layered application using ASP.NET Core Web API, Entity Framework, and SQL Server.",
            "Built a Blazor WebAssembly frontend consuming a centralized backend API.",
            "Implemented core features including CRUD operations, external API integrations, and real-time data retrieval."
        ],
        aboutTitle: "About me",
        aboutLead: "Junior IT professional in Liège with EQF 5 + EQF 6 studies, now sharpening DevOps basics and automation habits.",
        aboutBullet1: "Current security-oriented DevOps apprenticeship at Technifutur: Docker, Kubernetes, Jenkins, Ansible, Azure, monitoring.",
        aboutBullet2: "Hands-on with Windows/Linux administration, KVM/VMware virtualization, networks, and scripting in Bash/Python.",
        aboutBullet3: "Documented labs, fast learner, driving licence B.",
        pipelineTitle: "Technical skills",
        pipelineSection2Title: "Networking & tools",
        pipeline1Title: "Systems & Containers",
        pipeline1List: [
            "Windows 10/11, Windows Server.",
            "Linux: RHEL/Debian derivatives + practice with SUSE and Alpine.",
            "Proxmox, VMware, Hyper-V, VirtualBox.",
            "Docker: Dockerfiles, networks, Docker Compose, Docker Swarm."
        ],
        pipeline2Title: "Programming & automation",
        pipeline2List: [
            "Python: CLI scripts, PySide6, data handling, logging, algorithms.",
            "Bash: automation, scheduled tasks.",
            "C#: syntax, OOP, unit testing.",
            "Ansible: IaC, playbooks, configuration management, deployment."
        ],
        pipeline3Title: "Databases",
        pipeline3List: [
            "Data modeling.",
            "SQL (DDL, DML, DQL, T-SQL).",
            "SQL Server, MySQL, SQLite, MS Access.",
            "Deploying PostgreSQL, MariaDB, SQL Server."
        ],
        pipeline4Title: "Networking & security",
        pipeline4List: [
            "TCP/IP, IP addressing, routing.",
            "DNS, DHCP.",
            "SSH, SSL, HAProxy, Nginx, High availability."
        ],
        pipeline5Title: "Tools",
        pipeline5List: [
            "JetBrains IDEs, VS Code.",
            "Git, GitHub, GitLab.",
            "Microsoft Office suite."
        ],
        experienceTitle: "Formation & education",
        exp1Title: "Security-oriented DevOps apprentice - Technifutur (Oct 2025 – Jul 2026)",
        exp1Lead: "Docker, Kubernetes, Jenkins, Ansible, Azure Cloud, Prometheus/Grafana, REST APIs, Agile, TDD, and advanced networking.",
        exp2Title: "Bachelor in Computer Science - EQF 6 (Sep 2023 – Jun 2025)",
        exp2Lead: "Tavrija State Agrotechnological University, Ukraine - algorithms, networking, software engineering.",
        exp3Title: "Professional Programming Diploma - EQF 5 (Sep 2019 – Jun 2023)",
        exp3Lead: "Instrument Making Professional Pre-Higher College, Ukraine - programming basics, problem solving, documentation.",
        contactTitle: "Contact",
        contactLead: "Based in Liège, Belgium - open to internships, apprenticeships, or entry-level DevOps/System roles. Messages preferred.",
        contactEmail: "Send an email",
        contactLinkedIn: "LinkedIn profile",
        footer1: "Last updated: 2026 · Focused on infrastructure, automation, and clear documentation.",
        footer2: "Languages: Ukrainian, Russian, English, French"
    },
    fr: {
        heroEyebrow: "Oleksandr · Profil junior infrastructure/DevOps",
        heroTitle: "Stagiaire DevOps qui consolide Linux, virtualisation et bases CI/CD.",
        heroLead: "Basé à Liège, Belgique. Maîtrise Windows/Linux, pratique de la virtualisation, et formation DevOps orientée sécurité (Docker, Kubernetes, Jenkins, Ansible, monitoring).",
        ctaCollaborate: "Envoyer un email",
        ctaProjects: "Voir les projets",
        stat1Label: "Diplôme pro en programmation - Collège professionnel, Ukraine (EQF 5)",
        stat2Label: "Bachelier en informatique - Université agrotechnique de Tavrija, Ukraine (EQF 6)",
        stat3Label: "Stagiaire DevOps orienté sécurité - Technifutur",
        stat4Label: "Langues parlées couramment/aisément",
        architectureTitle: "Outils que j’apprends en ce moment",
        architectureCode: `./pve-manager.py clone
./pve-manager.py start
./pve-manager.py inventory

ansible all -i inventory.ini -m ping
ansible-playbook -i inventory.ini -u olex playbook.yml --vault-password-file ~/.ansiblevault.txt
  
ssh docker
docker service ls
docker service ps web
docker service logs web`,
        collegeProject1Title: "Base de données de production pour un fabricant de moteurs électriques",
        collegeProjectsTitle: "🎓 Projets de collège (bases de données & production)",
        collegeProject1Lead: "Base relationnelle MS Access pour suivre les commandes à travers assemblage, tests, peinture, emballage, stockage et expédition.",
        collegeProject1List: [
            "Modélisation de schémas normalisés et requêtes SQL pour les flux de production.",
            "Formulaires utilisateur pour enregistrer commandes, étapes et mouvements de stock.",
            "Rapports de production structurés pour le suivi et les audits."
        ],
        collegeProject2Title: "Application de contrôle de production pour moteurs électriques",
        collegeProject2Lead: "Outil desktop combinant interface WPF, base SQLite et accès par rôles.",
        collegeProject2List: [
            "Suivi des étapes de production, mises à jour de statut et validations.",
            "Écrans adaptés aux rôles pour opérateurs et superviseurs.",
            "Interface WPF reliée à SQLite pour le suivi quotidien."
        ],
        universityProjectsTitle: "🎓 Projets universitaires (SDLC, appli web, ERP MVP)",
        universityProject1Title: "Projet du cycle de vie logiciel",
        universityProject1Lead: "Projet académique SDLC axé sur l’analyse des besoins, la conception système et l’évaluation.",
        universityProject1List: [
            "Analyse du domaine et spécification des exigences fonctionnelles et non fonctionnelles.",
            "Diagrammes UML (cas d’utilisation, activité, composant, séquence).",
            "Conception de l’architecture système et choix de la méthodologie.",
            "Estimation de la complexité et des coûts via l’analyse des points de fonction."
        ],
        universityProject2Title: "Développement d’application web",
        universityProject2Lead: "Projet web full-stack axé sur UI responsive, contenu dynamique et workflows base de données.",
        universityProject2List: [
            "Frontend structuré avec navigation adaptative et composants interactifs.",
            "Backend avec formulaires PHP, validation et persistance MySQL.",
            "Conception relationnelle avec modèle ER et normalisation.",
            "Mise en page responsive optimisée pour bureau et mobile."
        ],
        universityProject3Title: "Projet de fin d’études - Prototype ERP",
        universityProject3Lead: "Projet de fin d’études : conception et implémentation d’un prototype ERP pour la production.",
        universityProject3List: [
            "Analyse des workflows de production et définition des exigences.",
            "Conception de l’architecture, modèles UML et schéma relationnel.",
            "Prototype ERP desktop implémenté en Python et Qt.",
            "Suivi des commandes, étapes de production, documents et analyses."
        ],
        technifuturProjectsTitle: "🏭 Projets Technifutur (automatisation & infrastructure)",
        technifuturProject1Title: "Administration Linux & automatisation",
        technifuturProject1Lead: "Mise en pratique de l’administration système et réseau dans un laboratoire virtualisé : automatisation Linux avec Python, Bash et Ansible, infrastructure Proxmox (VMs et conteneurs LXC), configuration réseau (routage, DNS, DHCP), et déploiement de services applicatifs : HAProxy, Apache, Nginx, MariaDB, PostgreSQL.",
        technifuturProject1List: [
            "Automatisation de tâches d’administration Linux avec Bash, Python et des playbooks Ansible.",
            "Gestion d’infrastructures virtuelles Proxmox avec VMs et conteneurs LXC pour des labs multi-services.",
            "Configuration de services réseau incluant routage, DNS et DHCP dans des scénarios isolés type entreprise.",
            "Déploiement et validation de services clés : HAProxy, Apache, Nginx, MariaDB et PostgreSQL."
        ],
        technifuturProject2Title: "Développement backend & intégration d’API",
        technifuturProject2Lead: "Conception et développement d’une application full-stack en environnement de laboratoire : mise en œuvre d’une architecture en couches avec ASP.NET Core Web API, intégration d’API externes, gestion de base de données avec SQL Server et interaction frontend via Blazor WebAssembly.",
        technifuturProject2List: [
            "Développement d’une application multi-couches utilisant ASP.NET Core Web API, Entity Framework et SQL Server.",
            "Création d’un frontend Blazor WebAssembly consommant une API backend centralisée.",
            "Implémentation des fonctionnalités principales incluant les opérations CRUD, l’intégration d’API externes et la récupération de données en temps réel.",
        ],
        aboutTitle: "À propos",
        aboutLead: "Professionnel IT junior à Liège avec diplômes EQF 5 + EQF 6, qui renforce les bases DevOps et l’automatisation.",
        aboutBullet1: "Stagiaire DevOps orienté sécurité chez Technifutur : Docker, Kubernetes, Jenkins, Ansible, Azure, monitoring.",
        aboutBullet2: "Pratique Windows/Linux, KVM/VMware, réseaux, scripting Bash/Python et documentation des labs.",
        aboutBullet3: "Labs documentés, apprentissage rapide, permis B.",
        pipelineTitle: "Compétences techniques",
        pipelineSection2Title: "Réseaux & outils",
        pipeline1Title: "Systèmes & Conteneurs",
        pipeline1List: [
            "Windows 10/11, Windows Server.",
            "Linux : dérivés RHEL/Debian + pratique avec SUSE et Alpine.",
            "Proxmox, VMware, Hyper-V, VirtualBox.",
            "Docker : Dockerfiles, réseaux, Docker Compose, Docker Swarm"
        ],
        pipeline2Title: "Programmation & automatisation",
        pipeline2List: [
            "Python : scripts CLI, PySide6, données, logging, algorithmes.",
            "Bash : automatisation, tâches planifiées.",
            "C# : syntaxe, POO, tests unitaires.",
            "Ansible : IaC, playbooks, gestion de configuration, déploiement."
        ],
        pipeline3Title: "Bases de données",
        pipeline3List: [
            "Modélisation.",
            "SQL (DDL, DML, DQL, T-SQL).",
            "SQL Server, MySQL, SQLite, MS Access.",
            "Déploiement PostgreSQL, MariaDB, SQL Server."
        ],
        pipeline4Title: "Réseaux & sécurité",
        pipeline4List: [
            "TCP/IP, adressage IP, routage.",
            "DNS, DHCP.",
            "SSH, SSL, HAProxy, Nginx, Haute disponibilité."
        ],
        pipeline5Title: "Outils",
        pipeline5List: [
            "JetBrains IDEs, VS Code.",
            "Git, GitHub, GitLab.",
            "Suite Microsoft Office."
        ],
        experienceTitle: "Formation & études",
        exp1Title: "Stagiaire DevOps orienté sécurité - Technifutur (oct 2025 – juil 2026)",
        exp1Lead: "Docker, Kubernetes, Jenkins, Ansible, Azure Cloud, Prometheus/Grafana, API REST, Agile, TDD et réseau avancé.",
        exp2Title: "Bachelier en informatique - EQF 6 (sep 2023 – juin 2025)",
        exp2Lead: "Académie agrotechnique d’État de Tavrija, Ukraine - algorithmes, réseaux, ingénierie logicielle.",
        exp3Title: "Diplôme pro en programmation - EQF 5 (sep 2019 – juin 2023)",
        exp3Lead: "Collège professionnel de construction d’instruments, Ukraine - bases de programmation, résolution de problèmes, documentation.",
        contactTitle: "Contact",
        contactLead: "Basé à Liège - ouvert aux stages, alternances ou rôles juniors DevOps/Systèmes. Messages privilégiés.",
        contactEmail: "Envoyer un email",
        contactLinkedIn: "Profil LinkedIn",
        footer1: "Dernière mise à jour : 2026 · Centré sur l’infrastructure, l’automatisation et la documentation claire.",
        footer2: "Langues : ukrainien, russe, anglais, français"
    }
};

function applyTranslations(language) {
    const dict = translations[language] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.dataset.i18n;
        if (dict[key]) {
            node.textContent = dict[key];
        }
    });

    document.querySelectorAll('[data-i18n-list]').forEach((node) => {
        const key = node.dataset.i18nList;
        const list = dict[key];
        if (Array.isArray(list)) {
            node.innerHTML = '';
            list.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = item;
                node.appendChild(li);
            });
        }
    });

    document.documentElement.lang = language;
}

function setupLanguageSwitcher() {
    const buttons = Array.from(document.querySelectorAll('.lang-btn'));
    const stored = localStorage.getItem('preferredLanguage');
    const initialLang = stored && translations[stored] ? stored : 'en';

    const activate = (lang) => {
        buttons.forEach((btn) => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive);
        });

        localStorage.setItem('preferredLanguage', lang);
        applyTranslations(lang);
    };

    activate(initialLang);

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            activate(btn.dataset.lang);
        });
    });
}

document.addEventListener('DOMContentLoaded', setupLanguageSwitcher);
