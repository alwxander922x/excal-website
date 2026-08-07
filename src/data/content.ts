export type Lang = "en" | "ru" | "ro";
export const SERVICE_IDS = ["consulting","software","portals","hosting","infrastructure","callcenter","staffing","cybersecurity","cloud"] as const;
export type ServiceId = typeof SERVICE_IDS[number];

export interface ServiceCopy {
  title: string;
  summary: string;
  bullets: string[];
  body1: string;
  body2: string;
}

export const SVC: Record<Lang, Record<ServiceId, ServiceCopy>> = {
  en: {
    consulting: { title:"IT Consulting", summary:"Independent advice on technology strategy, architecture and vendor selection.", bullets:["Technology strategy","Solution architecture","Vendor & tool evaluation"], body1:"We help businesses plan technology investments that fit their operations, not the other way around. Our consultants assess current systems, map gaps, and recommend a realistic path forward — with timelines and budgets that hold up.", body2:"Engagements range from a single architecture review to ongoing advisory retainers. Either way, the goal is the same: fewer wrong turns, and technology decisions your team can defend." },
    software: { title:"Custom Software Development", summary:"Web and desktop applications built around your workflows, not a template.", bullets:["Requirements & design","Full-stack development","QA & long-term support"], body1:"When off-the-shelf software falls short, we design and build applications tailored to how your business actually runs. Every project starts with the workflow, not the framework.", body2:"Our teams handle the full lifecycle — specification, development, testing and post-launch support — so the software keeps working as your business changes." },
    portals: { title:"Web Portal Development", summary:"Client, partner and employee portals built for daily use.", bullets:["Self-service portals","Role-based access","Integration with internal systems"], body1:"Portals succeed when people actually use them. We build client, partner and employee portals with the access controls, workflows and integrations that make daily use effortless.", body2:"From account dashboards to internal knowledge hubs, each portal connects to the systems that already run your business, rather than duplicating them." },
    hosting: { title:"Data Processing and Web Hosting", summary:"Reliable hosting and data processing infrastructure, managed end to end.", bullets:["Managed hosting","Data processing pipelines","Backups & monitoring"], body1:"We host and process the data that keeps your applications running, on infrastructure sized for your actual load and monitored around the clock.", body2:"Backups, uptime monitoring and capacity planning are handled as part of the service, not an afterthought — so hosting stays predictable." },
    infrastructure: { title:"IT Infrastructure Management", summary:"Day-to-day management of networks, servers and endpoints.", bullets:["Network & server administration","Endpoint management","Proactive maintenance"], body1:"We take on the daily administration of networks, servers and endpoints, so internal teams can focus on projects instead of tickets.", body2:"Maintenance is scheduled and proactive: patches, updates and monitoring run on a plan, catching problems before they become outages." },
    callcenter: { title:"Call Center Services", summary:"Trained agents handling customer support and outbound campaigns.", bullets:["Inbound customer support","Outbound campaigns","Multilingual agents"], body1:"Our call center teams handle customer support, order processing and outbound campaigns on your behalf, trained on your product and your tone.", body2:"Coverage scales with demand — from a dedicated small team to a full shift schedule — with reporting that keeps you close to what customers are saying." },
    staffing: { title:"Personnel Outsourcing / Staffing Services", summary:"IT and operations staff sourced, hired and managed on your behalf.", bullets:["IT staff augmentation","Recruitment & screening","Payroll & compliance handled"], body1:"We source, hire and manage IT and operations staff for businesses that need to scale a team without scaling an HR department.", body2:"Contracts, payroll and compliance are handled on our side, whether you need one specialist or a full outsourced team." },
    cybersecurity: { title:"Cybersecurity Services", summary:"Protecting your business data, infrastructure, and operations from threats.", bullets:["Security audits & testing", "Endpoint & network protection", "Incident response"], body1:"We assess and secure your systems against modern threats without slowing down your operations.", body2:"From proactive vulnerability scanning to rapid incident response, our security team ensures your business stays compliant and protected." },
    cloud: { title:"Cloud Migration & Management", summary:"Moving your infrastructure to the cloud and optimizing it for performance and cost.", bullets:["Cloud readiness & strategy", "Seamless migration", "Cost optimization"], body1:"We help businesses move their legacy systems to the cloud safely and efficiently, reducing downtime and risk.", body2:"Once in the cloud, we continuously optimize your resources so you get better performance without overpaying for unused capacity." }
  },
  ru: {
    consulting: { title:"ИТ-консалтинг", summary:"Независимые консультации по технологической стратегии, архитектуре и выбору поставщиков.", bullets:["Технологическая стратегия","Архитектура решений","Оценка поставщиков и инструментов"], body1:"Мы помогаем бизнесу планировать инвестиции в технологии так, чтобы они соответствовали реальным процессам компании. Наши консультанты анализируют текущие системы, выявляют пробелы и предлагают реалистичный план действий — со сроками и бюджетом, которые действительно выполнимы.", body2:"Формат работы — от разового архитектурного аудита до постоянного консультационного сопровождения. Цель одна: меньше ошибочных решений и технологические решения, которые ваша команда может обосновать." },
    software: { title:"Разработка ПО на заказ", summary:"Веб- и настольные приложения, созданные под ваши процессы, а не под шаблон.", bullets:["Анализ требований и проектирование","Full-stack разработка","QA и долгосрочная поддержка"], body1:"Когда готовое программное обеспечение не подходит, мы проектируем и создаём приложения, адаптированные под то, как реально работает ваш бизнес. Каждый проект начинается с процесса, а не с фреймворка.", body2:"Наши команды берут на себя весь цикл — от постановки задачи до разработки, тестирования и поддержки после запуска, — чтобы программное обеспечение продолжало работать по мере роста бизнеса." },
    portals: { title:"Разработка веб-порталов", summary:"Порталы для клиентов, партнёров и сотрудников, созданные для ежедневного использования.", bullets:["Порталы самообслуживания","Ролевой доступ","Интеграция с внутренними системами"], body1:"Порталы работают, когда люди ими действительно пользуются. Мы создаём порталы для клиентов, партнёров и сотрудников с продуманным контролем доступа, процессами и интеграциями, которые делают ежедневную работу удобной.", body2:"От личных кабинетов клиентов до внутренних баз знаний — каждый портал связан с уже существующими системами вашего бизнеса, а не дублирует их." },
    hosting: { title:"Обработка данных и веб-хостинг", summary:"Надёжный хостинг и инфраструктура обработки данных с полным сопровождением.", bullets:["Управляемый хостинг","Конвейеры обработки данных","Резервное копирование и мониторинг"], body1:"Мы размещаем и обрабатываем данные, обеспечивающие работу ваших приложений, на инфраструктуре, рассчитанной на реальную нагрузку и находящейся под постоянным наблюдением.", body2:"Резервное копирование, мониторинг доступности и планирование мощностей — часть услуги, а не дополнение к ней, поэтому хостинг остаётся предсказуемым." },
    infrastructure: { title:"Управление ИТ-инфраструктурой", summary:"Ежедневное управление сетями, серверами и рабочими станциями.", bullets:["Администрирование сетей и серверов","Управление рабочими станциями","Проактивное обслуживание"], body1:"Мы берём на себя повседневное администрирование сетей, серверов и рабочих станций, чтобы внутренние ИТ-команды могли заниматься проектами, а не заявками.", body2:"Обслуживание проводится по графику и проактивно: обновления, патчи и мониторинг работают по плану, выявляя проблемы до того, как они превратятся в сбои." },
    callcenter: { title:"Услуги call-центра", summary:"Обученные операторы для поддержки клиентов и исходящих кампаний.", bullets:["Поддержка клиентов на входящих линиях","Исходящие кампании","Многоязычные операторы"], body1:"Наши операторы call-центра берут на себя поддержку клиентов, обработку заказов и исходящие кампании от вашего имени, обученные вашему продукту и стилю общения.", body2:"Штат масштабируется под нагрузку — от небольшой выделенной команды до полного сменного графика — с отчётностью, которая держит вас в курсе того, что говорят клиенты." },
    staffing: { title:"Аутсорсинг персонала / подбор кадров", summary:"ИТ- и операционный персонал, подбираемый, нанимаемый и управляемый от вашего имени.", bullets:["ИТ-аутстаффинг","Подбор и отбор кандидатов","Расчёт зарплаты и соответствие требованиям"], body1:"Мы находим, нанимаем и управляем ИТ- и операционным персоналом для компаний, которым нужно расширить команду без расширения HR-отдела.", body2:"Договоры, расчёт зарплаты и соответствие требованиям законодательства — на нашей стороне, будь то один специалист или полностью аутсорсинговая команда." },
    cybersecurity: { title:"Кибербезопасность", summary:"Защита данных, инфраструктуры и операций вашего бизнеса от угроз.", bullets:["Аудит безопасности и тестирование", "Защита конечных точек и сетей", "Реагирование на инциденты"], body1:"Мы оцениваем и защищаем ваши системы от современных угроз, не замедляя работу вашего бизнеса.", body2:"От проактивного сканирования уязвимостей до быстрого реагирования на инциденты — наша команда безопасности обеспечивает вашу защиту и соответствие стандартам." },
    cloud: { title:"Миграция и управление в облаке", summary:"Перенос инфраструктуры в облако и её оптимизация для повышения производительности.", bullets:["Стратегия и готовность к облаку", "Бесшовная миграция", "Оптимизация затрат"], body1:"Мы помогаем безопасно и эффективно перенести устаревшие системы в облако, снижая риски и время простоя.", body2:"После перехода в облако мы постоянно оптимизируем ваши ресурсы, чтобы вы получали лучшую производительность без переплат." }
  },
  ro: {
    consulting: { title:"Consultanță IT", summary:"Consultanță independentă privind strategia tehnologică, arhitectura și selecția furnizorilor.", bullets:["Strategie tehnologică","Arhitectura soluțiilor","Evaluarea furnizorilor și instrumentelor"], body1:"Ajutăm companiile să planifice investițiile tehnologice astfel încât să se adapteze operațiunilor lor, nu invers. Consultanții noștri evaluează sistemele actuale, identifică lacunele și recomandă un plan realist — cu termene și bugete care se respectă.", body2:"Colaborările variază de la o singură revizuire de arhitectură până la asistență continuă. În ambele cazuri, obiectivul este același: mai puține decizii greșite și decizii tehnologice pe care echipa ta le poate susține." },
    software: { title:"Dezvoltare software la comandă", summary:"Aplicații web și desktop construite în jurul proceselor tale, nu al unui șablon.", bullets:["Analiza cerințelor și design","Dezvoltare full-stack","QA și suport pe termen lung"], body1:"Când software-ul standard nu este suficient, proiectăm și dezvoltăm aplicații adaptate modului real de funcționare a afacerii tale. Fiecare proiect începe de la proces, nu de la framework.", body2:"Echipele noastre gestionează întregul ciclu — specificații, dezvoltare, testare și suport post-lansare — astfel încât software-ul să continue să funcționeze pe măsură ce afacerea se schimbă." },
    portals: { title:"Dezvoltare portaluri web", summary:"Portaluri pentru clienți, parteneri și angajați, construite pentru uz zilnic.", bullets:["Portaluri de autoservire","Acces bazat pe roluri","Integrare cu sistemele interne"], body1:"Portalurile funcționează atunci când oamenii le folosesc cu adevărat. Construim portaluri pentru clienți, parteneri și angajați cu controale de acces, fluxuri de lucru și integrări care fac utilizarea zilnică simplă.", body2:"De la panouri de cont până la baze de cunoștințe interne, fiecare portal se conectează la sistemele care rulează deja afacerea ta, în loc să le dubleze." },
    hosting: { title:"Procesare date și hosting web", summary:"Hosting și infrastructură de procesare a datelor de încredere, gestionate integral.", bullets:["Hosting gestionat","Fluxuri de procesare a datelor","Backup și monitorizare"], body1:"Găzduim și procesăm datele care mențin aplicațiile tale în funcțiune, pe o infrastructură dimensionată pentru sarcina reală și monitorizată permanent.", body2:"Backup-urile, monitorizarea disponibilității și planificarea capacității sunt parte a serviciului, nu o idee ulterioară — astfel hosting-ul rămâne previzibil." },
    infrastructure: { title:"Gestionarea infrastructurii IT", summary:"Gestionarea zilnică a rețelelor, serverelor și echipamentelor.", bullets:["Administrare rețele și servere","Gestionarea echipamentelor","Întreținere proactivă"], body1:"Ne asumăm administrarea zilnică a rețelelor, serverelor și echipamentelor, astfel încât echipele interne să se poată concentra pe proiecte, nu pe tichete.", body2:"Întreținerea este planificată și proactivă: actualizările, corecțiile și monitorizarea rulează conform unui plan, identificând problemele înainte să devină întreruperi." },
    callcenter: { title:"Servicii call center", summary:"Agenți instruiți pentru suport clienți și campanii outbound.", bullets:["Suport clienți inbound","Campanii outbound","Agenți multilingvi"], body1:"Echipele noastre de call center gestionează suportul pentru clienți, procesarea comenzilor și campaniile outbound în numele tău, instruite pe produsul și tonul tău.", body2:"Capacitatea se ajustează în funcție de cerere — de la o echipă mică dedicată până la un program complet de tură — cu raportare care te ține la curent cu ce spun clienții." },
    staffing: { title:"Externalizare personal / recrutare", summary:"Personal IT și operațional recrutat, angajat și gestionat în numele tău.", bullets:["Augmentare personal IT","Recrutare și selecție","Salarizare și conformitate gestionate"], body1:"Recrutăm, angajăm și gestionăm personal IT și operațional pentru companii care trebuie să își extindă echipa fără să își extindă departamentul HR.", body2:"Contractele, salarizarea și conformitatea sunt gestionate de noi, fie că ai nevoie de un singur specialist, fie de o echipă complet externalizată." },
    cybersecurity: { title:"Securitate cibernetică", summary:"Protejarea datelor, infrastructurii și operațiunilor afacerii tale împotriva amenințărilor.", bullets:["Auditul securității și testare", "Protecția rețelelor și a terminalelor", "Răspuns la incidente"], body1:"Evaluăm și securizăm sistemele tale împotriva amenințărilor moderne fără a încetini operațiunile afacerii.", body2:"De la scanarea proactivă a vulnerabilităților până la răspunsul rapid la incidente, echipa noastră de securitate se asigură că rămâi protejat și conform cu reglementările." },
    cloud: { title:"Migrare și management în cloud", summary:"Mutarea infrastructurii în cloud și optimizarea acesteia pentru performanță și costuri.", bullets:["Strategie și pregătire pentru cloud", "Migrare fără întreruperi", "Optimizarea costurilor"], body1:"Ajutăm companiile să își mute sistemele vechi în cloud în siguranță și eficient, reducând riscurile și timpii de nefuncționare.", body2:"Odată ajunși în cloud, optimizăm continuu resursele pentru a obține o performanță mai bună fără a plăti în plus pentru capacitatea neutilizată." }
  }
};

