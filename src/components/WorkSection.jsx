import { about, workPage } from '../data/siteContent.js';

export function WorkSection() {
  const coreSkills = [
    'LLMs',
    'RAG',
    'LangChain',
    'Python',
    'AWS',
    'Docker',
    'Kubernetes',
  ];

  const toolStack = about.skillCategories.filter((category) =>
    [
      'Agentic AI & orchestration',
      'Languages & frameworks',
      'Workflow orchestration',
      'LLMs & GenAI',
      'Generative AI',
      'Cloud platforms',
      'Production ML',
      'CI/CD',
      'Monitoring',
      'Collaboration & VCS',
      'Data engineering',
      'Visualization',
      'NLP',
    ].includes(category.label)
  );

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

      <section id="skills" data-reveal className="mt-16 scroll-mt-28 md:mt-20">
        <h2 className="section-title text-3xl font-semibold text-ink">Skills</h2>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-muted">
          Core strengths I use most often in production AI, applied ML, and deployment workflows.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {coreSkills.map((skill, index) => (
            <span
              key={skill}
              data-reveal
              style={{ '--reveal-delay': `${index * 50}ms` }}
              className="glass-panel rounded-full px-4 py-2 text-[13px] font-medium text-ink"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section data-reveal className="mt-16 md:mt-20">
        <h2 className="section-title text-3xl font-semibold text-ink">Tools / Stack</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {toolStack.map((category, index) => (
            <div
              key={category.label}
              data-reveal
              style={{ '--reveal-delay': `${index * 50}ms` }}
              className="glass-panel rounded-[1.4rem] px-5 py-5"
            >
              <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-accent">{category.label}</p>
              <p className="mt-3 text-[15px] leading-7 text-muted">{category.items}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
