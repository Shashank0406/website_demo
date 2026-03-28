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
    <article className="group border-b border-line pb-8 pt-2 first:pt-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[12px] uppercase tracking-wide text-muted">
        <span>{tag}</span>
        <span className="tabular-nums">{date}</span>
      </div>
      <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight text-ink md:text-[1.35rem]">
        <a href={titleHref} className="hover:text-muted" {...externalLinkProps}>
          {title}
        </a>
      </h3>
      {blurb ? <p className="mt-2 max-w-prose text-[14px] text-muted">{blurb}</p> : null}
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
    <section id="work" className="mx-auto max-w-about px-5 pb-20 md:px-6">
      <h1 className="font-serif text-lg font-semibold tracking-tight text-ink md:text-xl">Work</h1>
      <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-muted">{workPage.intro}</p>

      <h2 className="mt-12 font-serif text-lg font-semibold text-ink md:mt-16">Experience</h2>
      <ul className="mt-8 space-y-12">
        {about.experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <p className="text-[12px] font-medium uppercase tracking-wide text-muted tabular-nums">{job.period}</p>
            <p className="mt-2 font-serif text-[1.125rem] font-semibold text-ink">{job.role}</p>
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

      <h2 className="mt-16 font-serif text-lg font-semibold text-ink md:mt-20">Featured projects</h2>
      <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-muted">
        Streamlit apps with live demos—click the title for the deployed app, or open the repo for source.
      </p>
      <div className="mt-8 space-y-0">
        {featuredProjects.map((p) => (
          <FeaturedCard key={p.href} {...p} />
        ))}
      </div>

      <p className="mt-14 text-[14px] text-muted md:mt-16">
        More code and repositories:{' '}
        <a href={profile.github} className="link-editorial">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
