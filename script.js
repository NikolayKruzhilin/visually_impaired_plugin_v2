// === Translations ===
const translations = {
    ru: {
        nav_home: "Главная",
        nav_cv: "Резюме",
        nav_projects: "Проекты",
        nav_contact: "Контакты",
        chat_title: "Чат с nikol.AI",
        online_status: "В сети",
        welcome_message: "Привет! Я nikol.AI, ваш виртуальный ассистент. Как дела? Чем могу помочь?",
        input_placeholder: "Введите сообщение...",
        cv_title: "Резюме",
        cv_name: "Николай Кружилин",
        cv_position: "Менеджер продукта / Маркетинг-менеджер / IT-специалист",
        cv_description: "Многопрофильный специалист с международным опытом в сфере образования, управления продуктами, маркетинга и операционной деятельности. Обладает навыками в области ИИ, технологий, дизайна, управления проектами и интеграции API. Эффективно работает с мультикультурными командами, управляет сложными проектами и добивается результатов в корпоративной и креативной среде.",
        cv_skills: "Технические навыки",
        cv_experience: "Опыт работы",
        cv_exp_items: [
            { role: "Менеджер продукта", company: "InLearno (ООО «Государство Детей»)", period: "окт 2025 – наст. время", body: "Управляю продуктом - навигатором дополнительного образования детей в B2G-сегменте. Отвечаю за пользовательский сайт и административный портал для региональных операторов. Определяю продуктовую стратегию, провожу исследования, формирую бэклог и расставляю приоритеты. Выстраиваю процессы работы с обратной связью, улучшаю ключевые сценарии (поиск, запись, мобильный UX). Запускаю новые ИИ проекты. Координирую кросс-функциональную команду (backend и frontend разработчики, дизайнеры, юристы, технические писатели, QA, СТП) и работаю над интеграциями с государственными системами (ЕПГУ, РПГУ, УНП, ГИС РЭБ, СМЭВ). Работаю на стыке стратегии и исполнения - от концепции до релиза." },
            { role: "Менеджер продукта", company: "Zhejiang Hongji New Energy Technology", period: "май 2023 – июн 2025", body: "Вёл полный цикл продуктового менеджмента для AIC thermal coating: от маркетинговых исследований и формирования стратегии до вывода продукта на международные рынки. Отвечал за разработку и поддержку продуктового сайта компании — формировал требования, взаимодействовал с командой разработки, контролировал контент и UX. Координировал работу с международными партнёрами и дистрибьюторами, вёл переговоры, управлял коммуникациями на английском и китайском языках." },
            { role: "Менеджер продукта", company: "i2 International Education Center, Guangxi", period: "окт 2021 – мар 2023", body: "Работал продакт-менеджером в EdTech-компании с фокусом на внутренних продуктах и пользовательском опыте. Проводил интервью с иностранными преподавателями, собирал обратную связь и переводил её в конкретные требования к продукту. Координировал внедрение ERP-системы для преподавательского состава: объяснял функциональность иностранным учителям, собирал отзывы о работе системы и передавал их команде разработки — это позволило итеративно улучшить ключевые процессы платформы. Параллельно координировал запуск мобильного приложения для изучения английского языка. Масштабировал академические программы на 88 кампусов в 17 городах, обучил более 40 иностранных преподавателей, сотрудничал с Trinity College London." },
            { role: "Маркетинг-менеджер", company: "Shenzhen Yangcai Information Consulting", period: "сен 2018 – май 2021", body: "Управлял цифровыми маркетинговыми кампаниями, стратегиями Amazon и рекламными проектами. Руководил межфункциональными командами по копирайтингу, переводу и мультимедийному производству." },
            { role: "Менеджер по снабжению", company: "Мескаль", period: "2014 – 2018", body: "Вёл переговоры с поставщиками, контроль качества, обработку заказов и логистику поставок. Организовывал визиты на фабрики и поддерживал связи с поставщиками в России и за рубежом." },
            { role: "Фриланс-проекты", company: "BMW · Tracy's Dog · Donner", period: "разное время", body: "Маркетинг и фотография для BMW, Tracy's Dog и Donner." }
        ],
        cv_education: "Образование",
        cv_edu_desc: "<p><strong>Специалист</strong> — Перевод и переводоведение (английский и китайский языки), Томский Государственный Университет (с отличием), 2013.</p> <p>Годичный курс, Ляонинский Педагогический Университет (2013–2014).</p>",
        projects_title: "Проекты",
        project1_title: "EdTech Web App",
        project1_desc: "Рабочее веб-приложение, используемое преподавателями для подготовки к занятиям и практики студентов.",
        project1_details: "Рабочее веб‑приложение, помогающее преподавателям оптимизировать подготовку уроков и планирование практических занятий. <a href=\"https://nikolaykruzhilin.github.io/lingua_prep/\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на приложение</a>",
        project1_media: [],
        project2_title: "Плагин для слабовидящих",
        project2_desc: "Плагин доступности, который я разработал — сейчас используется в Навигаторах ДО более чем в 40 регионах.",
        project2_details: "Плагин для слабовидящих: увеличивает шрифт, меняет контраст и упрощает навигацию по сайту. Внедрён в Навигаторах дополнительного образования детей более чем в 40 регионах России. <a href=\"https://github.com/NikolayKruzhilin/visually_impaired_plugin_v2\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> · <a href=\"https://nikolaykruzhilin.github.io/visually_impaired_plugin_v2/\" target=\"_blank\" rel=\"noopener noreferrer\">Демо</a>",
        project2_media: [],
        project3_title: "BMW x BOLT",
        project3_desc: "Кампейн с BOLT studio — поддержка возвращения BMW на китайский рынок после локдауна: позитивный визуальный рассказ и кинематографичный ролик.",
        project3_details: "Работа над рекламной кампанией с BOLT production: концепция, съёмки и монтаж, фокус на позитивной истории и возрождении бренда на рынке.",
        project3_media: [ { type: "image", src: "imgs/BMW.png", alt: "BMW" } ],
        project4_title: "Tracy's Dog",
        project4_desc: "Продуктовая фотосъёмка, бренд‑стратегия и контент для соцсетей с фокусом на любви и интимности.",
        project4_details: "Разработка визуального стиля, фотосессии для e-commerce и создание контент-стратегии для Instagram и сайта. <a href=\"https://www.tracysdog.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Перейти на сайт</a>",
        project4_media: [ { type: "image", src: "imgs/tracysdog.jpg", alt: "Tracy's Dog" } ],
        project5_title: "Donner",
        project5_desc: "Фотография и видео для музыкальных инструментов — маркетинговые материалы и продуктовые видео.",
        project5_details: "Съёмки продуктов, пост‑продакшн видеороликов и создание ассетов для онлайн‑маркетинга.",
        project5_media: [ { type: "image", src: "imgs/donner1.png", alt: "Donner 1" }, { type: "image", src: "imgs/donner2.png", alt: "Donner 2" }, { type: "image", src: "imgs/donner3.png", alt: "Donner 3" } ],
        project6_title: "Kwan Yee Gor",
        project6_desc: "Кампейн для бренда геля для волос — концепция видео, режиссура и продакшн.",
        project6_details: "Режиссура и постановка рекламного видео, продакшн‑сопровождение; продуктовая фотосъёмка для listings.",
        project6_media: [ { type: "image", src: "imgs/kwan yee gor.jpg", alt: "Kwan Yee Gor" } ],
        project7_title: "AIC Thermal Coating",
        project7_desc: "Продуктовый менеджмент и маркетинг для AIC — упаковка, сайт и координация команд.",
        project7_details: "Организация межкомандной работы, дизайн упаковки, материалы для продаж и веб‑презентация продукта.",
        project7_media: [ { type: "image", src: "imgs/AICpackage.jpg", alt: "AIC package" }, { type: "image", src: "imgs/AIC webpage.jpg", alt: "AIC webpage" }, { type: "image", src: "imgs/factoryQC.jpg", alt: "Factory QC" } ],
        project8_title: "Zen & Zany",
        project8_desc: "Фриланс‑работы по фото и видео для различных брендов и кампаний.",
        project8_details: "Креативный контент, видеомонтаж и фотография для рекламных проектов.",
        project8_media: [ { type: "image", src: "imgs/z&z.png", thumbnail: "imgs/z&z.png" } ],
        project9_title: "Cybersecurity",
        project9_desc: "Хобби: домашние серверы, SBC, автоматизация и инструментирование для мониторинга сети.",
        project9_details: "Эксперименты с ESP32 и Chameleon, развёртывание homelab и разработка инструментов для тестирования безопасности.",
        project9_media: [ { type: "image", src: "imgs/esp32.png", alt: "ESP32" }, { type: "image", src: "imgs/chameleon.png", alt: "Chameleon" } ],
        project3_video_url: "https://vimeo.com/410880058",
        project5_video_url: "https://donner-web.oss-cn-guangzhou.aliyuncs.com/dm-cn/video/TPaV36XlMD4A.mp4",
        project6_video_url: "https://www.youtube.com/watch?v=fdaAh7LNa6U",
        project8_video_url: "https://www.youtube.com/watch?v=efzwt1-cEug",
        project_video_link: "Ссылка на видео",
        nav_about: "Обо мне",
        about_title: "Обо мне",
        about_paragraph: "В прошлом я был профессиональным спортсменом, обладаю 2-м даном по карате и титулом чемпиона мира по версии IMGKA. Увлекаюсь уличной фотографией и преподаю фотографию и кинематографию. Активно занимаюсь волонтерством в приютах для животных и помогаю бездомным животным. Кроме того, я являюсь создателем проекта #createtodonate.",
        about_card_1_title: "Карате",
        about_card_1_desc: "Мой путь в карате начался в раннем возрасте. Я достиг 2-го дана, звание КМС и стал чемпионом мира по версии IMGKA. <br><a href=\"http://goju.tomsk.ru/%d0%b0%d1%80%d1%85%d0%b8%d0%b2/2009-2013/\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на сайт</a>",
        about_card_2_title: "Уличная фотография",
        about_card_2_desc: "Увлечение уличной фотографией позволяет мне захватывать моменты повседневной жизни. Вот некоторые из моих лучших работ.",
        about_card_3_title: "Преподавание",
        about_card_3_desc: "Провожу курсы по фотографии и кинематографии, помогая другим развивать свои творческие навыки. <br><a href=\"https://drive.google.com/file/d/1nT3mK1JcWLR3qKYz8srBitZair1Zzmep/view\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на видео</a>",
        about_card_4_title: "Волонтерство",
        about_card_4_desc: "Я регулярно помогаю в приютах для животных и ухаживаю за бездомными животными. <br><a href=\"https://www.youtube.com/watch?v=xkOxdTTbjfg\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на видео</a>",
        about_card_5_title: "#createtodonate",
        about_card_5_desc: "#createtodonate - проект, где творчество используется для сбора средств на благотворительность.",
        about_card_6_title: "Блог в Instagram",
        about_card_6_desc: "Веду блог в инстаграм, где делюсь опытом, извлеченным из работы над разными проектами и экспериментах с ИИ. <br><a href=\"https://instagram.com/nikol.ai.kruzhilin\" target=\"_blank\" rel=\"noopener noreferrer\">@nikol.ai.kruzhilin</a>",
        cv_skill_sql: "SQL",
        cv_skill_linux: "Linux",
        cv_skill_jira: "Jira",
        cv_skill_1: "Python",
        cv_skill_2: "HTML",
        cv_skill_3: "CSS",
        cv_skill_4: "JavaScript",
        cv_skill_5: "Кибербезопасность",
        cv_skill_6: "UX‑дизайн",
        cv_skill_7: "Управление проектами",
        cv_skill_8: "Интеграция API",
        cv_skill_10: "n8n автоматизация",
        cv_skill_11: "Контекстное проектирование",
        cv_skill_12: "Цифровой маркетинг",
        cv_skill_13: "Фотография",
        cv_skill_confluence: "Confluence",
        cv_skill_drawio: "Drawio",
        cv_skill_react: "React",
        contact_title: "Контактная информация",
        contact_email: "Электронная почта",
        contact_phone: "Телефон",
        bot_responses: [
            "Понимаю, интересный вопрос. Расскажите подробнее.",
            "Это действительно важная тема. Что вас больше всего беспокоит?",
            "Хороший вопрос! Позвольте подумать над этим.",
            "Звучит интересно. Какие у вас планы на этот счет?",
            "Я готов помочь. Есть ли еще что-то, что вас интересует?"
        ]
    },
    en: {
        nav_home: "Home",
        nav_cv: "Resume",
        nav_projects: "Projects",
        nav_contact: "Contact",
        chat_title: "Chat with nikol.AI",
        online_status: "Online",
        welcome_message: "Hello! I'm nikol.AI, your virtual assistant. How are you? How can I help?",
        input_placeholder: "Type a message...",
        cv_title: "Resume",
        cv_name: "Nikolay Kruzhilin",
        cv_position: "Product Manager / Marketing Manager / IT Specialist",
        cv_description: "Multidisciplinary professional with international experience in education, product management, marketing, and operations. Skilled in technology, design, project management, and API integration. Adept at leading multicultural teams, managing complex projects, and delivering results in both corporate and creative environments.",
        cv_skills: "Technical Skills",
        cv_experience: "Work Experience",
        cv_exp_items: [
            { role: "Product Manager", company: "InLearno (Gosudarstvo Detey LLC)", period: "Oct 2025 – Present", body: "Leading product for a B2G supplementary education marketplace, working with regional governments and public sector stakeholders. Responsible for the user-facing platform and the administrative portal for regional operators. Define product strategy, conduct research, shape the backlog, and set priorities. Building scalable feedback loops and continuously improving key user flows (search, enrollment, mobile UX). Coordinate a cross-functional team (backend, frontend, designers, legal, technical writers, QA, support) and work on integrations with government systems (EPGU, RPGU, UNP, GIS REB, SMEV). Operating at the intersection of strategy and execution — from concept to release." },
            { role: "Product Manager", company: "Zhejiang Hongji New Energy Technology", period: "May 2023 – Jun 2025", body: "Managed the full product lifecycle for AIC thermal coating, from market research and strategy through to international market launch. Owned the company's product website — defined requirements, coordinated with the development team, and oversaw content and UX. Coordinated with international partners and distributors, managing negotiations and communications in English and Chinese." },
            { role: "Product Manager", company: "i2 International Education Center, Guangxi", period: "Oct 2021 – Mar 2023", body: "Worked as a product manager in an EdTech company, focused on internal platforms and the user experience of teaching staff. Conducted structured interviews with foreign teachers to gather feedback and translated insights into clear product requirements. Led the rollout of an ERP system for teacher management — onboarded and trained 40+ foreign teachers, gathered systematic feedback on system usability, and relayed it to the development team, driving iterative improvements to the platform. Also coordinated the launch of a mobile English learning app. Scaled academic programs across 88 campuses in 17 cities, in collaboration with Trinity College London." },
            { role: "Marketing Manager", company: "Shenzhen Yangcai Information Consulting", period: "Sep 2018 – May 2021", body: "Managed digital marketing campaigns, Amazon strategies, and advertising projects. Led cross-functional teams in copywriting, translation, and multimedia production." },
            { role: "Supply Manager", company: "Meskal", period: "2014 – 2018", body: "Oversaw supplier negotiations, quality control, order processing, and shipping logistics. Coordinated factory visits and maintained relationships with domestic and international suppliers." },
            { role: "Freelance Projects", company: "BMW · Tracy's Dog · Donner", period: "various", body: "Marketing and photography work for BMW, Tracy's Dog, and Donner." }
        ],
        cv_education: "Education",
        cv_edu_desc: "<p><strong>Master's Degree in Linguistics and Translation</strong> (English & Chinese), Tomsk State University — with honors (2013).</p> <p>One-year course, Liaoning Pedagogical University (2013–2014).</p>",
        projects_title: "Projects",
        project1_title: "EdTech Web App",
        project1_desc: "A working web application used by teachers for class prep and student practice.",
        project1_details: "A working web application used by teachers to streamline lesson prep and student practice scheduling. <a href=\"https://nikolaykruzhilin.github.io/lingua_prep/\" target=\"_blank\" rel=\"noopener noreferrer\">View the app</a>",
        project1_media: [],
        project2_title: "Accessibility Plugin",
        project2_desc: "An accessibility plugin I built — now used in Supplementary Education Navigators across 40+ regions.",
        project2_details: "A plugin for the visually impaired: font scaling, contrast modes, and easier site navigation. Deployed in children's supplementary education Navigators across more than 40 regions of Russia. <a href=\"https://github.com/NikolayKruzhilin/visually_impaired_plugin_v2\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> · <a href=\"https://nikolaykruzhilin.github.io/visually_impaired_plugin_v2/\" target=\"_blank\" rel=\"noopener noreferrer\">Demo</a>",
        project2_media: [],
        project3_title: "BMW x BOLT",
        project3_desc: "An uplifting campaign with BOLT studio supporting BMW's return to the Chinese market after COVID; cinematic visuals and optimistic storytelling.",
        project3_details: "Produced creative direction, filming and post‑production with BOLT — a campaign celebrating renewal and positivity for BMW's market reentry.",
        project3_media: [ { type: "image", src: "imgs/BMW.png", alt: "BMW" } ],
        project4_title: "Tracy's Dog",
        project4_desc: "Product photography and brand development emphasizing love and intimacy in place of crude imagery.",
        project4_details: "Photography for e-commerce, visual identity and social content strategy for Tracy's Dog. <a href=\"https://www.tracysdog.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Visit website</a>",
        project4_media: [ { type: "image", src: "imgs/tracysdog.jpg", alt: "Tracy's Dog" } ],
        project5_title: "Donner",
        project5_desc: "Photography and videography for Donner instruments; marketing assets and product videos.",
        project5_details: "Shot product visuals and produced video content to enhance Donner's online presence.",
        project5_media: [ { type: "image", src: "imgs/donner1.png", alt: "Donner 1" }, { type: "image", src: "imgs/donner2.png", alt: "Donner 2" }, { type: "image", src: "imgs/donner3.png", alt: "Donner 3" } ],
        project6_title: "Kwan Yee Gor",
        project6_desc: "Concept and direction for a hair pomade campaign — video direction and product photography.",
        project6_details: "Directed and produced campaign films, oversaw on‑set direction and delivered product photography for listings.",
        project6_media: [ { type: "image", src: "imgs/kwan yee gor.jpg", alt: "Kwan Yee Gor" } ],
        project7_title: "AIC Thermal Coating",
        project7_desc: "Product management and marketing for AIC: packaging, website and cross‑team coordination.",
        project7_details: "Managed multi‑team execution, packaging design, web materials and marketing collateral to bring AIC to market.",
        project7_media: [ { type: "image", src: "imgs/AICpackage.jpg", alt: "AIC package" }, { type: "image", src: "imgs/AIC webpage.jpg", alt: "AIC webpage" }, { type: "image", src: "imgs/factoryQC.jpg", alt: "Factory QC" } ],
        project8_title: "Zen & Zany",
        project8_desc: "Freelance creative work: photography, videography and editing for brand campaigns.",
        project8_details: "Produced creative content, edited video, and supported campaign rollouts for multiple clients.",
        project8_media: [ { type: "image", src: "imgs/z&z.png", thumbnail: "imgs/z&z.png" } ],
        project9_title: "Cybersecurity",
        project9_desc: "Homelab experiments, SBC tinkering, automation and tools for network monitoring and testing.",
        project9_details: "Building tools on ESP32 and Chameleon boards, running homelab services and testing security tooling.",
        project9_media: [ { type: "image", src: "imgs/esp32.png", alt: "ESP32" }, { type: "image", src: "imgs/chameleon.png", alt: "Chameleon" } ],
        project3_video_url: "https://vimeo.com/410880058",
        project5_video_url: "https://donner-web.oss-cn-guangzhou.aliyuncs.com/dm-cn/video/TPaV36XlMD4A.mp4",
        project6_video_url: "https://www.youtube.com/watch?v=fdaAh7LNa6U",
        project8_video_url: "https://www.youtube.com/watch?v=efzwt1-cEug",
        project_video_link: "See the video here",
        nav_about: "About",
        about_title: "About me",
        about_paragraph: "In the past I was a professional athlete; I hold a 2nd dan in karate and the IMGKA world champion title. I enjoy street photography and teach photography and cinematography. I actively volunteer in animal shelters and help homeless animals. I am also the creator of the #createtodonate project.",
        about_card_1_title: "Karate",
        about_card_1_desc: "My karate journey started at an early age. I reached 2nd dan, the Candidate for Master of Sport (KMS) rank, and became IMGKA world champion. <br><a href=\"http://goju.tomsk.ru/%d0%b0%d1%80%d1%85%d0%b8%d0%b2/2009-2013/\" target=\"_blank\" rel=\"noopener noreferrer\">Link to the website</a>",
        about_card_2_title: "Street Photography",
        about_card_2_desc: "Street photography allows me to capture everyday life moments. Here are some of my best works.",
        about_card_3_title: "Teaching",
        about_card_3_desc: "I run courses on photography and cinematography, helping others develop creative skills. <br><a href=\"https://drive.google.com/file/d/1nT3mK1JcWLR3qKYz8srBitZair1Zzmep/view\" target=\"_blank\" rel=\"noopener noreferrer\">Link to the video</a>",
        about_card_4_title: "Volunteering",
        about_card_4_desc: "I regularly help at animal shelters and care for homeless animals. <br><a href=\"https://www.youtube.com/watch?v=xkOxdTTbjfg\" target=\"_blank\" rel=\"noopener noreferrer\">Link to the video</a>",
        about_card_5_title: "#createtodonate",
        about_card_5_desc: "#createtodonate — a project where creativity is used to raise funds for charity.",
        about_card_6_title: "Instagram Blog",
        about_card_6_desc: "I run an Instagram blog where I share insights gained from working on various projects and experimenting with AI. <br><a href=\"https://instagram.com/nikol.ai.kruzhilin\" target=\"_blank\" rel=\"noopener noreferrer\">@nikol.ai.kruzhilin</a>",
        cv_skill_sql: "SQL",
        cv_skill_linux: "Linux",
        cv_skill_jira: "Jira",
        cv_skill_1: "Python",
        cv_skill_2: "HTML",
        cv_skill_3: "CSS",
        cv_skill_4: "JavaScript",
        cv_skill_5: "Cybersecurity",
        cv_skill_6: "UX Design",
        cv_skill_7: "Project Management",
        cv_skill_8: "API Integration",
        cv_skill_10: "n8n Automation",
        cv_skill_11: "Context Engineering",
        cv_skill_12: "Digital Marketing",
        cv_skill_13: "Photography",
        cv_skill_confluence: "Confluence",
        cv_skill_drawio: "Drawio",
        cv_skill_react: "React",
        contact_title: "Contact Information",
        contact_email: "Email",
        contact_phone: "Phone",
        bot_responses: [
            "I understand, interesting question. Tell me more.",
            "This is indeed an important topic. What's most concerning to you?",
            "Good question! Let me think about it.",
            "Sounds interesting. What are your plans regarding this?",
            "I'm ready to help. Is there anything else you're interested in?"
        ]
    },
    zh: {
        nav_home: "首页",
        nav_cv: "简历",
        nav_projects: "项目",
        nav_contact: "联系方式",
        chat_title: "与nikol.AI聊天",
        online_status: "在线",
        welcome_message: "你好！我是nikol.AI，你的虚拟助手。你好吗？我能帮什么？",
        input_placeholder: "输入消息...",
        cv_title: "简历",
        cv_name: "Nikolay Kruzhilin",
        cv_position: "产品经理 / 市场经理 / IT专家",
        cv_description: "具备教育管理、产品开发、市场营销和运营方面的国际化经验。熟悉技术、设计、项目管理和API集成。擅长带领跨文化团队、管理复杂项目，并在企业与创意领域中取得实质成果。",
        cv_skills: "技术技能",
        cv_experience: "工作经验",
        cv_exp_items: [
            { role: "产品经理", company: "InLearno（Gosudarstvo Detey LLC）", period: "2025年10月 – 至今", body: "主导B2G赛道儿童素质教育导航平台的产品工作，与地方政府及公共部门利益相关方协同推进。负责用户端平台及面向区域运营商的管理后台。制定产品战略，开展用户研究，构建产品backlog并排列优先级。建立用户反馈闭环机制，持续优化核心用户流程（搜索、报名、移动端体验）。协调跨职能团队（后端、前端、UX、法务、技术写作、QA、技术支持），并推进与政府系统的对接（ЕПГУ、РПГУ、УНП、ГИС РЭБ、СМЭВ）。在战略与执行的交汇点上推动产品落地——从概念到上线。" },
            { role: "产品经理", company: "浙江宏基新能源科技有限公司", period: "2023年5月 – 2025年6月", body: "主导AIC隔热涂层的全周期产品管理：从市场调研与战略规划到进军国际市场。负责公司产品官网的建设与维护——制定需求、与研发团队协作，把控内容与用户体验。与国际合作伙伴及分销商协调配合，以英语和中文开展谈判与沟通。" },
            { role: "产品经理", company: "i2国际教育中心，广西", period: "2021年10月 – 2023年3月", body: "担任EdTech公司产品经理，专注于内部平台及教学人员用户体验。与外籍教师进行深度访谈，收集反馈并将其转化为明确的产品需求。主导ERP系统的落地推广：向外籍教师讲解系统功能，系统收集使用反馈并反馈给研发团队，推动平台核心流程的持续迭代优化。同步协调英语学习移动应用的上线工作。将教学项目扩展至17个城市的88个校区，培训逾40名外籍教师，并与伦敦圣三一学院开展合作。" },
            { role: "市场经理", company: "深圳洋彩信息咨询有限公司", period: "2018年9月 – 2021年5月", body: "管理数字营销活动、亚马逊产品策略及广告项目。领导跨部门团队从事文案撰写、翻译及多媒体制作。" },
            { role: "供应经理", company: "Мескаль", period: "2014年 – 2018年", body: "负责供应商谈判、质量控制、订单处理及运输物流。组织工厂考察并维护国内外供应商关系。" },
            { role: "自由职业项目", company: "BMW · Tracy's Dog · Donner", period: "不同时期", body: "为BMW、Tracy's Dog和Donner提供市场营销和摄影服务。" }
        ],
        cv_education: "教育背景",
        cv_edu_desc: "<p><strong>语言学与翻译硕士</strong>（英语和汉语），托木斯克国立大学，2013年（优等毕业）。</p> <p>一年制课程，辽宁师范大学（2013–2014）。</p>",
        projects_title: "项目",
        project1_title: "教育科技 Web 应用",
        project1_desc: "供教师使用的工作型网络应用，用于课程准备和学生练习。",
        project1_details: "一个供教师使用的工作型网络应用，用于简化课程准备和学生练习安排。 <a href=\"https://nikolaykruzhilin.github.io/lingua_prep/\" target=\"_blank\" rel=\"noopener noreferrer\">应用链接</a>",
        project1_media: [],
        project2_title: "视障辅助插件",
        project2_desc: "我开发的无障碍插件——现已在40多个地区的补充教育导航器中使用。",
        project2_details: "面向视障用户的无障碍插件：字体放大、对比度模式与更便捷的网站导航。已在俄罗斯40多个地区的儿童补充教育导航器中部署。 <a href=\"https://github.com/NikolayKruzhilin/visually_impaired_plugin_v2\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> · <a href=\"https://nikolaykruzhilin.github.io/visually_impaired_plugin_v2/\" target=\"_blank\" rel=\"noopener noreferrer\">演示</a>",
        project2_media: [],
        project3_title: "BMW x BOLT",
        project3_desc: "与BOLT工作室合作的振奋人心的活动，支持BMW在疫情后重返中国市场，展现乐观叙事与电影化影像。",
        project3_details: "与BOLT制作团队合作：创意方向、拍摄与后期，打造庆祝品牌复苏的活动。",
        project3_media: [ { type: "image", src: "imgs/BMW.png", alt: "BMW" } ],
        project4_title: "Tracy's Dog",
        project4_desc: "产品摄影与品牌建设，强调爱与亲密而非粗俗感。",
        project4_details: "为电商拍摄产品图，建立视觉风格并制定社交内容策略。<a href=\"https://www.tracysdog.com/\" target=\"_blank\" rel=\"noopener noreferrer\">访问网站</a>",
        project4_media: [ { type: "image", src: "imgs/tracysdog.jpg", alt: "Tracy's Dog" } ],
        project5_title: "Donner",
        project5_desc: "为Donner乐器提供摄影与视频制作，生成营销素材与产品视频。",
        project5_details: "拍摄产品视觉并制作视频内容以提升在线展示效果。",
        project5_media: [ { type: "image", src: "imgs/donner1.png", alt: "Donner 1" }, { type: "image", src: "imgs/donner2.png", alt: "Donner 2" }, { type: "image", src: "imgs/donner3.png", alt: "Donner 3" } ],
        project6_title: "Kwan Yee Gor",
        project6_desc: "为发蜡品牌提供概念与导演服务：视频制作与产品摄影。",
        project6_details: "导演并制作广告片，现场指导并完成产品摄影以供电商与宣传使用。",
        project6_media: [ { type: "image", src: "imgs/kwan yee gor.jpg", alt: "Kwan Yee Gor" } ],
        project7_title: "AIC Thermal Coating",
        project7_desc: "为AIC提供产品管理与市场支持：包装、网站与跨团队协调。",
        project7_details: "管理多团队执行、包装设计与营销资料，推动AIC产品上市。",
        project7_media: [ { type: "image", src: "imgs/AICpackage.jpg", alt: "AIC package" }, { type: "image", src: "imgs/AIC webpage.jpg", alt: "AIC webpage" }, { type: "image", src: "imgs/factoryQC.jpg", alt: "Factory QC" } ],
        project8_title: "Zen & Zany",
        project8_desc: "为多个品牌项目提供摄影、视频与剪辑等自由职业服务。",
        project8_details: "制作创意内容、视频编辑并支持活动发布。",
        project8_media: [ { type: "image", src: "imgs/z&z.png", thumbnail: "imgs/z&z.png" } ],
        project9_title: "网络安全（爱好）",
        project9_desc: "家庭实验室、SBC实验、自动化以及用于网络监控和测试的工具开发。",
        project9_details: "在ESP32和Chameleon板上开发工具，搭建homelab服务并进行安全测试。",
        project9_media: [ { type: "image", src: "imgs/esp32.png", alt: "ESP32" }, { type: "image", src: "imgs/chameleon.png", alt: "Chameleon" } ],
        project3_video_url: "https://vimeo.com/410880058",
        project5_video_url: "https://donner-web.oss-cn-guangzhou.aliyuncs.com/dm-cn/video/TPaV36XlMD4A.mp4",
        project6_video_url: "https://www.youtube.com/watch?v=fdaAh7LNa6U",
        project8_video_url: "https://www.youtube.com/watch?v=efzwt1-cEug",
        project_video_link: "在此查看视频",
        nav_about: "关于我",
        about_title: "关于我",
        about_paragraph: "过去我是职业运动员，拥有空手道二段并获得 IMGKA 世界冠军头衔。我喜欢街头摄影并教授摄影与电影学。积极参与动物收容所的志愿工作，帮助无家可归的动物。此外，我还是 #createtodonate 项目的创建者。",
        about_card_1_title: "空手道",
        about_card_1_desc: "我的空手道之路始于年幼时。我达到二段，获得候补运动员称号（KMS），并成为 IMGKA 世界冠军。",
        about_card_2_title: "街头摄影",
        about_card_2_desc: "街头摄影让我捕捉日常生活的瞬间。以下是我的一些代表作品。",
        about_card_3_title: "教学",
        about_card_3_desc: "我开设摄影和电影学课程，帮助他人发展创作技能。",
        about_card_4_title: "志愿服务",
        about_card_4_desc: "我定期在动物收容所提供帮助并照顾无家动物。",
        about_card_5_title: "#createtodonate",
        about_card_5_desc: "#createtodonate — 一个通过创意为慈善筹款的项目。",
        about_card_6_title: "Instagram 博客",
        about_card_6_desc: "我在Instagram上运营博客，分享从各种项目工作和AI实验中获得的经验。 <br><a href=\"https://instagram.com/nikol.ai.kruzhilin\" target=\"_blank\" rel=\"noopener noreferrer\">@nikol.ai.kruzhilin</a>",
        cv_skill_sql: "SQL",
        cv_skill_linux: "Linux",
        cv_skill_jira: "Jira",
        cv_skill_1: "Python",
        cv_skill_2: "HTML",
        cv_skill_3: "CSS",
        cv_skill_4: "JavaScript",
        cv_skill_5: "网络安全",
        cv_skill_6: "用户体验设计",
        cv_skill_7: "项目管理",
        cv_skill_8: "API集成",
        cv_skill_10: "n8n自动化",
        cv_skill_11: "上下文工程",
        cv_skill_12: "数字营销",
        cv_skill_13: "摄影",
        cv_skill_confluence: "Confluence",
        cv_skill_drawio: "Drawio",
        cv_skill_react: "React",
        contact_title: "联系信息",
        contact_email: "电子邮件",
        contact_phone: "电话",
        bot_responses: [
            "我理解，很有趣的问题。告诉我更多相关信息。",
            "这确实是一个重要话题。什么最让你担心？",
            "好问题！让我想想。",
            "听起来很有趣。你对此有什么计划？",
            "我准备好帮助你。还有其他感兴趣的事情吗？"
        ]
    }
};

