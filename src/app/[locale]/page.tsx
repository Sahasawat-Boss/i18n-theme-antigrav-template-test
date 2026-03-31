import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ParticleCanvas from "@/components/ParticleCanvas";
import AnimatedCounter from "@/components/AnimatedCounter";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const stack = [
  { icon: "⚡", name: "Next.js 16" },
  { icon: "🔷", name: "TypeScript" },
  { icon: "🌐", name: "next-intl" },
  { icon: "⚛️", name: "React 19" },
  { icon: "🎨", name: "Vanilla CSS" },
  { icon: "🚀", name: "Turbopack" },
  { icon: "🔒", name: "Type-safe" },
  { icon: "📦", name: "App Router" },
];

export default async function LocalePage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);

  const ti = await getTranslations("Index");
  const th = await getTranslations("Home");

  const testimonials = [
    { text: th("t1text"), name: th("t1name"), role: th("t1role"), avatar: "👨‍💻" },
    { text: th("t2text"), name: th("t2name"), role: th("t2role"), avatar: "👩‍💼" },
    { text: th("t3text"), name: th("t3name"), role: th("t3role"), avatar: "🎨" },
  ];

  const doubled = [...stack, ...stack]; // duplicate for seamless loop

  return (
    <>
      {/* Ambient blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-badge">✨ Next.js 16 · next-intl · Turbopack</div>
        <h1 className="hero-title">{ti("title")}</h1>
        <p className="hero-subtitle">{ti("subtitle")}</p>
        <div className="cta-group">
          <a href="#features" className="btn btn-primary">{ti("cta")}</a>
          <a href="#features" className="btn btn-secondary">{ti("features")}</a>
        </div>
        <div className="hero-scroll-hint">
          <span />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <section className="stats-section reveal" id="stats">
        <p className="marquee-label" style={{ marginBottom: "2.5rem" }}>{th("statsTitle")}</p>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number"><AnimatedCounter target={12000} suffix="+" /></div>
            <div className="stat-label">{th("stat1")}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number"><AnimatedCounter target={3400} suffix="+" /></div>
            <div className="stat-label">{th("stat2")}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number"><AnimatedCounter target={99} suffix="%" /></div>
            <div className="stat-label">{th("stat3")}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number"><AnimatedCounter target={80} suffix="+" /></div>
            <div className="stat-label">{th("stat4")}</div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE / TECH STACK ─────────────────────── */}
      <div className="marquee-section">
        <p className="marquee-label">{th("techLabel")}</p>
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <div key={i} className="marquee-item">
              <span>{item.icon}</span>
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ─────────────────────────────────── */}
      <section id="features" className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3 className="feature-title">Dynamic Design</h3>
            <p className="feature-desc">{ti("description")}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Next.js 16</h3>
            <p className="feature-desc">Powered by the latest React features and extremely fast server-side rendering with Turbopack.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3 className="feature-title">i18n Support</h3>
            <p className="feature-desc">Seamlessly translate your experiences across multiple languages with next-intl and App Router.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3 className="feature-title">Theme System</h3>
            <p className="feature-desc">Switch between 4 beautiful color themes instantly. Your preference is saved across sessions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">Type Safe</h3>
            <p className="feature-desc">100% TypeScript with fully typed i18n messages and component props for maximum developer confidence.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3 className="feature-title">Modular CSS</h3>
            <p className="feature-desc">CSS split into clearly named files by responsibility — easy to extend and maintain.</p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">{th("testimonialsTitle")}</h2>
          <p className="section-subtitle">{th("testimonialsSubtitle")}</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">{th("ctaTitle")}</h2>
          <p className="cta-desc">{th("ctaDesc")}</p>
          <a href="/contact" className="btn-white">{th("ctaButton")}</a>
        </div>
      </section>
    </>
  );
}
