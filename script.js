const translations = {
    en: {
        heroEyebrow: "Oleksandr · Junior infrastructure/DevOps profile",
        heroSubtitle: "Oleksandr Melnychuk · Junior IT professional focused on infrastructure and automation.",
        heroTitle: "DevOps trainee strengthening Linux, virtualization, and CI/CD foundations.",
        heroLead: "Based in Liège, Belgium. Solid Windows/Linux setups, virtualization practice, and current security-oriented DevOps formation (Docker, Kubernetes, Jenkins, Ansible, monitoring).",
        ctaCollaborate: "Email",
        ctaProjects: "View projects",
        stat1Label: "Professional programming diploma — Nova Kakhovka College (EQF 5)",
        stat2Label: "Bachelor in Computer Science — Tavrija State Agrotechnological University (EQF 6)",
        stat3Label: "Security-oriented DevOps trainee — Technifutur",
        stat4Label: "Languages spoken fluently/comfortably",
        architectureTitle: "Toolkit I'm learning right now",
        architectureCode: `# system maintenance $ sudo apt update && sudo apt upgrade -y # run my cleanup script $ ./cleanup_daily.sh # check recent rsync jobs from cron $ journalctl -u cron | grep rsync`,
        collegeProjectsTitle: "🎓 College Projects (Database & Production Systems)",
        collegeProject1Title: "Production Database Systems",
        collegeProject1Lead: "SQL-based models of real production workflows with automation and KPI reporting.",
        collegeProject1List: [
            "Designed normalized schemas for stock, machines, orders, and workers.",
            "Implemented joins, triggers, and stored procedures for automation.",
            "Built reports to track KPIs, inventory flow, and scheduling accuracy.",
            "Focused on consistency checks and query optimization."
        ],
        universityProjectsTitle: "🎓 University Projects (SDLC, Web App, ERP MVP)",
        universityProject1Title: "Software Engineering Lifecycle Project",
        universityProject1Lead: "End-to-end SDLC delivery from requirements and UML to deployment and testing.",
        universityProject1List: [
            "Gathered requirements and produced UML plus architectural diagrams.",
            "Iterated with documentation and regression-focused testing cycles.",
            "Delivered a maintainable, version-controlled application.",
            "Practiced handoffs with clear commits and release notes."
        ],
        universityProject2Title: "Web Application Development",
        universityProject2Lead: "Full-stack web app with responsive UI, database-backed content, and auth flows.",
        universityProject2List: [
            "Structured frontend for clean navigation and user flows.",
            "Backend with database integration, form handling, and validation.",
            "Authentication, sessions, and error handling wired end to end.",
            "Responsive layout tuned for desktop and mobile."
        ],
        universityProject3Title: "ERP System MVP",
        universityProject3Lead: "Prototype ERP covering inventory, HR, and sales with role-aware access.",
        universityProject3List: [
            "Designed relational models for core business entities and workflows.",
            "Implemented inventory, HR, and sales modules with forms and validations.",
            "Added role-based access, simple reporting, and audit-friendly records.",
            "Documented architecture and data logic for future scaling."
        ],
        technifuturProjectsTitle: "🏭 Technifutur Projects (Automation & Infrastructure)",
        technifuturProject1Title: "IT Automation & Infrastructure Labs",
        technifuturProject1Lead: "Hands-on sysadmin labs automating Linux services, networking, and virtualization setups.",
        technifuturProject1List: [
            "Automated system updates, cleanup, monitoring, and backups with Bash/Python.",
            "Built VMware/KVM labs covering routing, VLANs, DHCP, DNS, and NAT.",
            "Scripted configuration shortcuts for SSH access and service bootstraps.",
            "Deployed lightweight services on Linux for realistic practice environments."
        ],
        aboutTitle: "About me",
        aboutLead: "Junior IT professional in Liège with EQF 5 + EQF 6 studies, now sharpening DevOps basics and automation habits.",
        aboutBullet1: "Current security-oriented DevOps internship at Technifutur: Docker, Kubernetes, Jenkins, Ansible, Azure, monitoring.",
        aboutBullet2: "Hands-on with Windows/Linux administration, KVM/VMware virtualization, networks, and scripting in Bash/Python.",
        aboutBullet3: "Documented labs, fast learner, and driving licence B in progress (theory passed).",
        pipelineTitle: "DevOps toolkit & habits",
        pipeline1Title: "Systems & OS",
        pipeline1List: [
            "Linux (RHEL/Debian) — installation, services, users, packages, logs, automation basics.",
            "Windows 10/11 & Server — configuration, troubleshooting, GPO/Active Directory basics.",
            "Virtualization with KVM, VMware, Hyper-V, VirtualBox — VM creation, networking modes, shared folders."
        ],
        pipeline2Title: "Automation & delivery",
        pipeline2List: [
            "Bash & Python scripts for automation, scheduled tasks, data handling, and logging.",
            "Git/GitLab/GitHub workflows, starting CI/CD with Jenkins and GitLab CI.",
            "Containers and orchestration basics with Docker/Kubernetes plus Ansible and Terraform introductions."
        ],
        pipeline3Title: "Observability & data",
        pipeline3List: [
            "Monitoring and metrics with Grafana, Prometheus, and ELK basics.",
            "SQL fundamentals (MySQL, SQLite, Access): CRUD, joins, keys, filters.",
            "Runbooks and clear documentation for labs, scripts, and troubleshooting steps."
        ],
        experienceTitle: "Formation & education",
        exp1Title: "Security-oriented DevOps trainee — Technifutur (Oct 2025 – Jul 2026)",
        exp1Lead: "Docker, Kubernetes, Jenkins, Ansible, Azure Cloud, Prometheus/Grafana, REST APIs, Agile, TDD, and advanced networking.",
        exp2Title: "Bachelor in Computer Science — EQF 6 (Sep 2023 – Jun 2025)",
        exp2Lead: "Académie agrotechnique d’État de Tavrija, Melitopol — algorithms, networking, software engineering.",
        exp3Title: "Professional Programming Diploma — EQF 5 (Sep 2019 – Jun 2023)",
        exp3Lead: "Collège professionnel de construction d’instruments, Nova Kakhovka — programming basics, problem solving, documentation.",
        contactTitle: "Contact",
        contactLead: "Based in Liège, Belgium — open to internships, apprenticeships, or entry-level DevOps/System roles. Messages preferred.",
        contactEmail: "Send an email",
        contactLinkedIn: "LinkedIn profile",
        contactGitHub: "GitHub",
        footer1: "Last updated: 2025 · Focused on infrastructure, automation, and clear documentation.",
        footer2: "Languages: Ukrainian, Russian, English, French"
    },
    fr: {
        heroEyebrow: "Oleksandr · Profil junior infrastructure/DevOps",
        heroSubtitle: "Oleksandr Melnychuk · Jeune informaticien passionné par l’infrastructure et l’automatisation.",
        heroTitle: "Stagiaire DevOps qui consolide Linux, virtualisation et bases CI/CD.",
        heroLead: "Basé à Liège, Belgique. Maîtrise Windows/Linux, pratique de la virtualisation, et formation DevOps orientée sécurité (Docker, Kubernetes, Jenkins, Ansible, monitoring).",
        ctaCollaborate: "Envoyer un email",
        ctaProjects: "Voir les projets",
        stat1Label: "Diplôme pro en programmation — Collège de Nova Kakhovka (EQF 5)",
        stat2Label: "Bachelier en informatique — Université agrotechnique de Tavrija (EQF 6)",
        stat3Label: "Stagiaire DevOps orienté sécurité — Technifutur",
        stat4Label: "Langues parlées couramment/aisément",
        architectureTitle: "Outils que j’apprends en ce moment",
        architectureCode: "# maintenance du système $ sudo apt update && sudo apt upgrade -y# exécution de mon script de nettoyage $ ./cleanup_daily.sh # vérifier les tâches rsync lancées par cron $ journalctl -u cron | grep rsync",
        collegeProject1Title: "Systèmes de bases de données de production",
        collegeProjectsTitle: "🎓 Projets de collège (bases de données & production)",
        collegeProject1Lead: "Modélisation SQL de flux de production réels avec automatisation et rapports KPI.",
        collegeProject1List: [
            "Schémas normalisés pour stocks, machines, commandes et opérateurs.",
            "Jointures, triggers et procédures stockées pour automatiser les flux.",
            "Rapports pour suivre les KPI, les mouvements d’inventaire et la planification.",
            "Priorité à la cohérence des données et à l’optimisation des requêtes."
        ],
        universityProjectsTitle: "🎓 Projets universitaires (SDLC, appli web, ERP MVP)",
        universityProject1Title: "Projet cycle de vie logiciel",
        universityProject1Lead: "Livraison SDLC complète : exigences, UML, développement, tests et déploiement.",
        universityProject1List: [
            "Collecte des besoins et production de diagrammes UML et d’architecture.",
            "Itérations documentées avec cycles de tests et de régression.",
            "Application maintenable livrée sous contrôle de version.",
            "Handoffs structurés avec commits clairs et notes de version."
        ],
        universityProject2Title: "Développement d’application web",
        universityProject2Lead: "Appli web full-stack avec UI réactive, base de données et parcours d’authentification.",
        universityProject2List: [
            "Frontend structuré pour des parcours utilisateurs fluides.",
            "Backend avec base de données, formulaires et validations.",
            "Authentification, sessions et gestion des erreurs bout en bout.",
            "Mise en page responsive pour bureau et mobile."
        ],
        universityProject3Title: "MVP de système ERP",
        universityProject3Lead: "Prototype ERP couvrant inventaire, RH et ventes avec accès selon les rôles.",
        universityProject3List: [
            "Modèles relationnels pour les entités et workflows métier clés.",
            "Modules inventaire, RH et ventes avec formulaires et validations.",
            "Contrôles d’accès par rôle, reporting simple et traces auditables.",
            "Documentation de l’architecture et de la logique data pour évoluer." 
        ],
        technifuturProjectsTitle: "🏭 Projets Technifutur (automatisation & infrastructure)",
        technifuturProject1Title: "Labs d’automatisation et d’infrastructure IT",
        technifuturProject1Lead: "Labs sysadmin : automatisation Linux, réseaux et virtualisation en conditions réalistes.",
        technifuturProject1List: [
            "Scripts Bash/Python pour mises à jour, nettoyage, monitoring et sauvegardes.",
            "Labs VMware/KVM couvrant routage, VLAN, DHCP, DNS et NAT.",
            "Automatisation des configs SSH et des déploiements de services.",
            "Déploiement de petits services Linux pour des environnements de pratique." 
        ],
        aboutTitle: "À propos",
        aboutLead: "Professionnel IT junior à Liège avec diplômes EQF 5 + EQF 6, qui renforce les bases DevOps et l’automatisation.",
        aboutBullet1: "Stagiaire DevOps orienté sécurité chez Technifutur : Docker, Kubernetes, Jenkins, Ansible, Azure, monitoring.",
        aboutBullet2: "Pratique Windows/Linux, KVM/VMware, réseaux, scripting Bash/Python et documentation des labs.",
        aboutBullet3: "Labs documentés, apprentissage rapide, permis B en cours (théorie validée).",
        pipelineTitle: "Boîte à outils DevOps & habitudes",
        pipeline1Title: "Systèmes & OS",
        pipeline1List: [
            "Linux (RHEL/Debian) — installation, services, utilisateurs, paquets, logs, automatisation de base.",
            "Windows 10/11 & Server — configuration, dépannage, GPO/Active Directory de base.",
            "Virtualisation KVM, VMware, Hyper-V, VirtualBox — création de VM, modes réseau, dossiers partagés."
        ],
        pipeline2Title: "Automatisation & delivery",
        pipeline2List: [
            "Scripts Bash & Python pour l’automatisation, les tâches planifiées, le traitement de données et le logging.",
            "Workflows Git/GitLab/GitHub, début de CI/CD avec Jenkins et GitLab CI.",
            "Conteneurs et orchestration avec Docker/Kubernetes, plus bases Ansible et Terraform."
        ],
        pipeline3Title: "Observabilité & données",
        pipeline3List: [
            "Monitoring et métriques avec Grafana, Prometheus et bases ELK.",
            "Fondamentaux SQL (MySQL, SQLite, Access) : CRUD, jointures, clés, filtres.",
            "Runbooks et documentation claire pour labs, scripts et dépannage."
        ],
        experienceTitle: "Formation & études",
        exp1Title: "Stagiaire DevOps orienté sécurité — Technifutur (oct 2025 – juil 2026)",
        exp1Lead: "Docker, Kubernetes, Jenkins, Ansible, Azure Cloud, Prometheus/Grafana, API REST, Agile, TDD et réseau avancé.",
        exp2Title: "Bachelier en informatique — EQF 6 (sep 2023 – jun 2025)",
        exp2Lead: "Académie agrotechnique d’État de Tavrija, Melitopol — algorithmes, réseaux, ingénierie logicielle.",
        exp3Title: "Diplôme pro en programmation — EQF 5 (sep 2019 – jun 2023)",
        exp3Lead: "Collège professionnel de construction d’instruments, Nova Kakhovka — bases de programmation, résolution de problèmes, documentation.",
        contactTitle: "Contact",
        contactLead: "Basé à Liège — ouvert aux stages, alternances ou rôles juniors DevOps/Systèmes. Messages privilégiés.",
        contactEmail: "Envoyer un email",
        contactLinkedIn: "Profil LinkedIn",
        contactGitHub: "GitHub",
        footer1: "Dernière mise à jour : 2025 · Centré sur l’infrastructure, l’automatisation et la documentation claire.",
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