let currentLang = 'ru';
const langOrder = ['ru', 'en', 'zh'];
const langLabels = { ru: 'RU', en: 'EN', zh: '中' };

// === Page Navigation ===
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    }
    window.scrollTo(0, 0);
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === '#' + pageId);
    });
    window.location.hash = pageId;
    closeMobileMenu();
}

function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.remove('active');
}

// === CV Accordion Builder ===
function buildExpAccordion(lang) {
    var container = document.getElementById('expAccordion');
    if (!container) return;
    var dict = translations[lang];
    var items = dict && dict.cv_exp_items;
    if (!items || !items.length) return;
    container.innerHTML = '';
    items.forEach(function(exp) {
        var item = document.createElement('div');
        item.className = 'exp-item';

        var header = document.createElement('div');
        header.className = 'exp-header';

        var left = document.createElement('div');
        left.className = 'exp-header-left';

        var title = document.createElement('span');
        title.className = 'exp-title';
        title.textContent = exp.role + ' · ' + exp.company;

        var meta = document.createElement('span');
        meta.className = 'exp-meta';
        meta.textContent = exp.period;

        left.appendChild(title);
        left.appendChild(meta);

        var chevron = document.createElement('span');
        chevron.className = 'exp-chevron';
        chevron.innerHTML = '&#9660;';

        header.appendChild(left);
        header.appendChild(chevron);

        var body = document.createElement('div');
        body.className = 'exp-body';
        var p = document.createElement('p');
        p.textContent = exp.body;
        body.appendChild(p);

        item.appendChild(header);
        item.appendChild(body);
        container.appendChild(item);

        header.addEventListener('click', function() {
            var isOpen = item.classList.contains('open');
            // Close all
            container.querySelectorAll('.exp-item.open').forEach(function(el) {
                el.classList.remove('open');
            });
            if (!isOpen) item.classList.add('open');
        });
    });
}

