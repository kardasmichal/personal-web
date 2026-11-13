"use client";

import Image from "next/image";
import { useState } from "react";

const LINKS = {
  email: "mailto:kardas.michal@gmail.com",
  linkedin: "https://www.linkedin.com/in/kardas",
  tlappka: "https://www.tlappka.cz",
  outboxers: "https://www.outboxers.com",
  mediar: "https://www.mediar.cz/kardas-a-pulkert-z-etnetery-zalozili-outboxers-chteji-prototypovat-inovace/",
  czechcrunch: "https://cc.cz/veterinar-v-kapse-cesky-startup-setri-cas-lidem-i-mazlickum-slama-a-hlavenka-do-nej-vkladaji-miliony/",
  x4b: "https://www.x4b.cz/praha2018/",
  redbutton: "https://zoom.rba.cz/clanky/michal-kardas",
};

type Mode = "firma" | "agentura";
type ProofMode = "firmy" | "eshopy" | "startupy";

type UseCase = {
  title: string;
  text: string;
  action: string;
  output: string;
};

const useCases: Record<Mode, UseCase[]> = {
  firma: [
    {
      title: "E-shop funguje. Ale business neroste.",
      text: "Marketing běží, vývoj má backlog a data existují. Jen není jasné, kde je skutečná brzda růstu.",
      action: "Najdu místa, kde má změna největší šanci pohnout výsledkem, určím prioritu a vybranou iniciativu umím převzít jako owner a dotáhnout.",
      output: "Priority · KPI · roadmapa",
    },
    {
      title: "B2B pořád stojí hlavně na obchodnících, e-mailech a telefonech.",
      text: "Ceníky, nabídky, opakované objednávky a individuální podmínky spotřebují víc času, než by musely.",
      action: "Zmapuju proces, najdu příležitosti pro digitalizaci i AI, spočítám ekonomiku a smysluplnou iniciativu umím převzít od zadání po spuštění.",
      output: "B2B business case · digitalizace · AI",
    },
    {
      title: "Všichni chtějí AI. Nikdo přesně neví, kde začít.",
      text: "Není potřeba začínat technologií. Je potřeba začít tím, co ve firmě stojí za zlepšení.",
      action: "Najdu konkrétní use cases v procesech, práci lidí i zákaznické zkušenosti a seřadím je podle hodnoty, náročnosti a rizika.",
      output: "AI use cases · priority · první experimenty",
    },
    {
      title: "Roadmapa je dlouhý seznam věcí, které chce každý.",
      text: "Marketing, obchod, management i zákazníci mají svoje priority. Všechno je důležité — takže vlastně nic.",
      action: "Převedu požadavky do společných priorit podle business cíle, zákazníka a očekávaného dopadu — a klíčovou iniciativu pak umím vést do realizace.",
      output: "Prioritizace · roadmapa · jasné proč",
    },
    {
      title: "Chcete investovat. Ale nevíte, jestli se to vrátí.",
      text: "Redesign, B2B portál, nový produkt, automatizace nebo AI mohou stát statisíce až miliony.",
      action: "Převedu nápad do ekonomiky: co musí změnit, kolik má vytvořit hodnoty a za jakých podmínek se investice vrátí.",
      output: "Business case · scénáře · ROI",
    },
  ],
  agentura: [
    {
      title: "Klient přišel s řešením. Ale možná ještě neznáme problém.",
      text: "Redesign, nová platforma nebo feature mohou být jen předčasná odpověď na otázku, kterou jsme ještě nepoložili.",
      action: "Pomůžu discovery otočit od zadání k business cíli a společně určit, co má opravdu smysl řešit.",
      output: "Discovery · business cíl · hypotézy",
    },
    {
      title: "PM hlídá delivery. Nikdo ale nevlastní businessovou stránku.",
      text: "Projekt běží, ale chybí někdo, kdo s klientem drží směr, očekávanou hodnotu a rozhodování o prioritách.",
      action: "Umím být seniorní protějšek klienta, převzít ownership klíčové iniciativy a propojit business, produkt, UX, data a delivery až k výsledku.",
      output: "Strategické vedení · priority · dlouhodobý rozvoj",
    },
    {
      title: "Backlog roste rychleji než rozpočet.",
      text: "Požadavků přibývá, ale klient neumí rozhodnout, co opravdu přinese výsledek.",
      action: "Pomůžu převést požadavky na dopad, ekonomiku a jasné pořadí — včetně toho, co teď nedělat.",
      output: "Prioritizace · business case · roadmapa",
    },
    {
      title: "Potřebujeme s klientem vytvořit dlouhodobou roadmapu.",
      text: "Ne seznam ticketů, ale společný plán rozvoje, který dává smysl businessu i realizačnímu týmu.",
      action: "Spojím business, UX, data, marketing, AI a technologické možnosti do jednoho směru a u prioritních iniciativ převezmu odpovědnost za dotažení.",
      output: "Roadmapa · KPI · navazující příležitosti",
    },
    {
      title: "Chceme se posunout od dodavatele k partnerovi.",
      text: "Klienta nechcete potkávat jen u zadání a rozpočtu. Chcete s ním řešit, co má v jeho businessu smysl dělat dál.",
      action: "Pomůžu vést strategickou debatu o růstu, e-commerce, B2B, AI a návratnosti investic — ne jen o ticketech a MD.",
      output: "Strategický rozvoj klienta · nové příležitosti",
    },
  ],
};

