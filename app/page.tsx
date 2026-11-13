"use client";

import Image from "next/image";
import { useState } from "react";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/kardas",
  tlappka: "https://www.tlappka.cz",
  outboxers: "https://www.outboxers.com",
  mediar: "https://www.mediar.cz/kardas-a-pulkert-z-etnetery-zalozili-outboxers-chteji-prototypovat-inovace/",
  czechcrunch: "https://cc.cz/veterinar-v-kapse-cesky-startup-setri-cas-lidem-i-mazlickum-slama-a-hlavenka-do-nej-vkladaji-miliony/",
  x4b: "https://www.x4b.cz/praha2018/",
  redbutton: "https://zoom.rba.cz/clanky/michal-kardas",
};

const problems = [
  {
    n: "01",
    title: "E-shop funguje. Ale business neroste.",
    text: "Marketing běží, vývoj má backlog a data existují. Jen není jasné, jestli je problém v akvizici, konverzi, nabídce, retenci nebo někde úplně jinde.",
    action: "Najdu s vámi místa, kde má změna největší šanci pohnout výsledkem.",
    output: "Priority · KPI · roadmapa",
  },
  {
    n: "02",
    title: "B2B pořád stojí hlavně na obchodnících a e-mailu.",
    text: "Ceníky, nabídky, opakované objednávky a individuální podmínky spotřebují víc času, než by musely.",
    action: "Zmapuju proces a najdu, kde může digitál zvýšit obrat nebo snížit náklady.",
    output: "B2B business case · postupná digitalizace",
  },
  {
    n: "03",
    title: "Všichni chtějí AI. Nikdo přesně neví, kde začít.",
    text: "AI má smysl jen tam, kde řeší reálný problém — ne jako další technologická hračka.",
    action: "Najdu use cases v procesech, produktech i práci lidí a seřadím je podle hodnoty, náročnosti a rizika.",
    output: "AI use cases · první experimenty",
  },
  {
    n: "04",
    title: "Roadmapa je dlouhý seznam věcí, které chce každý.",
    text: "Marketing, obchod, management i zákazníci mají své priority. Všechno je důležité — takže vlastně nic.",
    action: "Převedu požadavky do společných priorit podle business cíle, zákazníka a očekávaného dopadu.",
    output: "Prioritizace · roadmapa · jasné proč",
  },
  {
    n: "05",
    title: "Chcete investovat. Ale nevíte, jestli se to vrátí.",
    text: "Redesign, B2B portál, nový produkt, automatizace nebo AI mohou stát statisíce až miliony.",
    action: "Převedu nápad do ekonomiky: co musí změnit, kolik má vytvořit hodnoty a za jakých podmínek se investice vrátí.",
    output: "Business case · scénáře · ROI",
  },
];

const fit = {
  firma: [
    ["Máme e-shop, ale nevíme, kde je další růst.", "Najdu největší příležitosti a převedu je do konkrétního plánu."],
    ["B2B nám pořád funguje hlavně přes obchodníky.", "Najdeme, co má smysl digitalizovat a kde je ekonomická návratnost."],
    ["Management chce AI.", "Najdeme reálné use cases místo technologického dema."],
    ["Každé oddělení chce něco jiného.", "Dostaneme priority do jedné roadmapy a společných metrik."],
    ["Chceme investovat, ale potřebujeme vědět proč.", "Postavíme business case a způsob, jak výsledek měřit."],
  ],
  agentura: [
    ["Klient přišel s řešením, ale možná ještě neznáme problém.", "Pomůžu discovery otočit od zadání k business cíli."],
    ["PM hlídá delivery. Nikdo ale nevlastní businessovou stránku.", "Umím být seniorní protějšek klienta a držet směr, priority i hodnotu."],
    ["Backlog roste rychleji než rozpočet.", "Pomůžu klientovi rozhodnout, co opravdu dělat a co odložit."],
    ["Potřebujeme dlouhodobou roadmapu.", "Spojím business, UX, data, marketing a technologické možnosti do jednoho plánu."],
    ["Chceme se posunout od dodavatele k partnerovi.", "Pomůžu vést strategickou debatu o businessu klienta, ne jen o ticketech a MD."],
  ],
};

