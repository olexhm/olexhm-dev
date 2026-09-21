const translations = {
    en: {
        fetchTitle: "Profile summary",
        fetchExperience1: "Research and Development Intern - EVS",
        fetchExperience2: "Security-oriented DevOps training - Technifutur & Cevora",
        fetchEducation1: "Bachelor in Computer Science",
        fetchEducation2: "Professional Programming Diploma",
        fetchLanguages: "English / French / Ukrainian / Russian",
        fetchHobbies: "Cycling / video game modding / PC hardware / metal music / guitar",
        projectsTitle: "Projects",
        collegeProjectsTitle: "College Projects",
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
        universityProjectsTitle: "University Projects",
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
        universityThesisGithub: "View project on GitHub",
        technifuturProjectsTitle: "Technifutur & Cevora Projects",
        technifuturMlcTitle: "My Little Checker",
        technifuturMlcLead: "Raw Material Checking ERP (MVP). Designed, built, and deployed in two weeks by a team of two as the final project of a DevOps training program.",
        technifuturMlcList: [
            "Developed a microservice-based ERP using Angular, ASP.NET Core, PostgreSQL, and role-based workflows for raw material validation.",
            "Configured and automated enterprise DHCP and DDNS networking with Kea DHCP and BIND 9.",
            "Deployed the application on Docker Swarm using a private registry, Traefik as a reverse proxy, and overlay networking.",
            "Set up monitoring with Prometheus, Grafana, and PostgreSQL exporters to track application and infrastructure health.",
            "Provisioned and configured the on-premises Proxmox infrastructure using Bash, Python, and Ansible."
        ],
        technifuturMlcGithub: "View project on GitHub",
        technifuturProject1Title: "Linux administration & automation",
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
        technifuturApiGithub: "View project on GitHub",
        aboutTitle: "About me",
        aboutLead1: "I'd best describe myself as a young DevOps Engineer. I've always enjoyed working with technologies and systems, and more specifically, infrastructure, software development, and systems in general. I enjoy analyzing and building reliable systems that serve a real purpose. My interest in technology started with computer hardware, which naturally grew into a passion for infrastructure despite my more software-oriented background.",
        aboutLead2: "I also enjoy exploring best practices around Agile, security, and software engineering, as well as technologies and projects from the Linux, OCI and CNCF ecosystems. I completed my Bachelor's degree in Computer Science and decided to take a DevOps training to polish my stack and link my interests in software and infrastructure together.",
        aboutLead3: "All of this has led me to where I am now, doing an internship at EVS in the R&D department. This has provided me with a chance to get hands-on experience in a real-world environment and to practice the skills I've learned and developed to date. Currently, I am open to new opportunities, as I believe there's always something you can learn, build, and grow as an engineer!",
        pipelineTitle: "Technical skills",
        pipelineSection2Title: "Networking & tools",
        pipeline1Title: "Systems & Containers",
        pipeline1List: [
            "Windows 10/11, Windows Server.",
            "Linux administration: RHEL, Debian, SUSE, Alpine, and systemd.",
            "Proxmox: VM/LXC lifecycle, cluster management, and virtual networking; VMware, Hyper-V, VirtualBox.",
            "Hardware assembly and diagnostics; BIOS/UEFI configuration.",
            "Docker: Dockerfiles, networks, Docker Compose, Docker Swarm."
        ],
        pipeline2Title: "Programming & automation",
        pipeline2List: [
            "Python: CLI scripts, PySide6, data handling, logging, algorithms.",
            "Bash: automation, scheduled tasks.",
            "C#: OOP and xUnit testing; ASP.NET Core, Entity Framework, and REST APIs.",
            "Angular and TypeScript.",
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
            "TCP/IP, TLS/SSL, IP addressing, routing, and the OSI model.",
            "DNS and DHCP with BIND 9 and Kea; Linux bridges and troubleshooting.",
            "SSH; high availability and load balancing with Nginx, HAProxy, and Keepalived."
        ],
        pipeline5Title: "Tools and Practices",
        pipeline5List: [
            "JetBrains IDEs, VS Code.",
            "Git and continuous improvement.",
            "GitLab CI, TeamCity, Trivy.",
            "Agile methodologies."
        ],
        experienceTitle: "Experience & training",
        educationTitle: "Education",
        exp1Title: "Research and Development Intern - EVS (Aug 2026 – present)",
        exp1Lead: "Applied and strengthened my practical skills in DevOps and infrastructure within a modern, fast-evolving R&D environment.",
        exp2Title: "Security-oriented DevOps training - Technifutur & Cevora (Oct 2025 – Jul 2026)",
        exp2Lead: "Docker, Kubernetes, Jenkins, Ansible, Azure Cloud, Prometheus/Grafana, REST APIs, Agile, TDD, and advanced networking.",
        edu1Title: "Bachelor in Computer Science - EQF 6 (Sep 2023 – Jun 2025)",
        edu1Lead: "Tavrija State Agrotechnological University, Ukraine - algorithms, networking, software engineering.",
        edu2Title: "Professional Programming Diploma - EQF 5 (Sep 2019 – Jun 2023)",
        edu2Lead: "Instrument Making Professional Pre-Higher College, Ukraine - programming basics, problem solving, documentation.",
        industryReadingTitle: "Industry knowledge",
        industryReadingList: [
            "Docker Deep Dive - Nigel Poulton (Leanpub) - read.",
            "Head First Agile - Andrew Stellman and Jennifer Greene (O’Reilly Media) - read.",
            "Cloud Native - Boris Scholl, Trent Swanson, and Peter Jausovec (O’Reilly Media) - read.",
            "Head First Networking - Al Anderson and Ryan Benedetti (O’Reilly Media) - currently reading."
        ],
        contactTitle: "Contact",
        contactLead: "Based in Liège, Belgium - currently an R&D intern at EVS. Open to conversations about DevOps and systems work. Messages preferred.",
        contactEmail: "Send an email",
        contactLinkedIn: "LinkedIn profile",
        contactGithub: "GitHub profile",
        footer1: "Last updated: 2026 · Focused on infrastructure, automation, and clear documentation.",
        docTitle: "olexhm - Oleksandr Melnychuk | DevOps & Systems",
        docDescription: "Junior DevOps engineer in Liege, Belgium. Linux, virtualization, containers, and infrastructure automation.",
        fetchLocation: "Liège, Belgium",
        fetchRole: "Junior DevOps Engineer",
        fetchAvailability: "Open to junior DevOps and infrastructure opportunities",
        skipLink: "Skip to content",
        paletteLabel: "Open command palette",
        palettePlaceholder: "type a command, or `help`",
        paletteNoMatch: "no matching command",
        paletteHint: "press : or ctrl-k",
        cmdHelp: "List every command",
        cmdTop: "Back to the top",
        cmdLang: "Switch language",
        cmdClose: "Close this palette"
    },
    fr: {
        fetchTitle: "Résumé du profil",
        fetchExperience1: "Stagiaire en recherche et développement - EVS",
        fetchExperience2: "Formation DevOps orientée sécurité - Technifutur & Cevora",
        fetchEducation1: "Bachelier en informatique",
        fetchEducation2: "Diplôme professionnel en programmation",
        fetchLanguages: "Anglais / français / ukrainien / russe",
        fetchHobbies: "Cyclisme / modding de jeux vidéo / matériel PC / metal / guitare",
        collegeProject1Title: "Base de données de production pour un fabricant de moteurs électriques",
        projectsTitle: "Projets",
        collegeProjectsTitle: "Projets de collège",
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
        universityProjectsTitle: "Projets universitaires",
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
        universityThesisGithub: "Voir le projet sur GitHub",
        technifuturProjectsTitle: "Projets Technifutur & Cevora",
        technifuturMlcTitle: "My Little Checker",
        technifuturMlcLead: "ERP de contrôle des matières premières (MVP). Conçu, développé et déployé en deux semaines par une équipe de deux dans le cadre du projet de fin de formation DevOps.",
        technifuturMlcList: [
            "Développement d’un ERP basé sur une architecture microservices avec Angular, ASP.NET Core, PostgreSQL et gestion des rôles.",
            "Configuration et automatisation d’un réseau d’entreprise avec DHCP et DDNS à l’aide de Kea DHCP et BIND 9.",
            "Déploiement sur un cluster Docker Swarm avec un registre privé, Traefik comme reverse proxy et des réseaux overlay.",
            "Mise en place du monitoring avec Prometheus, Grafana et les exporters PostgreSQL pour suivre l’état de l’application et de l’infrastructure.",
            "Provisionnement et configuration de l’infrastructure Proxmox on-premises à l’aide de scripts Bash, Python et d’Ansible."
        ],
        technifuturMlcGithub: "Voir le projet sur GitHub",
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
            "Implémentation des fonctionnalités principales incluant les opérations CRUD, l’intégration d’API externes et la récupération de données en temps réel."
        ],
        technifuturApiGithub: "Voir le projet sur GitHub",
        aboutTitle: "À propos",
        aboutLead1: "Je me décrirais avant tout comme un jeune ingénieur DevOps. J’ai toujours aimé travailler avec les technologies et les systèmes, et plus particulièrement avec l’infrastructure, le développement logiciel et les systèmes en général. J’aime analyser et construire des systèmes fiables qui répondent à un réel besoin. Mon intérêt pour la technologie a commencé avec le matériel informatique, puis s’est naturellement transformé en une passion pour l’infrastructure, malgré un parcours davantage orienté vers le développement logiciel.",
        aboutLead2: "J’aime également découvrir et approfondir les bonnes pratiques autour de l’Agile, de la sécurité et de l’ingénierie logicielle, ainsi que les technologies et projets issus des écosystèmes Linux, OCI et CNCF. Après avoir obtenu mon bachelier en informatique, j’ai décidé de suivre une formation DevOps afin de consolider mes compétences techniques et de réunir mes intérêts pour le logiciel et l’infrastructure.",
        aboutLead3: "Tout cela m’a amené là où j’en suis aujourd’hui : en stage chez EVS au sein du département R&D. Cette expérience me donne l’occasion d’acquérir une expérience concrète dans un environnement professionnel et de mettre en pratique les compétences que j’ai apprises et développées jusqu’à présent. Je suis actuellement ouvert à de nouvelles opportunités, car je pense qu’en tant qu’ingénieur, il y a toujours quelque chose de nouveau à apprendre, à construire et une nouvelle occasion d’évoluer !",
        pipelineTitle: "Compétences techniques",
        pipelineSection2Title: "Réseaux & outils",
        pipeline1Title: "Systèmes & Conteneurs",
        pipeline1List: [
            "Windows 10/11, Windows Server.",
            "Administration Linux : RHEL, Debian, SUSE, Alpine et systemd.",
            "Proxmox : cycle de vie VM/LXC, gestion de cluster et réseau virtuel ; VMware, Hyper-V, VirtualBox.",
            "Assemblage et diagnostic matériel ; configuration BIOS/UEFI.",
            "Docker : Dockerfiles, réseaux, Docker Compose, Docker Swarm"
        ],
        pipeline2Title: "Programmation & automatisation",
        pipeline2List: [
            "Python : scripts CLI, PySide6, données, logging, algorithmes.",
            "Bash : automatisation, tâches planifiées.",
            "C# : POO et tests xUnit ; ASP.NET Core, Entity Framework et API REST.",
            "Angular et TypeScript.",
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
            "TCP/IP, TLS/SSL, adressage IP, routage et modèle OSI.",
            "DNS et DHCP avec BIND 9 et Kea ; ponts Linux et dépannage.",
            "SSH ; haute disponibilité et répartition de charge avec Nginx, HAProxy et Keepalived."
        ],
        pipeline5Title: "Outils et pratiques",
        pipeline5List: [
            "JetBrains IDEs, VS Code.",
            "Git et amélioration continue.",
            "GitLab CI, TeamCity, Trivy.",
            "Méthodologies Agile."
        ],
        experienceTitle: "Expérience & formation",
        educationTitle: "Études",
        exp1Title: "Stagiaire en recherche et développement - EVS (août 2026 – aujourd’hui)",
        exp1Lead: "J’ai mis en pratique et renforcé mes compétences en DevOps et infrastructure dans un environnement R&D moderne et en constante évolution.",
        exp2Title: "Formation DevOps orientée sécurité - Technifutur & Cevora (oct. 2025 – juil. 2026)",
        exp2Lead: "Docker, Kubernetes, Jenkins, Ansible, Azure Cloud, Prometheus/Grafana, API REST, Agile, TDD et réseau avancé.",
        edu1Title: "Bachelier en informatique - EQF 6 (sept. 2023 – juin 2025)",
        edu1Lead: "Académie agrotechnique d’État de Tavrija, Ukraine - algorithmes, réseaux, ingénierie logicielle.",
        edu2Title: "Diplôme pro en programmation - EQF 5 (sept. 2019 – juin 2023)",
        edu2Lead: "Collège professionnel de construction d’instruments, Ukraine - bases de programmation, résolution de problèmes, documentation.",
        industryReadingTitle: "Connaissances du secteur",
        industryReadingList: [
            "Docker Deep Dive - Nigel Poulton (Leanpub) - lu.",
            "Head First Agile - Andrew Stellman et Jennifer Greene (O’Reilly Media) - lu.",
            "Cloud Native - Boris Scholl, Trent Swanson et Peter Jausovec (O’Reilly Media) - lu.",
            "Head First Networking - Al Anderson et Ryan Benedetti (O’Reilly Media) - lecture en cours."
        ],
        contactTitle: "Contact",
        contactLead: "Basé à Liège, Belgique - actuellement stagiaire R&D chez EVS. Ouvert aux échanges autour du DevOps et des systèmes. Messages privilégiés.",
        contactEmail: "Envoyer un email",
        contactLinkedIn: "Profil LinkedIn",
        contactGithub: "Profil GitHub",
        footer1: "Dernière mise à jour : 2026 · Centré sur l’infrastructure, l’automatisation et la documentation claire.",
        docTitle: "olexhm - Oleksandr Melnychuk | DevOps & Systèmes",
        docDescription: "Ingénieur DevOps junior à Liège, Belgique. Linux, virtualisation, conteneurs et automatisation d\u2019infrastructure.",
        fetchLocation: "Liège, Belgique",
        fetchRole: "Ingénieur DevOps junior",
        fetchAvailability: "Ouvert aux opportunités junior en DevOps et infrastructure",
        skipLink: "Aller au contenu",
        paletteLabel: "Ouvrir la palette de commandes",
        palettePlaceholder: "tapez une commande, ou `help`",
        paletteNoMatch: "aucune commande correspondante",
        paletteHint: "appuyez sur : ou ctrl-k",
        cmdHelp: "Lister toutes les commandes",
        cmdTop: "Retour en haut",
        cmdLang: "Changer de langue",
        cmdClose: "Fermer la palette"
    }
};

if (typeof module !== 'undefined' && module.exports) { module.exports = translations; }
