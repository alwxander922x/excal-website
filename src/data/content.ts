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
  cookieBanner: {
    badge: string;
    title: string;
    text: string;
    accept: string;
    essential: string;
    decline: string;
  };
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
    cookieBanner: {
      badge: "GDPR & RM 133",
      title: "Data Protection & Cookies",
      text: "We use cookies and telemetry to ensure secure operations, remember your language preferences, and analyse site traffic in compliance with EU GDPR (2016/679) and Moldovan Law No. 133/2011. See our",
      accept: "Accept all",
      essential: "Essential only",
      decline: "Decline"
    },
    legal: {
      terms: {
        title: "Terms of Service",
        updated: "Last updated: September 2026",
        intro: "These Terms of Service govern your access to and use of the Excal Group website, online resources, and pre-contractual communication channels. By browsing this site, contacting us, or requesting services, you acknowledge that you have read, understood, and agreed to be bound by these Terms.",
        sections: [
          {
            h: "1. Scope & Acceptance of Terms",
            body: "These Terms of Service (\"Terms\") constitute a legally binding agreement between you (whether as an individual visitor or on behalf of a corporate entity) and Excal Group (\"we\", \"us\", or \"our\"), an IT services and consulting company based in Chișinău, Republic of Moldova.\n\nBy accessing, browsing, or using our website (excal-group.com) and associated digital interfaces, you signify your unconditional acceptance of these Terms. If you do not agree with any part of these Terms, you must discontinue your use of the website immediately."
          },
          {
            h: "2. Services & B2B Commercial Contracting",
            body: "The descriptions of our capabilities on this website — including IT Consulting, Custom Software Development, Web Portal Development, Data Processing and Web Hosting, IT Infrastructure Management, Call Center Services, Personnel Outsourcing / Staffing, Cybersecurity, and Cloud Migration — are provided for general informational and marketing purposes.\n\nThis website does not constitute a binding commercial offer. Any commercial engagement, deliverable, service level agreement (SLA), timeline, pricing, intellectual property transfer, and liability term is exclusively governed by a separate, bilateral Master Services Agreement (MSA), Statement of Work (SOW), and Data Processing Addendum (DPA) signed between Excal Group and the client."
          },
          {
            h: "3. Intellectual Property Rights",
            body: "All intellectual property rights in the website and its entire contents — including but not limited to source code, user interfaces, design architecture, graphics, text, branding, trade dress, logos, and case studies — are owned by Excal Group or our licensors and are protected under international copyright, trademark, and intellectual property treaties.\n\nYou may view, cache, and print materials from this website solely for personal or internal business evaluation. You may not reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any content without our prior written consent.\n\nIntellectual property rights regarding custom software and systems developed for clients are transferred or licensed strictly pursuant to the terms of the applicable signed B2B contract upon full payment of agreed fees."
          },
          {
            h: "4. Permitted Use & Security Obligations",
            body: "You agree to use this website only for lawful purposes in accordance with these Terms and applicable national and international legislation. You expressly agree not to:\n\n• Interfere with, disrupt, or compromise the integrity, security, or performance of the website, its hosting infrastructure, or underlying servers;\n• Probe, scan, or test the vulnerability of our systems without explicit written authorization;\n• Introduce any viruses, worms, trojans, ransomware, logic bombs, or other malicious payloads;\n• Use automated scrapers, crawlers, spiders, or data extraction bots to harvest data from the site without written permission;\n• Send unsolicited commercial communications (spam) through our contact forms or published email addresses."
          },
          {
            h: "5. Confidentiality & Non-Disclosure",
            body: "Any confidential, proprietary, or technical information exchanged during pre-sale consultations, preliminary solution design, technical audits, or project scoping will be treated with strict professional confidentiality. Neither party will disclose proprietary trade secrets or technical data to any third party without prior written consent, except where required by applicable law."
          },
          {
            h: "6. Disclaimers & Limitation of Liability",
            body: "This website and its content are provided on an \"as is\" and \"as available\" basis without warranties of any kind, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.\n\nTo the maximum extent permitted by applicable law, Excal Group, its officers, directors, employees, and contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of profits, revenue, data, goodwill, or business interruption — arising out of or in connection with your access to, reliance on, or inability to use this website.\n\nLiability caps and remedies regarding commercial IT engagements are governed exclusively by the applicable signed bilateral client agreement."
          },
          {
            h: "7. Data Protection & Privacy Compliance",
            body: "We process personal data in strict compliance with the General Data Protection Regulation (Regulation (EU) 2016/679 - GDPR) and Law of the Republic of Moldova No. 133/2011 on the Protection of Personal Data. For complete details regarding our data collection, processing, security practices, and your statutory rights, please review our Privacy Policy and Cookie Policy.\n\nFor enterprise clients where Excal Group processes personal data on their behalf (e.g. managed hosting, infrastructure administration, portal maintenance), we execute a comprehensive Data Processing Addendum (DPA) incorporating standard contractual clauses."
          },
          {
            h: "8. Governing Law & Dispute Resolution",
            body: "These Terms and any dispute or claim arising out of or in connection with them or their subject matter shall be governed by and construed in accordance with the substantive laws of the Republic of Moldova, without giving effect to any conflict of law principles.\n\nAny dispute, controversy, or claim arising out of or relating to these Terms shall first be addressed through amicable, good-faith negotiations within thirty (30) calendar days of written notification. If an amicable resolution is not reached, the dispute shall be submitted to the exclusive jurisdiction of the competent commercial courts of Chișinău, Republic of Moldova."
          },
          {
            h: "9. Modifications & Contact Information",
            body: "Excal Group reserves the right to amend, update, or replace these Terms at any time. Any changes will be posted on this page with an updated revision date. Continued use of the website following the posting of modifications constitutes your acceptance of the revised Terms.\n\nIf you have any questions or concerns regarding these Terms, please contact us at:\n• Email: office@excal-group.com\n• Phone: +373 69 180 475\n• Address: Chișinău, Republic of Moldova"
          }
        ]
      },
      privacy: {
        title: "Privacy Policy",
        updated: "Last updated: September 2026",
        intro: "Excal Group is dedicated to safeguarding your privacy and ensuring the security of your personal data. This Privacy Policy details how we collect, process, store, and protect personal information when you access our website, communicate with our teams, or evaluate our IT services, in full alignment with Regulation (EU) 2016/679 (GDPR) and Law of the Republic of Moldova No. 133/2011 on Personal Data Protection.",
        sections: [
          {
            h: "1. Data Controller & Legal Framework",
            body: "The Data Controller responsible for the processing of your personal data on this website is:\nExcal Group\nChișinău, Republic of Moldova\nEmail: office@excal-group.com | Telephone: +373 69 180 475\n\nWe process personal data in strict compliance with:\n• Law of the Republic of Moldova No. 133 of 08.07.2011 on the Protection of Personal Data;\n• Regulation (EU) 2016/679 of the European Parliament and of the Council (General Data Protection Regulation - GDPR);\n• Applicable national and international standards for IT security and electronic communications."
          },
          {
            h: "2. Categories of Personal Data We Collect",
            body: "We adhere to data minimization and only collect personal information necessary to deliver our services, communicate effectively, and maintain website security:\n\n• Contact & Inquiry Information: Name, professional email address, telephone number, company/organization name, job title, and project requirements submitted via our contact forms or direct email;\n• Technical & Browsing Telemetry: IP address, device type, operating system, browser type and version, referrer URL, pages visited, timestamp of requests, and session duration;\n• B2B Client Representative Data: Contact information, official role, and communication logs of corporate representatives and technical teams for contract execution and service delivery;\n• Cookie & Consent Records: Your cookie consent preferences stored locally on your device (excal_cookie_consent, excal_lang).\n\nWe do not process sensitive personal data (special category data revealing racial or ethnic origin, political opinions, religious beliefs, or health data) on this website."
          },
          {
            h: "3. Purposes & Legal Grounds for Processing",
            body: "We process your personal data on the following lawful bases pursuant to Art. 6 GDPR and Art. 5 of Law No. 133/2011:\n\n• Pre-Contractual & Contractual Performance (Art. 6(1)(b) GDPR / Art. 5(1) Law 133): Processing inquiries, scoping requirements, preparing architectural proposals, and executing B2B service contracts;\n• Legitimate Business Interests (Art. 6(1)(f) GDPR): Safeguarding our network infrastructure against cyber threats, monitoring application performance, preventing fraud, and optimizing user experience;\n• Legal Compliance (Art. 6(1)(c) GDPR): Fulfilling statutory accounting, tax, archive, and regulatory obligations under Moldovan law;\n• Consent (Art. 6(1)(a) GDPR): Non-essential analytical telemetry or direct marketing communication where explicit consent was given."
          },
          {
            h: "4. Technical & Organizational Security Measures (TOMs)",
            body: "Excal Group maintains robust enterprise-grade technical and organizational security controls designed to protect your personal data against accidental loss, unauthorized access, destruction, or alteration:\n\n• High-grade encryption: End-to-end TLS 1.3 encryption for all data in transit and AES-256 encryption for data at rest;\n• Access Control & Isolation: Strict Role-Based Access Control (RBAC), multi-factor authentication (MFA), and network segmentation;\n• Infrastructure Hygiene: Continuous automated vulnerability scans, patch management, intrusion detection, and isolated server environments;\n• Confidentiality Undertakings: All personnel and contractors are bound by strict non-disclosure and confidentiality obligations."
          },
          {
            h: "5. Third-Party Disclosures & International Transfers",
            body: "We never sell, rent, trade, or commercially monetize your personal data. We only share personal data with trusted third parties under strict confidentiality agreements:\n\n• Infrastructure & Hosting Providers: Reliable European and international cloud hosting providers operating ISO/IEC 27001 and SOC 2 certified data centers;\n• Legal & Regulatory Authorities: Competent state authorities, tax agencies, or judicial bodies when strictly mandated by applicable law;\n• Professional Advisors: Certified accountants, auditors, and legal counsel operating under professional secrecy obligations.\n\nWhen data is transferred across borders, we ensure adequate safeguards are in place, including Standard Contractual Clauses (SCC) approved by the European Commission and compliance with Chapter IV of Moldovan Law No. 133/2011."
          },
          {
            h: "6. Data Retention Schedule",
            body: "We retain personal data only for as long as necessary to fulfill the purposes for which it was collected:\n\n• Inquiries and commercial requests: Retained for the duration of the communication or active client relationship, and up to 3 years following the last interaction;\n• Contractual, billing, and accounting records: Retained for 5 to 10 years as mandated by Moldovan fiscal, commercial, and accounting statutes;\n• Technical server logs: Retained for 30 to 90 days for security and forensic audits, after which they are permanently deleted or anonymized."
          },
          {
            h: "7. Your Rights Under GDPR & Law No. 133/2011",
            body: "As a data subject, you hold comprehensive rights regarding your personal information:\n\n• Right of Access: Obtain confirmation of whether your data is being processed and receive a copy of your personal data;\n• Right to Rectification: Request the prompt correction of inaccurate or incomplete data;\n• Right to Erasure (\"Right to be Forgotten\"): Request deletion of your personal data where retention is no longer justified by law;\n• Right to Restriction: Limit processing under specific legal conditions;\n• Right to Data Portability: Receive your personal data in a structured, commonly used, and machine-readable format;\n• Right to Object: Object to processing based on legitimate interests or direct marketing;\n• Right to Withdraw Consent: Withdraw consent at any time without affecting the lawfulness of processing prior to withdrawal;\n• Right to Lodge a Complaint: Lodge a complaint with the National Center for Personal Data Protection of the Republic of Moldova (CNPDCP — Centrul Național pentru Protecția Datelor cu Caracter Personal, www.datepersonale.md) or your local EU supervisory authority."
          },
          {
            h: "8. Data Protection Inquiries & Exercising Rights",
            body: "To exercise any of your statutory rights, or if you have questions regarding our privacy practices, please contact our Data Protection team at:\n\n• Email: office@excal-group.com\n• Phone: +373 69 180 475\n• Postal Address: Excal Group, Chișinău, Republic of Moldova\n\nWe review and respond to all verified requests within thirty (30) calendar days without charge."
          }
        ]
      },
      cookies: {
        title: "Cookie Policy",
        updated: "Last updated: September 2026",
        intro: "This Cookie Policy explains what cookies, web beacons, and local storage technologies are, how Excal Group uses them on our website, and how you can control your preferences. We believe in minimal data footprint, maximum transparency, and full compliance with the EU ePrivacy Directive, GDPR, and Moldovan Law No. 133/2011.",
        sections: [
          {
            h: "1. What Are Cookies & Web Storage",
            body: "Cookies are small text files placed on your computer or mobile device when you visit a website. They are widely used to ensure websites function properly, remember user settings across pages, enhance security, and provide aggregated analytics.\n\nIn addition to traditional HTTP cookies, modern websites use browser storage mechanisms such as LocalStorage to retain persistent preferences (such as your chosen language and cookie consent status) without transmitting redundant headers on every network request."
          },
          {
            h: "2. How Excal Group Uses Cookies",
            body: "We use cookies and browser storage strictly for the following purposes:\n\n• Ensuring reliable, secure, and fast loading of website pages;\n• Remembering your interface language preference across sessions;\n• Recording your cookie consent decisions so you are not prompted on every visit;\n• Collecting aggregate, privacy-respecting telemetry regarding website performance and general usage patterns to improve our IT service presentation."
          },
          {
            h: "3. Categories of Cookies We Deploy",
            body: "Our website utilizes two distinct categories of cookies and storage items:\n\n1. Strictly Necessary Cookies & Storage (Always Active):\nThese are indispensable for the website to function securely and cannot be switched off in our systems. They do not store any personally identifiable data.\n• excal_cookie_consent (LocalStorage): Stores your cookie consent choice (accepted, essential). Duration: 12 months.\n• excal_lang (LocalStorage): Stores your preferred site language (en, ru, ro). Duration: 12 months.\n• Session security tokens: Used for cross-site request protection and load balancing. Duration: Session.\n\n2. Analytical & Performance Cookies (Optional / Subject to Consent):\nThese cookies help us understand how visitors interact with our pages, detect broken links, and measure loading times in aggregate. All IP addresses are anonymized, and no tracking across third-party websites occurs. These cookies are only activated if you click \"Accept all\".\n\n3. Third-Party Advertising & Cross-Site Tracking:\nExcal Group does NOT deploy third-party advertising cookies, retargeting pixels, or behavioral tracking networks on this website."
          },
          {
            h: "4. Managing Cookie Consent on Our Website",
            body: "When you first visit our website, an interactive Cookie Consent Banner is displayed. You can choose to:\n\n• \"Accept all\": Enables essential functionality as well as aggregate performance analytics;\n• \"Essential only\": Restricts storage strictly to essential operational settings (language and security);\n\nYou can reconfigure your preferences at any time by clearing your browser's local storage for excal-group.com or by clicking the Cookie Policy link in our website footer."
          },
          {
            h: "5. Managing Cookies in Your Browser",
            body: "Most web browsers allow you to control cookies through their settings preferences. You can configure your browser to reject all cookies, notify you when a cookie is issued, or delete stored cookies:\n\n• Google Chrome: Settings > Privacy and Security > Cookies and other site data;\n• Mozilla Firefox: Options > Privacy & Security > Cookies and Site Data;\n• Apple Safari: Preferences > Privacy > Manage Website Data;\n• Microsoft Edge: Settings > Cookies and site permissions > Manage and delete cookies.\n\nPlease note that disabling essential storage may affect your ability to view the site in your preferred language."
          },
          {
            h: "6. Updates & Inquiries",
            body: "We may periodically update this Cookie Policy to reflect technical changes or regulatory guidance under Moldovan and European law. The date of the most recent revision will always be displayed at the top of this document.\n\nIf you have questions about our use of cookies or web storage, please contact us at office@excal-group.com."
          }
        ]
      }
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
    cookieBanner: {
      badge: "GDPR & Закон РМ № 133",
      title: "Защита данных и файлы Cookie",
      text: "Мы используем файлы cookie для корректной работы сайта, сохранения языковых предпочтений и анализа посещаемости в соответствии с Законом РМ № 133/2011 и стандартом GDPR ЕС (2016/679). Подробнее в нашей",
      accept: "Принять все",
      essential: "Только обязательные",
      decline: "Отклонить"
    },
    legal: {
      terms: {
        title: "Условия использования",
        updated: "Последнее обновление: сентябрь 2026",
        intro: "Настоящие Условия использования регулируют доступ и использование веб-сайта Excal Group, онлайн-ресурсов и каналов деловой связи. Просматривая данный сайт, направляя нам запрос или заказывая услуги, вы подтверждаете, что прочитали, поняли и безоговорочно принимаете настоящие Условия.",
        sections: [
          {
            h: "1. Сфера действия и принятие условий",
            body: "Настоящие Условия использования (далее — «Условия») представляют собой юридически обязательное соглашение между вами (как индивидуальным посетителем либо как уполномоченным представителем юридического лица) и Excal Group (далее — «мы», «нас» или «наш»), компанией в сфере ИТ-услуг и консалтинга, расположенной в Кишинёве, Республика Молдова.\n\nДоступ к веб-сайту (excal-group.com) и его использование означают ваше полное согласие с данными Условиями. Если вы не согласны с какими-либо положениями, вам следует немедленно прекратить использование сайта."
          },
          {
            h: "2. Характер услуг и коммерческое B2B-договорное регулирование",
            body: "Описания наших услуг и возможностей, представленные на сайте — включая ИТ-консалтинг, разработку ПО на заказ, разработку веб-порталов, обработку данных и веб-хостинг, управление ИТ-инфраструктурой, услуги call-центра, аутсорсинг персонала / подбор кадров, кибербезопасность и миграцию в облако — носят исключительно информационный и ознакомительный характер.\n\nИнформация на сайте не является публичной офертой. Любое коммерческое сотрудничество, состав работ, соглашение об уровне обслуживания (SLA), сроки, стоимость, передача прав на интеллектуальную собственность и ответственность сторон регулируются исключительно отдельными двусторонними договорами (Master Services Agreement — MSA, Statement of Work — SOW, Data Processing Addendum — DPA), подписанными между Excal Group и клиентом."
          },
          {
            h: "3. Права интеллектуальной собственности",
            body: "Все права на интеллектуальную собственность в отношении сайта и его содержимого — включая исходный код, пользовательские интерфейсы, архитектуру дизайна, графику, тексты, логотипы, фирменный стиль и кейсы — принадлежат Excal Group или нашим лицензиарам и защищены международным и национальным законодательством об авторском праве и интеллектуальной собственности.\n\nВам разрешается просматривать и сохранять материалы сайта исключительно для личного ознакомления или внутренней оценки в вашей компании. Запрещается воспроизводить, распространять, изменять, публиковать или коммерчески использовать материалы сайта без нашего предварительного письменного согласия.\n\nПрава на программное обеспечение и технические решения, созданные по заказу клиентов, передаются или лицензируются строго на условиях соответствующего подписанного B2B-договора после полной оплаты согласованной стоимости."
          },
          {
            h: "4. Правила допустимого использования и безопасность",
            body: "Вы обязуетесь использовать сайт исключительно в законных целях и в строгом соответствии с настоящими Условиями. Категорически запрещается:\n\n• Нарушать, дестабилизировать или ставить под угрозу целостность, безопасность и работоспособность сайта, его хостинговой инфраструктуры и серверов;\n• Проводить несанкционированное сканирование, зондирование или тестирование систем на уязвимости без предварительного письменного разрешения;\n• Внедрять вирусы, черви, трояны, программы-вымогатели или иной вредоносный код;\n• Использовать автоматизированные скрипты, краулеры, парсеры или боты для сбора информации без письменного согласия;\n• Рассылать спам и нежелательные коммерческие сообщения через контактные формы сайта или корпоративные адреса электронной почты."
          },
          {
            h: "5. Конфиденциальность и взаимная защита информации",
            body: "Любая конфиденциальная, коммерческая или техническая информация, переданная сторонами в ходе предпроектных консультаций, разработки предварительной архитектуры, аудита систем или составления смет, подлежит строгому режиму конфиденциальности. Ни одна из сторон не вправе разглашать коммерческую тайну третьим лицам без предварительного письменного согласия, за исключением случаев, прямо предусмотренных законом."
          },
          {
            h: "6. Отказ от гарантий и ограничение ответственности",
            body: "Веб-сайт и опубликованные материалы предоставляются на условиях «как есть» (as is) и «по мере доступности» (as available) без каких-либо явных или подразумеваемых гарантий, включая гарантии коммерческой применимости, пригодности для конкретной цели и отсутствия нарушений.\n\nВ максимально допустимой законом степени Excal Group, её руководители, сотрудники и подрядчики не несут ответственности за любые косвенные, случайные, специальные или штрафные убытки — включая упущенную выгоду, потерю данных, ущерб деловой репутации или простой в деятельности, — возникшие в связи с использованием либо невозможностью использования данного сайта.\n\nПределы ответственности и средства правовой защиты в рамках коммерческих ИТ-проектов регулируются исключительно подписанным двусторонним договором с клиентом."
          },
          {
            h: "7. Защита данных и соответствие GDPR и Закону № 133/2011",
            body: "Обработка персональных данных осуществляется в строгом соответствии с Общим регламентом по защите данных Европейского Союза (GDPR 2016/679) и Законом Республики Молдова № 133 от 08.07.2011 «О защите персональных данных». Подробности изложены в нашей Политике конфиденциальности и Политике использования файлов cookie.\n\nПри оказании услуг клиентам, где Excal Group выступает обработчиком персональных данных (хостинг, администрирование инфраструктуры, поддержка порталов), мы заключаем соглашение об обработке данных (DPA), включающее стандартные договорные условия ЕС (SCC)."
          },
          {
            h: "8. Применимое право и разрешение споров",
            body: "Настоящие Условия регулируются и толкуются в соответствии с материальным правом Республики Молдова без учёта коллизионных норм.\n\nЛюбые споры и разногласия стороны стремятся урегулировать путём добросовестных переговоров в течение 30 календарных дней с момента направления письменного уведомления. При недостижении согласия спор подлежит рассмотрению в компетентных судах муниципия Кишинёв, Республика Молдова."
          },
          {
            h: "9. Изменение условий и контакты",
            body: "Excal Group оставляет за собой право в любое время изменять настоящие Условия. Изменения вступают в силу с момента их публикации на данной странице с указанием даты обновления. Продолжение использования сайта означает принятие обновлённых Условий.\n\nПо вопросам, связанным с настоящими Условиями, вы можете связаться с нами:\n• Email: office@excal-group.com\n• Телефон: +373 69 180 475\n• Адрес: г. Кишинёв, Республика Молдова"
          }
        ]
      },
      privacy: {
        title: "Политика конфиденциальности",
        updated: "Последнее обновление: сентябрь 2026",
        intro: "Excal Group гарантирует надёжную защиту вашей конфиденциальности и персональных данных. Настоящая Политика разъясняет порядок сбора, обработки, хранения и защиты информации при посещении нашего сайта, обращении к нашим инженерам и оценке ИТ-услуг в полном соответствии с Регламентом (ЕС) 2016/679 (GDPR) и Законом Республики Молдова № 133/2011 «О защите персональных данных».",
        sections: [
          {
            h: "1. Оператор персональных данных и правовые основания",
            body: "Оператором персональных данных при использовании данного веб-сайта является:\nExcal Group\nг. Кишинёв, Республика Молдова\nEmail: office@excal-group.com | Телефон: +373 69 180 475\n\nМы обрабатываем персональные данные в строгом соответствии с:\n• Законом Республики Молдова № 133 от 08.07.2011 «О защите персональных данных»;\n• Регламентом Европейского Парламента и Совета (ЕС) 2016/679 (GDPR);\n• Применимыми государственными и международными стандартами безопасности информации."
          },
          {
            h: "2. Категории собираемых персональных данных",
            body: "Мы придерживаемся принципа минимизации данных и запрашиваем только сведения, необходимые для взаимодействия с вами и обеспечения безопасности:\n\n• Контактные данные и текст обращения: имя, фамилия, рабочий адрес электронной почты, номер телефона, название компании, должность и описание проекта, направленные через форму обратной связи или электронную почту;\n• Технические и телеметрические данные: IP-адрес, тип и версия браузера, операционная система, URL источника перехода, время и дата визита, продолжительность сессии;\n• Данные корпоративных представителей: профессиональные контакты, должности и история переписки представителей клиентов и подрядчиков для заключения и исполнения договоров;\n• Данные о выборе согласия: сохраняемые локально на вашем устройстве параметры согласия на использование cookie и выбранный язык интерфейса (excal_cookie_consent, excal_lang).\n\nМы не собираем и не обрабатываем специальные категории персональных данных (данные о расовом происхождении, политических взглядах, здоровье или биометрию)."
          },
          {
            h: "3. Цели и правовые основания обработки",
            body: "Обработка данных осуществляется на законных основаниях согласно ст. 6 GDPR и ст. 5 Закона РМ № 133/2011:\n\n• Преддоговорные действия и исполнение договора (ст. 6(1)(b) GDPR / ст. 5(1) Закона 133): обработка входящих заявок, оценка проектных требований, подготовка коммерческих и архитектурных предложений, заключение и сопровождение B2B-контрактов;\n• Законные интересы компании (ст. 6(1)(f) GDPR): защита серверной инфраструктуры от кибератак, диагностика стабильности сети, предотвращение мошенничества и оптимизация работы сайта;\n• Исполнение правовых обязанностей (ст. 6(1)(c) GDPR): соблюдение требований налогового, бухгалтерского и архивного законодательства Республики Молдова;\n• Согласие пользователя (ст. 6(1)(a) GDPR): обработка необязательных аналитических данных при предоставлении явного согласия."
          },
          {
            h: "4. Технические и организационные меры безопасности (ТОМ)",
            body: "Excal Group применяет комплексные меры безопасности промышленного уровня для защиты ваших данных от несанкционированного доступа, изменения, утраты или уничтожения:\n\n• Шифрование данных: использование современных протоколов TLS 1.3 при передаче данных и алгоритмов шифрования AES-256 в состоянии покоя;\n• Разграничение доступа: строгая ролевая модель доступа (RBAC), двухфакторная аутентификация (MFA) и сетевая сегментация;\n• Мониторинг инфраструктуры: автоматизированное сканирование уязвимостей, своевременное применение обновлений безопасности и изоляция виртуальных сред;\n• Обязательства персонала: все сотрудники и привлечённые специалисты подписывают соглашения о неразглашении конфиденциальной информации."
          },
          {
            h: "5. Передача данных третьим лицам и трансграничная передача",
            body: "Мы никогда не продаём, не сдаём в аренду и не передаём ваши персональные данные третьим лицам в маркетинговых целях. Доступ к данным может предоставляться исключительно проверенным партнёрам:\n\n• Хостинг-провайдеры: надёжные европейские облачные центры обработки данных, сертифицированные по ISO/IEC 27001 и SOC 2;\n• Государственные органы: уполномоченные государственные инстанции при наличии официальных законных требований;\n• Профессиональные консультанты: сертифицированные аудиторы, бухгалтеры и юридические консультанты, связанные профессиональной тайной.\n\nПри трансграничной передаче данных соблюдаются требования Главы V GDPR (Стандартные договорные условия — SCC) и Главы IV Закона РМ № 133/2011."
          },
          {
            h: "6. Сроки хранения персональных данных",
            body: "Персональные данные хранятся только в течение срока, необходимого для достижения целей обработки:\n\n• Запросы и преддоговорная переписка: хранятся в течение срока взаимодействия и до 3 лет после последнего контакта;\n• Договорная, бухгалтерская и финансовая документация: хранится от 5 до 10 лет в соответствии с требованиями законодательства Республики Молдова;\n• Технические серверные логи: хранятся от 30 до 90 дней для обеспечения безопасности, после чего автоматически уничтожаются или обезличиваются."
          },
          {
            h: "7. Права субъектов данных (GDPR и Закон РМ № 133/2011)",
            body: "В соответствии с законодательством вы обладаете следующими правами:\n\n• Право на доступ: подтверждение факта обработки и получение копии имеющихся данных;\n• Право на исправление: исправление неточных или неполных сведений;\n• Право на удаление («право на забвение»): уничтожение данных, если их хранение более не требуется законом;\n• Право на ограничение обработки: временная приостановка обработки при определённых условиях;\n• Право на переносимость данных: получение данных в структурированном машиночитаемом формате;\n• Право на возражение: возражение против обработки данных на основании законных интересов;\n• Право на отзыв согласия: отзыв ранее данного согласия в любой момент;\n• Право на подачу жалобы: обращение в Национальный центр по защите персональных данных Республики Молдова (CNPDCP — Centrul Național pentru Protecția Datelor cu Caracter Personal, www.datepersonale.md) либо в уполномоченный надзорный орган ЕС."
          },
          {
            h: "8. Контакты и реализация прав",
            body: "Для реализации своих прав или получения консультации по вопросам конфиденциальности обратитесь к нашей службе защиты данных:\n\n• Email: office@excal-group.com\n• Телефон: +373 69 180 475\n• Адрес: Excal Group, г. Кишинёв, Республика Молдова\n\nВсе запросы рассматриваются в течение 30 календарных дней на безвозмездной основе."
          }
        ]
      },
      cookies: {
        title: "Политика использования файлов cookie",
        updated: "Последнее обновление: сентябрь 2026",
        intro: "Настоящая Политика использования файлов cookie объясняет, что такое файлы cookie и технологии веб-хранилища, как Excal Group использует их на сайте и как вы можете управлять своими настройками. Мы придерживаемся принципов прозрачности и полного соблюдения Директивы ЕС ePrivacy, регламента GDPR и Закона РМ № 133/2011.",
        sections: [
          {
            h: "1. Что такое файлы cookie и локальное хранилище",
            body: "Файлы cookie представляют собой небольшие текстовые фрагменты данных, сохраняемые на вашем компьютере или мобильном устройстве при посещении веб-сайта. Они обеспечивают стабильную работу ресурса, безопасность сессий и сохранение настроек.\n\nПомимо традиционных cookie, современные веб-приложения используют локальное хранилище браузера (LocalStorage), позволяющее сохранять пользовательские предпочтения (например, выбранный язык интерфейса и статус согласия с политикой cookie) на клиентском устройстве без отправки избыточных заголовков с каждым сетевым запросом."
          },
          {
            h: "2. Для чего Excal Group использует данные технологии",
            body: "Мы используем файлы cookie и локальное хранилище исключительно для следующих целей:\n\n• Обеспечение безопасной, быстрой и стабильной работы сайта;\n• Запоминание выбранного вами языка интерфейса (en, ru, ro) при повторных визитах;\n• Фиксация вашего решения в баннере согласия на обработку файлов cookie;\n• Сбор обобщённой обезличенной технической статистики для оптимизации производительности страниц."
          },
          {
            h: "3. Категории используемых файлов и хранилищ",
            body: "На сайте применяются следующие типы данных:\n\n1. Обязательные (технические) элементы (всегда активны):\nНеобходимы для функционирования сайта и безопасности. Не содержат персональной идентифицирующей информации.\n• excal_cookie_consent (LocalStorage): хранит статус согласия (accepted, essential). Срок хранения: 12 месяцев.\n• excal_lang (LocalStorage): хранит выбранный язык интерфейса (en, ru, ro). Срок хранения: 12 месяцев.\n• Сессионные токены безопасности: обеспечивают защиту от межсайтовой подделки запросов и балансировку нагрузки. Срок: сессия браузера.\n\n2. Аналитические элементы (необязательные / требуют согласия):\nПозволяют оценивать скорость загрузки страниц и популярность разделов в агрегированном виде. Все IP-адреса анонимизируются. Активируются исключительно при выборе «Принять все».\n\n3. Сторонняя реклама и межсайтовое отслеживание:\nExcal Group НЕ использует сторонние рекламные трекеры, ретаргетинговые пиксели и коммерческие сети поведенческого профилирования."
          },
          {
            h: "4. Управление согласием на сайте",
            body: "При первом входе на сайт отображается интерактивный баннер управления файлами cookie. Вы можете выбрать:\n\n• «Принять все»: активирует базовые функции и агрегированную аналитику производительности;\n• «Только обязательные»: ограничивает хранение строго необходимыми техническими параметрами (язык и безопасность);\n\nВы можете в любой момент изменить свой выбор, очистив локальное хранилище браузера для excal-group.com или перейдя по ссылке «Политика cookie» в подвале сайта."
          },
          {
            h: "5. Управление файлами cookie через настройки браузера",
            body: "Большинство современных интернет-браузеров позволяют настроить индивидуальные правила для файлов cookie и локального хранилища:\n\n• Google Chrome: Настройки > Конфиденциальность и безопасность > Файлы cookie и другие данные сайтов;\n• Mozilla Firefox: Настройки > Приватность и защита > Куки и данные сайтов;\n• Apple Safari: Настройки > Конфиденциальность > Управление данными веб-сайтов;\n• Microsoft Edge: Настройки > Файлы cookie и разрешения сайтов.\n\nОбратите внимание: блокировка обязательных элементов может привести к сбросу языковых настроек при обновлении страниц."
          },
          {
            h: "6. Обновления и контакты",
            body: "Мы можем периодически обновлять настоящую Политику для отражения технологических изменений или обновлений законодательства. Дата последней редакции указывается в верхней части страницы.\n\nЕсли у вас есть вопросы относительно использования файлов cookie, свяжитесь с нами по адресу office@excal-group.com."
          }
        ]
      }
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
    cookieBanner: {
      badge: "GDPR & Legea RM nr. 133",
      title: "Protecția datelor și fișiere Cookie",
      text: "Utilizăm fișiere cookie pentru funcționarea corectă a site-ului, reținerea preferințelor de limbă și analiza traficului conform Legii RM nr. 133/2011 și GDPR UE (2016/679). Consultați",
      accept: "Acceptă tot",
      essential: "Doar necesare",
      decline: "Refuz"
    },
    legal: {
      terms: {
        title: "Termeni și condiții",
        updated: "Ultima actualizare: septembrie 2026",
        intro: "Prezenții Termeni și condiții reglementează accesul și utilizarea site-ului web Excal Group, a resurselor online și a canalelor de comunicare precontractuală. Prin navigarea pe acest site, contactarea noastră sau solicitarea de servicii, confirmați că ați citit, ați înțeles și acceptați necondiționat prezenții Termeni.",
        sections: [
          {
            h: "1. Domeniul de aplicare și acceptarea termenilor",
            body: "Prezenții Termeni și condiții (denumiți în continuare «Termeni») constituie un acord cu forță juridică obligatorie între dumneavoastră (în calitate de vizitator individual sau reprezentant împuternicit al unei persoane juridice) și Excal Group («noi», «nostru»), companie de servicii IT și consultanță tehnologică cu sediul în Chișinău, Republica Moldova.\n\nAccesarea, navigarea sau utilizarea site-ului excal-group.com reprezintă acceptarea deplină a acestor Termeni. Dacă nu sunteți de acord cu oricare dintre prevederi, vă rugăm să întrerupeți imediat utilizarea site-ului."
          },
          {
            h: "2. Servicii și contractare comercială B2B",
            body: "Prezentarea capabilităților și a serviciilor de pe acest site web — inclusiv Consultanță IT, Dezvoltare software la comandă, Dezvoltare portaluri web, Procesare date și hosting web, Gestionarea infrastructurii IT, Servicii call center, Externalizare personal / recrutare, Securitate cibernetică și Migrare și management în cloud — are caracter pur informativ și de prezentare.\n\nConținutul site-ului nu reprezintă o ofertă comercială fermă. Orice colaborare comercială, livrabilele, nivelul calității serviciilor (SLA), termenele de execuție, prețurile, transferul drepturilor de proprietate intelectuală și limitele de răspundere sunt stabilite exclusiv prin contracte comerciale bilaterale distincte (Master Services Agreement — MSA, Statement of Work — SOW, Acord de prelucrare a datelor — DPA) semnate între Excal Group și client."
          },
          {
            h: "3. Drepturi de proprietate intelectuală",
            body: "Toate drepturile de proprietate intelectuală asupra site-ului și a întregului său conținut — inclusiv codul sursă, arhitectura interfeței, elementele grafice, textele, mărcile comerciale, identitatea vizuală, siglele și studiile de caz — sunt proprietatea exclusivă a Excal Group sau a licențiatorilor săi și sunt protejate de legislația națională și internațională privind drepturile de autor și proprietatea intelectuală.\n\nPuteți vizualiza și descărca materiale de pe acest site exclusiv pentru informare personală sau evaluare internă în cadrul companiei dumneavoastră. Este strict interzisă reproducerea, distribuirea, modificarea, publicarea sau exploatarea comercială a materialelor fără acordul nostru prealabil scris.\n\nDrepturile asupra soluțiilor software dezvoltate pentru clienți sunt transferate sau licențiate conform prevederilor specifice din contractul comercial bilateral semnat, după achitarea integrală a onorariilor convenite."
          },
          {
            h: "4. Utilizarea acceptabilă și securitatea sistemelor",
            body: "Vă angajați să utilizați acest site exclusiv în scopuri legale și conforme cu prezenții Termeni. Sunt strict interzise:\n\n• Afectarea, perturbarea sau periclitarea integrității, securității și bunei funcționări a site-ului, a infrastructurii de hosting sau a serverelor aferente;\n• Scanarea, sondarea sau testarea neautorizată a vulnerabilităților sistemelor fără acordul nostru scris prealabil;\n• Transmiterea de viruși, viermi, troieni, ransomware sau alte secvențe de cod malițios;\n• Utilizarea de scripturi automatizate, roboți, web scrapers sau spideri pentru extragerea de conținut fără permisiune scrisă;\n• Transmiterea de comunicări comerciale nesolicitate (spam) prin formularele de contact sau adresele de email publicate."
          },
          {
            h: "5. Confidențialitatea informațiilor",
            body: "Orice informații cu caracter confidențial, tehnic sau comercial comunicate în faza de consultanță preliminară, proiectare de arhitectură, audit tehnic sau dimensionare a proiectului sunt tratate cu deplină confidențialitate profesională. Niciuna dintre părți nu va divulga secrete comerciale către terți fără acordul scris al celeilalte părți, cu excepția obligațiilor prevăzute expres de lege."
          },
          {
            h: "6. Exonerare de garanții și limitarea răspunderii",
            body: "Site-ul web și materialele conținute sunt puse la dispoziție pe baza principiului «așa cum sunt» (as is) și «în măsura disponibilității» (as available), fără garanții exprese sau implicite de niciun fel, inclusiv garanții de vandabilitate, adecvare la un scop specific sau neîncălcare a drepturilor terților.\n\nÎn măsura maximă permisă de legea aplicabilă, Excal Group, administratorii, angajații și subcontractanții săi nu vor fi răspunzători pentru niciun fel de daune indirecte, incidentale, speciale sau punitive — inclusiv pierderi de profit, întreruperea activității comerciale, pierderi de date sau daune aduse reputației — rezultate din accesarea sau imposibilitatea de accesare a site-ului.\n\nRăspunderea în cadrul proiectelor IT comerciale este reglementată exclusiv de clauzele contractuale din acordul semnat între părți."
          },
          {
            h: "7. Protecția datelor (GDPR și Legea RM nr. 133/2011)",
            body: "Prelucrarea datelor cu caracter personal se realizează în strictă conformitate cu Regulamentul General privind Protecția Datelor (GDPR - Regulamentul UE 2016/679) și Legea Republicii Moldova nr. 133/2011 privind protecția datelor cu caracter personal. Detaliile complete sunt disponibile în Politica de confidențialitate și Politica privind cookie-urile.\n\nPentru clienții la care Excal Group prelucrează date în calitate de persoană împuternicită (hosting administrat, administrare infrastructură, mentenanță portaluri), încheiem un Acord de prelucrare a datelor (DPA) ce include clauzele contractuale standard ale UE (SCC)."
          },
          {
            h: "8. Legea aplicabilă și soluționarea litigiilor",
            body: "Prezenții Termeni sunt guvernați și interpretați în conformitate cu legislația materială a Republicii Moldova.\n\nOrice dispută sau neînțelegere decurgând din sau în legătură cu prezenții Termeni va fi soluționată pe cale amiabilă, prin negocieri directe între părți, în termen de 30 de zile calendaristice de la notificare. În cazul în care nu se ajunge la un acord, litigiul va fi supus jurisdicției exclusive a instanțelor judecătorești competente din municipiul Chișinău, Republica Moldova."
          },
          {
            h: "9. Modificarea termenilor și date de contact",
            body: "Excal Group își rezervă dreptul de a modifica sau actualiza prezenții Termeni în orice moment. Modificările devin aplicabile din momentul publicării pe această pagină, cu menționarea datei actualizării. Continuarea utilizării site-ului reprezintă acordul dumneavoastră cu noile prevederi.\n\nPentru orice clarificări privind prezenții Termeni, ne puteți contacta la:\n• Email: office@excal-group.com\n• Telefon: +373 69 180 475\n• Adresă: Chișinău, Republica Moldova"
          }
        ]
      },
      privacy: {
        title: "Politica de confidențialitate",
        updated: "Ultima actualizare: septembrie 2026",
        intro: "Excal Group este pe deplin angajată în protejarea vieții private și a securității datelor dumneavoastră cu caracter personal. Prezenta Politică explică modul în care colectăm, prelucrăm, stocăm și protejăm datele cu caracter personal atunci când accesați site-ul nostru, contactați echipele noastre tehnice sau evaluați serviciile noastre IT, în deplină conformitate cu Regulamentul (UE) 2016/679 (GDPR) și Legea Republicii Moldova nr. 133/2011 privind protecția datelor cu caracter personal.",
        sections: [
          {
            h: "1. Operatorul de date și cadrul legislativ",
            body: "Operatorul responsabil pentru prelucrarea datelor dumneavoastră cu caracter personal pe acest site este:\nExcal Group\nChișinău, Republica Moldova\nEmail: office@excal-group.com | Telefon: +373 69 180 475\n\nPrelucrăm datele cu caracter personal în strictă conformitate cu:\n• Legea Republicii Moldova nr. 133 din 08.07.2011 privind protecția datelor cu caracter personal;\n• Regulamentul (UE) 2016/679 al Parlamentului European și al Consiliului (GDPR);\n• Standardele tehnice aplicabile în domeniul securității rețelelor și al comunicațiilor electronice."
          },
          {
            h: "2. Categoriile de date cu caracter personal colectate",
            body: "Respectăm principiul minimizării datelor și colectăm exclusiv datele necesare comunicării și securității navigării:\n\n• Date de contact și comunicare: nume, prenume, adresă de email profesională, număr de telefon, denumirea companiei, funcția și descrierea proiectului transmise prin intermediul formularului de contact sau prin email direct;\n• Date tehnice și de telemetrie: adresă IP, tipul și versiunea browserului, sistemul de operare, adresa URL de proveniență, marcajul temporal al accesării și durata sesiunii;\n• Date ale reprezentanților partenerilor B2B: detalii de contact, rol profesional și istoric al comunicărilor pentru negocierea și derularea contractelor de servicii;\n• Opțiuni privind consimțământul: preferințele de navigare stocate local pe dispozitivul dumneavoastră (excal_cookie_consent, excal_lang).\n\nNu colectăm și nu prelucrăm prin intermediul site-ului categorii speciale de date (date care dezvăluie originea rasială, convingerile politice, religioase sau date privind sănătatea)."
          },
          {
            h: "3. Scopurile și temeiurile legale ale prelucrării",
            body: "Prelucrarea se bazează pe temeiurile legitime stabilite de art. 6 GDPR și art. 5 din Legea RM nr. 133/2011:\n\n• Măsuri precontractuale și executarea contractului (art. 6(1)(b) GDPR / art. 5(1) Legea 133): preluarea solicitărilor de ofertă, dimensionarea tehnică, pregătirea propunerilor de arhitectură software și derularea contractelor comerciale;\n• Interesul legitim al companiei (art. 6(1)(f) GDPR): protejarea infrastructurii serverelor împotriva amenințărilor cibernetice, monitorizarea disponibilității sistemelor și îmbunătățirea experienței utilizatorilor;\n• Îndeplinirea unor obligații legale (art. 6(1)(c) GDPR): conformitatea cu normele fiscale, contabile și de arhivare aplicabile în Republica Moldova;\n• Consimțământul exprimat (art. 6(1)(a) GDPR): în cazul activării analizelor tehnice neesențiale de audiență."
          },
          {
            h: "4. Măsuri tehnice și organizatorice de securitate (TOM)",
            body: "Excal Group implementează măsuri de securitate tehnice și organizatorice conforme cu bunele practici internaționale din industria IT:\n\n• Criptare avansată: protocol TLS 1.3 pentru datele în tranzit și criptare robustă AES-256 pentru datele stocate;\n• Controlul accesului și izolare: control al accesului bazat pe roluri (RBAC), autentificare multifactorială (MFA) și segmentarea mediilor de rețea;\n• Mentenanță proactivă: scanări automate periodice de securitate, aplicarea promptă a actualizărilor și izolarea mașinilor virtuale;\n• Clauze de confidențialitate: toți inginerii și colaboratorii semnează acorduri stricte de nedivulgare a secretelor de afaceri și a datelor personale."
          },
          {
            h: "5. Partajarea datelor și transferurile internaționale",
            body: "Nu comercializăm, nu închiriem și nu transferăm datele dumneavoastră personale către terți în scopuri comerciale sau de publicitate. Datele pot fi comunicate doar partenerilor de încredere:\n\n• Furnizori de infrastructură cloud: centre de date securizate situate pe teritoriul Uniunii Europene, certificate ISO/IEC 27001 și SOC 2;\n• Autorități publice competente: organe fiscale sau judiciare, strict în condițiile stabilite imperativ de legislație;\n• Consultanți profesionali: experți contabili, auditori sau consilieri juridici supuși secretului profesional.\n\nTransferurile internaționale de date se realizează cu respectarea Capitolului V din GDPR (Clauze Contractuale Standard — SCC) și a Capitolului IV din Legea RM nr. 133/2011."
          },
          {
            h: "6. Perioada de păstrare a datelor",
            body: "Datele cu caracter personal sunt păstrate doar pe perioada necesară atingerii scopurilor pentru care au fost colectate:\n\n• Solicitări de informații și corespondență precontractuală: păstrate pe durata comunicării active și până la 3 ani de la ultimul contact;\n• Documente contractuale și financiar-contabile: păstrate între 5 și 10 ani conform cerințelor legislației fiscale și de arhivare a Republicii Moldova;\n• Jurnale tehnice de server (logs): păstrate între 30 și 90 de zile în scopuri de audit de securitate, după care sunt șterse ireversibil sau anonimizate."
          },
          {
            h: "7. Drepturile dumneavoastră (GDPR și Legea nr. 133/2011)",
            body: "În calitate de persoană vizată, beneficiați de drepturile garantate de lege:\n\n• Dreptul de acces: obținerea confirmării prelucrării și a unei copii a datelor personale deținute;\n• Dreptul la rectificare: corectarea promptă a datelor inexacte sau completarea celor lacunare;\n• Dreptul la ștergere («dreptul de a fi uitat»): ștergerea datelor atunci când prelucrarea nu mai este necesară prin lege;\n• Dreptul la restricționarea prelucrării: limitarea prelucrării în condițiile legii;\n• Dreptul la portabilitatea datelor: primirea datelor într-un format structurat, utilizat în mod curent și lizibil automat;\n• Dreptul la opoziție: opoziția față de prelucrarea întemeiată pe interese legitime;\n• Dreptul de retragere a consimțământului: oricând, fără a afecta legalitatea prelucrării anterioare;\n• Dreptul de a depune plângere: adresarea unei plângeri la Centrul Național pentru Protecția Datelor cu Caracter Personal din Republica Moldova (CNPDCP — www.datepersonale.md) sau la autoritatea de supraveghere competentă din statul membru UE."
          },
          {
            h: "8. Solicitări și date de contact",
            body: "Pentru exercitarea oricărui drept sau pentru clarificări referitoare la confidențialitatea datelor, contactați responsabilul nostru cu protecția datelor:\n\n• Email: office@excal-group.com\n• Telefon: +373 69 180 475\n• Adresă poștală: Excal Group, Chișinău, Republica Moldova\n\nToate cererile sunt analizate și soluționate în mod gratuit în termen de maximum 30 de zile calendaristice."
          }
        ]
      },
      cookies: {
        title: "Politica privind cookie-urile",
        updated: "Ultima actualizare: septembrie 2026",
        intro: "Prezenta Politică privind cookie-urile explică ce sunt tehnologiile de tip cookie și stocare locală, modul în care Excal Group le folosește pe site și opțiunile dumneavoastră de gestionare. Respectăm viața privată a utilizatorilor, conformându-ne Directivei ePrivacy a UE, GDPR și Legii RM nr. 133/2011.",
        sections: [
          {
            h: "1. Ce sunt cookie-urile și stocarea locală",
            body: "Cookie-urile sunt fișiere text de mici dimensiuni salvate pe computerul sau dispozitivul dumneavoastră mobil la vizitarea unui site web. Acestea permit recunoașterea dispozitivului, asigură funcționarea fluidă a interfeței și securitatea navigării.\n\nPe lângă cookie-urile tradiționale HTTP, utilizăm mecanisme de stocare locală în browser (LocalStorage). Această metodă modernă permite păstrarea preferințelor dumneavoastră (cum ar fi limba selectată și opțiunea privind cookie-urile) exclusiv pe dispozitivul local, fără transmiterea de antete suplimentare la fiecare cerere pe rețea."
          },
          {
            h: "2. Scopul utilizării acestor tehnologii",
            body: "Utilizăm fișierele cookie și stocarea locală exclusiv pentru:\n\n• Asigurarea funcționării sigure, rapide și stabile a platformei web;\n• Memorarea preferinței dumneavoastră de limbă (en, ru, ro) între sesiuni;\n• Înregistrarea opțiunii exprimate în bannerul privind cookie-urile;\n• Analiza tehnică agregată și anonimizată a vitezei de încărcare a paginilor pentru optimizarea continuă a serviciilor noastre IT."
          },
          {
            h: "3. Categoriile de cookie-uri și stocare utilizate",
            body: "Site-ul nostru utilizează două categorii de elemente de stocare:\n\n1. Elemente strict necesare (tehnice — mereu active):\nIndispensabile pentru navigarea în siguranță și funcționarea corectă. Nu stochează date de identificare personală.\n• excal_cookie_consent (LocalStorage): reține opțiunea dumneavoastră de consimțământ (accepted, essential). Durată: 12 luni.\n• excal_lang (LocalStorage): reține limba selectată pentru afișare (en, ru, ro). Durată: 12 luni.\n• Tokenuri de sesiune: securizează comunicarea împotriva atacurilor CSRF și gestionează distribuirea traficului. Durată: sesiunea curentă.\n\n2. Elemente analitice și de performanță (opționale — supuse consimțământului):\nNe ajută să înțelegem modul în care vizitatorii interacționează cu paginile, în mod strict agregat și cu mascarea adreselor IP. Sunt activate exclusiv dacă alegeți «Acceptă tot».\n\n3. Publicitate terță și urmărire comportamentală:\nExcal Group NU utilizează pe acest site cookie-uri publicitare terțe, rețele de retargeting sau instrumente invazive de profilare comercială."
          },
          {
            h: "4. Gestionarea consimțământului pe site-ul nostru",
            body: "La prima vizită pe site, este afișat bannerul interactiv de consimțământ. Puteți alege între:\n\n• «Acceptă tot»: activează funcționalitățile complete și analiza agregată de performanță;\n• «Doar necesare»: limitează stocarea strict la parametrii operaționali de bază (limbă și securitate);\n\nVă puteți reconsidera oricând opțiunea ștergând datele locale ale browserului pentru excal-group.com sau accesând linkul «Politica privind cookie-urile» din subsolul paginii."
          },
          {
            h: "5. Controlul cookie-urilor din setările browserului",
            body: "Cele mai multe browsere web moderne vă permit să gestionați sau să blocați fișierele cookie din setările de confidențialitate:\n\n• Google Chrome: Setări > Confidențialitate și securitate > Cookie-uri și alte date privind site-urile;\n• Mozilla Firefox: Setări > Confidențialitate și securitate > Cookie-uri și date de site;\n• Apple Safari: Preferințe > Confidențialitate > Gestionare date site-uri web;\n• Microsoft Edge: Setări > Cookie-uri și permisiuni de site.\n\nVă rugăm să rețineți că blocarea stocării strict necesare poate duce la resetarea limbii selectate la fiecare încărcare a paginii."
          },
          {
            h: "6. Actualizări și asistență",
            body: "Această Politică poate fi actualizată periodic pentru a reflecta evoluțiile tehnice sau cerințele de reglementare din Republica Moldova și Uniunea Europeană. Data ultimei revizuiri este întotdeauna menționată în partea de sus a paginii.\n\nPentru orice întrebări referitoare la utilizarea cookie-urilor, ne puteți contacta la adresa office@excal-group.com."
          }
        ]
      }
    }
  }
};