const proof: Record<ProofMode, { name: string; src: string }[]> = {
  firmy: [
    { name: "Česká spořitelna", src: "/logos-original/ceska-sporitelna.webp" },
    { name: "ČSOB", src: "/logos-original/csob.webp" },
    { name: "Vodafone", src: "/logos-original/vodafone.png" },
    { name: "Škoda Auto", src: "/logos-original/skoda-auto.webp" },
  ],
  eshopy: [
    { name: "DATART", src: "/logos-original/datart.png" },
    { name: "Dr.Max", src: "/logos-original/drmax.webp" },
    { name: "Marimex", src: "/logos-original/marimex.png" },
    { name: "Astratex", src: "/logos-original/astratex.jpg" },
  ],
  startupy: [
    { name: "tlappka", src: "/logos-original/tlappka.png" },
    { name: "Škoda Auto DigiLab", src: "/logos-original/skoda-digilab.jpg" },
    { name: "StartupBox.cz", src: "/logos-original/startupbox.png" },
  ],
};

const experience = [
  {
    period: "od 2022",
    company: "tlappka",
    role: "Co-founder",
    text: "Produktová strategie, roadmapa, finance, marketing, pojištění, B2B spolupráce a nové revenue streamy. Od příležitosti přes business case a prioritizaci až po převzetí odpovědnosti za realizaci a výsledek.",
  },
  {
    period: "2017—2022",
    company: "Outboxers",
    role: "Co-founder",
    text: "Validace nových produktů, služeb a business modelů. Od problému přes prototyp a experiment až po rozhodnutí, zda má smysl řešení skutečně postavit — a následné vedení projektů do praxe.",
  },
  {
    period: "2011—2017",
    company: "Etnetera Activate",
    role: "Consultant / Project Manager → Consulting Leader",
    text: "Digitální strategie, e-commerce, nové produkty, UX a customer experience. Propojování businessového cíle se zákaznickou potřebou a následnou realizací.",
  },
  {
    period: "2009—2011",
    company: "ACOMWARE",
    role: "Senior Consultant",
    text: "Rozvoj e-commerce klientů, návrh rozvojových konceptů, marketing a koordinace realizace. Zkušenost, na které stojí moje dnešní orientace na růst digitálního obchodu.",
  },
];

function Arrow() {
  return (
    <svg className="link-arrow" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children} <Arrow />
    </a>
  );
}

