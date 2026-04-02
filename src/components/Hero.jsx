import { Link } from 'react-router-dom';
import { profile } from '../data/siteContent.js';

const mantraWords = ['Build', 'Ship', 'Learn', 'Repeat'];

const particles = [
  { top: '8%', left: '12%', delay: '0s', duration: '16s' },
  { top: '18%', left: '82%', delay: '2s', duration: '20s' },
  { top: '42%', left: '68%', delay: '4s', duration: '18s' },
  { top: '58%', left: '18%', delay: '1.5s', duration: '22s' },
  { top: '72%', left: '88%', delay: '5s', duration: '19s' },
  { top: '84%', left: '38%', delay: '3s', duration: '24s' },
];

export function Hero() {
  return (
    <section className="relative mx-auto max-w-content px-5 pb-14 pt-12 md:px-6 md:pb-20 md:pt-20">
      <div className="hero-grid absolute inset-x-0 top-0 h-[32rem] opacity-60" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true">
        {particles.map((particle, index) => (
          <span
            key={`${particle.top}-${particle.left}`}
            className="hero-particle"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              opacity: 0.35 + index * 0.08,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-3xl">
        <div
          data-reveal
          className="pill inline-flex rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-accent"
        >
          AI/ML Engineer
        </div>

        <div
          data-reveal
          style={{ '--reveal-delay': '50ms' }}
          className="mt-7 max-w-2xl"
        >
          <p className="text-[15px] leading-7 text-about-body md:text-[17px]">
            Welcome to ShashiVerse, where ideas ship fast and learning never sleeps.
          </p>
          <p className="hero-mantra mt-4 flex flex-wrap gap-x-3 gap-y-2 text-[13px] font-semibold uppercase tracking-[0.26em] text-accent md:text-[14px]">
            {mantraWords.map((word, index) => (
              <span key={word} style={{ animationDelay: `${index * 0.7}s` }}>
                {word}
              </span>
            ))}
          </p>
        </div>

        <h1
          data-reveal
          style={{ '--reveal-delay': '80ms' }}
          className="hero-name section-title mt-7 max-w-[12ch] whitespace-nowrap text-[2.9rem] font-semibold uppercase leading-[0.98] tracking-[0.03em] text-ink md:max-w-none md:text-[4.25rem]"
        >
          Shashank Kurakula
        </h1>

        <p
          data-reveal
          style={{ '--reveal-delay': '140ms' }}
          className="mt-5 max-w-2xl text-lg text-about-body md:text-xl"
        >
          <span className="font-semibold text-accent">{profile.title}</span> at {profile.org} · {profile.location}
        </p>
        <p data-reveal style={{ '--reveal-delay': '180ms' }} className="mt-2 text-[15px] text-muted md:text-base">
          Current location: {profile.current_location}
        </p>

        <div
          data-reveal
          style={{ '--reveal-delay': '220ms' }}
          className="glass-panel mt-8 inline-flex flex-wrap items-center gap-3 rounded-2xl px-4 py-3 text-[14px] text-muted"
        >
          <a className="link-editorial" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <span className="hidden text-line sm:inline">|</span>
          <a className="link-editorial" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="hidden text-line sm:inline">|</span>
          <a className="link-editorial" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <div
          data-reveal
          style={{ '--reveal-delay': '280ms' }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link className="cta-button cta-button--primary" to="/work">
            View My Work
          </Link>
          <a className="cta-button cta-button--secondary" href={`mailto:${profile.email}`}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
