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
            <a href="https://medium.com/@shashankkurakula5" target="_blank" rel="noreferrer">
              Medium
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

      <div id="education" data-reveal className="mt-16 scroll-mt-28 md:mt-20">
        <h2 className="section-title text-3xl font-semibold text-ink">Education</h2>
        <ul className="mt-6 space-y-6 text-[15px] leading-relaxed text-muted">
          {about.education.map((edu, index) => (
            <li
              key={edu.school}
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` }}
              className="glass-panel rounded-[1.8rem] px-7 py-6 md:px-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <p className="text-[1.1rem] font-semibold text-ink md:text-[1.35rem]">{edu.school}</p>
                <span className="rounded-full border border-line px-4 py-1.5 text-[13px] font-medium text-muted">
                  {edu.period}
                </span>
              </div>
              <p className="mt-5 text-[16px] text-muted">
                {edu.degree}
                {edu.highlight ? <span className="font-semibold text-[#63efc3]"> {' '}•{' '}{edu.highlight}</span> : null}
              </p>
              <div className="mt-5 border-t border-line pt-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-muted">Relevant Coursework</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-lg border border-line bg-[rgba(121,148,255,0.08)] px-3 py-1.5 text-[13px] font-medium text-about-body"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