// === Language Switching ===
function switchLanguage(lang) {
    currentLang = lang;
    const htmlKeys = new Set(['cv_edu_desc']);
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        const dict = translations[lang];
        if (dict && dict[key] !== undefined) {
            if (el.tagName === 'INPUT') {
                el.placeholder = dict[key];
            } else if (htmlKeys.has(key) || el.dataset.format === 'html') {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });
    buildExpAccordion(lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const mobileToggle = document.querySelector('.lang-toggle-mobile');
    if (mobileToggle) {
        mobileToggle.textContent = langLabels[lang] || lang.toUpperCase();
        mobileToggle.setAttribute('data-lang', lang);
    }
    document.documentElement.lang = lang;
    try { localStorage.setItem('siteLang', lang); } catch (e) {}
}

function cycleLanguage() {
    const idx = langOrder.indexOf(currentLang);
    const next = langOrder[(idx + 1) % langOrder.length];
    switchLanguage(next);
}

// === Chat helpers ===
function addMessage(content, isUser) {
    const messages = document.getElementById('chatMessages');
    if (!messages) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'message' + (isUser ? ' user' : '');
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = isUser ? 'YOU' : 'AI';
    const bubble = document.createElement('div');
    bubble.className = 'message-content';
    bubble.textContent = content;
    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight;
}

function simulateBotResponse() {
    const dict = translations[currentLang];
    if (!dict || !dict.bot_responses) return;
    const responses = dict.bot_responses;
    const msg = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(function() { addMessage(msg, false); }, 900);
}

// === Skill Marquee ===
function initSkillMarquee() {
    var marquee = document.getElementById('skillMarquee');
    var track = document.getElementById('skillTrack');
    if (!marquee || !track) return;

    // Clone items for seamless infinite loop
    var items = track.querySelectorAll('.skill-item');
    items.forEach(function(item) {
        track.appendChild(item.cloneNode(true));
    });

    var baseSpeed = 0.15; // pixels per frame (~9px/s at 60fps)
    var currentSpeed = baseSpeed;
    var offset = 0;
    var paused = false;
    var touchActive = false;
    var touchOffset = 0;
    var trackHalfWidth = 0;

    function updateWidth() {
        trackHalfWidth = track.scrollWidth / 2;
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);

    function loop() {
        if (!paused && !touchActive) {
            offset -= currentSpeed;
            if (offset <= -trackHalfWidth) {
                offset += trackHalfWidth;
            }
        }
        track.style.transform = 'translateX(' + (offset + touchOffset) + 'px)';
        requestAnimationFrame(loop);
    }

    // Hover pause
    marquee.addEventListener('mouseenter', function() { paused = true; });
    marquee.addEventListener('mouseleave', function() { paused = false; });

    // Wheel speed control (desktop)
    marquee.addEventListener('wheel', function(e) {
        e.preventDefault();
        var delta = e.deltaY || e.detail || 0;
        if (Math.abs(delta) > 3) {
            if (delta > 0) {
                currentSpeed = Math.max(0.05, currentSpeed - 0.15);
            } else {
                currentSpeed = Math.min(3, currentSpeed + 0.15);
            }
        }
        clearTimeout(marquee._speedTimeout);
        marquee._speedTimeout = setTimeout(function() {
            currentSpeed = baseSpeed;
        }, 1500);
    }, { passive: false });

    // Touch direct drag (mobile)
    var touchStartX = 0;
    var touchStartOffset = 0;
    marquee.addEventListener('touchstart', function(e) {
        touchActive = true;
        touchStartX = e.touches[0].clientX;
        touchStartOffset = touchOffset;
        e.preventDefault();
    }, { passive: false });
    marquee.addEventListener('touchmove', function(e) {
        if (!touchActive) return;
        var dx = e.touches[0].clientX - touchStartX;
        touchOffset = touchStartOffset + dx;
        e.preventDefault();
    }, { passive: false });
    marquee.addEventListener('touchend', function() {
        touchActive = false;
        offset += touchOffset;
        touchOffset = 0;
        while (offset <= -trackHalfWidth) offset += trackHalfWidth;
        while (offset > 0) offset -= trackHalfWidth;
    });

    requestAnimationFrame(loop);
}

// === About Modal Logic ===
function initAboutModal() {
    var cards = document.querySelectorAll('.about-card');
    if (cards.length === 0) return;
    var modal = document.getElementById('aboutModal');
    var closeModal = document.getElementById('aboutCloseModal');
    var modalTitle = document.getElementById('aboutModalTitle');
    var modalDescription = document.getElementById('aboutModalDescription');
    var modalMedia = document.getElementById('aboutModalMedia');
    var lightbox = document.getElementById('aboutLightbox');
    var lightboxImg = document.getElementById('aboutLightboxImg');
    var prevBtn = document.getElementById('aboutPrevBtn');
    var nextBtn = document.getElementById('aboutNextBtn');
    var closeLightbox = document.getElementById('aboutCloseLightbox');

    var currentImages = [];
    var currentIndex = 0;

    function openModal() {
        modal.style.display = 'flex';
        document.body.classList.add('about-modal-open');
        var dialog = modal.querySelector('.modal-dialog');
        if (dialog) dialog.scrollTop = 0;
        modal.scrollTop = 0;
    }
    function hideModal() {
        modal.style.display = 'none';
        document.body.classList.remove('about-modal-open');
        modalMedia.querySelectorAll('iframe, video').forEach(function(el) { el.remove(); });
    }
    function openLightbox(images, index) {
        currentImages = images;
        currentIndex = index;
        lightboxImg.src = images[index] || '';
        lightbox.style.display = 'flex';
    }
    function closeLightboxFn() { lightbox.style.display = 'none'; }

    cards.forEach(function(card) {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
        });
        card.addEventListener('click', function() {
            var title = (card.querySelector('h3') ? card.querySelector('h3').textContent : '').trim();
            var details = (card.querySelector('p') ? card.querySelector('p').innerHTML : '').trim();
            modalTitle.textContent = title;
            modalDescription.innerHTML = details;
            modalMedia.innerHTML = '';

            var mediaItems = [];
            try { if (card.dataset.media) mediaItems = JSON.parse(card.dataset.media); } catch (e) {}
            var imageList = mediaItems.filter(function(m) { return m.type === 'image'; }).map(function(m) { return m.src; });
            mediaItems.forEach(function(item) {
                if (item.type === 'image') {
                    var img = document.createElement('img');
                    img.src = item.src; img.alt = item.alt || '';
                    img.onclick = function() { openLightbox(imageList, imageList.indexOf(item.src)); };
                    modalMedia.appendChild(img);
                }
            });
            openModal();
        });
    });
    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', function(e) { if (e.target === modal) hideModal(); });
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex' && e.key === 'Escape') hideModal();
    });
    closeLightbox.addEventListener('click', closeLightboxFn);
    lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLightboxFn(); });
    prevBtn.addEventListener('click', function() {
        if (currentImages.length) {
            currentIndex = (currentIndex > 0 ? currentIndex - 1 : currentImages.length - 1);
            lightboxImg.src = currentImages[currentIndex];
        }
    });
    nextBtn.addEventListener('click', function() {
        if (currentImages.length) {
            currentIndex = (currentIndex < currentImages.length - 1 ? currentIndex + 1 : 0);
            lightboxImg.src = currentImages[currentIndex];
        }
    });
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'ArrowRight') nextBtn.click();
            if (e.key === 'Escape') closeLightboxFn();
        }
    });
}

