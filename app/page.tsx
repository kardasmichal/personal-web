import Image from "next/image";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/kardas",
  tlappka: "https://www.tlappka.cz",
  buddyvet: "https://www.buddyvet.app",
  outboxers: "https://www.outboxers.com",
  mediar: "https://www.mediar.cz/kardas-a-pulkert-z-etnetery-zalozili-outboxers-chteji-prototypovat-inovace/",
  czechcrunch: "https://cc.cz/veterinar-v-kapse-cesky-startup-setri-cas-lidem-i-mazlickum-slama-a-hlavenka-do-nej-vkladaji-miliony/",
  x4b: "https://www.x4b.cz/praha2018/",
  redbutton: "https://zoom.rba.cz/clanky/michal-kardas",
};

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

const strengths = [
  {
    n: "01",
    title: "Product & roadmap",
    text: "Umím převést business cíle a potřeby zákazníků do produktových priorit, discovery, roadmapy a rozhodnutí o tom, co má smysl dělat teď — a co ne.",
  },
  {
    n: "02",
    title: "Klient, stakeholders & delivery",
    text: "Dokážu držet strategický vztah, sladit business, produkt, design a vývoj, hlídat očekávání i ekonomiku a posouvat projekt od požadavků k dlouhodobému rozvoji.",
  },
  {
    n: "03",
    title: "E-commerce & digital business",
    text: "Rozumím digitálnímu prodeji, zákaznické zkušenosti a růstu. Umím hledat příležitosti v e-commerce, CRM, omnichannel i fungování interních a dodavatelských týmů.",
  },
  {
    n: "04",
    title: "Business & nové příležitosti",
    text: "Mám zkušenost s business cases, validací, financemi i rozvojem nových revenue streamů. Neřeším jen funkce — zajímá mě, jakou hodnotu mají vytvořit pro firmu.",
  },
];