export interface FeatureRow { title: string; body: string; }
export interface LegalSection { h: string; body: string; }
export interface LegalDoc { title: string; updated: string; intro: string; sections: LegalSection[]; }

export interface StatItem { value: number; suffix: string; label: string; }
export interface FaqItem { q: string; a: string; }
export interface TestimonialItem { quote: string; name: string; role: string; company: string; }

export interface SiteCopy {
  nav: { home: string; about: string; services: string; contact: string };
  legalNav: { terms: string; privacy: string; cookies: string };
  hero: { line1: string; line2: string; subhead: string; ctaPrimary: string; ctaSecondary: string };
  stats: { kicker: string; items: StatItem[] };
  globe: { kicker: string; title: string; body: string };
  faq: { kicker: string; title: string; intro: string; items: FaqItem[] };
  testimonials: { kicker: string; title: string; items: TestimonialItem[] };
  labels: { servicesKicker: string; servicesTitle: string; learnMore: string; whyTitle: string; aboutKicker: string; moreAboutUs: string; whatWeDoKicker: string; capabilitiesKicker: string; otherServicesKicker: string; photoPlaceholder: string; mapPlaceholder: string };
  why: FeatureRow[];
  how: FeatureRow[];
  about: { title: string; intro: string; whatWeDo: string };
  contact: { title: string; intro: string; addressLabel: string; phoneLabel: string; emailLabel: string; nameLabel: string; emailFieldLabel: string; messageLabel: string; submit: string; formNote: string; sentTitle: string; sentBody: string };
  cta: { title: string; button: string };
  footer: { blurb: string; servicesLabel: string; quickLinks: string; legalLabel: string; rights: string };
  cookieBanner: { text: string; accept: string; decline: string };
  legal: { terms: LegalDoc; privacy: LegalDoc; cookies: LegalDoc };
}