// === MAIN INIT ===
document.addEventListener('DOMContentLoaded', function() {
    // Restore language
    var lang = 'ru';
    try { lang = localStorage.getItem('siteLang') || 'ru'; } catch (e) { lang = 'ru'; }
    switchLanguage(lang);

    // Bind desktop language buttons
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function() { switchLanguage(btn.dataset.lang); });
    });

    // Bind mobile language toggle
    var mobileToggle = document.querySelector('.lang-toggle-mobile');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', cycleLanguage);
    }

    // Bind nav links for SPA navigation
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var pageId = link.getAttribute('data-page');
            if (pageId) navigateTo(pageId);
        });
    });

    // Hamburger toggle
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Handle initial hash
    var hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
        navigateTo(hash);
    }

    // Handle hash changes (browser back/forward)
    window.addEventListener('hashchange', function() {
        var newHash = window.location.hash.replace('#', '');
        if (newHash && document.getElementById(newHash)) {
            navigateTo(newHash);
        }
    });

    // Chat init
    var chatInput = document.getElementById('chatInput');
    var sendBtn = document.getElementById('sendBtn');
    if (chatInput && sendBtn) {
        var send = function() {
            var value = chatInput.value.trim();
            if (!value) return;
            addMessage(value, true);
            chatInput.value = '';
            simulateBotResponse();
        };
        sendBtn.addEventListener('click', send);
        chatInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') send(); });
    }

    // === Projects Modal ===
    var projectCards = document.querySelectorAll('.project-card');
    var modal = document.getElementById('projectModal');
    var closeModal = document.getElementById('closeModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalDescription = document.getElementById('modalDescription');
    var modalMedia = document.getElementById('modalMedia');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    var closeLightbox = document.getElementById('closeLightbox');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');

    if (lightboxImg) {
        lightboxImg.onerror = function() {
            lightboxImg.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="#ddd"/><polygon points="320,150 320,300 480,225" fill="#777"/></svg>');
        };
    }

    var currentImages = [];
    var currentIndex = 0;

    if (projectCards.length > 0) {
        projectCards.forEach(function(card, index) {
            card.addEventListener('click', function() {
                var projectKey = 'project' + (index + 1);
                var dict = translations[currentLang];
                modalTitle.textContent = dict[projectKey + '_title'];
                modalDescription.innerHTML = dict[projectKey + '_details'];

                try {
                    var videoUrl = dict[projectKey + '_video_url'];
                    if (videoUrl) {
                        var p = document.createElement('p');
                        p.style.marginTop = '0.5rem';
                        var a = document.createElement('a');
                        a.href = videoUrl;
                        a.target = '_blank';
                        a.rel = 'noopener noreferrer';
                        a.textContent = dict['project_video_link'] || 'See the video here';
                        p.appendChild(a);
                        modalDescription.appendChild(p);
                    }
                } catch (e) {}

                modalMedia.innerHTML = '';

                var mediaItems = dict[projectKey + '_media'] || [];
                mediaItems.forEach(function(item) {
                    if (item.type === 'image') {
                        var thumb = document.createElement('img');
                        thumb.src = item.src;
                        thumb.alt = item.alt || '';
                        thumb.style.width = '100px';
                        thumb.style.height = '100px';
                        thumb.style.objectFit = 'cover';
                        thumb.style.cursor = 'pointer';
                        thumb.onerror = function() {
                            thumb.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="100" viewBox="0 0 160 100"><rect width="160" height="100" fill="#f3f3f3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-size="12">Image</text></svg>');
                        };
                        thumb.onclick = function() {
                            var imageSrcs = mediaItems.filter(function(m) { return m.type === 'image'; }).map(function(m) { return m.src; });
                            var idx = imageSrcs.indexOf(item.src);
                            openLightbox(imageSrcs, idx >= 0 ? idx : 0);
                        };
                        modalMedia.appendChild(thumb);
                    } else if (item.type === 'video') {
                        var thumb = document.createElement('img');
                        thumb.src = item.thumbnail || '';
                        thumb.alt = item.alt || 'Video Thumbnail';
                        thumb.style.width = '100px';
                        thumb.style.height = '100px';
                        thumb.style.objectFit = 'cover';
                        thumb.style.cursor = 'pointer';
                        thumb.onerror = function() {
                            thumb.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="100" viewBox="0 0 160 100"><rect width="160" height="100" fill="#ddd"/><polygon points="60,30 60,70 95,50" fill="#777"/></svg>');
                        };
                        thumb.onclick = function() {
                            modalMedia.querySelectorAll('iframe, video').forEach(function(el) { el.remove(); });
                            var src = item.src || '';
                            if (src.endsWith('.mp4')) {
                                var vid = document.createElement('video');
                                vid.src = src;
                                vid.controls = true;
                                vid.autoplay = true;
                                vid.style.width = '100%';
                                modalMedia.appendChild(vid);
                            } else if (src.indexOf('youtube.com') !== -1 || src.indexOf('youtu.be') !== -1) {
                                var id = '';
                                if (src.indexOf('watch?v=') !== -1) {
                                    id = src.split('watch?v=')[1].split('&')[0];
                                } else {
                                    id = src.split('/').pop();
                                }
                                var iframe = document.createElement('iframe');
                                iframe.src = 'https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1';
                                iframe.width = '100%';
                                iframe.height = '360';
                                iframe.frameBorder = '0';
                                iframe.allow = 'autoplay; fullscreen; picture-in-picture';
                                modalMedia.appendChild(iframe);
                            } else if (src.indexOf('vimeo.com') !== -1) {
                                var vid = src.split('/').pop();
                                var iframe = document.createElement('iframe');
                                iframe.src = 'https://player.vimeo.com/video/' + vid + '?autoplay=1';
                                iframe.width = '100%';
                                iframe.height = '360';
                                iframe.frameBorder = '0';
                                iframe.allow = 'autoplay; fullscreen; picture-in-picture';
                                modalMedia.appendChild(iframe);
                            } else {
                                window.open(src, '_blank');
                            }
                        };
                        modalMedia.appendChild(thumb);
                    }
                });

                modal.style.display = 'flex';
                document.body.classList.add('modal-open');
                var dialog = modal.querySelector('.modal-dialog');
                if (dialog) dialog.scrollTop = 0;
                modal.scrollTop = 0;
            });
        });

        function closeProjectModal() {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }

        closeModal.addEventListener('click', closeProjectModal);
        modal.addEventListener('click', function(e) { if (e.target === modal) closeProjectModal(); });
        document.addEventListener('keydown', function(e) {
            if (modal.style.display === 'flex' && e.key === 'Escape' && lightbox.style.display !== 'flex') {
                closeProjectModal();
            }
        });

        function openLightbox(images, index) {
            currentImages = images;
            currentIndex = index;
            lightboxImg.src = images[index];
            lightbox.style.display = 'flex';
        }

        closeLightbox.addEventListener('click', function() { lightbox.style.display = 'none'; });
        lightbox.addEventListener('click', function(e) { if (e.target === lightbox) lightbox.style.display = 'none'; });
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1;
            lightboxImg.src = currentImages[currentIndex];
        });
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0;
            lightboxImg.src = currentImages[currentIndex];
        });
    }

    // Init skill marquee
    initSkillMarquee();

    // Init about modal
    initAboutModal();
});