export default function Home() {
  const [mode, setMode] = useState<Mode>("firma");
  const [proofMode, setProofMode] = useState<ProofMode>("firmy");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michal Kardaš",
    url: "https://kardas.cz",
    image: "https://kardas.cz/michal-kardas-dark.png",
    email: "mailto:kardas.michal@gmail.com",
    jobTitle: "Digital Business & E-commerce Lead",
    description: "Pomáhám firmám růst v digitálu — od nalezení příležitosti a business case přes prioritizaci až po ownership a dotažení projektu.",
    sameAs: [LINKS.linkedin, LINKS.tlappka],
    knowsAbout: ["E-commerce", "B2B digitalization", "AI adoption", "Product strategy", "Roadmapping", "Business cases", "Digital business"],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className={`nav floating-nav ${mobileMenuOpen ? "menu-open" : ""}`}>
        <a className="brand" href="#top" aria-label="Michal Kardaš — nahoru" onClick={() => setMobileMenuOpen(false)}>
          <span className="brand-mark">MK.</span>
          <span className="brand-name">Michal Kardaš</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní navigace">
          <a href="#use-cases">Kde pomáhám</a>
          <a href="#outcomes">Co přináším</a>
          <a href="#experience">Zkušenosti</a>
        </nav>
        <a href={LINKS.email} className="nav-cta">Napište mi</a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span></span><span></span>
        </button>
        <nav className="mobile-nav-panel" aria-label="Mobilní navigace">
          <a href="#use-cases" onClick={() => setMobileMenuOpen(false)}>Kde pomáhám</a>
          <a href="#outcomes" onClick={() => setMobileMenuOpen(false)}>Co přináším</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Zkušenosti</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-status-row"><div className="availability"><span></span><strong>Otevřený nové seniorní roli</strong></div><div className="availability-location">Brno / jižní Morava / remote v ČR</div></div>
            <h1>Pomáhám firmám růst v digitálu.</h1>
            <div className="hero-tags hero-tags-primary" aria-label="Oblasti zaměření">
              <span>E-commerce</span><span>B2B</span><span>AI</span><span>Lepší rozhodování</span>
            </div>
            <p className="lead">
              Hledám, kde business ztrácí růst nebo efektivitu, určím správnou prioritu a když dává smysl, vezmu ji jako business/project owner a dotáhnu od zadání až k výsledku.
            </p>
          </div>

          <figure className="hero-portrait">
            <Image src="/michal-kardas-dark.png" alt="Michal Kardaš" width={1400} height={1800} priority sizes="(max-width: 900px) 100vw, 42vw" />
          </figure>
        </div>
        <div className="hero-mark" aria-hidden="true">K</div>
      </section>

      <section className="section dark-panel" id="use-cases">
        <div className="shell">
          <div className="section-label light">01 / Situace</div>
          <div className="fit-header">
            <h2>Kde se poznáváte?</h2>
            <div className="mode-toggle" role="group" aria-label="Typ prostředí">
              <button className={mode === "firma" ? "active" : ""} onClick={() => setMode("firma")}>Firma</button>
              <button className={mode === "agentura" ? "active" : ""} onClick={() => setMode("agentura")}>Agentura</button>
            </div>
          </div>

          <div className="usecase-list">
            {useCases[mode].map((item, i) => (
              <article className="usecase-item" key={item.title}>
                <div className="usecase-index">0{i + 1}</div>
                <div className="usecase-main">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="usecase-answer">
                  <strong>{item.action}</strong>
                  <small>{item.output}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell outcomes" id="outcomes">
        <div className="section-label">02 / Co ode mě získáte</div>
        <div className="outcome-grid">
          <article><span>01</span><h3>Diagnózu</h3><p>Kde je skutečný problém nebo nevyužitá příležitost.</p></article>
          <article><span>02</span><h3>Prioritu</h3><p>Co má smysl udělat jako první — a co teď naopak nedělat.</p></article>
          <article><span>03</span><h3>Business case</h3><p>Proč, za kolik, s jakým dopadem a za jakých předpokladů.</p></article>
          <article><span>04</span><h3>Roadmapu</h3><p>Konkrétní kroky, pořadí, hypotézy a metriky výsledku.</p></article>
          <article className="outcome-owner"><span>05</span><h3>Převzetí odpovědnosti</h3><p>Když najdeme správnou věc, umím převzít odpovědnost za projekt, sladit lidi a dodavatele a dotáhnout ho do konce.</p></article>
        </div>
      </section>

      <section className="section shell ai-section">
        <div className="section-label">03 / AI v praxi</div>
        <div className="split">
          <h2>AI neberu jako řešení, ale jako nástroj ke zlepšení práce a businessu.</h2>
          <div className="prose">
            <p>Prakticky používám Claude, agenty a automatizovaná workflow pro research, analýzu, produktovou práci, dokumentaci a rychlé prototypování.</p>
            <p>Začínám otázkou <strong>„co stojí za zlepšení?“</strong> a teprve potom řeším, jestli je AI nejlepší nástroj.</p>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="shell">
          <div className="section-label">04 / Už jsem u podobných problémů seděl</div>

          <div className="proof-header">
            <h2>Od velkých firem přes e-shopy až po startupy.</h2>
            <div className="mode-toggle proof-toggle" role="group" aria-label="Typ zkušenosti">
              <button className={proofMode === "firmy" ? "active" : ""} onClick={() => setProofMode("firmy")}>Firmy</button>
              <button className={proofMode === "eshopy" ? "active" : ""} onClick={() => setProofMode("eshopy")}>E-shopy</button>
              <button className={proofMode === "startupy" ? "active" : ""} onClick={() => setProofMode("startupy")}>Startupy</button>
            </div>
          </div>

          <div className={`logo-grid logo-grid-${proofMode}`}>
            {proof[proofMode].map((item) => (
              <div className="logo-card" key={item.name} title={item.name}>
                <Image src={item.src} alt={`${item.name} logo`} width={420} height={180} />
              </div>
            ))}
          </div>

          <div className="experience-list compact-experience">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-period">{item.period}</div>
                <div className="experience-company">{item.company}</div>
                <div className="experience-detail">
                  <div className="role">{item.role}</div>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <div className="section-label light">05 / Kontakt</div>
          <h2>Hledáte někoho, kdo najde správný další krok — a vezme odpovědnost za jeho dotažení?</h2>
          <p className="contact-sub">Brno · jižní Morava · remote v ČR</p>
          <a href={LINKS.email} className="contact-link">Napište mi <Arrow /></a>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 Michal Kardaš</span>
        <div className="footer-links"><ExternalLink href={LINKS.linkedin}>LinkedIn</ExternalLink><span>kardas.cz</span></div>
      </footer>
    </main>
  );
}