const experience = [
  {
    company: "MIME digital",
    role: "Strategic Account Lead",
    text: "Strategické vedení e-commerce klientů. Business růst, zákaznická cesta, KPI, kontinuální roadmapy, prioritizace a propojování klienta s UX, marketingem, analytikou a vývojem.",
  },
  {
    company: "tlappka",
    role: "CEO & Product Lead",
    text: "Produktová strategie a roadmapa, finance, marketing, pojištění, B2B spolupráce a rozvoj nových revenue streamů. Rozhodování s vlastními penězi, ne jen zvenku.",
  },
  {
    company: "Outboxers",
    role: "Co-founder",
    text: "Validace nových produktů, služeb a business modelů. Od problému přes prototyp a experiment až po rozhodnutí, zda má smysl řešení skutečně postavit.",
  },
  {
    company: "Etnetera Activate",
    role: "Business Consulting & UX",
    text: "Digitální strategie, nové produkty, UX a customer experience. Propojování businessového cíle se zákaznickou potřebou a následnou realizací.",
  },
  {
    company: "ACOMWARE",
    role: "E-commerce consulting",
    text: "E-commerce business, zákaznické chování, marketing a digitální řešení. Jedna z kapitol, na které stojí moje dnešní orientace na digitální obchod.",
  },
];

const logos = [
  ["Česká spořitelna", "/logos/ceska-sporitelna.svg"],
  ["ČSOB", "/logos/csob.svg"],
  ["Vodafone", "/logos/vodafone.svg"],
  ["Škoda Auto", "/logos/skoda.svg"],
  ["Economia", "/logos/economia.svg"],
  ["DATART", "/logos/datart.svg"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children} <Arrow />
    </a>
  );
}

