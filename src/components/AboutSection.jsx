import { about, profile } from '../data/siteContent.js';

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-about px-5 pb-20 pt-10 md:px-6 md:pb-24 md:pt-16">
      <div data-reveal className="max-w-3xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-accent">About</p>
        <h1 className="section-title mt-5 text-5xl font-semibold tracking-[0.03em] text-ink md:text-6xl">
          Building AI systems that move from experiment to production.
        </h1>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(240px,34%)] lg:gap-x-12 lg:gap-y-0 xl:gap-x-16">
        <div data-reveal className="glass-panel about-editorial-prose min-w-0 rounded-[2rem] p-7 space-y-8 md:p-9">
          {about.editorial.paragraphs.map((p, i) => (
            <p key={i}>{p.text}</p>
          ))}
          <p className="pt-1">
            Find me on{' '}
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            ,{' '}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            , and{' '}
            <a href={`mailto:${profile.email}`}>email</a>.
          </p>
        </div>

        <aside id="about-aside" data-reveal style={{ '--reveal-delay': '90ms' }} className="scroll-mt-28 lg:max-w-none">
          <img
            src={about.editorial.asideImage}
            alt=""
            className="glass-panel aspect-[4/3] w-full rounded-[2rem] object-cover p-3"
          />
          <p className="about-editorial-aside-caption mt-3">{about.editorial.asideCaption}</p>
        </aside>
      </div>

      <div data-reveal className="mt-16 md:mt-20">
        <h2 className="section-title text-3xl font-semibold text-ink">Education</h2>
        <ul className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted">
          {about.education.map((edu) => (
            <li key={edu.school} className="glass-panel rounded-[1.4rem] px-5 py-4">
              <p className="font-medium text-ink">{edu.school}</p>
              <p className="mt-1">{edu.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <section id="resume-projects" data-reveal className="mt-16 scroll-mt-8 md:mt-20">
        <h2 className="section-title text-3xl font-semibold text-ink">Projects & outside experience</h2>
        <ul className="mt-8 space-y-12">
          {about.resumeProjects.map((proj, index) => (
            <li
              key={proj.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` }}
              className="glass-panel rounded-[1.8rem] p-6 md:p-8"
            >
              <p className="section-title text-[1.9rem] font-semibold text-ink">{proj.title}</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-wide text-muted tabular-nums">{proj.period}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted">
                {proj.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