export const T: Record<Lang, SiteCopy> = {
  en: {
    nav: { home:"Home", about:"About", services:"Services", contact:"Contact" },
    legalNav: { terms:"Terms of Service", privacy:"Privacy Policy", cookies:"Cookie Policy" },
    hero: { line1:"We build the tech.", line2:"You lead the market.", subhead:"Tailored software development, systems integration, and full-stack tech operations designed to keep your business ahead.", ctaPrimary:"Get in touch", ctaSecondary:"View services" },
    stats: { kicker:"From years of delivery, a clear picture", items:[
      {value:120, suffix:"+", label:"Projects delivered"},
      {value:99, suffix:"%", label:"Infrastructure uptime"},
      {value:9, suffix:"+", label:"Years in operation"},
      {value:24, suffix:"/7", label:"Monitoring and support"}
    ]},
    globe: { kicker:"Global reach", title:"Based in Moldova. Delivering everywhere.", body:"Our teams support clients across Europe and beyond, with infrastructure, monitoring and on-call coverage that does not stop at a border. One partner, one point of contact, wherever your business operates." },
    faq: { kicker:"F.A.Q", title:"Straightforward answers.", intro:"The questions we get asked most, answered without the sales pitch.", items:[
      {q:"What kind of businesses do you work with?", a:"Mostly small and mid-sized companies that need a dependable technology partner rather than a one-off vendor — from first software project to fully outsourced IT operations."},
      {q:"Do you work on a fixed price or hourly basis?", a:"Both. Well-defined projects are usually fixed price; ongoing operations and support work best on a monthly retainer. We scope to the problem, not to a package."},
      {q:"Can you take over an existing system someone else built?", a:"Yes. We regularly inherit systems, audit them first, then stabilise and improve. We will tell you honestly if a rewrite makes more sense than a rescue."},
      {q:"How quickly can you start?", a:"Discovery usually begins within one to two weeks. Urgent infrastructure or incident work can start sooner — get in touch and we will tell you honestly what is possible."},
      {q:"Do you provide support after launch?", a:"Yes, and we recommend it. Systems need maintenance, monitoring and updates. Most of our engagements continue well past the first release."},
      {q:"Which technologies do you work with?", a:"We are stack-pragmatic: modern web frameworks, cloud and on-premise infrastructure, databases, and integrations with the systems you already run. We pick what fits the problem and your team."}
    ]},
    testimonials: { kicker:"Trusted by", title:"What working with us actually looks like.", items:[
      {quote:"They took over an infrastructure mess we had accumulated over years, audited it properly, and told us plainly what to fix first. Six months later our downtime went from weekly to effectively zero.", name:"Andrei P.", role:"Operations Director", company:"Logistics group"},
      {quote:"What stood out was the direct communication. We spoke to the people writing the code, not an account manager relaying messages. Decisions that used to take a week took an afternoon.", name:"Elena M.", role:"Head of Product", company:"Retail platform"},
      {quote:"They scoped the project honestly, including telling us which half we did not need yet. That saved us a significant amount and built more trust than any proposal could have.", name:"Victor C.", role:"Managing Director", company:"Manufacturing"}
    ]},
    labels: { servicesKicker:"What we do", servicesTitle:"Services", learnMore:"Learn more", whyTitle:"Why Excal Group", aboutKicker:"About us", moreAboutUs:"More about us", whatWeDoKicker:"What we do", capabilitiesKicker:"Capabilities", otherServicesKicker:"Other services", photoPlaceholder:"Company photo", mapPlaceholder:"Office photo or map" },
    why: [ {title:"One team, start to finish", body:"Consulting, development and support come from the same team, so nothing gets lost between handoffs."}, {title:"Scoped to the problem", body:"We size engagements to what the work actually needs, not a fixed package."}, {title:"Support that continues", body:"We stay involved after go-live — systems need maintenance, not just delivery."} ],
    how: [ {title:"Direct communication", body:"You work with the people doing the work, not account layers in between."}, {title:"Practical delivery", body:"We favor solutions that ship and hold up over ones that look good in a proposal."}, {title:"Long-term relationships", body:"Most of our engagements continue well past the first project."} ],
    about: { title:"About Excal Group", intro:"Excal Group is an IT services company based in Chișinău, Moldova. We work with businesses that need a dependable technology partner for consulting, software development and day-to-day IT operations — not a one-off vendor.", whatWeDo:"Excal Group's services span the full technology stack a growing business needs: consulting, custom software, web portals, hosting, infrastructure management, call center operations and staffing. Explore the full list on the Services pages." },
    contact: { title:"Contact", intro:"Tell us about your project or technology needs — we'll follow up shortly.", addressLabel:"Office", phoneLabel:"Phone", emailLabel:"Email", nameLabel:"Name", emailFieldLabel:"Email", messageLabel:"Message", submit:"Send message", formNote:"This form is not yet connected — email us directly and we'll reply just as fast.", sentTitle:"Message noted", sentBody:"Thanks — for now, please also email us directly at office@excal-group.com so we don't miss it." },
    cta: { title:"Let's talk about your project.", button:"Contact us" },
    footer: { blurb:"IT consulting, software development and outsourced technology operations.", servicesLabel:"Services", quickLinks:"Company", legalLabel:"Legal", rights:"All rights reserved." },
    cookieBanner: { text:"We use cookies to run this site and understand how it's used. See our", accept:"Accept", decline:"Decline" },
    legal: {
      terms: { title:"Terms of Service", updated:"Last updated: August 2026", intro:"These Terms of Service govern your use of the Excal Group website and the services described on it. By using this site, you agree to these terms.", sections:[
        {h:"1. Acceptance of Terms", body:"By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site."},
        {h:"2. Use of This Website", body:"You may use this website for lawful purposes only. You agree not to misuse the site, interfere with its operation, or attempt to access it by means other than the interface we provide."},
        {h:"3. Services", body:"Descriptions of services on this website are provided for general information. Specific terms, pricing and deliverables for any engagement are set out separately in a signed agreement between Excal Group and the client."},
        {h:"4. Intellectual Property", body:"All content on this website — including text, graphics, logos and the Excal Group name — is the property of Excal Group or its licensors and may not be reproduced without permission."},
        {h:"5. Limitation of Liability", body:"This website is provided \"as is\". Excal Group is not liable for any damages arising from the use of, or inability to use, this website, to the fullest extent permitted by law."},
        {h:"6. Governing Law", body:"These Terms are governed by the laws of the Republic of Moldova. Any disputes will be subject to the jurisdiction of the courts of Moldova."},
        {h:"7. Changes to These Terms", body:"We may update these Terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised Terms."},
        {h:"8. Contact", body:"Questions about these Terms can be sent to office@excal-group.com."}
      ]},
      privacy: { title:"Privacy Policy", updated:"Last updated: August 2026", intro:"This Privacy Policy explains how Excal Group collects, uses and protects information when you visit this website or contact us.", sections:[
        {h:"1. Information We Collect", body:"We collect information you provide directly, such as your name, email address and message content when you use the contact form, along with standard technical data (IP address, browser type, pages visited) collected automatically via cookies and similar technologies."},
        {h:"2. How We Use Information", body:"We use this information to respond to inquiries, provide requested services, and understand how our website is used so we can improve it. We do not sell personal information."},
        {h:"3. Cookies", body:"This site uses cookies for essential functionality and, with your consent, for analytics. See our Cookie Policy for full details and how to manage your preferences."},
        {h:"4. Data Sharing", body:"We do not share personal information with third parties except where necessary to provide a service you requested, comply with the law, or with your explicit consent."},
        {h:"5. Data Retention & Security", body:"We retain personal information only as long as needed for the purpose it was collected, and apply reasonable technical and organizational measures to protect it."},
        {h:"6. Your Rights", body:"Depending on your location, you may have the right to access, correct or delete your personal information. To exercise these rights, contact us at office@excal-group.com."},
        {h:"7. Contact", body:"Questions about this Privacy Policy can be sent to office@excal-group.com."}
      ]},
      cookies: { title:"Cookie Policy", updated:"Last updated: August 2026", intro:"This Cookie Policy explains what cookies are, which ones this website uses, and how you can manage them.", sections:[
        {h:"1. What Are Cookies", body:"Cookies are small text files stored on your device when you visit a website. They help the site function and let us understand how it's used."},
        {h:"2. How We Use Cookies", body:"We use cookies to keep the site working correctly, remember your language preference, and — only with your consent — to understand aggregate site usage."},
        {h:"3. Types of Cookies We Use", body:"Essential cookies (always active) support core site functionality, such as remembering your cookie preference and language. Analytics cookies (optional) help us understand how visitors use the site; they are only set if you accept them."},
        {h:"4. Managing Cookies", body:"You can accept or decline non-essential cookies using the banner shown on this site, and you can clear cookies at any time through your browser settings."},
        {h:"5. Contact", body:"Questions about this Cookie Policy can be sent to office@excal-group.com."}
      ]}
    }
  },
  ru: {
    nav: { home:"Главная", about:"О компании", services:"Услуги", contact:"Контакты" },
    legalNav: { terms:"Условия использования", privacy:"Политика конфиденциальности", cookies:"Политика cookie" },
    hero: { line1:"Мы создаём технологии.", line2:"Вы возглавляете рынок.", subhead:"Индивидуальная разработка ПО, системная интеграция и полный цикл технологических операций, чтобы ваш бизнес всегда был на шаг впереди.", ctaPrimary:"Связаться с нами", ctaSecondary:"Наши услуги" },
    stats: { kicker:"Годы работы — в цифрах", items:[
      {value:120, suffix:"+", label:"Реализованных проектов"},
      {value:99, suffix:"%", label:"Доступность инфраструктуры"},
      {value:9, suffix:"+", label:"Лет на рынке"},
      {value:24, suffix:"/7", label:"Мониторинг и поддержка"}
    ]},
    globe: { kicker:"Глобальный охват", title:"Мы в Молдове. Работаем везде.", body:"Наши команды поддерживают клиентов по всей Европе и за её пределами: инфраструктура, мониторинг и дежурная поддержка не останавливаются на границе. Один партнёр и одна точка контакта, где бы ни работал ваш бизнес." },
    faq: { kicker:"Частые вопросы", title:"Отвечаем прямо.", intro:"Вопросы, которые нам задают чаще всего — без маркетинговых формулировок.", items:[
      {q:"С какими компаниями вы работаете?", a:"В основном с малым и средним бизнесом, которому нужен надёжный технологический партнёр, а не разовый подрядчик — от первого проекта до полного аутсорсинга ИТ-операций."},
      {q:"Вы работаете по фиксированной цене или почасово?", a:"И так, и так. Чётко определённые проекты обычно идут по фиксированной цене, а текущие операции и поддержка — по ежемесячному контракту. Мы формируем объём под задачу, а не под пакет."},
      {q:"Можете взять систему, которую делал кто-то другой?", a:"Да. Мы регулярно принимаем чужие системы: сначала аудит, потом стабилизация и развитие. Если переписать выгоднее, чем чинить, мы скажем об этом честно."},
      {q:"Как быстро вы можете начать?", a:"Обычно старт обсуждения — в течение одной-двух недель. Срочные задачи по инфраструктуре или инциденты можем взять быстрее — напишите нам, и мы честно скажем, что реально."},
      {q:"Есть ли поддержка после запуска?", a:"Да, и мы её рекомендуем. Системам нужны обслуживание, мониторинг и обновления. Большинство наших проектов продолжается далеко за пределами первого релиза."},
      {q:"С какими технологиями вы работаете?", a:"Мы прагматичны в выборе стека: современные веб-фреймворки, облачная и локальная инфраструктура, базы данных, интеграции с системами, которые у вас уже работают. Выбираем то, что подходит задаче и вашей команде."}
    ]},
    testimonials: { kicker:"Нам доверяют", title:"Как выглядит работа с нами на практике.", items:[
      {quote:"Они взяли на себя инфраструктуру, которую мы запускали годами, провели нормальный аудит и прямо сказали, что чинить в первую очередь. Через полгода простои из еженедельных превратились практически в ноль.", name:"Андрей П.", role:"Директор по операциям", company:"Логистическая группа"},
      {quote:"Особенно отметил бы прямое общение. Мы разговаривали с людьми, которые пишут код, а не с менеджером-посредником. Решения, которые раньше занимали неделю, стали занимать полдня.", name:"Елена М.", role:"Руководитель продукта", company:"Розничная платформа"},
      {quote:"Они честно оценили проект, в том числе сказали, какая половина нам пока не нужна. Это сэкономило существенную сумму и вызвало больше доверия, чем любое коммерческое предложение.", name:"Виктор К.", role:"Управляющий директор", company:"Производство"}
    ]},
    labels: { servicesKicker:"Что мы делаем", servicesTitle:"Услуги", learnMore:"Подробнее", whyTitle:"Почему Excal Group", aboutKicker:"О нас", moreAboutUs:"Подробнее о нас", whatWeDoKicker:"Что мы делаем", capabilitiesKicker:"Возможности", otherServicesKicker:"Другие услуги", photoPlaceholder:"Фото компании", mapPlaceholder:"Фото офиса или карта" },
    why: [ {title:"Одна команда от начала до конца", body:"Консалтинг, разработка и поддержка — работа одной команды, без потерь при передаче между этапами."}, {title:"Объём под задачу", body:"Мы формируем объём работ исходя из реальной задачи, а не фиксированного пакета."}, {title:"Поддержка не заканчивается на запуске", body:"Мы остаёмся на связи после запуска — системам нужно обслуживание, а не только внедрение."} ],
    how: [ {title:"Прямое общение", body:"Вы работаете с людьми, которые выполняют работу, без промежуточных менеджеров."}, {title:"Практичная реализация", body:"Мы выбираем решения, которые работают на практике, а не только выглядят убедительно в предложении."}, {title:"Долгосрочные отношения", body:"Большинство наших проектов продолжаются далеко за пределами первого этапа."} ],
    about: { title:"О компании Excal Group", intro:"Excal Group — компания в сфере ИТ-услуг, расположенная в Кишинёве, Молдова. Мы работаем с компаниями, которым нужен надёжный технологический партнёр для консалтинга, разработки программного обеспечения и повседневных ИТ-операций, а не разовый подрядчик.", whatWeDo:"Услуги Excal Group охватывают весь технологический стек, необходимый растущему бизнесу: консалтинг, разработка ПО, веб-порталы, хостинг, управление инфраструктурой, call-центр и подбор персонала. Полный список — на страницах услуг." },
    contact: { title:"Контакты", intro:"Расскажите нам о своём проекте или технологических потребностях — мы свяжемся с вами в ближайшее время.", addressLabel:"Офис", phoneLabel:"Телефон", emailLabel:"Email", nameLabel:"Имя", emailFieldLabel:"Email", messageLabel:"Сообщение", submit:"Отправить сообщение", formNote:"Форма пока не подключена — напишите нам напрямую, и мы ответим так же быстро.", sentTitle:"Сообщение принято", sentBody:"Спасибо — пока также напишите нам напрямую на office@excal-group.com, чтобы мы точно не пропустили обращение." },
    cta: { title:"Расскажите нам о своём проекте.", button:"Связаться с нами" },
    footer: { blurb:"ИТ-консалтинг, разработка программного обеспечения и аутсорсинг технологических операций.", servicesLabel:"Услуги", quickLinks:"Компания", legalLabel:"Правовая информация", rights:"Все права защищены." },
    cookieBanner: { text:"Мы используем файлы cookie для работы сайта и анализа его использования. Подробнее —", accept:"Принять", decline:"Отклонить" },
    legal: {
      terms: { title:"Условия использования", updated:"Последнее обновление: август 2026", intro:"Настоящие Условия использования регулируют использование вами веб-сайта Excal Group и описанных на нём услуг. Используя этот сайт, вы соглашаетесь с данными условиями.", sections:[
        {h:"1. Принятие условий", body:"Используя данный веб-сайт, вы соглашаетесь соблюдать настоящие Условия использования. Если вы не согласны, пожалуйста, не используйте сайт."},
        {h:"2. Использование сайта", body:"Вы можете использовать этот сайт только в законных целях. Вы соглашаетесь не злоупотреблять сайтом, не мешать его работе и не пытаться получить доступ к нему способами, отличными от предоставленного интерфейса."},
        {h:"3. Услуги", body:"Описания услуг на сайте предоставлены в общих информационных целях. Конкретные условия, стоимость и результаты по каждому проекту определяются отдельным подписанным договором между Excal Group и клиентом."},
        {h:"4. Интеллектуальная собственность", body:"Всё содержимое сайта — включая текст, графику, логотипы и название Excal Group — является собственностью Excal Group или её лицензиаров и не может быть воспроизведено без разрешения."},
        {h:"5. Ограничение ответственности", body:"Сайт предоставляется «как есть». Excal Group не несёт ответственности за любой ущерб, возникший в результате использования сайта или невозможности его использования, в максимальной степени, разрешённой законом."},
        {h:"6. Применимое право", body:"Настоящие Условия регулируются законодательством Республики Молдова. Любые споры подлежат рассмотрению в судах Молдовы."},
        {h:"7. Изменения условий", body:"Мы можем время от времени обновлять данные Условия. Продолжение использования сайта после публикации изменений означает согласие с обновлёнными условиями."},
        {h:"8. Контакты", body:"Вопросы по данным Условиям можно направлять на office@excal-group.com."}
      ]},
      privacy: { title:"Политика конфиденциальности", updated:"Последнее обновление: август 2026", intro:"Настоящая Политика конфиденциальности объясняет, как Excal Group собирает, использует и защищает информацию при посещении вами сайта или обращении к нам.", sections:[
        {h:"1. Какую информацию мы собираем", body:"Мы собираем информацию, которую вы предоставляете напрямую — имя, email и текст сообщения при использовании контактной формы, а также стандартные технические данные (IP-адрес, тип браузера, посещённые страницы), собираемые автоматически через файлы cookie и аналогичные технологии."},
        {h:"2. Как мы используем информацию", body:"Мы используем эту информацию для ответа на запросы, предоставления запрошенных услуг и понимания того, как используется сайт, чтобы его улучшать. Мы не продаём персональные данные."},
        {h:"3. Файлы cookie", body:"Сайт использует файлы cookie для базовой работы и, с вашего согласия, для аналитики. Подробности и управление настройками — в нашей Политике использования файлов cookie."},
        {h:"4. Передача данных", body:"Мы не передаём персональные данные третьим лицам, за исключением случаев, необходимых для предоставления запрошенной услуги, соблюдения закона или с вашего явного согласия."},
        {h:"5. Хранение и защита данных", body:"Мы храним персональные данные только в течение срока, необходимого для цели их сбора, и применяем разумные технические и организационные меры для их защиты."},
        {h:"6. Ваши права", body:"В зависимости от вашей юрисдикции вы можете иметь право на доступ, исправление или удаление ваших персональных данных. Для этого обратитесь к нам по адресу office@excal-group.com."},
        {h:"7. Контакты", body:"Вопросы по данной Политике можно направлять на office@excal-group.com."}
      ]},
      cookies: { title:"Политика использования файлов cookie", updated:"Последнее обновление: август 2026", intro:"Настоящая Политика объясняет, что такое файлы cookie, какие из них использует этот сайт и как вы можете управлять ими.", sections:[
        {h:"1. Что такое файлы cookie", body:"Файлы cookie — это небольшие текстовые файлы, сохраняемые на вашем устройстве при посещении сайта. Они помогают сайту работать и позволяют нам понимать, как он используется."},
        {h:"2. Как мы используем файлы cookie", body:"Мы используем файлы cookie для корректной работы сайта, запоминания выбранного языка и — только с вашего согласия — для анализа общей статистики использования сайта."},
        {h:"3. Виды используемых файлов cookie", body:"Обязательные файлы cookie (всегда активны) обеспечивают основную работу сайта, например запоминание выбора cookie и языка. Аналитические файлы cookie (по желанию) помогают понять, как посетители используют сайт; они устанавливаются только при вашем согласии."},
        {h:"4. Управление файлами cookie", body:"Вы можете принять или отклонить необязательные файлы cookie с помощью баннера на сайте, а также удалить cookie в любой момент через настройки браузера."},
        {h:"5. Контакты", body:"Вопросы по данной Политике можно направлять на office@excal-group.com."}
      ]}
    }
  },
  ro: {
    nav: { home:"Acasă", about:"Despre noi", services:"Servicii", contact:"Contact" },
    legalNav: { terms:"Termeni și condiții", privacy:"Politica de confidențialitate", cookies:"Politica privind cookie-urile" },
    hero: { line1:"Noi construim tehnologia.", line2:"Tu conduci piața.", subhead:"Dezvoltare software personalizată, integrare de sisteme și operațiuni tehnologice complete, concepute pentru a-ți menține afacerea în avans.", ctaPrimary:"Contactează-ne", ctaSecondary:"Vezi serviciile" },
    stats: { kicker:"Ani de activitate, în cifre", items:[
      {value:120, suffix:"+", label:"Proiecte livrate"},
      {value:99, suffix:"%", label:"Disponibilitatea infrastructurii"},
      {value:9, suffix:"+", label:"Ani de activitate"},
      {value:24, suffix:"/7", label:"Monitorizare și suport"}
    ]},
    globe: { kicker:"Acoperire globală", title:"Suntem în Moldova. Livrăm oriunde.", body:"Echipele noastre susțin clienți din toată Europa și nu numai: infrastructura, monitorizarea și suportul permanent nu se opresc la graniță. Un singur partener și un singur punct de contact, oriunde operează afacerea ta." },
    faq: { kicker:"Întrebări frecvente", title:"Răspunsuri directe.", intro:"Întrebările pe care le primim cel mai des, fără limbaj comercial.", items:[
      {q:"Cu ce fel de companii lucrați?", a:"În principal cu companii mici și mijlocii care au nevoie de un partener tehnologic de încredere, nu de un furnizor ocazional — de la primul proiect software până la externalizarea completă a operațiunilor IT."},
      {q:"Lucrați la preț fix sau pe oră?", a:"Ambele. Proiectele bine definite sunt de obicei la preț fix, iar operațiunile și suportul continuu funcționează cel mai bine pe bază de abonament lunar. Dimensionăm după problemă, nu după pachet."},
      {q:"Puteți prelua un sistem construit de altcineva?", a:"Da. Preluăm frecvent sisteme existente: mai întâi un audit, apoi stabilizare și îmbunătățire. Dacă o rescriere are mai mult sens decât o reparație, îți vom spune direct."},
      {q:"Cât de repede puteți începe?", a:"De obicei discuțiile inițiale încep în una-două săptămâni. Lucrările urgente de infrastructură sau incidentele pot începe mai devreme — scrie-ne și îți spunem sincer ce este posibil."},
      {q:"Oferiți suport după lansare?", a:"Da, și îl recomandăm. Sistemele au nevoie de întreținere, monitorizare și actualizări. Majoritatea colaborărilor noastre continuă mult după primul release."},
      {q:"Cu ce tehnologii lucrați?", a:"Suntem pragmatici în alegerea stivei tehnologice: framework-uri web moderne, infrastructură cloud și on-premise, baze de date și integrări cu sistemele pe care le folosești deja. Alegem ce se potrivește problemei și echipei tale."}
    ]},
    testimonials: { kicker:"Ne acordă încredere", title:"Cum arată colaborarea cu noi, în practică.", items:[
      {quote:"Au preluat o infrastructură pe care o acumulasem haotic ani la rând, au făcut un audit serios și ne-au spus clar ce trebuie reparat mai întâi. După șase luni, întreruperile săptămânale au dispărut practic complet.", name:"Andrei P.", role:"Director operațiuni", company:"Grup de logistică"},
      {quote:"Ce a ieșit în evidență a fost comunicarea directă. Am vorbit cu oamenii care scriu codul, nu cu un manager de cont care transmite mesaje. Decizii care durau o săptămână au ajuns să dureze o după-amiază.", name:"Elena M.", role:"Head of Product", company:"Platformă de retail"},
      {quote:"Au evaluat proiectul onest, inclusiv spunându-ne ce jumătate nu ne trebuia încă. Asta ne-a economisit o sumă semnificativă și a creat mai multă încredere decât ar fi putut orice ofertă.", name:"Victor C.", role:"Director general", company:"Producție"}
    ]},
    labels: { servicesKicker:"Ce facem", servicesTitle:"Servicii", learnMore:"Află mai multe", whyTitle:"De ce Excal Group", aboutKicker:"Despre noi", moreAboutUs:"Mai multe despre noi", whatWeDoKicker:"Ce facem", capabilitiesKicker:"Capabilități", otherServicesKicker:"Alte servicii", photoPlaceholder:"Fotografia companiei", mapPlaceholder:"Fotografia sediului sau hartă" },
    why: [ {title:"O singură echipă, de la început până la final", body:"Consultanța, dezvoltarea și suportul provin de la aceeași echipă, fără informații pierdute între etape."}, {title:"Amploare adaptată problemei", body:"Dimensionăm proiectele în funcție de nevoia reală, nu de un pachet fix."}, {title:"Suport care continuă", body:"Rămânem implicați și după lansare — sistemele au nevoie de întreținere, nu doar de livrare."} ],
    how: [ {title:"Comunicare directă", body:"Lucrezi direct cu cei care execută munca, fără niveluri intermediare."}, {title:"Livrare practică", body:"Preferăm soluții care funcționează în timp, nu doar cele care sună bine într-o propunere."}, {title:"Relații pe termen lung", body:"Majoritatea proiectelor noastre continuă mult după prima etapă."} ],
    about: { title:"Despre Excal Group", intro:"Excal Group este o companie de servicii IT cu sediul în Chișinău, Moldova. Lucrăm cu companii care au nevoie de un partener tehnologic de încredere pentru consultanță, dezvoltare de software și operațiuni IT zilnice — nu de un furnizor ocazional.", whatWeDo:"Serviciile Excal Group acoperă întregul set tehnologic de care are nevoie o afacere în creștere: consultanță, software personalizat, portaluri web, hosting, gestionarea infrastructurii, servicii call center și recrutare de personal. Lista completă este disponibilă pe paginile de servicii." },
    contact: { title:"Contact", intro:"Spune-ne despre proiectul sau nevoile tehnologice ale tale — te vom contacta în cel mai scurt timp.", addressLabel:"Sediu", phoneLabel:"Telefon", emailLabel:"Email", nameLabel:"Nume", emailFieldLabel:"Email", messageLabel:"Mesaj", submit:"Trimite mesajul", formNote:"Acest formular nu este încă conectat — scrie-ne direct și vom răspunde la fel de rapid.", sentTitle:"Mesaj înregistrat", sentBody:"Mulțumim — pentru moment, te rugăm să ne scrii și direct la office@excal-group.com ca să nu pierdem solicitarea." },
    cta: { title:"Povestește-ne despre proiectul tău.", button:"Contactează-ne" },
    footer: { blurb:"Consultanță IT, dezvoltare de software și externalizarea operațiunilor tehnologice.", servicesLabel:"Servicii", quickLinks:"Companie", legalLabel:"Legal", rights:"Toate drepturile rezervate." },
    cookieBanner: { text:"Folosim cookie-uri pentru funcționarea site-ului și pentru a înțelege modul în care este utilizat. Detalii în", accept:"Accept", decline:"Refuz" },
    legal: {
      terms: { title:"Termeni și condiții", updated:"Ultima actualizare: august 2026", intro:"Acești Termeni și condiții reglementează utilizarea de către dvs. a site-ului Excal Group și a serviciilor descrise pe acesta. Prin utilizarea acestui site, sunteți de acord cu acești termeni.", sections:[
        {h:"1. Acceptarea termenilor", body:"Prin accesarea sau utilizarea acestui site, sunteți de acord să respectați acești Termeni și condiții. Dacă nu sunteți de acord, vă rugăm să nu utilizați site-ul."},
        {h:"2. Utilizarea acestui site", body:"Puteți utiliza acest site doar în scopuri legale. Sunteți de acord să nu utilizați greșit site-ul, să nu interferați cu funcționarea acestuia și să nu încercați să îl accesați prin alte mijloace decât interfața pusă la dispoziție."},
        {h:"3. Servicii", body:"Descrierile serviciilor de pe acest site au caracter informativ general. Termenii specifici, prețurile și livrabilele pentru orice proiect sunt stabilite separat printr-un contract semnat între Excal Group și client."},
        {h:"4. Proprietate intelectuală", body:"Tot conținutul acestui site — inclusiv text, grafică, sigle și denumirea Excal Group — este proprietatea Excal Group sau a licențiatorilor săi și nu poate fi reprodus fără permisiune."},
        {h:"5. Limitarea răspunderii", body:"Acest site este oferit \"ca atare\". Excal Group nu este responsabilă pentru daunele rezultate din utilizarea sau incapacitatea de a utiliza acest site, în limita maximă permisă de lege."},
        {h:"6. Legea aplicabilă", body:"Acești Termeni sunt reglementați de legile Republicii Moldova. Orice litigiu va fi soluționat de instanțele din Moldova."},
        {h:"7. Modificări ale termenilor", body:"Putem actualiza periodic acești Termeni. Continuarea utilizării site-ului după publicarea modificărilor reprezintă acceptarea termenilor revizuiți."},
        {h:"8. Contact", body:"Întrebările despre acești Termeni pot fi trimise la office@excal-group.com."}
      ]},
      privacy: { title:"Politica de confidențialitate", updated:"Ultima actualizare: august 2026", intro:"Această Politică de confidențialitate explică modul în care Excal Group colectează, utilizează și protejează informațiile atunci când vizitați acest site sau ne contactați.", sections:[
        {h:"1. Informațiile pe care le colectăm", body:"Colectăm informațiile pe care le furnizați direct, precum numele, adresa de email și conținutul mesajului atunci când utilizați formularul de contact, precum și date tehnice standard (adresă IP, tip de browser, pagini vizitate) colectate automat prin cookie-uri și tehnologii similare."},
        {h:"2. Cum folosim informațiile", body:"Folosim aceste informații pentru a răspunde solicitărilor, a oferi serviciile cerute și a înțelege modul în care este utilizat site-ul, pentru a-l putea îmbunătăți. Nu vindem date personale."},
        {h:"3. Cookie-uri", body:"Acest site folosește cookie-uri pentru funcționarea de bază și, cu acordul dvs., pentru analiză. Detalii complete și gestionarea preferințelor găsiți în Politica privind cookie-urile."},
        {h:"4. Partajarea datelor", body:"Nu partajăm date personale cu terți, cu excepția cazurilor necesare pentru furnizarea unui serviciu solicitat, conformării cu legea sau cu acordul dvs. explicit."},
        {h:"5. Reținerea și securitatea datelor", body:"Reținem datele personale doar pe durata necesară scopului pentru care au fost colectate și aplicăm măsuri tehnice și organizatorice rezonabile pentru protecția lor."},
        {h:"6. Drepturile dvs.", body:"În funcție de jurisdicția dvs., puteți avea dreptul de a accesa, corecta sau șterge datele personale. Pentru a exercita aceste drepturi, contactați-ne la office@excal-group.com."},
        {h:"7. Contact", body:"Întrebările despre această Politică pot fi trimise la office@excal-group.com."}
      ]},
      cookies: { title:"Politica privind cookie-urile", updated:"Ultima actualizare: august 2026", intro:"Această Politică explică ce sunt cookie-urile, pe care le folosește acest site și cum le puteți gestiona.", sections:[
        {h:"1. Ce sunt cookie-urile", body:"Cookie-urile sunt fișiere text mici salvate pe dispozitivul dvs. atunci când vizitați un site. Acestea ajută site-ul să funcționeze și ne permit să înțelegem modul în care este utilizat."},
        {h:"2. Cum folosim cookie-urile", body:"Folosim cookie-uri pentru a asigura funcționarea corectă a site-ului, a reține preferința de limbă și — doar cu acordul dvs. — pentru a înțelege statisticile agregate de utilizare a site-ului."},
        {h:"3. Tipuri de cookie-uri folosite", body:"Cookie-urile esențiale (mereu active) susțin funcționalitatea de bază a site-ului, precum reținerea preferinței privind cookie-urile și limba. Cookie-urile de analiză (opționale) ne ajută să înțelegem modul în care vizitatorii folosesc site-ul; acestea sunt setate doar dacă le acceptați."},
        {h:"4. Gestionarea cookie-urilor", body:"Puteți accepta sau refuza cookie-urile neesențiale din bannerul afișat pe site și puteți șterge cookie-urile în orice moment din setările browserului dvs."},
        {h:"5. Contact", body:"Întrebările despre această Politică pot fi trimise la office@excal-group.com."}
      ]}
    }
  }
};