const roles = [
  ["Product Manager / Product Lead", "Produktová strategie, discovery, roadmapa, prioritizace a propojení zákaznických potřeb s business výsledkem."],
  ["Delivery Lead / Senior Project Manager", "Řízení složitějších digitálních projektů, priorit, stakeholderů a dodávky napříč business a technickými týmy."],
  ["Strategic Account / Client Lead", "Seniorní vedení klíčových klientů, hledání dalších příležitostí, dlouhodobá roadmapa a odpovědnost za hodnotu i ekonomiku spolupráce."],
  ["E-commerce / Digital Lead", "Interní rozvoj digitálního obchodu, e-commerce strategie, zákaznická zkušenost, CRM, omnichannel a řízení externích dodavatelů."],
  ["AI Delivery / AI Adoption", "Převod praktických možností AI do konkrétních use cases, workflow a změn fungování týmu — bez potřeby hrát si na AI developera."],
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michal Kardaš",
    url: "https://kardas.cz",
    image: "https://kardas.cz/michal-kardas-dark.png",
    jobTitle: "Senior Product / Delivery / Digital Business Leader",
    description:
      "Seniorní product, delivery a digital business profil. Propojuji business, zákazníka, produkt a delivery. Otevřený nové roli v Brně, na jižní Moravě nebo remote v ČR.",
    sameAs: [LINKS.linkedin, LINKS.tlappka, LINKS.buddyvet],
    alumniOf: [
      { "@type": "Organization", name: "Outboxers", url: LINKS.outboxers },
      { "@type": "Organization", name: "Etnetera Activate" },
    ],
    knowsAbout: [
      "Product strategy",
      "Product discovery",
      "Digital delivery",
      "Strategic account management",
      "E-commerce",
      "Digital business",
      "Customer experience",
      "Roadmapping",
      "AI adoption",
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Michal Kardaš — nahoru">
          MK<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Hlavní navigace">
          <a href="#strengths">Co přináším</a>
          <a href="#roles">Role</a>
          <a href="#experience">Zkušenosti</a>
          <ExternalLink href={LINKS.linkedin} className="nav-cta">LinkedIn</ExternalLink>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability"><span></span> Otevřený nové seniorní roli · Brno / jižní Morava / remote v ČR</div>
            <div className="eyebrow">Michal Kardaš · product / delivery / digital business</div>
            <h1>
              Propojuju business, produkt a delivery, aby se dobré nápady <em>opravdu dostaly do provozu.</em>
            </h1>
            <p className="lead">
              Přes 15 let se pohybuji v digitálu — od e-commerce a consultingu přes vedení klientů a produktů
              až po budování vlastního businessu. Největší hodnotu přináším tam, kde je potřeba spojit
              <strong> business cíl, zákazníka, priority a lidi, kteří řešení realizují.</strong>
            </p>
            <p className="hero-note">Nejsem developer ani technický lead. Jsem člověk na rozhraní businessu, produktu, klienta a delivery.</p>
            <div className="hero-actions">
              <a className="button primary" href="#strengths">Co umím převzít ↓</a>
              <ExternalLink href={LINKS.linkedin} className="button secondary">LinkedIn</ExternalLink>
            </div>
          </div>

          <figure className="hero-portrait">
            <Image
              src="/michal-kardas-dark.png"
              alt="Michal Kardaš"
              width={1400}
              height={1800}
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </figure>
        </div>
        <div className="hero-mark" aria-hidden="true">K</div>
      </section>

      <section className="section shell" id="strengths">
        <div className="section-label">01 / Co přináším firmě</div>
        <div className="split problems-intro">
          <h2>Nejsem specialista na jeden kus digitálu. Umím spojit věci, které se ve firmách často řeší odděleně.</h2>
          <div className="prose">
            <p>
              Produkt bez business kontextu skončí jako backlog. Strategie bez delivery jako prezentace. A vývoj bez priorit jako drahá továrna na funkce.
            </p>
            <p>
              Moje síla je v tom, že dokážu držet <strong>celý kontext</strong> a pomoci týmu rozhodnout, co má největší smysl udělat — a dostat to do reality.
            </p>
          </div>
        </div>

        <div className="problem-grid">
          {strengths.map((item) => (
            <article className="problem-card" key={item.n}>
              <span>{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-wrap" id="fit">
        <div className="shell">
          <div className="section-label light">02 / Kde dávám největší smysl</div>
          <div className="split approach-intro">
            <h2>Dva typy prostředí. Stejná role: vzít odpovědnost za výsledek, ne jen za dílčí úkol.</h2>
            <p>
              Nehledám nutně konkrétní název pozice. Důležitější je mandát, prostor něco ovlivnit a tým, se kterým lze věci opravdu posouvat.
            </p>
          </div>

          <div className="process-grid fit-grid">
            <article className="process-card featured-process fit-card">
              <div className="process-number">A</div>
              <div>
                <h3>Digitální / technologická firma</h3>
                <p>
                  Produkt, delivery, strategické vedení klientů nebo AI. Role, kde je potřeba rozumět businessu klienta, držet priority a propojovat více disciplín.
                </p>
                <strong>Product · Delivery · Strategic Client · AI</strong>
              </div>
            </article>
            <article className="process-card fit-card">
              <div className="process-number">B</div>
              <div>
                <h3>Tradiční výrobní nebo obchodní firma</h3>
                <p>
                  Interní e-commerce, digitalizace, produkt nebo obchodní rozvoj. Role, která propojí management, zákazníka, data a externí technologické dodavatele.
                </p>
                <strong>E-commerce · Digital · Product · Business Development</strong>
              </div>
            </article>
          </div>

          <div className="output-strip">
            <span>Co je pro mě důležité</span>
            <strong>Odpovědnost · důvěra · jasný business cíl · možnost prioritizovat · prostor zlepšovat fungování, ne jen odbavovat požadavky</strong>
          </div>
        </div>
      </section>

      <section className="section shell situations" id="roles">
        <div className="section-label">03 / Role, které mi dávají smysl</div>
        <div className="split role-intro">
          <h2>Název pozice je druhotný. Podstatné je, za co budu skutečně odpovědný.</h2>
          <div className="prose">
            <p>
              Nehledám čistě obchodní ani čistě technickou roli. Nejlépe funguje kombinace strategického pohledu, práce s lidmi a odpovědnosti za reálný výsledek.
            </p>
          </div>
        </div>
        <div className="situation-list role-list">
          {roles.map(([title, answer]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section manifesto">
        <div className="shell">
          <div className="section-label">04 / Jak pracuji</div>
          <div className="principles">
            <article><span>01</span><h3>Nejdřív problém, potom řešení.</h3><p>Než se rozjede projekt, chci vědět, co se má změnit u zákazníka nebo v businessu a jak poznáme úspěch.</p></article>
            <article><span>02</span><h3>Priorita znamená umět říct ne.</h3><p>Roadmapa není seznam přání. Snažím se držet fokus na věcech s největším očekávaným dopadem a jasným důvodem.</p></article>
            <article><span>03</span><h3>Delivery je společná disciplína.</h3><p>Business, produkt, design a vývoj musí rozumět stejnému cíli. Mojí rolí bývá tyto světy spojit a držet je pohromadě.</p></article>
            <article><span>04</span><h3>Měřit výsledek, ne aktivitu.</h3><p>Počet schůzek, ticketů nebo nových funkcí není úspěch. Důležité je, co se změnilo pro zákazníka a firmu.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell" id="experience">
        <div className="section-label">05 / Zkušenosti</div>
        <div className="split experience-intro">
          <h2>Od e-commerce přes consulting a venture building až k vlastnímu produktu a seniornímu delivery.</h2>
          <p>
            Kariérně jsem se postupně posouval od jednotlivých digitálních disciplín k odpovědnosti za širší business a produktový kontext.
          </p>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <div className="years">2026—současnost</div>
            <div>
              <div className="role">Strategic Account / Digital Delivery</div>
              <h2>Strategie, roadmapy a dlouhodobý rozvoj klientů</h2>
              <p>
                Strategické vedení digitálních projektů a klientů: rozkrývání business cílů, discovery, roadmapy, prioritizace, kvalifikace dalších příležitostí a propojování businessu s delivery týmem. Důraz na dlouhodobou hodnotu spolupráce, ne jen dokončení projektu.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <div className="years">2022—současnost</div>
            <div>
              <div className="role">Co-founder / CEO & Product Lead · tlappka & Buddyvet</div>
              <h2>Produkt, finance a nové revenue streamy</h2>
              <p>
                Budování digitální veterinární služby od produktu a zákaznické zkušenosti přes ekonomiku a finance až po pojištění, B2B partnerství a nové obchodní modely. Praktická odpovědnost za rozhodnutí, která mají dopad na produkt i fungování firmy.
              </p>
              <div className="inline-links">
                <ExternalLink href={LINKS.tlappka} className="text-link">tlappka.cz</ExternalLink>
                <ExternalLink href={LINKS.buddyvet} className="text-link">buddyvet.app</ExternalLink>
              </div>
            </div>
          </article>

          <article className="timeline-item">
            <div className="years">2017—2022</div>
            <div>
              <div className="role">Co-founder · Outboxers</div>
              <h2>Nové produkty, business modely a validace</h2>
              <p>
                Spoluzaložil jsem studio zaměřené na product discovery, validaci nových businessů a venture building. Pracovali jsme například pro Českou spořitelnu, Economia, ČSOB, Vodafone nebo Škoda Auto.
              </p>
              <ExternalLink href={LINKS.outboxers} className="text-link">outboxers.com</ExternalLink>
            </div>
          </article>

          <article className="timeline-item">
            <div className="years">Před Outboxers</div>
            <div>
              <div className="role">Business consulting & UX · Etnetera Activate</div>
              <h2>Digitální produkty z pohledu zákazníka i businessu</h2>
              <p>
                Vedl jsem tým zaměřený na business consulting a user experience. Pomáhali jsme firmám hledat a navrhovat digitální řešení, která spojovala zákaznické potřeby s obchodními cíli.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section shell boundary" id="ai">
        <div className="section-label">06 / AI v praxi</div>
        <div className="split boundary-head">
          <h2>AI používám jako pracovní nástroj. Ne jako buzzword.</h2>
          <div className="prose">
            <p>
              V každodenní práci používám Claude a AI agenty pro research, analýzu, přípravu podkladů, strukturování problémů, návrhy zadání, prototypování i zrychlení opakujících se workflow.
            </p>
            <p>
              Nejsem AI engineer. Umím ale hledat <strong>reálné use cases</strong>, dostat AI do pracovního procesu a posoudit, kde opravdu šetří čas nebo zvyšuje kvalitu — a kde jen přidává další technologii bez jasné hodnoty.
            </p>
          </div>
        </div>
        <div className="boundary-quote">
          <span>Moje role u AI</span>
          <strong>Pochopit problém → navrhnout použití → ověřit přínos → dostat změnu do fungování týmu.</strong>
        </div>
      </section>

      <section className="section shell topics">
        <div className="section-label">07 / Témata, ve kterých se pohybuji</div>
        <div className="topic-list">
          {["Product strategy & discovery", "Roadmapping & prioritization", "Digital delivery", "Strategic client leadership", "E-commerce & digital growth", "Customer experience", "New business & revenue streams", "AI adoption & workflows"].map((item) => (
            <div key={item}>{item}<span>↗</span></div>
          ))}
        </div>
      </section>

      <section className="section shell press">
        <div className="section-label">08 / Média & vystoupení</div>
        <div className="split press-intro">
          <h2>Produkty, podnikání a digitální business řeším veřejně už řadu let.</h2>
          <p>
            Výběr rozhovorů, článků a konferencí z období Etnetery, Outboxers i budování vlastního produktu.
          </p>
        </div>
        <div className="press-grid">
          <ExternalLink href={LINKS.czechcrunch} className="press-card"><span>CzechCrunch</span><strong>tlappka & startup</strong></ExternalLink>
          <ExternalLink href={LINKS.mediar} className="press-card"><span>Médiář</span><strong>Vznik Outboxers</strong></ExternalLink>
          <ExternalLink href={LINKS.x4b} className="press-card"><span>X4B</span><strong>Product discovery & innovation</strong></ExternalLink>
          <ExternalLink href={LINKS.redbutton} className="press-card"><span>Red Button</span><strong>Business & nové produkty</strong></ExternalLink>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <div className="section-label light">09 / Nová role</div>
          <h2>Hledáte člověka, který dokáže vzít nejasný business problém a dotáhnout ho s týmem k výsledku?</h2>
          <p className="contact-lead">
            Jsem otevřený nové seniorní roli. Nejvíc mi dává smysl Brno a jižní Morava, případně skutečně remote spolupráce v rámci ČR. Bydlím ve Ždánicích.
          </p>
          <ExternalLink href={LINKS.linkedin} className="contact-link">Spojme se na LinkedIn</ExternalLink>
        </div>
      </section>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Michal Kardaš</span>
        <span>kardas.cz</span>
      </footer>
    </main>
  );
}
