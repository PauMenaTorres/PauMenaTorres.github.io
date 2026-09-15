const translations = {
  en: {
    // Navigation
    nav_about: "About Me",
    nav_education: "Education",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Header
    header_subtitle: "Game Software Engineer passionate about creating tools and games!",

    // About Me
    about_title: "About Me",
    about_bio: "I'm a graduated Game Software Engineer holding a Bachelor's Degree in Video Game Design and Development (CITM - UPC). Experience in C++, Unity, Unreal Engine, Godot, Python, C# and custom engines. Passionate about software architecture, tool creation, and game development, with strong skills in programming, problem-solving and 3D modeling. Eager to contribute to creative projects and continue growing in the game development industry.",

    // Education
    edu_title: "Education",
    edu_degree: "Bachelor's Degree in Video Game Design & Development",
    edu_badge: "Graduated",
    edu_details: "Specialized in Game Software Engineering, Engine & Graphics Programming, C++, Unity, VR Development, and UI Architecture. Developed an Open-Source Cross-Platform UI Framework for Unity as Bachelor's Thesis (TFG).",
    cert_js_title: "Modern JavaScript: Guide to Mastering the Language",
    cert_js_badge: "Certificate",
    cert_js_details: "Completed 21 hours of intensive modern JavaScript (ES6+), object-oriented programming, asynchronous JS (Promises & Async/Await), DOM manipulation, design patterns, Webpack, Vite, and clean code practices.",
    cert_js_view_btn: "📜 View Certificate",
    cert_js_verify_btn: "🔗 Verify Credentials",

    // Skills
    skills_title: "Skills",
    skills_lang: "Programming Languages:",
    skills_3d: "3D Modeling Software:",
    skills_engines: "Game Development Engines:",

    // Projects
    projects_title: "Projects",
    projects_company: "Company Projects",
    projects_personal: "Personal && Group Projects",
    projects_featured: "Featured Projects",

    // Featured Modular UI
    modular_badge: "🚀 Published on Unity Asset Store",
    modular_subtitle: "Cross-Platform UI Architecture Framework (Open-Source)",
    modular_btn: "View Case Study & Overview →",

    // Featured W40K
    w40k_badge: "👥 40-Person Team Project",
    w40k_subtitle: "HUD & UI Gameplay System in Custom C++ Engine (40-Developer Team)",
    w40k_btn: "View Overview →",

    // Modal Shared Labels
    label_status: "Status & Availability",
    label_overview: "Overview",
    label_problem: "Problem Solved",
    label_features: "Key Features & Technical Architecture",
    label_audience: "Target Audience",
    label_tech: "Technologies Used",
    label_links: "Links & Download",
    label_description: "Description",
    label_my_role: "My Role",
    label_my_role_lead: "My Role (Lead Programmer)",
    label_company: "Company",
    label_mechanics: "Key Features & Mechanics",

    // Media Tabs
    tab_trailer: "🎬 Trailer Video",
    tab_full_experience: "🎬 Full Experience",
    tab_screenshots: "🖼️ Screenshots",
    tab_gameplay: "Gameplay",
    tab_engine: "Engine",

    // Modular UI Modal
    modular_status: "Live & Published on Unity Asset Store (Open-Source) 🎉🚀",
    modular_overview: "A production-ready, highly modular cross-platform UI architecture framework developed for Unity. Originally conceived as a <strong>Bachelor’s Thesis (TFG)</strong>, it has evolved into a professional open-source tool for the game development community. Its core mission is to eliminate repetitive UI setup by delivering a fully decoupled, scalable, and adaptable interface architecture.",
    modular_problem: "Instead of wasting valuable time reinventing the wheel and building UI architecture from scratch for every project, <strong>Modular UI</strong> allows developers to deploy clean, decoupled, and scalable UI systems in seconds, seamlessly integrated into any Unity codebase.",
    modular_audience: "Whether you are a solo indie developer looking to speed up prototyping, a UI/UX designer wanting to test layouts instantly, or a programming team in need of a clean, architecture-driven UI foundation, this tool is built to fit your workflow.",
    modular_feature_1: "<strong>Clean Architectural Foundation 🧱:</strong> Built from the ground up following <strong>SOLID principles</strong>. It heavily relies on the <strong>Observer pattern</strong> for decoupled, event-driven communication and utilizes <strong>Factory patterns</strong> to handle dynamic, independent component creation cleanly.",
    modular_feature_2: "<strong>Instant Production-Ready Templates 📦:</strong> Deploy fully functional Main Menus, HUDs, Pause Menus, Dialogue Systems, and Inventories straight out of the box.",
    modular_feature_3: "<strong>Cross-Platform Adaptation 📱💻🕶️:</strong> Responsive layouts, scaling, and input schemes that automatically and dynamically adapt across <strong>Desktop, Mobile, and Virtual Reality (VR)</strong>.",
    modular_feature_4: "<strong>Real-Time Visual Customization 🎨:</strong> Switch your game’s entire aesthetic instantly using a powerful <strong>ScriptableObject-driven styling system</strong>; zero code modifications required.",
    modular_feature_5: "<strong>Advanced Integrated Systems ⛓️:</strong> Includes pre-integrated, robust sub-systems like <strong>drag-and-drop inventories</strong> and <strong>node-based dialogue trees</strong>.",

    // W40K
    w40k_desc: "HUD and UI gameplay programmer for a Warhammer 40K diablo-like game developed with a team of 40 people.",
    w40k_role_1: "Designed and implemented the in-game HUD, including cooldown animations, health, ammo display, and action feedback.",
    w40k_role_2: "Added visual effects like vignette when damaged, enemy alert indicators, and health bars for bosses.",
    w40k_role_3: "Developed the ability management system and Coliseum door logic with animations.",
    w40k_role_4: "Implemented the fervor mechanic with visual feedback and temporary boosts to attack and reload speed.",
    w40k_role_5: "Built the first fully functional UI system for the engine, with images, text, sliders, anchors, and sorting layers.",
    w40k_role_6: "Optimized UI performance for a smooth gameplay experience.",

    // Oh My Ghost
    ghost_desc: "A fun and engaging game featuring ghostly gameplay where players take on the role of a mischievous ghost haunting a mansion. The objective is to scare all human inhabitants while avoiding ghost hunters and managing your supernatural energy.",
    ghost_role_1: "AI programming for NPC behavior and pathfinding",
    ghost_role_2: "Physics-based interaction system for ghostly abilities",
    ghost_role_3: "Level design and implementation",
    ghost_role_4: "Environment programmer",
    ghost_role_5: "Sound implementation for friendly atmosphere",
    ghost_role_6: "Game mechanics balancing",

    // Coffee Engine
    coffee_desc: "Led the development of the UI Module for Coffee Engine, a high-level game engine designed for 3D projects. Created a flexible and intuitive user interface system that allowed game developers to easily implement in-game menus, HUDs, and other UI elements.",
    coffee_role_1: "Designed the architecture for the UI module",
    coffee_role_2: "Implemented widget system for reusable UI components",
    coffee_role_3: "Created layout management tools for responsive interfaces",
    coffee_role_4: "Developed event handling for UI interactions",
    coffee_role_5: "Built a drag-and-drop editor for UI creation",

    // Bill El Tuerto
    bill_desc: "<strong>'The Rituals of Bill ‘El Tuerto’'</strong> is an immersive virtual reality escape room thriller that plunges players into a dark investigation to unravel the mystery of a sadistic serial killer. Years after the notorious Bill 'One-Eye' Gatess terrorized the city, a determined police officer breaks into the killer's apartment in a desperate quest for answers. But the deeper he digs, the more reality blurs...",
    bill_role_1: "Co-led overall game design, spatial storytelling, and room progression mechanics across all 4 puzzle rooms.",
    bill_role_2: "Programmed state-driven puzzle logic using C# ScriptableObjects and event listeners for modular scene execution.",
    bill_role_3: "Developed VR comfort interaction modes (seated/standing) and smooth locomotion / teleportation toggles.",
    bill_role_4: "Implemented custom time management system enforcing the 30-minute fail state and checkpoint loader for QA.",
    bill_feat_1: "<strong>Cryptic Puzzle Solving 🔍:</strong> Solve multi-layered puzzles and decode cryptic messages in VR.",
    bill_feat_2: "<strong>Environmental Storytelling 📺:</strong> Interactive environmental narrative through VHS tapes, physical object manipulation, and audio logs.",
    bill_feat_3: "<strong>Psychological Horror 🎭:</strong> Unique narrative with shocking twists, surreal events, and dual outcomes (True Ending vs 30-Minute Fail State).",
    bill_feat_4: "<strong>Accessibility & Comfort 🎮:</strong> Seated and standing VR comfort modes with full accessibility input mapping.",
    bill_feat_5: "<strong>Immersive VR Audio & Haptics 🔊:</strong> Haptic feedback and spatial audio engineered for Meta Quest 3 via OpenXR Toolkit.",
    bill_feat_6: "<strong>Beat the Clock ⏱️:</strong> Custom 30-minute time management system enforcing tense survival gameplay.",

    // Bomberman
    bomberman_desc: "An adaptation of the NeoGeo classic Bomberman: Panic Bomber made in C++. This puzzle-action game combines elements of falling-block puzzlers with the explosive gameplay of Bomberman, creating a fast-paced and competitive experience.",
    bomberman_role_1: "Core gameplay mechanics implementation",
    bomberman_role_2: "UI system: Points, Main menu, Lose Screen, Continue Screen, and more",
    bomberman_role_3: "AI opponent programming",
    bomberman_role_4: "Sound and visual effects integration",

    // Furious Bald
    bald_desc: "A 2D platformer game developed using SDL2 featuring a bald protagonist with a fiery temper navigating through challenging levels. The game combines fast-paced action with precision platforming and unique power-ups.",
    bald_role_1: "Character controller implementation",
    bald_role_2: "Collision detection and physics",
    bald_role_3: "Enemy AI behavior patterns",
    bald_role_4: "Power-up system development",
    bald_role_5: "Level design for progressively challenging stages",
    bald_role_6: "Animation state machine programming",

    // Arkanoid
    arkanoid_desc: "A Unity mobile adaptation of the classic Arkanoid game, combining retro gameplay with modern mobile features. Players control a paddle to bounce a ball and break blocks while collecting power-ups and advancing through increasingly difficult levels.",
    arkanoid_role_1: "Mobile touch controls implementation",
    arkanoid_role_2: "Physics system for realistic ball bouncing",
    arkanoid_role_3: "Power-up system with various effects",
    arkanoid_role_4: "Level progression and difficulty scaling",
    arkanoid_role_5: "Visual effects for block destruction",
    arkanoid_role_6: "Mobile optimization for smooth performance",

    // Revelant Terrassa
    revelant_desc: "<strong>Developed for Consorci Sanitari de Terrassa (CST) & Parc Audiovisual de Catalunya</strong>, this is a virtual reality (VR) reminiscence therapy experience designed for elderly care. The project transports users to the 1960s–70s in Terrassa, recreating the iconic square 'Plaça Vella' with high fidelity using photogrammetry data captured by TRS Filmlab / Parc Audiovisual de Catalunya.",
    revelant_role_1: "Programmed the core interaction framework and interactive narrative systems in Unity (C#).",
    revelant_role_2: "Developed the onboarding phase, including an interactive hand-tracking tutorial that naturally introduces VR controls to elderly users.",
    revelant_role_3: "Integrated advanced VR Hand Tracking mechanics using the Meta XR SDK and XR Interaction Toolkit.",
    revelant_role_4: "Implemented urban exploration puzzles of progressive difficulty to ensure accessibility and cognitive engagement.",
    revelant_role_5: "Collaborated on environmental details, including historical vehicles (Seat 600, Pegaso trucks), classic motorcycles, period-accurate NPCs, and the iconic local traffic officer 'El Policia Pota de Pal'.",
    revelant_role_6: "Created an immersive spatial audio experience with period-appropriate radio broadcasts, football matches, and classic advertisements.",

    // La Sobremesa
    sobremesa_desc: "<strong>Developed for Lotify</strong>, this is a hybrid physical + digital party game that blends a physical board game (tablero) with a mobile companion app. Built using Godot 4.3, the digital companion manages the game flow, offering interactive menus, dice rolling, roulette mechanics, scoreboards, and 9 diverse mini-game modes. The game supports 2 to 4 teams and features dynamic board mechanics including advances, retrocessions, and final showdown sequences.",
    sobremesa_role_1: "Programmed the core game loop, turn management, and state machine in GDScript.",
    sobremesa_role_2: "Implemented the dynamic difficulty scaling and team performance streak tracking algorithms.",
    sobremesa_role_3: "Coded the final sequence logic, enabling dynamic challenge cycling across categories.",
    sobremesa_role_4: "Developed UI menus, mini-games, and custom audio integration for timers, dice rolls, and victory events.",
    sobremesa_mech_1: "<strong>Teams:</strong> Tailored for 2 to 4 teams playing simultaneously with custom names.",
    sobremesa_mech_2: "<strong>Dynamic Difficulty:</strong> Scales dynamically based on each team's score and performance streak.",
    sobremesa_mech_3: "<strong>4 Mini-game Categories:</strong> Show (Humming, Mimicry, Drawing), Wit (Logic, Yes/No), Know-It-All (Trivia), and Mentalist (Telepathy).",
    sobremesa_mech_4: "<strong>Decision Squares:</strong> Special tiles allow teams to decide their own challenge or choose a challenge for their rivals.",
    sobremesa_mech_5: "<strong>Final Sequence:</strong> Reaching the final square triggers a climax where teams must overcome 3 consecutive mini-game challenges in a row to win.",
    sobremesa_mech_6: "<strong>All or Nothing (Todo o Nada):</strong> A final showdown mechanism that resolves ties or deadlocks when teams get stuck.",

    // Contact
    contact_title: "Connect with Me",
    contact_phone: "📞 Phone:",
    contact_email: "✉️ Email:",
    contact_email_btn: "Email me",

    // Footer
    footer_text: "© 2026 Pau Mena Torres"
  },

  es: {
    // Navegación
    nav_about: "Sobre Mí",
    nav_education: "Estudios",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",

    // Header
    header_subtitle: "¡Ingeniero de Software de Videojuegos apasionado por crear herramientas y juegos!",

    // Sobre Mí
    about_title: "Sobre Mí",
    about_bio: "Soy graduado en Ingeniería de Software de Videojuegos con el Grado en Diseño y Desarrollo de Videojuegos (CITM - UPC). Tengo experiencia en C++, Unity, Unreal Engine, Godot, Python, C# y motores propios. Me apasiona la arquitectura de software, la creación de herramientas y el desarrollo de videojuegos, con sólidas habilidades en programación, resolución de problemas y modelado 3D. Con muchas ganas de contribuir en proyectos creativos y seguir creciendo en la industria del videojuego.",

    // Educación
    edu_title: "Estudios",
    edu_degree: "Grado en Diseño y Desarrollo de Videojuegos",
    edu_badge: "Graduado",
    edu_details: "Especializado en Ingeniería de Software de Videojuegos, Programación de Motores y Gráficos, C++, Unity, Desarrollo VR y Arquitectura de UI. Desarrollé un Framework de UI Multiplataforma de Código Abierto para Unity como Trabajo de Fin de Grado (TFG).",
    cert_js_title: "JavaScript Moderno: Guía para dominar el lenguaje",
    cert_js_badge: "Certificado",
    cert_js_details: "Curso intensivo de 21 horas de JavaScript Moderno (ES6+), programación orientada a objetos, JS asíncrono (Promesas y Async/Await), manipulación del DOM, patrones de diseño, Webpack, Vite y buenas prácticas de código limpio.",
    cert_js_view_btn: "📜 Ver Certificado",
    cert_js_verify_btn: "🔗 Verificar Credenciales",

    // Habilidades
    skills_title: "Habilidades",
    skills_lang: "Lenguajes de Programación:",
    skills_3d: "Software de Modelado 3D:",
    skills_engines: "Motores de Desarrollo de Videojuegos:",

    // Proyectos
    projects_title: "Proyectos",
    projects_company: "Proyectos de Empresa",
    projects_personal: "Proyectos Personales y en Grupo",
    projects_featured: "Proyectos Destacados",

    // Modular UI Destacado
    modular_badge: "🚀 Publicado en Unity Asset Store",
    modular_subtitle: "Framework de Arquitectura de UI Multiplataforma (Código Abierto)",
    modular_btn: "Ver Caso de Estudio y Resumen →",

    // W40K Destacado
    w40k_badge: "👥 Proyecto en Equipo de 40 Personas",
    w40k_subtitle: "Sistema de HUD y UI Gameplay en Motor Propio C++ (Equipo de 40 Personas)",
    w40k_btn: "Ver Resumen →",

    // Etiquetas Comunes en Modales
    label_status: "Estado y Disponibilidad",
    label_overview: "Resumen",
    label_problem: "Problema Solucionado",
    label_features: "Características Clave y Arquitectura Técnica",
    label_audience: "Público Objetivo",
    label_tech: "Tecnologías Utilizadas",
    label_links: "Enlaces y Descargas",
    label_description: "Descripción",
    label_my_role: "Mi Rol",
    label_my_role_lead: "Mi Rol (Programador Principal)",
    label_company: "Empresa",
    label_mechanics: "Características Clave y Mecánicas",

    // Pestañas Multimedia
    tab_trailer: "🎬 Vídeo Tráiler",
    tab_full_experience: "🎬 Full Experience",
    tab_screenshots: "🖼️ Capturas de pantalla",
    tab_gameplay: "Jugabilidad",
    tab_engine: "Motor",

    // Modular UI Modal
    modular_status: "Disponible y Publicado en Unity Asset Store (Código Abierto) 🎉🚀",
    modular_overview: "Un framework de arquitectura de UI multiplataforma altamente modular y listo para producción desarrollado para Unity. Concebido originalmente como <strong>Trabajo de Fin de Grado (TFG)</strong>, ha evolucionado hasta convertirse en una herramienta profesional de código abierto para la comunidad de desarrollo de videojuegos. Su misión principal es eliminar la configuración repetitiva de UI mediante una arquitectura de interfaz totalmente desacoplada, escalable y adaptable.",
    modular_problem: "En lugar de perder un tiempo valioso reinventando la rueda y creando la arquitectura de UI desde cero para cada proyecto, <strong>Modular UI</strong> permite a los desarrolladores desplegar sistemas de UI limpios, desacoplados y escalables en segundos, integrados perfectamente en cualquier código de Unity.",
    modular_audience: "Tanto si eres un desarrollador indie en busca de prototipar rápidamente, un diseñador UI/UX que quiere probar interfaces al instante, o un equipo de programación que requiere una base de UI sólida, esta herramienta está diseñada para adaptarse a tu flujo de trabajo.",
    modular_feature_1: "<strong>Base Arquitectónica Limpia 🧱:</strong> Desarrollado desde cero siguiendo principios <strong>SOLID</strong>. Se apoya en el patrón <strong>Observer</strong> para una comunicación desacoplada y guiada por eventos, y utiliza patrones <strong>Factory</strong> para la creación limpia de componentes.",
    modular_feature_2: "<strong>Plantillas Listas para Producción 📦:</strong> Despliega menús principales, HUDs, menús de pausa, sistemas de diálogo e inventarios directamente desde el primer momento.",
    modular_feature_3: "<strong>Adaptación Multiplataforma 📱💻🕶️:</strong> Diseños responsivos y esquemas de control que se adaptan automáticamente a <strong>Escritorio, Móvil y Realidad Virtual (VR)</strong>.",
    modular_feature_4: "<strong>Personalización Visual en Tiempo Real 🎨:</strong> Cambia la estética visual de tu juego al instante mediante un sistema impulsado por <strong>ScriptableObjects</strong>, sin modificar código.",
    modular_feature_5: "<strong>Sistemas Integrados Avanzados ⛓️:</strong> Incluye subsistemas robustos preintegrados como <strong>inventarios arrastrar y soltar</strong> y <strong>árboles de diálogo basados en nodos</strong>.",

    // W40K
    w40k_desc: "Programador de HUD y UI gameplay para un juego estilo Diablo de Warhammer 40K desarrollado con un equipo de 40 personas.",
    w40k_role_1: "Diseñé e implementé el HUD del juego, incluyendo animaciones de recarga, barra de vida, munición y respuesta visual.",
    w40k_role_2: "Añadí efectos visuales como viñeta al recibir daño, indicadores de alerta enemiga y barras de vida para jefes.",
    w40k_role_3: "Desarrollé el sistema de gestión de habilidades y la lógica de puertas del Coliseo con animaciones.",
    w40k_role_4: "Implementé la mecánica de fervor con respuesta visual y mejoras temporales de ataque y velocidad de recarga.",
    w40k_role_5: "Construí el primer sistema de UI totalmente funcional para el motor, con imágenes, texto, deslizadores, anclas y capas.",
    w40k_role_6: "Optimicé el rendimiento de la UI para una experiencia de juego fluida.",

    // Oh My Ghost
    ghost_desc: "Un divertido juego con temática fantasmal donde asumes el papel de un fantasma travieso en una mansión. El objetivo es asustar a los humanos evitando cazafantasmas y gestionando tu energía sobrenatural.",
    ghost_role_1: "Programación de IA para el comportamiento de NPCs y búsqueda de rutas",
    ghost_role_2: "Sistema de interacción basado en físicas para habilidades fantasmales",
    ghost_role_3: "Diseño e implementación de niveles",
    ghost_role_4: "Programador de entorno",
    ghost_role_5: "Implementación de sonido para atmósfera dinámica",
    ghost_role_6: "Equilibrio de mecánicas de juego",

    // Coffee Engine
    coffee_desc: "Lideré el desarrollo del módulo de UI para Coffee Engine, un motor de juegos 3D de alto nivel. Creé un sistema de interfaz flexible e intuitivo para implementar menús, HUDs y elementos de UI fácilmente.",
    coffee_role_1: "Diseñé la arquitectura para el módulo de UI",
    coffee_role_2: "Implementé el sistema de widgets para componentes de UI reutilizables",
    coffee_role_3: "Creé herramientas de gestión de diseño para interfaces adaptativas",
    coffee_role_4: "Desarrollé la gestión de eventos para interacciones de UI",
    coffee_role_5: "Construí un editor de arrastrar y soltar (drag & drop) para creación de UI",

    // Bill El Tuerto
    bill_desc: "<strong>'The Rituals of Bill ‘El Tuerto’'</strong> es un thriller de realidad virtual tipo escape room de terror psicológico que sumerge a los jugadores en una oscura investigación para desentrañar el misterio de un sádico asesino en serie. Años después de que el infame Bill 'El Tuerto' Gatess aterrorizara la ciudad, un policía determinado se cuela en el apartamento del asesino en busca de respuestas. Pero cuanto más profundiza, más se desdibuja la realidad...",
    bill_role_1: "Co-lideré el diseño general del juego, la narrativa espacial y las mecánicas de progresión a través de las 4 salas de puzles.",
    bill_role_2: "Programé la lógica de puzles guiada por estados mediante ScriptableObjects en C# y eventos para una ejecución modular.",
    bill_role_3: "Desarrollé modos de confort e interacción en VR (sentado/de pie) y conmutadores entre locomoción fluida y teletransporte.",
    bill_role_4: "Implementé el sistema de gestión de tiempo personalizado para el límite de 30 minutos y el cargador de checkpoints para QA.",
    bill_feat_1: "<strong>Resolución de Puzles 🔍:</strong> Resuelve puzles multicapa y descifra mensajes crípticos en Realidad Virtual.",
    bill_feat_2: "<strong>Narrativa Ambiental 📺:</strong> Historia interactiva a través de cintas VHS, objetos del entorno y registros de audio.",
    bill_feat_3: "<strong>Terror Psicológico 🎭:</strong> Experiencia única con giros sorprendentes, eventos surrealistas y finales duales (Final Verdadero vs Estado de Fallo a los 30 min).",
    bill_feat_4: "<strong>Confort y Accesibilidad 🎮:</strong> Modos de juego sentado y de pie intercambiables en cualquier momento.",
    bill_feat_5: "<strong>Audio Espacial y Háptica 🔊:</strong> Experiencia VR inmersiva optimizada para Meta Quest 3 con OpenXR.",
    bill_feat_6: "<strong>Contra el Reloj ⏱️:</strong> Sobrevive en menos de 30 minutos o sufre las consecuencias...",

    // Bomberman
    bomberman_desc: "Adaptación en C++ del clásico de NeoGeo Bomberman: Panic Bomber. Combina elementos de puzle de bloques que caen con la jugabilidad explosiva de Bomberman en una experiencia competitiva y rápida.",
    bomberman_role_1: "Implementación de mecánicas principales de juego",
    bomberman_role_2: "Sistema de UI: Puntos, Menú Principal, Pantalla de Derrota, Continuación y más",
    bomberman_role_3: "Programación de oponentes por IA",
    bomberman_role_4: "Integración de efectos sonoros y visuales",

    // Furious Bald
    bald_desc: "Juego de plataformas 2D desarrollado en SDL2 protagonizado por un personaje de mal genio que navega por niveles desafiantes. Combina acción rápida con plataformas de precisión y potenciadores únicos.",
    bald_role_1: "Implementación del controlador de personaje",
    bald_role_2: "Detección de colisiones y físicas",
    bald_role_3: "Patrones de comportamiento de IA enemiga",
    bald_role_4: "Desarrollo del sistema de potenciadores",
    bald_role_5: "Diseño de niveles para etapas progresivamente desafiantes",
    bald_role_6: "Programación de la máquina de estados de animación",

    // Arkanoid
    arkanoid_desc: "Adaptación móvil en Unity del clásico Arkanoid, combinando jugabilidad retro con características móviles modernas. Controla la pala para rebotar la bola, romper bloques y conseguir potenciadores.",
    arkanoid_role_1: "Implementación de controles táctiles móviles",
    arkanoid_role_2: "Sistema de física para el rebote realista de la bola",
    arkanoid_role_3: "Sistema de potenciadores con efectos variados",
    arkanoid_role_4: "Progresión de niveles y escalado de dificultad",
    arkanoid_role_5: "Efectos visuales para la destrucción de bloques",
    arkanoid_role_6: "Optimización móvil para un rendimiento fluido",

    // Revelant Terrassa
    revelant_desc: "<strong>Desarrollado para el Consorci Sanitari de Terrassa (CST) y Parc Audiovisual de Catalunya</strong>, es una experiencia de terapia de reminiscencia en realidad virtual (VR) diseñada para la atención a personas mayores. Recrea la emblemática 'Plaça Vella' de Terrassa en los años 60-70 con datos de fotogrametría.",
    revelant_role_1: "Programé el framework principal de interacción y sistemas narrativos en Unity (C#).",
    revelant_role_2: "Desarrollé la fase de incorporación (onboarding) con un tutorial interactivo de hand-tracking para usuarios mayores.",
    revelant_role_3: "Integré mecánicas avanzadas de VR Hand Tracking mediante Meta XR SDK y XR Interaction Toolkit.",
    revelant_role_4: "Implementé acertijos de exploración urbana con dificultad progresiva y estímulo cognitivo.",
    revelant_role_5: "Colaboré en detalles ambientales (Seat 600, camiones Pegaso, motos clásicas y el agente 'El Policia Pota de Pal').",
    revelant_role_6: "Creé una experiencia de audio espacial inmersiva con programas de radio de la época, fútbol y anuncios clásicos.",

    // La Sobremesa
    sobremesa_desc: "<strong>Desarrollado para Lotify</strong>, es un juego de fiesta híbrido físico + digital que combina un tablero físico con una app complementaria móvil en Godot 4.3. Incluye menús interactivos, dados, ruleta, marcadores y 9 modos de minijuegos para 2 a 4 equipos.",
    sobremesa_role_1: "Programé el bucle principal del juego, la gestión de turnos y la máquina de estados en GDScript.",
    sobremesa_role_2: "Implementé los algoritmos de escalado dinámico de dificultad y seguimiento de racha de los equipos.",
    sobremesa_role_3: "Programé la lógica de la secuencia final para alternar desafíos entre categorías.",
    sobremesa_role_4: "Desarrollé menús de UI, minijuegos e integración de audio para temporizadores, dados y victoria.",
    sobremesa_mech_1: "<strong>Equipos:</strong> Diseñado para 2 a 4 equipos jugando simultáneamente con nombres personalizados.",
    sobremesa_mech_2: "<strong>Dificultad Dinámica:</strong> Escala dinámicamente según la puntuación y racha de cada equipo.",
    sobremesa_mech_3: "<strong>4 Categorías de Minijuegos:</strong> Show (Tararear, Mímica, Dibujar), Ingenio, Sabelotodo y Mentalista.",
    sobremesa_mech_4: "<strong>Casillas de Decisión:</strong> Casillas especiales para elegir desafío propio o asignarlo a los rivales.",
    sobremesa_mech_5: "<strong>Secuencia Final:</strong> Supera 3 desafíos consecutivos de minijuegos para ganar.",
    sobremesa_mech_6: "<strong>Todo o Nada:</strong> Mecanismo de duelo final que resuelve empates o bloqueos.",

    // Contacto
    contact_title: "Conecta Conmigo",
    contact_phone: "📞 Teléfono:",
    contact_email: "✉️ Correo:",
    contact_email_btn: "Envíame un correo",

    // Footer
    footer_text: "© 2026 Pau Mena Torres"
  },

  ca: {
    // Navegació
    nav_about: "Sobre Mi",
    nav_education: "Estudis",
    nav_skills: "Habilitats",
    nav_projects: "Projectes",
    nav_contact: "Contacte",

    // Header
    header_subtitle: "Enginyer de Software de Videojocs apassionat per crear eines i videojocs!",

    // Sobre Mi
    about_title: "Sobre Mi",
    about_bio: "Sóc graduat en Enginyeria de Software de Videojocs amb el Grau en Disseny i Desenvolupament de Videojocs (CITM - UPC). Tinc experiència en C++, Unity, Unreal Engine, Godot, Python, C# i motors propis. Em apassiona l'arquitectura de software, la creació d'eines i el desenvolupament de videojocs, amb sòlides habilitats en programació, resolució de problemes i modelatge 3D. Amb moltes ganes de contribuir en projectes creatius i seguir creixent en la indústria del videojoc.",

    // Educació
    edu_title: "Estudis",
    edu_degree: "Grau en Disseny i Desenvolupament de Videojocs",
    edu_badge: "Graduat",
    edu_details: "Especialitzat en Enginyeria de Software de Videojocs, Programació de Motors i Gràfics, C++, Unity, Desenvolupament VR i Arquitectura de UI. Vaig desenvolupar un Framework de UI Multiplataforma de Codi Obert per a Unity com a Treball de Final de Grau (TFG).",
    cert_js_title: "JavaScript Modern: Guia per dominar el llenguatge",
    cert_js_badge: "Certificat",
    cert_js_details: "Curs intensiu de 21 hores de JavaScript Modern (ES6+), programació orientada a objectes, JS asíncron (Promeses i Async/Await), manipulació del DOM, patrons de disseny, Webpack, Vite i bones pràctiques de codi net.",
    cert_js_view_btn: "📜 Veure Certificat",
    cert_js_verify_btn: "🔗 Verificar Credencials",

    // Habilitats
    skills_title: "Habilitats",
    skills_lang: "Llenguatges de Programació:",
    skills_3d: "Programes de Modelat 3D:",
    skills_engines: "Motors de Desenvolupament de Videojocs:",

    // Projectes
    projects_title: "Projectes",
    projects_company: "Projectes d'Empresa",
    projects_personal: "Projectes Personals i en Grup",
    projects_featured: "Projectes Destacats",

    // Modular UI Destacat
    modular_badge: "🚀 Publicat a Unity Asset Store",
    modular_subtitle: "Framework d'Arquitectura de UI Multiplataforma (Codi Obert)",
    modular_btn: "Veure Cas d'Estudi i Resum →",

    // W40K Destacat
    w40k_badge: "👥 Projecte en Equip de 40 Persones",
    w40k_subtitle: "Sistema de HUD i UI Gameplay en Motor Propi C++ (Equip de 40 Persones)",
    w40k_btn: "Veure Resum →",

    // Etiquetes Comuns a Modals
    label_status: "Estat i Disponibilitat",
    label_overview: "Resum",
    label_problem: "Problema Solucionat",
    label_features: "Característiques Clau i Arquitectura Tècnica",
    label_audience: "Públic Objectiu",
    label_tech: "Tecnologies Utilitzades",
    label_links: "Enllaços i Descàrregues",
    label_description: "Descripció",
    label_my_role: "El Meu Rol",
    label_my_role_lead: "El Meu Rol (Programador Principal)",
    label_company: "Empresa",
    label_mechanics: "Característiques Clau i Mecàniques",

    // Pestanyes Multimèdia
    tab_trailer: "🎬 Vídeo Tràiler",
    tab_full_experience: "🎬 Experiència Completa",
    tab_screenshots: "🖼️ Captures de pantalla",
    tab_gameplay: "Jugabilitat",
    tab_engine: "Motor",

    // Modular UI Modal
    modular_status: "Disponible i Publicat a Unity Asset Store (Codi Obert) 🎉🚀",
    modular_overview: "Un framework d'arquitectura de UI multiplataforma altament modular i a punt per a producció desenvolupat per a Unity. Concebut originalment com a <strong>Treball de Final de Grau (TFG)</strong>, ha evolucionat fins a convertir-se en una eina professional de codi obert per a la comunitat de desenvolupament de videojocs. La seva missió principal és eliminar la configuració repetitiva de UI mitjançant una arquitectura d'interfície totalment desacoblada, escalable i adaptable.",
    modular_problem: "En lloc de perdre un temps valuós reinventant la roda i creant l'arquitectura de UI des de zero per a cada projecte, <strong>Modular UI</strong> permet als desenvolupadors desplegar sistemes de UI nets, desacoblats i escalables en segons, integrats perfectament en qualsevol codi de Unity.",
    modular_audience: "Tant si ets un desenvolupador indie cercant prototipar ràpidament, un dissenyador UI/UX que vol provar interfícies a l'instant, o un equip de programació que requereix una base de UI sòlida, aquesta eina està dissenyada per adaptar-se al teu flux de treball.",
    modular_feature_1: "<strong>Base Arquitectònica Neta 🧱:</strong> Desenvolupat des de zero seguint principis <strong>SOLID</strong>. S'apoya en el patró <strong>Observer</strong> per a una comunicació desacoblada i guiada per esdeveniments, i utilitza patrons <strong>Factory</strong> per a la creació neta de components.",
    modular_feature_2: "<strong>Plantilles A punt per a Producció 📦:</strong> Desplega menús principals, HUDs, menús de pausa, sistemes de diàleg i inventaris directament des del primer moment.",
    modular_feature_3: "<strong>Adaptació Multiplataforma 📱💻🕶️:</strong> Dissenys responsius i esquemes de control que s'adapten automàticament a <strong>Escriptori, Mòbil i Realitat Virtual (VR)</strong>.",
    modular_feature_4: "<strong>Personalització Visual en Temps Real 🎨:</strong> Canvia l'estètica visual del teu joc a l'instant mitjançant un sistema impulsat per <strong>ScriptableObjects</strong>, sense modificar codi.",
    modular_feature_5: "<strong>Sistemes Integrats Avançats ⛓️:</strong> Inclou subsistemes robustos preintegrats com <strong>inventaris arrossegar i anclar</strong> i <strong>arbres de diàleg basats en nodes</strong>.",

    // W40K
    w40k_desc: "Programador de HUD i UI gameplay per a un joc estil Diablo de Warhammer 40K desenvolupat amb un equip de 40 persones.",
    w40k_role_1: "Vaig dissenyar i implementar el HUD del joc, incloent animacions de recàrrega, barra de vida, munició i resposta visual.",
    w40k_role_2: "Vaig afegir efectes visuals com vinyeta en rebre dany, indicadors d'alerta enemiga i barres de vida per a caps.",
    w40k_role_3: "Vaig desenvolupar el sistema de gestió d'habilitats i la lògica de portes del Coliseu amb animacions.",
    w40k_role_4: "Vaig implementar la mecànica de fervor amb resposta visual i millores temporals d'atac i velocitat de recàrrega.",
    w40k_role_5: "Vaig crear el primer sistema de UI totalment funcional per al motor, amb imatges, text, lliscadors, àncores i capes.",
    w40k_role_6: "Vaig optimitzar el rendiment de la UI per a una experiència de joc fluida.",

    // Oh My Ghost
    ghost_desc: "Un divertit joc amb temàtica fantasmal on assoleixes el paper d'un fantasma entremaliat en una mansió. L'objectiu és espantar els humans evitant caçafantasmes i gestionant la teva energia sobrenatural.",
    ghost_role_1: "Programació d'IA per al comportament de NPCs i cerca de rutes",
    ghost_role_2: "Sistema d'interacció basat en físiques per a habilitats fantasmals",
    ghost_role_3: "Disseny i implementació de nivells",
    ghost_role_4: "Programador d'entorn",
    ghost_role_5: "Implementació de so per a atmosfera dinàmica",
    ghost_role_6: "Equilibri de mecàniques de joc",

    // Coffee Engine
    coffee_desc: "Vaig liderar el desenvolupament del mòdul de UI per a Coffee Engine, un motor de jocs 3D d'alt nivell. Vaig crear un sistema d'interfície flexible i intuïtiu per implementar menús, HUDs i elements de UI fàcilment.",
    coffee_role_1: "Vaig dissenyar l'arquitectura per al mòdul de UI",
    coffee_role_2: "Vaig implementar el sistema de ginys per a components de UI reutilitzables",
    coffee_role_3: "Vaig crear eines de gestió de disseny per a interfícies adaptatives",
    coffee_role_4: "Vaig desenvolupar la gestió d'esdeveniments per a interaccions de UI",
    coffee_role_5: "Vaig construir un editor d'arrossegar i anclar (drag & drop) per a creació de UI",

    // Bill El Tuerto
    bill_desc: "<strong>'The Rituals of Bill ‘El Tuerto’'</strong> és un thriller de realitat virtual tipus escape room de terror psicològic que submergeix els jugadors en una fosca investigació per desentranyar el misteri d'un sàdic assassí en sèrie. Anys després que l'infam Bill 'El Tuerto' Gatess aterroritzés la ciutat, un policia determinat s'infiltra a l'apartament de l'assassí a la cerca de respostes. Però quant més aprofundeix, més es desdibuixa la realitat...",
    bill_role_1: "Co-vaig liderar el disseny general del joc, la narrativa espacial i les mecàniques de progressió a través de les 4 sales de trencaclosques.",
    bill_role_2: "Vaig programar la lògica de trencaclosques basada en estats mitjançant ScriptableObjects en C# i esdeveniments per a una execució modular.",
    bill_role_3: "Vaig desenvolupar modes de confort i interacció en VR (assegut/dempeus) i commutadors entre locomoció fluida i teletransport.",
    bill_role_4: "Vaig implementar el sistema de gestió de temps personalitzat per al límit de 30 minuts i el carregador de punts de control per a QA.",
    bill_feat_1: "<strong>Resolució de Trencaclosques 🔍:</strong> Resol trencaclosques de múltiples capes i desxifra missatges críptics en Realitat Virtual.",
    bill_feat_2: "<strong>Narrativa Ambiental 📺:</strong> Història interactiva a través de cintes VHS, manipulació d'objectes i registres d'àudio.",
    bill_feat_3: "<strong>Terror Psicològic 🎭:</strong> Experiència única amb girs sorprenents, esdeveniments surrealistes i finals duals (Final Verdader vs Estat de Fallada als 30 min).",
    bill_feat_4: "<strong>Modes de Confort VR 🎮:</strong> Modes de joc assegut i dempeus intercanviables en qualsevol moment.",
    bill_feat_5: "<strong>Àudio Espacial i Hàptica 🔊:</strong> Experiència VR immersiva optimitzada per a Meta Quest 3 amb OpenXR.",
    bill_feat_6: "<strong>Contra el Rellotge ⏱️:</strong> Sobreviu en menys de 30 minuts o pateix les conseqüències...",

    // Bomberman
    bomberman_desc: "Adaptació en C++ del clàssic de NeoGeo Bomberman: Panic Bomber. Combina elements de trencaclosques de blocs que cauen amb la jugabilitat explosiva de Bomberman en una experiència competitiva i ràpida.",
    bomberman_role_1: "Implementació de mecàniques principals de joc",
    bomberman_role_2: "Sistema de UI: Punts, Menú Principal, Pantalla de Derrota, Continuació i més",
    bomberman_role_3: "Programació d'opositors per IA",
    bomberman_role_4: "Integració d'efectes sonors i visuals",

    // Furious Bald
    bald_desc: "Joc de plataformes 2D desenvolupat en SDL2 protagonitzat per un personatge de mal geni que navega per nivells desafiants. Combina acció ràpida amb plataformes de precisió i poders únics.",
    bald_role_1: "Implementació del controlador de personatge",
    bald_role_2: "Detecció de col·lisions i físiques",
    bald_role_3: "Patrons de comportament de IA enemiga",
    bald_role_4: "Desenvolupament del sistema de potenciadors",
    bald_role_5: "Disseny de nivells per a etapes progressivament desafiants",
    bald_role_6: "Programació de la màquina d'estats d'animació",

    // Arkanoid
    arkanoid_desc: "Adaptació mòbil en Unity del clàssic Arkanoid, combinant jugabilitat retro amb característiques mòbils modernes. Controla la pala per fer rebotar la pilota, trencar blocs i aconseguir potenciadors.",
    arkanoid_role_1: "Implementació de controls tàctils mòbils",
    arkanoid_role_2: "Sistema de física per al rebot realista de la pilota",
    arkanoid_role_3: "Sistema de potenciadors amb efectes variats",
    arkanoid_role_4: "Progressió de nivells i escalat de dificultat",
    arkanoid_role_5: "Efectes visuals per a la destrucció de blocs",
    arkanoid_role_6: "Optimització mòbil per a un rendiment fluid",

    // Revelant Terrassa
    revelant_desc: "<strong>Desenvolupat per al Consorci Sanitari de Terrassa (CST) i Parc Audiovisual de Catalunya</strong>, és una experiència de teràpia de reminiscència en realitat virtual (VR) dissenyada per a l'atenció a la gent gran. Recrea l'emblemàtica 'Plaça Vella' de Terrassa en els anys 60-70 amb dades de fotogrametria.",
    revelant_role_1: "Vaig programar el framework principal d'interacció i sistemes narratius en Unity (C#).",
    revelant_role_2: "Vaig desenvolupar la fase d'incorporació (onboarding) amb un tutorial interactiu de hand-tracking per a usuaris grans.",
    revelant_role_3: "Vaig integrar mecàniques avançades de VR Hand Tracking mitjançant Meta XR SDK i XR Interaction Toolkit.",
    revelant_role_4: "Vaig implementar trencaclosques d'exploració urbana amb dificultat progressiva i estímul cognitiu.",
    revelant_role_5: "Vaig col·laborar en detalls ambientals (Seat 600, camions Pegaso, motos clàssiques i l'agent 'El Policia Pota de Pal').",
    revelant_role_6: "Vaig crear una experiència d'àudio espacial immersiva amb programes de ràdio de l'època, futbol i anuncis clàssics.",

    // La Sobremesa
    sobremesa_desc: "<strong>Desenvolupat per a Lotify</strong>, és un joc de festa híbrid físic + digital que combina un tauler físic amb una app complementària mòbil en Godot 4.3. Inclou menús interactius, daus, ruleta, marcadors i 9 modes de minijocs per a 2 a 4 equips.",
    sobremesa_role_1: "Vaig programar el bucle principal del joc, la gestió de torns i la màquina d'estats en GDScript.",
    sobremesa_role_2: "Vaig implementar els algorismes d'escalat dinàmic de dificultat i seguiment de ràtxa dels equips.",
    sobremesa_role_3: "Vaig programar la lògica de la seqüència final per alternar desafiaments entre categories.",
    sobremesa_role_4: "Vaig desenvolupar menús de UI, minijocs i integració d'àudio per a temporitzadors, daus i victòria.",
    sobremesa_mech_1: "<strong>Equips:</strong> Dissenyat per a 2 a 4 equips jugant simultàniament amb noms personalitzats.",
    sobremesa_mech_2: "<strong>Dificultat Dinàmica:</strong> Escala dinàmicament segons la puntuació i ràtxa de cada equip.",
    sobremesa_mech_3: "<strong>4 Categories de Minijocs:</strong> Show (Tararejar, Mímica, Dibuixar), Enginy, Sabelotot i Mentalista.",
    sobremesa_mech_4: "<strong>Caselles de Decisió:</strong> Caselles especials per triar desafiament propi o assignar-lo als rivals.",
    sobremesa_mech_5: "<strong>Seqüència Final:</strong> Supera 3 desafiaments consecutius de minijocs per guanyar.",
    sobremesa_mech_6: "<strong>Tot o Res:</strong> Mecanisme de duel final que resol empats o bloquejos.",

    // Contacte
    contact_title: "Connecta Amb Mi",
    contact_phone: "📞 Telèfon:",
    contact_email: "✉️ Correu:",
    contact_email_btn: "Envia'm un correu",

    // Footer
    footer_text: "© 2026 Pau Mena Torres"
  }
};

window.currentLang = 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;

  window.currentLang = lang;

  // Update active status on buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Save language preference
  localStorage.setItem('preferred_lang', lang);
  document.documentElement.lang = lang;
}

// Global initialization helper
function initI18n() {
  const savedLang = localStorage.getItem('preferred_lang') || 'en';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.onclick = () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    };
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
