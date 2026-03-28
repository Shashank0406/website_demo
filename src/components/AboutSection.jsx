import { about, profile } from '../data/siteContent.js';

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-about px-5 pb-20 md:px-6">
      <h1 className="font-serif text-lg font-semibold tracking-tight text-ink md:text-xl">About</h1>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(240px,34%)] lg:gap-x-12 lg:gap-y-0 xl:gap-x-16">
        <div className="about-editorial-prose min-w-0 space-y-8">
          {about.editorial.paragraphs.map((p, i) => (
            <p key={i}>
              {p.text}
              {p.footnote ? (
                <sup className="ml-0.5 align-super">
                  <a
                    href="#about-aside"
                    className="text-[0.7em] font-medium text-blue-600 no-underline hover:underline dark:text-blue-400"
                  >
                    1
                  </a>
                </sup>
              ) : null}
            </p>
          ))}
          <p className="pt-1">
            Find me on{' '}
            <a href={profile.github}>GitHub</a>, <a href={profile.linkedin}>LinkedIn</a>, and{' '}
            <a href={`mailto:${profile.email}`}>email</a>.
          </p>
        </div>

        <aside id="about-aside" className="scroll-mt-28 lg:max-w-none">
          <p className="mb-2 font-serif text-[13px] font-medium text-blue-600 dark:text-blue-400">1.</p>
          <img
            src={about.editorial.asideImage}
            alt=""
            className="aspect-[4/3] w-full rounded-lg border border-line/60 bg-line/20 object-cover shadow-sm"
          />
          <p className="about-editorial-aside-caption mt-3">{about.editorial.asideCaption}</p>
        </aside>
      </div>

      <div className="mt-20 border-t border-line pt-16 md:mt-24 md:pt-20">
        <h2 className="font-serif text-lg font-semibold text-ink">Professional summary</h2>
        <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-muted">
          {about.summary.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <h2 className="font-serif text-lg font-semibold text-ink">Experience</h2>
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
      </div>

      <div className="mt-16 md:mt-20">
        <h2 className="font-serif text-lg font-semibold text-ink">Education</h2>
        <ul className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted">
          {about.education.map((edu) => (
            <li key={edu.school}>
              <p className="font-medium text-ink">{edu.school}</p>
              <p className="mt-1">{edu.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <section id="resume-projects" className="mt-16 scroll-mt-8 md:mt-20">
        <h2 className="font-serif text-lg font-semibold text-ink">Projects & outside experience</h2>
        <ul className="mt-8 space-y-12">
          {about.resumeProjects.map((proj) => (
            <li key={proj.title}>
              <p className="font-serif text-[1.125rem] font-semibold text-ink">{proj.title}</p>
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

      <div className="mt-16 md:mt-20">
        <h2 className="font-serif text-lg font-semibold text-ink">Skills</h2>
        <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-muted">
          {about.skillCategories.map((cat) => (
            <li key={cat.label}>
              <span className="font-medium text-ink">{cat.label}:</span> {cat.items}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
