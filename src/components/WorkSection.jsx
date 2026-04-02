import { about, featuredProjects, profile, workPage } from '../data/siteContent.js';

const externalLinkProps = { target: '_blank', rel: 'noopener noreferrer' };

function isLiveUrlConfigured(liveUrl) {
  if (!liveUrl || typeof liveUrl !== 'string') return false;
  const t = liveUrl.trim();
  if (!t) return false;
  try {
    const u = new URL(t);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

function FeaturedCard({ tag, date, title, blurb, href, liveUrl }) {
  const hasLive = isLiveUrlConfigured(liveUrl);
  const titleHref = hasLive ? liveUrl : href;

  return (
    <article className="glass-panel glow-card group rounded-[1.8rem] p-6 md:p-8">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[12px] uppercase tracking-wide text-muted">
        <span>{tag}</span>
        <span className="tabular-nums">{date}</span>
      </div>
      <h3 className="section-title mt-3 text-[2rem] font-semibold tracking-tight text-ink">
        <a href={titleHref} className="hover:text-muted" {...externalLinkProps}>
          {title}
        </a>
      </h3>
      {blurb ? <p className="mt-3 max-w-prose text-[15px] leading-7 text-muted">{blurb}</p> : null}
      <div className="nav-dot mt-4 flex flex-wrap items-center text-[13px] font-medium text-ink">
        {hasLive ? (
          <a
            href={liveUrl}
            className="inline-flex items-center underline decoration-line underline-offset-4 transition hover:text-muted"
            {...externalLinkProps}
          >
            Live demo →
          </a>
        ) : null}
        <a
          href={href}
          className="inline-flex items-center underline decoration-line underline-offset-4 transition hover:text-muted"
          {...externalLinkProps}
        >
          Source on GitHub →
        </a>
      </div>
    </article>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-about px-5 pb-20 pt-10 md:px-6 md:pb-24 md:pt-16">
      <div data-reveal className="max-w-3xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-accent">Work</p>
        <h1 className="section-title mt-5 text-5xl font-semibold tracking-[0.03em] text-ink md:text-6xl">
          Production AI, applied ML, and shipped interfaces.
        </h1>
        <p className="mt-6 max-w-prose text-[16px] leading-8 text-muted">{workPage.intro}</p>
      </div>

      <h2 data-reveal className="section-title mt-12 text-3xl font-semibold text-ink md:mt-16">
        Experience
      </h2>
      <ul className="mt-8 space-y-12">
        {about.experience.map((job, index) => (
          <li
            key={`${job.company}-${job.period}`}
            data-reveal
            style={{ '--reveal-delay': `${index * 70}ms` }}
            className="glass-panel rounded-[1.8rem] p-6 md:p-8"
          >
            <p className="text-[12px] font-medium uppercase tracking-wide text-muted tabular-nums">{job.period}</p>
            <p className="section-title mt-2 text-[1.9rem] font-semibold text-ink">{job.role}</p>
            <p className="mt-1 text-[14px] text-muted">
              {job.company}
              {job.location ? ` · ${job.location}` : ''}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 id="featured-projects" data-reveal className="section-title mt-16 scroll-mt-28 text-3xl font-semibold text-ink md:mt-20">
        Featured projects
      </h2>
      <p data-reveal className="mt-4 max-w-prose text-[15px] leading-relaxed text-muted">
        Streamlit apps with live demos—click the title for the deployed app, or open the repo for source.
      </p>
      <div className="mt-8 grid gap-6">
        {featuredProjects.map((p, index) => (
          <div key={p.href} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }}>
            <FeaturedCard {...p} />
          </div>
        ))}
      </div>

      <p data-reveal className="mt-14 text-[14px] text-muted md:mt-16">
        More code and repositories:{' '}
        <a href={profile.github} className="link-editorial" target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
