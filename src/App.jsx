import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { content, links } from "./content.js";

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    /* storage indisponível */
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Separa "a, b (c, d), e" em ["a", "b (c, d)", "e"], ignorando vírgulas dentro de parênteses.
const splitList = (text) => text.split(/,\s*(?![^()]*\))/).map((s) => s.trim());

// Observa quando um elemento entra na tela (uma vez só).
function useInView(options = { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, inView];
}

function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? " is-in" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--d": delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Destaca o link do menu da seção visível.
function useScrollSpy(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join()]); // eslint-disable-line react-hooks/exhaustive-deps
  return active;
}

function useScrollProgress() {
  const [state, setState] = useState({ progress: 0, scrolled: false });
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setState({ progress: max > 0 ? window.scrollY / max : 0, scrolled: window.scrollY > 8 });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return state;
}

// Brilho que acompanha o mouse nos cards.
function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function Nav({ items, active }) {
  const navRef = useRef(null);
  const [pill, setPill] = useState(null);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const link = active && nav?.querySelector(`[data-id="${active}"]`);
    setPill(link ? { left: link.offsetLeft, width: link.offsetWidth } : null);
  }, [active, items]);

  return (
    <nav className="topbar-nav" aria-label="Menu" ref={navRef}>
      <span
        className="nav-pill"
        aria-hidden="true"
        style={pill ? { transform: `translateX(${pill.left}px)`, width: pill.width, opacity: 1 } : { opacity: 0 }}
      />
      {items.map((item) => (
        <a
          key={item.id}
          data-id={item.id}
          href={`#${item.id}`}
          aria-current={active === item.id ? "true" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function Section({ id, index, title, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <Reveal className="section-head">
        <span className="section-index">{String(index).padStart(2, "0")}</span>
        <h2 className="section-title" id={`${id}-title`}>
          {title}
        </h2>
      </Reveal>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Icon({ name }) {
  const paths = {
    mail: <path d="M4 6h16v12H4z M4 7l8 6 8-6" />,
    arrow: <path d="M7 17 17 7M9 7h8v8" />,
    copy: (
      <>
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V5a1 1 0 0 1 1-1h9" />
      </>
    ),
    check: <path d="m5 12 5 5 9-10" />,
    download: <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />,
    github: (
      <path d="M9 19c-4 1.3-4-2-6-2.5m12 5V18a3.4 3.4 0 0 0-1-2.6c3.1-.4 6.4-1.5 6.4-6.9A5.3 5.3 0 0 0 19 4.8 5 5 0 0 0 18.9 1S17.7.7 15 2.5a13.4 13.4 0 0 0-7 0C5.3.7 4.1 1 4.1 1A5 5 0 0 0 4 4.8a5.3 5.3 0 0 0-1.4 3.7c0 5.4 3.3 6.5 6.4 6.9a3.4 3.4 0 0 0-1 2.6V22" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    blocks: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <path d="M6.5 10v4a3 3 0 0 0 3 3H14M10 6.5h4" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6" />
      </>
    ),
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
    chat: <path d="M4 5h16v11H9l-5 4zM8 10h8M8 13h5" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
  };
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function CopyEmail({ label, copiedLabel }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };
  return (
    <button type="button" className={`button button-ghost${copied ? " is-copied" : ""}`} onClick={copy}>
      <Icon name={copied ? "check" : "copy"} />
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const active = useScrollSpy(t.nav.map((n) => n.id));
  const { progress, scrolled } = useScrollProgress();

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* storage indisponível */
    }
  }, [lang, t]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const now = t.path[t.path.length - 1];

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {t.meta.skip}
      </a>

      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <header className={`topbar${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-open" : ""}`}>
        <div className="topbar-inner">
          <a className="brand" href="#topo" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              GB
            </span>
            <span className="brand-name">Gustavo Balbi</span>
          </a>

          <Nav items={t.nav} active={active} />

          <div className="topbar-end">
            <div className="lang" role="group" aria-label={t.meta.langLabel} data-lang={lang}>
              <span className="lang-thumb" aria-hidden="true" />
              {["pt", "en"].map((code) => (
                <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)}>
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>

        <nav id="mobile-menu" className="mobile-menu" aria-label="Menu" hidden={!menuOpen}>
          {t.nav.map((item, i) => (
            <a key={item.id} href={`#${item.id}`} style={{ "--d": i }} onClick={() => setMenuOpen(false)}>
              <span className="section-index">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="conteudo">
        <div className="hero" id="topo">
          <div className="hero-bg" aria-hidden="true">
            <span className="blob blob-1" />
            <span className="blob blob-2" />
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-role intro" style={{ "--d": 1 }}>
                {t.hero.role}
              </p>
              <h1 className="hero-name intro" style={{ "--d": 2 }}>
                {t.hero.name.split(" ").map((word, i, arr) => (
                  <span key={i} className={i === arr.length - 1 ? "accent" : undefined}>
                    {word}
                    {i < arr.length - 1 ? " " : ""}
                  </span>
                ))}
              </h1>
              <p className="hero-lede intro" style={{ "--d": 3 }}>
                {t.hero.lede}
              </p>
              <div className="hero-actions intro" style={{ "--d": 4 }}>
                <a className="button button-primary" href={`mailto:${links.email}`}>
                  <Icon name="mail" />
                  {t.hero.emailLabel}
                </a>
                <a className="button" href={links.linkedin} target="_blank" rel="noreferrer">
                  <Icon name="linkedin" />
                  LinkedIn
                </a>
                <a className="button" href={links.github} target="_blank" rel="noreferrer">
                  <Icon name="github" />
                  GitHub
                </a>
                {t.hero.cvFile && (
                  <a className="button" href={t.hero.cvFile} download>
                    <Icon name="download" />
                    {t.hero.cvLabel}
                  </a>
                )}
              </div>
            </div>

            <div className="flow-card intro" style={{ "--d": 3 }} aria-label={t.hero.flowTitle}>
              <p className="flow-title">
                <span className="flow-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                {t.hero.flowTitle}
              </p>
              <ol className="flow">
                {t.hero.flow.map((step, i) => (
                  <li key={i} className="flow-step" style={{ "--i": i }}>
                    <span className="flow-node" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flow-text">
                      <span className="flow-label">{step.label}</span>
                      <span className="flow-detail">{step.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <Reveal className="path-wrap">
            <h2 className="eyebrow">{t.pathTitle}</h2>
            <ol className="path">
              {t.path.map((step, i) => (
                <li
                  key={i}
                  className={`path-step${step === now ? " is-now" : ""}`}
                  style={{ "--i": i }}
                >
                  <span className="path-dot" aria-hidden="true" />
                  <span className="path-when">{step.when}</span>
                  <span className="path-what">{step.what}</span>
                  {step.detail && <span className="path-detail">{step.detail}</span>}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Section id="sobre" index={1} title={t.about.title}>
          <div className="about">
            {t.about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i} className={`prose${i === 0 ? " prose-lead" : ""}`}>
                {p}
              </Reveal>
            ))}
          </div>
          <div className="focus">
            <Reveal as="h3" className="eyebrow">
              {t.focus.title}
            </Reveal>
            <ul className="focus-list">
              {t.focus.items.map((f, i) => (
                <Reveal as="li" key={i} delay={i} className="focus-item card" onMouseMove={spotlight}>
                  <div className="focus-top">
                    <span className="focus-icon" aria-hidden="true">
                      <Icon name={["chart", "blocks", "people"][i % 3]} />
                    </span>
                    <span className="focus-index" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="focus-name">{f.name}</h4>
                  <p className="focus-text">{f.text}</p>
                  <ul className="chips">
                    {splitList(f.tags).map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="beyond">
            <Reveal as="h3" className="eyebrow">
              {t.beyond.title}
            </Reveal>
            <ul className="beyond-list">
              {t.beyond.items.map((b, i) => (
                <Reveal as="li" key={i} delay={i} className="beyond-item card" onMouseMove={spotlight}>
                  <span className="beyond-icon" aria-hidden="true">
                    <Icon name={["spark", "chat"][i % 2]} />
                  </span>
                  <h4 className="beyond-name">{b.name}</h4>
                  <p className="beyond-text">{b.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="experiencia" index={2} title={t.experience.title}>
          <ol className="jobs">
            {t.experience.items.map((job, i) => (
              <Reveal as="li" key={i} className="job">
                <span className="job-dot" aria-hidden="true" />
                <div className="job-card card" onMouseMove={spotlight}>
                  <div className="job-head">
                    <div>
                      <h3 className="job-role">{job.role}</h3>
                      <p className="job-org">{job.org}</p>
                    </div>
                    <p className="job-when">{job.when}</p>
                  </div>
                  <ul className="job-points">
                    {job.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                  <ul className="chips" aria-label={t.experience.stackLabel}>
                    {splitList(job.stack).map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                  {job.url && (
                    <a className="job-link" href={job.url} target="_blank" rel="noreferrer">
                      {t.experience.siteLabel}
                      <Icon name="arrow" />
                      <span className="visually-hidden">: {job.org}</span>
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>

        <Section id="projetos" index={3} title={t.projects.title}>
          <ul className="projects">
            {t.projects.items.map((p, i) => (
              <Reveal as="li" key={i} delay={i % 2} className="project card" onMouseMove={spotlight}>
                <p className="project-context">{p.context}</p>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.description}</p>
                <ul className="chips">
                  {splitList(p.stack).map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
                <a className="project-link" href={p.url} target="_blank" rel="noreferrer">
                  {t.projects.repoLabel}
                  <Icon name="arrow" />
                  <span className="visually-hidden">: {p.name}</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </Section>

        <Section id="competencias" index={4} title={t.skills.title}>
          <dl className="skills">
            {t.skills.groups.map((g, i) => (
              <Reveal key={i} delay={i % 3} className="skill card" onMouseMove={spotlight}>
                <dt>{g.name}</dt>
                <dd>
                  <ul className="chips">
                    {splitList(g.items).map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </dd>
              </Reveal>
            ))}
          </dl>

          <Reveal className="education card" id="formacao" onMouseMove={spotlight}>
            <div className="education-main">
              <p className="eyebrow">{t.education.title}</p>
              <p className="degree">{t.education.degree}</p>
              <p className="degree-when">{t.education.when}</p>
            </div>
            <div>
              <h3 className="eyebrow">{t.education.certsTitle}</h3>
              <ul className="certs">
                {t.education.certs.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Section>

        <section className="contact" id="contato" aria-labelledby="contato-title">
          <Reveal className="contact-card">
            <span className="contact-glow" aria-hidden="true" />
            <p className="section-index">05</p>
            <h2 className="contact-title" id="contato-title">
              {t.contact.title}
            </h2>
            <p className="contact-text">{t.contact.text}</p>
            <a className="contact-email" href={`mailto:${links.email}`}>
              {links.email}
              <Icon name="arrow" />
            </a>
            <div className="contact-actions">
              <CopyEmail label={t.contact.copyLabel} copiedLabel={t.contact.copiedLabel} />
              <a className="button button-ghost" href={links.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" />
                LinkedIn
              </a>
              <a className="button button-ghost" href={links.github} target="_blank" rel="noreferrer">
                <Icon name="github" />
                GitHub
              </a>
            </div>
          </Reveal>
        </section>
      </main>

    </>
  );
}
