/* ================================================
   JAVASCRIPT (app.js) - OFFLINE VERSION
   ================================================ */

document.addEventListener("DOMContentLoaded", function () {
  // --- 1. EMBEDDED TRANSLATIONS (No Fetch Required) ---
  const translationData = {
    en: {
      logo: "Nek<span>digital</span>",
      navHome: "Home",
      navAbout: "About",
      navAboutSub: "About Us",
      navSwitching: "Switching Service",
      navWhatWeDo: "What We Do",
      navHowItWorks: "How Does It Work",
      navPackages: "Packages",
      navCustomers: "Customers",
      navContact: "Contact Us",
      heroTitle: "We Boost Your Brand With <span>Digital Excellence</span>",
      heroSubtitle: "A modern approach to digital. We combine strategy, design, and technology to help you grow.",
      heroBtnPrimary: "OUR PACKAGES",
      heroBtnSecondary: "BOOK AN APPPOINTMENT",
      aboutTag: "About The Company",
      aboutTitle: "Your Partner in Digital Transformation",
      aboutText1:
        "Nekdigi is a full-service digital agency. We are a team of passionate strategists, designers, and developers dedicated to helping businesses succeed in the digital age.",
      aboutText2: "From strategy to execution, we craft unique digital experiences that engage your audience and drive measurable results.",
      trustedTitle: "Trusted by forward-thinking companies",
      servicesTag: "Our Services",
      servicesTitle: "A Modern Approach to Digital",
      servicesSubtitle: "We provide everything you need to build a powerful brand and accelerate your growth.",
      learnMore: "Learn More",
      service1Title: "01. Strategy & Branding",
      service1Desc: "We define your brand's voice, identity, and go-to-market strategy to ensure you stand out.",
      service2Title: "02. Design & Development",
      service2Desc: "Crafting beautiful, user-friendly websites and applications that perform flawlessly.",
      service3Title: "03. Optimize & Traffic",
      service3Desc: "Driving targeted traffic through SEO, SEM, and marketing campaigns that deliver ROI.",
      service1DescFull:
        "We define your brand's voice, identity, and go-to-market strategy to ensure you stand out. This includes market research, competitive analysis, and creating a unique brand persona that connects with your target audience.",
      service2DescFull:
        "Crafting beautiful, user-friendly websites and applications that perform flawlessly. Our team builds responsive, fast, and secure digital products using modern technologies like React, Vue, and high-performance backends.",
      service3DescFull:
        "Driving targeted traffic through advanced SEO, SEM, and social media marketing campaigns that deliver measurable ROI. We analyze data to continuously optimize your funnels and increase conversions.",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Have questions? We've got answers. If you don't see your question, feel free to contact us.",
      faqQ1: "What is the typical project timeline?",
      faqA1:
        "Project timelines vary depending on the scope. A typical website design and development project takes between 6 to 12 weeks from start to launch. We'll provide a detailed timeline after our initial discovery call.",
      faqQ2: "How much does a new website cost?",
      faqA2:
        "Our pricing is based on the specific needs of your project. We offer custom quotes after understanding your goals and requirements. We focus on providing value and a positive ROI.",
      faqQ3: "Do you offer support after the project is launched?",
      faqA3:
        "Yes! We offer ongoing support and maintenance packages to keep your website secure, updated, and performing optimally. We also offer digital marketing retainers to help you grow your traffic.",
      footerAbout: "We are a full-service digital agency dedicated to helping businesses grow and succeed in the digital world.",
      footerLinks: "Quick Links",
      footercustomers: "Customers",
      footerContact: "Get in Touch",
      footerAddress: "123 Digital Ave, Amsterdam, NL",
      service1TitleShort: "Basic",
      service2TitleShort: "Standard",
      service3TitleShort: "Premium",
      aboutHeroTag: "About Us",
      aboutHeroTitle: "Setting a new standard in business marketing.",
      aboutHeroSubtitle:
        "We position your business online with a professional presence. Agile, iconic, and transparent—always keeping the entrepreneur at the core.",
      whyTitle: "Why Neksoft Consultancy Digital Services?",
      whyCard1Title: "More customer",
      whyCard1Desc:
        "Neksoft is dedicated to helping you attract more customers. We do this by providing you with a website that goes beyond just being a business card.",
      whyCard2Title: "Up-to-date website",
      whyCard2Desc:
        "Website maintenance is essential. Hosting, domain, security, and updates are included in your subscription, ensuring a hassle-free experience.",
      whyCard3Title: "Unlimited modifications",
      whyCard3Desc: "Need a change, promotion, or special offer? No extra costs! All changes and adjustments are included in your subscription.",
      whyCard4Title: "Save valuable time",
      whyCard4Desc: "As a busy entrepreneur, focus on running your business. We take care of all website tasks, saving you time and reducing stress.",
      whyCard5Title: "We collaborate with you",
      whyCard5Desc: "Success is a team effort. We collaborate, share insights, and provide feedback to strengthen your marketing for better results.",
      whyCard6Title: "Create an impact",
      whyCard6Desc: "Stay ahead of the competition with a strong online presence. With our expertise, we build guest trust and foster loyalty.",
      specialsTitle: "Neksoft's Specials",
      special1Title: "No hidden commissions",
      special1Desc: "No hidden commissions on the revenue you generate. We believe in transparency and fairness.",
      special2Title: "One fixed monthly fee",
      special2Desc:
        "A clear fee package for a fixed monthly fee. This is what sets us apart. You'll always know exactly what you get and what you pay.",
      special3Title: "No initial setup fees",
      special3Desc: "There are no startup costs with us. Building your website is completely free, even if you decide to cancel after 6 months.",
      special4Title: "Cancel anytime, monthly basis",
      special4Desc: "We value flexibility. After 6 months, you can cancel your subscription monthly, with no obligations or hassle.",
      contactTitle: "LET'S BUILD WHAT'S NEXT.",
      contactSubtitle: "Tell us about your next big idea, or just say hello. We're here to help you grow. If you prefer to talk, reach out directly.",
      contactEmailLabel: "EMAIL US",
      contactPhoneLabel: "CALL US",
      contactAddressLabel: "FIND US",
      contactAddressValue: "Poësistraat 45, 1321HH, Almere",
      formStep1: "Step 1: What are you interested in? (Optional)",
      formPkg1Title: "Essential Launch",
      formPkg2Title: "Growth Engine",
      formPkg3Title: "Digital Dominance",
      formPkg4Title: "General Inquiry",
      formPkg4Desc: "I'm not sure yet",
      formStep2: "Step 2: Tell us about you",
      formName: "Your Name *",
      formEmail: "Your Email *",
      formMessage: "Your Message *",
      formSubmit: "Send Message",
      howitworksTitle: "From Concept to Conversion.",
      howitworksSubtitle:
        "We take care of all your online marketing needs for your hospitality business. Below, we outline our collaboration process in a few easy steps.",
      howStep1Title: "Select marketing package",
      howStep1Desc:
        "We offer three marketing packages: Package 1, 2, or 3. Simply choose the one you need and we'll connect you to schedule an appointment. Unsure which package to pick? No worries, we'll help you decide.",
      howStep2Title: "Establishing a foundation and creating a website",
      howStep2Desc:
        "We start by establishing a solid foundation and then build a professional, conversion-focused website tailored to your needs and business appearance, fully optimized for mobile devices.",
      howStep3Title: "Increase website traffic using Google Ads",
      howStep3Desc:
        "With Package 2, we'll create a tailored Google advertising plan and run highly targeted campaigns to bring guest traffic to your website for lunch reservations, event inquiries, or job applications. Package 2 also includes a data-driven trial period for 4-6 weeks to optimize.",
      howStep4Title: "Engage with regular clients through email",
      howStep4Desc:
        "With Package 3, in addition to a new website and Google Ads, we'll also implement email marketing to inform clients about latest offers or exciting promotions. Together, we'll inform them about your latest offers or exciting promotions and projects, encouraging repeat visits and higher conversions.",
      howStep5Title: "Ongoing communication and regular updates",
      howStep5Desc:
        "The quickest and most efficient way to communicate is through WhatsApp. As a busy entrepreneur, you can always ask questions or request changes. We provide daily support and keep you updated on progress. Of course, you're always welcome to call us during the day.",
      howStep6Title: "Invoicing and scheduling appointments",
      howStep6Desc:
        "We operate on a subscription basis, providing all services for a fixed fee, payable monthly/quarterly. We always start on the 1st of the same work month, so you always know exactly what to expect. Simple and clear!",
      whatWeDoHeroTag: "Our Expertise",
      whatWeDoHeroTitle: "Everything you need to grow online.",
      whatWeDoHeroSubtitle:
        "From stunning websites to data-driven marketing campaigns. We provide the full stack of digital services to help you grow.",
      whatWeDoTag: "Our Services",
      whatWeDoSubtitle: "Core Marketing Services",
      serviceWW1Title: "01. Mobile Friendly Website",
      serviceWW1Desc:
        "We create a website tailored to your business's style and fully optimized for all devices. With hosting, domain, included management, and no hidden fees or commissions, you can enjoy a hassle-free experience.",
      serviceWW2Title: "02. Search Engine Optimized",
      serviceWW2Desc:
        "We create your website to be visible by optimizing your website to meet all guidelines. This will automatically add you in local search results, helping guests reach you effortlessly.",
      serviceWW3Title: "03. Google Reviews",
      serviceWW3Desc:
        "Reviews are incredibly important, as most guests read them before visiting. Your business can shine with a Google Maps profile and we help you gather reviews.",
      serviceWW4Title: "04. Website Support",
      serviceWW4Desc:
        "We create a website tailored to your business's style and fully optimized for all devices. With hosting, domain, included management, and no hidden fees or commissions, you can enjoy a hassle-free experience.",
      serviceWW5Title: "05. Ads on Google",
      serviceWW5Desc:
        "We run highly targeted campaigns to drive qualified traffic to your website, ensuring every click counts towards your growth. Our team handles strategy, setup, and optimization.",
      serviceWW6Title: "06. Email Campaigns",
      serviceWW6Desc:
        "Stay connected with loyal customers by sending a monthly newsletter featuring discount vouchers, special deals, and exciting offers. It's a personal and impactful way to encourage repeat visits.",
      additionalTitle: "Additional Capabilities",
      serviceAD1Title: "Logo and menu",
      serviceAD1Desc:
        "We offer a complete package including a logo and menu in your house style template for your business cards and menu. (One time fee €599)",
      serviceAD2Title: "Booking/Reservation system",
      serviceAD2Desc:
        "If needed, we can link a booking or reservation system. We check all the options together and offer tailored advice. (From €22.50 per month)",
      serviceAD3Title: "Creatives",
      serviceAD3Desc:
        "We create designs, including posts, flyers, and other promotional assets. We're here to meet your business needs effectively. (Cost depends on creative)",
      packagesHeroTag: "Our Packages",
      packagesHeroTitle: "Select the package that best fits your business and watch it grow.",
      packagesHeroSubtitle:
        "What’s included in the package? No start-up fees, no commissions, clear terms, continuous services, and full support—all for a fixed monthly amount. Simple!",
      pkgEssentialDesc: "Perfect for establishing online visibility. A professional presence and all tools to run your business.",
      pkgGrowthDesc: "The ideal choice for start-ups looking to grow. No start-up fees, no commissions, clear terms.",
      pkgDominanceDesc: "To boost customer retention and engagement, aimed at engaging existing and new customers.",
      pkgPerMonth: "/ month",
      pkgSelect: "Select Package",
      pkgWhatsIncluded: "What's included:",
      featDomain: "Domain Name (.nl/.com included)",
      featHosting: "Hosting + SSL Certificate",
      featWebsite: "Website + Mobile (Responsive)",
      featWhatsapp: "WhatsApp & Chat integration",
      featGoogleSearch: "Google Search & Maps Optimization",
      featBasicSEO: "Basic SEO Optimization",
      featEmail: "Professional Email Addresses",
      featCMS: "Content Management System (CMS)",
      featAnalytics: "Google Analytics Setup",
      featSocialMedia: "Social Media Integration",
      featStrategyCall: "1 Hour strategy call per month",
      featRevisions: "2 Revisions per month (max 2 hours)",
      featAdvancedSEO: "Advanced SEO + Google Console setup",
      featPerfReport: "Advanced performance report & analytics",
      featCustomDesign: "Custom web design",
      featBlog: "Blog function implementation",
      featEmailMarketing: "Automated email marketing integration",
      featSupportHours10: "Up to 10 hours of monthly support",
      featGrowthStrategy: "Design: SEO, growth & conversion strategy",
      featSupportHours15: "15 hours of website service & support",
      featKeywordResearch: "Keyword research & competitor analysis",
      featUnlimitedMods: "Unlimited modifications",
      featMonthlyStrategy: "Monthly business strategy sessions",
      featManager: "Dedicated Relationship Manager",
      addonsTitle: "Add-ons",
      addonMapsTitle: "Google Maps Ads",
      addonMapsDesc: "Boost people's love for business on Google. We make sure you stand out by boosting visibility with targeted keywords.",
      switchingTitle: "Seamless switching, no worries.",
      switchingSubtitle:
        "Switching is seamless with Neksoft Consultancy Services. We handle all technical aspects—from DNS to data migration—so you can focus on your business.",
      switchingStep1Tag: "Step 01",
      switchingStep1Title: "Hosting and website",
      switchingStep1Desc:
        "First, we reach out to your current hosting provider to handle all technical aspects of the transition. We ensure your website runs smoothly without interruptions, taking care of complex tasks like DNS settings, FTP details, and database migration—everything is our responsibility.",
      switchingStep2Tag: "Step 02",
      switchingStep2Title: "Transfer emails",
      switchingStep2Desc:
        "Next, we handle the migration of your emails, ensuring that your existing email addresses are seamlessly transferred to the new platform. You don't need to worry—your email, a vital part of your business, will be fully maintained throughout the process.",
      switchingStep3Tag: "Step 03",
      switchingStep3Title: "Booking/Reservation system and other software",
      switchingStep3Desc:
        "Finally, we assess any specific systems you currently use, like your reservation system, and ensure they're properly integrated into the new platform. We handle everything so you can focus on running your business, making the process as smooth and easy as possible.",
      customersHeroTag: "Our Partners",
      customersTitle: "Success Stories We Are Proud Of.",
      customersSubtitle: "We partner with innovative companies from around the world to build brands that last.",
      contactHeroTag: "Get In Touch",
      contactHeroTitle: "Let's build what's next.",
      contactHeroSubtitle:
        "Tell us about your next big idea, or just say hello. We're here to help you grow. If you prefer to talk, reach out directly.",
      ctaTitle: "Book an Appointment",
      ctaSubtitle: "Are you excited? We're ready to get started and would love to visit you to demonstrate how we can help your business.",
      ctaButton: "Book An Appointment",
      appointmentHeroTag: "Book A Meeting",
      appointmentHeroTitle: "Schedule Your Free Consultation.",
      appointmentHeroSubtitle: "Ready to start? Pick a time that works for you, and let's discuss how we can elevate your business.",
    },
    nl: {
      logo: "Nek<span>digital</span>",
      navHome: "Thuis",
      navAbout: "Over",
      navAboutSub: "Over Ons",
      navSwitching: "Overstapservice",
      navWhatWeDo: "Wat We Doen",
      navHowItWorks: "Hoe Het Werkt",
      navPackages: "Pakketten",
      navCustomers: "Klanten",
      navContact: "Contact",
      heroTitle: "Wij Versterken Uw Merk Met <span>Digitale Excellentie</span>",
      heroSubtitle: "Een moderne benadering van digital. Wij combineren strategie, design en technologie om u te helpen groeien.",
      heroBtnPrimary: "BEKIJK PAKKETTEN",
      heroBtnSecondary: "BOEK EEN AFSPRAAK",
      aboutTag: "Over Het Bedrijf",
      aboutTitle: "Uw Partner in Digitale Transformatie",
      aboutText1:
        "Nekdigi is een full-service digitaal bureau. Wij zijn een team van gepassioneerde strategen, ontwerpers en ontwikkelaars die bedrijven helpen succesvol te zijn in het digitale tijdperk.",
      aboutText2: "Van strategie tot uitvoering, wij creëren unieke digitale ervaringen die uw publiek boeien en meetbare resultaten opleveren.",
      trustedTitle: "Vertrouwd door vooruitstrevende bedrijven",
      servicesTag: "Onze Diensten",
      servicesTitle: "Een Moderne Digitale Aanpak",
      servicesSubtitle: "Wij bieden alles wat u nodig heeft om een krachtig merk op te bouwen en uw groei te versnellen.",
      learnMore: "Lees Meer",
      service1Title: "01. Strategie & Branding",
      service1Desc: "Wij definiëren de stem, identiteit en go-to-market strategie van uw merk om ervoor te zorgen dat u opvalt.",
      service2Title: "02. Ontwerp & Ontwikkeling",
      service2Desc: "Het creëren van prachtige, gebruiksvriendelijke websites en applicaties die feilloos presteren.",
      service3Title: "03. Optimalisatie & Verkeer",
      service3Desc: "Het genereren van gericht verkeer via SEO, SEM en marketingcampagnes die ROI opleveren.",
      service1DescFull:
        "Wij definiëren de stem, identiteit en go-to-market strategie van uw merk om ervoor te zorgen dat u opvalt. Dit omvat marktonderzoek, concurrentieanalyse en het creëren van een unieke merkpersoonlijkheid die aansluit bij uw doelgroep.",
      service2DescFull:
        "Het creëren van prachtige, gebruiksvriendelijke websites en applicaties die feilloos presteren. Ons team bouwt responsieve, snelle en veilige digitale producten met moderne technologieën zoals React, Vue en high-performance backends.",
      service3DescFull:
        "Het genereren van gericht verkeer via geavanceerde SEO-, SEM- en socialemediacampagnes die een meetbare ROI opleveren. We analyseren data om uw funnels continu te optimaliseren en conversies te verhogen.",
      faqTitle: "Veelgestelde Vragen",
      faqSubtitle: "Heeft u vragen? Wij hebben antwoorden. Staat uw vraag er niet bij, neem dan gerust contact met ons op.",
      faqQ1: "Wat is de typische projecttijdlijn?",
      faqA1:
        "Projecttijdlijnen variëren afhankelijk van de omvang. Een typisch website ontwerp- en ontwikkelingsproject duurt tussen de 6 en 12 weken van start tot lancering. We geven een gedetailleerde tijdlijn na ons eerste kennismakingsgesprek.",
      faqQ2: "Hoeveel kost een new website?",
      faqA2:
        "Onze prijzen zijn gebaseerd op de specifieke behoeften van uw project. We bieden offertes op maat na inzicht in uw doelen en vereisten. We richten ons op het bieden van waarde en een positieve ROI.",
      faqQ3: "Bieden jullie ondersteuning na de lancering van het project?",
      faqA3:
        "Ja! Wij bieden doorlopende ondersteunings- en onderhoudspakketten om uw website veilig, up-to-date en optimaal presterend te houden. We bieden ook digital marketing retainers om u te helpen uw verkeer te laten groeien.",
      footerAbout:
        "Wij zijn een full-service digitaal bureau dat zich toelegt op het helpen van bedrijven om te groeien en te slagen in de digitale wereld.",
      footerLinks: "Snelle Links",
      footercustomers: "Klanten",
      footerContact: "Neem Contact Op",
      footerAddress: "123 Digitale Laan, Amsterdam, NL",
      service1TitleShort: "Basis",
      service2TitleShort: "Standaard",
      service3TitleShort: "Premie",
      aboutHeroTag: "Over Ons",
      aboutHeroTitle: "Een nieuwe standaard in zakelijke marketing.",
      aboutHeroSubtitle:
        "Wij positioneren uw bedrijf online met een professionele uitstraling. Wendbaar, iconisch en transparant—waarbij de ondernemer altijd centraal staat.",
      whyTitle: "Waarom Neksoft Consultancy Digital Services?",
      whyCard1Title: "Meer klanten",
      whyCard1Desc:
        "Neksoft is toegewijd om u te helpen meer klanten aan te trekken. Dit doen we door u een website te bieden die verder gaat dan alleen een visitekaartje.",
      whyCard2Title: "Up-to-date website",
      whyCard2Desc:
        "Websiteonderhoud is essentieel. Hosting, domein, beveiliging en updates zijn inbegrepen in uw abonnement, wat zorgt voor een zorgeloze ervaring.",
      whyCard3Title: "Onbeperkte aanpassingen",
      whyCard3Desc:
        "Een wijziging, promotie of speciale aanbieding nodig? Geen extra kosten! Alle wijzigingen en aanpassingen zijn inbegrepen in uw abonnement.",
      whyCard4Title: "Bespaar kostbare tijd",
      whyCard4Desc:
        "Als drukke ondernemer kunt u zich richten op het runnen van uw bedrijf. Wij zorgen voor alle websitetaken, wat u tijd bespaart en stress vermindert.",
      whyCard5Title: "Wij werken met u samen",
      whyCard5Desc:
        "Succes is een teamprestatie. We werken samen, delen inzichten en geven feedback om uw marketing te versterken voor betere resultaten.",
      whyCard6Title: "Creëer een impact",
      whyCard6Desc:
        "Blijf de concurrentie voor met een sterke online aanwezigheid. Met onze expertise bouwen we vertrouwen op bij gasten en bevorderen we loyaliteit.",
      specialsTitle: "Neksoft's Specials",
      special1Title: "Geen verborgen commissies",
      special1Desc: "Geen verborgen commissies over de inkomsten die u genereert. Wij geloven in transparantie en eerlijkheid.",
      special2Title: "Eén vast maandelijks tarief",
      special2Desc:
        "Een duidelijk tariefpakket voor een vast maandelijks bedrag. Dit is wat ons onderscheidt. U weet altijd precies wat u krijgt en wat u betaalt.",
      special3Title: "Geen initiële instelkosten",
      special3Desc:
        "Er zijn geen opstartkosten bij ons. Het bouwen van uw website is volledig gratis, zelfs als u besluit na 6 maanden op te zeggen.",
      special4Title: "Altijd opzegbaar, op maandelijkse basis",
      special4Desc: "Wij hechten waarde aan flexibiliteit. Na 6 maanden kunt u uw abonnement maandelijks opzeggen, zonder verplichtingen of gedoe.",
      contactTitle: "LATEN WE BOUWEN WAT KOMT.",
      contactSubtitle:
        "Vertel ons over je volgende grote idee, of zeg gewoon hallo. We zijn hier om je te helpen groeien. Als je liever praat, neem dan direct contact op.",
      contactEmailLabel: "EMAIL ONS",
      contactPhoneLabel: "BEL ONS",
      contactAddressLabel: "VIND ONS",
      contactAddressValue: "Poësistraat 45, 1321HH, Almere",
      formStep1: "Stap 1: Waarin ben je geïnteresseerd? (Optioneel)",
      formPkg1Title: "Essential Launch",
      formPkg2Title: "Growth Engine",
      formPkg3Title: "Digital Dominance",
      formPkg4Title: "Algemene Vraag",
      formPkg4Desc: "Ik weet het nog niet",
      formStep2: "Stap 2: Vertel ons over jezelf",
      formName: "Jouw Naam *",
      formEmail: "Jouw Email *",
      formMessage: "Jouw Bericht *",
      formSubmit: "Verstuur Bericht",
      howitworksTitle: "Van concept naar conversie.",
      howitworksSubtitle:
        "Wij verzorgen al uw online marketingbehoeften voor uw horecabedrijf. Hieronder schetsen we ons samenwerkingsproces in een paar eenvoudige stappen.",
      howStep1Title: "Selecteer marketingpakket",
      howStep1Desc:
        "We bieden drie marketingpakketten: Pakket 1, 2 of 3. Kies eenvoudig degene die u nodig heeft en we nemen contact met u op om een afspraak in te plannen. Weet u niet zeker welk pakket u moet kiezen? Geen zorgen, wij helpen u beslissen.",
      howStep2Title: "Een fundament leggen en een website creëren",
      howStep2Desc:
        "We beginnen met het leggen van een solide basis en bouwen vervolgens een professionele, conversiegerichte website die is afgestemd op uw behoeften en bedrijfsuitstraling, volledig geoptimaliseerd for mobiele apparaten.",
      howStep3Title: "Verhoog websiteverkeer met Google Ads",
      howStep3Desc:
        "Met Pakket 2 maken we een Google-advertentieplan op maat en voeren we zeer gerichte campagnes om bezoekers naar uw website te trekken voor lunchreserveringen, evenementaanvragen of sollicitaties. Pakket 2 bevat ook een datagestuurde proefperiode van 4-6 weken om te optimaliseren.",
      howStep4Title: "Betrek vaste klanten via e-mail",
      howStep4Desc:
        "Met Pakket 3 implementeren we, naast een nieuwe website en Google Ads, ook e-mailmarketing om klanten te informeren over de nieuwste aanbiedingen of spannende promoties. Samen informeren we hen over uw laatste aanbiedingen of projecten, wat herhaalbezoeken en hogere conversies stimuleert.",
      howStep5Title: "Voortdurende communicatie en regelmatige updates",
      howStep5Desc:
        "De snelste en meest efficiënte manier om te communiceren is via WhatsApp. Als drukke ondernemer kunt u altijd vragen stellen of wijzigingen aanvragen. We bieden dagelijkse ondersteuning en houden u op de hoogte van de voortgang. U kunt ons overdag natuurlijk ook altijd bellen.",
      howStep6Title: "Facturering en het plannen van afspraken",
      howStep6Desc:
        "We werken op abonnementsbasis en bieden alle diensten voor een vast bedrag, betaalbaar per maand/kwartaal. We beginnen altijd op de 1e van dezelfde werkmaand, zodat u altijd precies weet wat u kunt verwachten. Eenvoudig en duidelijk!",
      whatWeDoHeroTag: "Onze Expertise",
      whatWeDoHeroTitle: "Alles wat u nodig heeft om online te groeien.",
      whatWeDoHeroSubtitle:
        "Van prachtige websites tot datagedreven marketingcampagnes. Wij bieden het volledige pakket aan digitale diensten om u te helpen groeien.",
      whatWeDoTag: "Onze Diensten",
      whatWeDoSubtitle: "Kernmarketingdiensten",
      serviceWW1Title: "01. Mobielvriendelijke Website",
      serviceWW1Desc:
        "Wij maken een website die is afgestemd op de stijl van uw bedrijf en volledig is geoptimaliseerd voor alle apparaten. Met hosting, domein, inbegrepen beheer en geen verborgen kosten of commissies, geniet u van een zorgeloze ervaring.",
      serviceWW2Title: "02. Zoekmachine Geoptimaliseerd",
      serviceWW2Desc:
        "Wij zorgen dat uw website zichtbaar is door deze te optimaliseren volgens alle richtlijnen. Hierdoor wordt u automatisch opgenomen in lokale zoekresultaten, zodat gasten u moeiteloos kunnen vinden.",
      serviceWW3Title: "03. Google Reviews",
      serviceWW3Desc:
        "Reviews zijn ontzettend belangrijk, aangezien de meeste gasten ze lezen voordat ze langskomen. Uw bedrijf kan schitteren met een Google Maps-profiel en wij helpen u bij het verzamelen van reviews.",
      serviceWW4Title: "04. Website Ondersteuning",
      serviceWW4Desc:
        "Wij bieden volledige ondersteuning voor uw website. Van technische updates tot inhoudelijke wijzigingen, wij zorgen ervoor dat uw platform altijd veilig, snel en up-to-date blijft.",
      serviceWW5Title: "05. Advertenties op Google",
      serviceWW5Desc:
        "Wij voeren zeer gerichte campagnes om gekwalificeerd verkeer naar uw website te leiden, zodat elke klik bijdraagt aan uw groei. Ons team verzorgt de strategie, opzet en optimalisatie.",
      serviceWW6Title: "06. E-mailcampagnes",
      serviceWW6Desc:
        "Blijf in contact met trouwe klanten door een maandelijkse nieuwsbrief te sturen met kortingsbonnen, speciale deals en spannende aanbiedingen. Het is een persoonlijke en effectieve manier om herhaalbezoeken te stimuleren.",
      additionalTitle: "Extra Mogelijkheden",
      serviceAD1Title: "Logo en menu",
      serviceAD1Desc:
        "Wij bieden een compleet pakket inclusief een logo en menu in uw huisstijl voor uw visitekaartjes en menukaart. (Eenmalige kosten €599)",
      serviceAD2Title: "Boekings-/Reserveringssysteem",
      serviceAD2Desc:
        "Indien nodig kunnen wij een boekings- of reserveringssysteem koppelen. We bekijken samen alle opties en geven advies op maat. (Vanaf €22,50 per maand)",
      serviceAD3Title: "Creatives",
      serviceAD3Desc:
        "Wij maken ontwerpen, inclusief posts, flyers en ander promotiemateriaal. Wij zijn er om effectief aan uw zakelijke behoeften te voldoen. (Kosten afhankelijk van het ontwerp)",
      packagesHeroTag: "Onze Pakketten",
      packagesHeroTitle: "Kies het pakket dat het beste bij uw bedrijf past en zie het groeien.",
      packagesHeroSubtitle:
        "Wat is inbegrepen in het pakket? Geen opstartkosten, geen commissies, duidelijke voorwaarden, doorlopende diensten en volledige ondersteuning—alles voor een vast maandelijks bedrag. Simpel!",
      pkgEssentialDesc: "Perfect voor het opbouwen van online zichtbaarheid. Een professionele aanwezigheid en alle tools om uw bedrijf te runnen.",
      pkgGrowthDesc: "De ideale keuze voor start-ups die willen groeien. Geen opstartkosten, geen commissies, duidelijke voorwaarden.",
      pkgDominanceDesc: "Om klantbehoud en betrokkenheid te stimuleren, gericht op het betrekken van bestaande en nieuwe klanten.",
      pkgPerMonth: "/ maand",
      pkgSelect: "Selecteer Pakket",
      pkgWhatsIncluded: "Wat is inbegrepen:",
      featDomain: "Domeinnaam (.nl/.com inbegrepen)",
      featHosting: "Hosting + SSL-certificaat",
      featWebsite: "Website + Mobiel (Responsive)",
      featWhatsapp: "WhatsApp & Chat integratie",
      featGoogleSearch: "Google Search & Maps Optimalisatie",
      featBasicSEO: "Basis SEO Optimalisatie",
      featEmail: "Professionele E-mailadressen",
      featCMS: "Content Management Systeem (CMS)",
      featAnalytics: "Google Analytics Instelling",
      featSocialMedia: "Social Media Integratie",
      featStrategyCall: "1 Uur strategisch gesprek per maand",
      featRevisions: "2 Revisies per maand (max 2 uur)",
      featAdvancedSEO: "Geavanceerde SEO + Google Console setup",
      featPerfReport: "Geavanceerde prestatierapportage & analytics",
      featCustomDesign: "Op maat gemaakt webdesign",
      featBlog: "Implementatie van blogfunctie",
      featEmailMarketing: "Geautomatiseerde e-mailmarketing integratie",
      featSupportHours10: "Tot 10 uur maandelijkse ondersteuning",
      featGrowthStrategy: "Ontwerp: SEO, groei & conversiestrategie",
      featSupportHours15: "15 uur websiteservice & ondersteuning",
      featKeywordResearch: "Zoekwoordonderzoek & concurrentieanalyse",
      featUnlimitedMods: "Onbeperkte aanpassingen",
      featMonthlyStrategy: "Maandelijkse bedrijfsstrategiesessies",
      featManager: "Toegewijde Relatiemanager",
      addonsTitle: "Add-ons",
      addonMapsTitle: "Google Maps Ads",
      addonMapsDesc:
        "Vergroot de liefde van mensen voor uw bedrijf op Google. Wij zorgen ervoor dat u opvalt door de zichtbaarheid te vergroten met gerichte zoekwoorden.",
      switchingTitle: "Naadloos overstappen, geen zorgen.",
      switchingSubtitle:
        "Overstappen is naadloos met Neksoft Consultancy Services. Wij regelen alle technische aspecten—van DNS tot datamigratie—zodat u zich kunt richten op uw bedrijf.",
      switchingStep1Tag: "Stap 01",
      switchingStep1Title: "Hosting en website",
      switchingStep1Desc:
        "Ten eerste nemen we contact op met uw huidige hostingprovider om alle technische aspecten van de overgang af te handelen. Wij zorgen ervoor dat uw website soepel blijft draaien zonder onderbrekingen en nemen complexe taken zoals DNS-instellingen, FTP-gegevens en databasemigratie voor onze rekening—alles is onze verantwoordelijkheid.",
      switchingStep2Tag: "Stap 02",
      switchingStep2Title: "E-mails overzetten",
      switchingStep2Desc:
        "Vervolgens regelen wij de migratie van uw e-mails, zodat uw bestaande e-mailadressen naadloos worden overgezet naar het nieuwe platform. U hoeft zich geen zorgen te maken—uw e-mail, een essentieel onderdeel van uw bedrijf, blijft gedurende het hele proces behouden.",
      switchingStep3Tag: "Stap 03",
      switchingStep3Title: "Boekings-/Reserveringssysteem en andere software",
      switchingStep3Desc:
        "Ten slotte beoordelen we eventuele specifieke systemen die u momenteel gebruikt, zoals uw reserveringssysteem, en zorgen we ervoor dat deze goed worden geïntegreerd in het nieuwe platform. Wij regelen alles zodat u zich kunt concentreren op het runnen van uw bedrijf, waardoor het proces zo soepel en eenvoudig mogelijk verloopt.",
      customersHeroTag: "Onze Partners",
      customersTitle: "Succesverhalen waar we trots op zijn.",
      customersSubtitle: "Wij werken samen met innovatieve bedrijven van over de hele wereld om merken te bouwen die blijven bestaan.",
      contactHeroTag: "Neem Contact Op",
      contactHeroTitle: "Laten we bouwen aan de toekomst.",
      contactHeroSubtitle:
        "Vertel ons over uw volgende grote idee, of zeg gewoon hallo. Wij zijn er om u te helpen groeien. Als u liever praat, neem dan direct contact op.",
      ctaTitle: "Maak een Afspraak",
      ctaSubtitle:
        "Bent u enthousiast? Wij staan klaar om te beginnen en komen graag bij u langs om te demonstreren hoe wij uw bedrijf kunnen helpen.",
      ctaButton: "Boek Een Afspraak",
      appointmentHeroTag: "Boek Een Afspraak",
      appointmentHeroTitle: "Plan Uw Gratis Adviesgesprek.",
      appointmentHeroSubtitle:
        "Klaar om te beginnen? Kies een tijdstip dat u uitkomt, en laten we bespreken hoe we uw bedrijf naar een hoger niveau kunnen tillen.",
    },
  };

  // --- 2. LANGUAGE ENGINE (Modified for Offline) ---
  const langEnBtn = document.getElementById("lang-en");
  const langNlBtn = document.getElementById("lang-nl");

  function setLanguage(lang) {
    if (!langEnBtn || !langNlBtn) {
      console.error("Language toggle buttons not found.");
      return;
    }

    // Use data from the variable, NOT fetch()
    const translations = translationData[lang];

    document.querySelectorAll("[data-lang-key]").forEach((element) => {
      const key = element.getAttribute("data-lang-key");
      if (translations[key]) {
        element.innerHTML = translations[key];
      }
    });

    if (lang === "en") {
      langEnBtn.classList.add("active");
      langNlBtn.classList.remove("active");
    } else {
      langNlBtn.classList.add("active");
      langEnBtn.classList.remove("active");
    }
  }

  if (langEnBtn) langEnBtn.addEventListener("click", () => setLanguage("en"));
  if (langNlBtn) langNlBtn.addEventListener("click", () => setLanguage("nl"));

  // --- 3. THEME TOGGLE ---
  const themeToggle = document.getElementById("theme-toggle");
  const bodyElement = document.body;

  if (themeToggle && bodyElement) {
    function setTheme(theme) {
      const iconMoon = themeToggle.querySelector(".icon-moon");
      const iconSun = themeToggle.querySelector(".icon-sun");

      if (theme === "light") {
        bodyElement.classList.add("light-mode");
        if (iconMoon) iconMoon.style.display = "none";
        if (iconSun) iconSun.style.display = "block";
        localStorage.theme = "light";
      } else {
        bodyElement.classList.remove("light-mode");
        if (iconMoon) iconMoon.style.display = "block";
        if (iconSun) iconSun.style.display = "none";
        localStorage.theme = "dark";
      }
    }
    const currentTheme = localStorage.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(currentTheme);

    themeToggle.addEventListener("click", () => {
      const newTheme = bodyElement.classList.contains("light-mode") ? "dark" : "light";
      setTheme(newTheme);
    });
  }

  // --- 4. ACTIVE LINK HIGHLIGHTER ---
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath && currentPath.endsWith(linkPath) && linkPath !== "#") {
      link.classList.add("active-page");
      const parentDropdown = link.closest(".nav-dropdown");
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector(".nav-drop-toggle");
        if (toggle) toggle.classList.add("active-page");
      }
    }
  });

  if (currentPath.endsWith("/") || currentPath.endsWith("index.html")) {
    const homeLink = document.querySelector('.nav-links a[href="index.html"]');
    if (homeLink) homeLink.classList.add("active-page");
  }

  // --- 5. STICKY NAV SCROLLSPY (FIXED) ---
  const servicePanels = document.querySelectorAll(".service-panel");
  const serviceNavLinks = document.querySelectorAll(".service-nav-link");
  const headerOffset = 90;

  if (servicePanels.length > 0 && serviceNavLinks.length > 0) {
    function onScroll() {
      let currentPanelId = "";
      const scrollY = window.pageYOffset;
      servicePanels.forEach((panel) => {
        const panelTop = panel.getBoundingClientRect().top + scrollY - headerOffset - 20;
        if (scrollY >= panelTop) {
          currentPanelId = panel.getAttribute("id");
        }
      });
      serviceNavLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentPanelId}`) {
          link.classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
  }

  // --- 6. FOOTER YEAR ---
  const currentYear = document.getElementById("current-year");
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  // --- 7. INITIALIZE ICONS ---
  feather.replace();

  // --- 8. LOAD INITIAL LANGUAGE ---
  setLanguage("en");

  // --- 9. CUSTOM CURSOR ---
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const cursorGlow = document.createElement("div");
    cursorGlow.className = "cursor-glow";
    document.body.appendChild(cursorGlow);

    window.addEventListener("mousemove", function (e) {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, .nav-drop-toggle, .package-tab-btn, label");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => document.body.classList.add("hovering"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("hovering"));
    });
  }
});

// --- 10. HOW-IT-WORKS TIMELINE ---
const timelineSection = document.querySelector(".timeline-section");
const timelineProgress = document.querySelector(".timeline-line-progress");
const timelineItems = document.querySelectorAll(".timeline-content");

if (timelineSection && timelineProgress && timelineItems.length > 0) {
  function updateTimeline() {
    const sectionRect = timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const startScroll = sectionRect.top + window.pageYOffset - windowHeight * 0.33;
    const endScroll = sectionRect.bottom + window.pageYOffset - windowHeight * 0.66;
    const totalScrollDistance = endScroll - startScroll;
    const currentScroll = window.pageYOffset;
    let progressPercent = 0;
    if (currentScroll >= startScroll) {
      progressPercent = ((currentScroll - startScroll) / totalScrollDistance) * 100;
    }
    progressPercent = Math.min(100, Math.max(0, progressPercent));
    timelineProgress.style.height = `${progressPercent}%`;
    timelineItems.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < windowHeight - 100) {
        item.classList.add("in-view");
      }
    });
  }
  window.addEventListener("scroll", updateTimeline);
  updateTimeline();
}

// --- 11. PACKAGE TAB SWITCHER ---
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".package-tab-btn");
  const packageCards = document.querySelectorAll(".package-card");
  if (tabButtons.length > 0 && packageCards.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        packageCards.forEach((card) => {
          if (card.id === targetId) {
            card.classList.add("active");
          } else {
            card.classList.remove("active");
          }
        });
      });
    });
  }
});