export default function Home() {
  const [mode, setMode] = useState<"firma" | "agentura">("firma");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michal Kardaš",
    url: "https://kardas.cz",
    image: "https://kardas.cz/michal-kardas-dark.png",
    jobTitle: "Business / Product / E-commerce",
    description:
      "Pomáhám firmám růst v digitálu přes e-commerce, B2B, AI a lepší rozhodování. Strategie, roadmapy, business cases a digitální růst.",
    sameAs: [LINKS.linkedin, LINKS.tlappka],
    knowsAbout: [
      "E-commerce",
      "B2B digitalization",
      "AI adoption",
      "Product strategy",
      "Roadmapping",
      "Business cases",
      "Digital business",
      "Customer experience",
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Michal Kardaš — nahoru">
          MK<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Hlavní navigace">
          <a href="#problems">Poznáváte se?</a>
          <a href="#fit">Firma / Agentura</a>
          <a href="#experience">Zkušenosti</a>
          <ExternalLink href={LINKS.linkedin} className="nav-cta">LinkedIn</ExternalLink>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability"><span></span> Otevřený nové seniorní roli · Brno / jižní Morava / remote v ČR</div>
            <div className="eyebrow">Michal Kardaš · business / product / e-commerce</div>
            <h1>
              Pomáhám firmám růst v digitálu — přes <em>e-commerce, B2B, AI a lepší rozhodování.</em>
            </h1>
            <p className="lead">
              Největší hodnotu přináším tam, kde firma ví, že <strong>něco může fungovat lépe</strong>, ale není ještě jasné co změnit, v jakém pořadí a jestli se to vyplatí.
            </p>
            <div className="hero-tags" aria-label="Oblasti zaměření">
              <span>E-commerce growth</span><span>B2B</span><span>AI use cases</span><span>Roadmapa</span><span>Business case & ROI</span>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#problems">Poznáváte se? ↓</a>
              <ExternalLink href={LINKS.linkedin} className="button secondary">LinkedIn</ExternalLink>
            </div>
          </div>

          <figure className="hero-portrait">
            <Image src="/michal-kardas-dark.png" alt="Michal Kardaš" width={1400} height={1800} priority sizes="(max-width: 900px) 100vw, 42vw" />
          </figure>
        </div>
        <div className="hero-mark" aria-hidden="true">K</div>
      </section>

      <section className="section shell" id="problems">
        <div className="section-label">01 / Poznáváte se?</div>
        <div className="section-heading compact-heading">
          <h2>Nejdřív problém. Až potom řešení.</h2>
          <p>Tohle jsou situace, ve kterých umím převzít odpovědnost za další krok.</p>
        </div>

        <div className="problem-stack">
          {problems.map((item) => (
            <article className="problem-row" key={item.n}>
              <div className="problem-index">{item.n}</div>
              <div className="problem-main">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="problem-answer">
                <span>Co s tím</span>
                <strong>{item.action}</strong>
                <small>{item.output}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-panel" id="fit">
        <div className="shell">
          <div className="section-label light">02 / Kde se v tom poznáte vy?</div>
          <div className="fit-header">
            <div>
              <h2>Stejné schopnosti. Jiný kontext.</h2>
              <p>Vyberte si prostředí, ve kterém mě chcete číst.</p>
            </div>
            <div className="mode-toggle" role="group" aria-label="Typ prostředí">
              <button className={mode === "firma" ? "active" : ""} onClick={() => setMode("firma")}>Firma</button>
              <button className={mode === "agentura" ? "active" : ""} onClick={() => setMode("agentura")}>Agentura</button>
            </div>
          </div>

          <div className="fit-list">
            {fit[mode].map(([problem, answer], i) => (
              <article key={problem} className="fit-item">
                <span>0{i + 1}</span>
                <h3>{problem}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell outcomes">
        <div className="section-label">03 / Co ode mě firma získá</div>
        <div className="outcome-grid">
          <article><span>01</span><h3>Diagnózu</h3><p>Kde je skutečný problém nebo nevyužitá příležitost.</p></article>
          <article><span>02</span><h3>Prioritu</h3><p>Co má smysl udělat jako první — a co teď naopak nedělat.</p></article>
          <article><span>03</span><h3>Business case</h3><p>Proč, za kolik, s jakým dopadem a za jakých předpokladů.</p></article>
          <article><span>04</span><h3>Roadmapu</h3><p>Konkrétní kroky, pořadí, hypotézy a metriky výsledku.</p></article>
        </div>
        <div className="boundary">
          <span>Moje hranice</span>
          <strong>Nejsem developer ani technical lead.</strong>
          <p>Umím ale držet businessový směr od problému přes rozhodnutí a prioritizaci až po zadání a spolupráci s lidmi, kteří řešení realizují.</p>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="shell">
          <div className="section-label">04 / Už jsem u podobných problémů seděl</div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-company">{item.company}</div>
                <div>
                  <div className="role">{item.role}</div>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell proof">
        <div className="section-label">05 / Zkušenost napříč značkami</div>
        <div className="section-heading compact-heading">
          <h2>Pracoval jsem na problémech velkých firem i vlastního startupu.</h2>
          <p>Výběr klientů z předchozích rolí a projektů.</p>
        </div>
        <div className="logo-grid">
          {logos.map(([name, src]) => (
            <div className="logo-card" key={name} title={name}>
              <Image src={src} alt={`${name} logo`} width={260} height={80} />
            </div>
          ))}
        </div>
        <div className="career-line">ACOMWARE <span>→</span> Etnetera Activate <span>→</span> Outboxers <span>→</span> MIME digital <span>·</span> tlappka</div>
      </section>

      <section className="section shell ai-section">
        <div className="section-label">06 / AI v praxi</div>
        <div className="split">
          <h2>AI neberu jako produkt. Beru ji jako nový způsob, jak zlepšit práci a business.</h2>
          <div className="prose">
            <p>Prakticky používám Claude, agenty a automatizovaná workflow pro research, analýzu, produktovou práci, dokumentaci a rychlé prototypování.</p>
            <p>Můj pohled není „kam dát AI“. Je to <strong>„co ve firmě stojí za zlepšení — a je AI nejlepší nástroj?“</strong></p>
          </div>
        </div>
      </section>

      <section className="section shell press">
        <div className="section-label">07 / Média & vystoupení</div>
        <div className="press-grid">
          <ExternalLink href={LINKS.czechcrunch} className="press-card"><span>CzechCrunch</span><strong>tlappka & startup</strong></ExternalLink>
          <ExternalLink href={LINKS.mediar} className="press-card"><span>Médiář</span><strong>Vznik Outboxers</strong></ExternalLink>
          <ExternalLink href={LINKS.x4b} className="press-card"><span>X4B</span><strong>Product & innovation</strong></ExternalLink>
          <ExternalLink href={LINKS.redbutton} className="press-card"><span>Red Button</span><strong>Business & produkty</strong></ExternalLink>
        </div>
      </section>

      <section className="contact">
        <div className="shell contact-inner">
          <div className="section-label light">08 / Další krok</div>
          <h2>Hledáte někoho, kdo najde, co má v digitálu smysl změnit — a převezme odpovědnost za další krok?</h2>
          <p className="contact-sub">Hledám seniorní roli blízko businessu, rozhodování a reálnému výsledku. Brno · jižní Morava · remote v ČR.</p>
          <ExternalLink href={LINKS.linkedin} className="contact-link">Napište mi na LinkedIn</ExternalLink>
        </div>
      </section>

      <footer className="footer shell"><span>© 2026 Michal Kardaš</span><span>kardas.cz</span></footer>
    </main>
  );
}
