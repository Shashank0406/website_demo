import { featuredProjects } from '../data/siteContent.js';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'About',
    body: 'Engineering, systems thinking, and a focus on production AI.',
    meta: 'Career snapshot',
    to: '/about',
  },
  {
    title: 'Projects',
    body: 'GenAI apps, RAG systems, and deployed demos with source code.',
    meta: `${featuredProjects.length}+ featured builds`,
    to: '/projects',
  },
  {
    title: 'Work',
    body: 'AI, ML, MLOps, and analytics experience across enterprise teams.',
    meta: '4.5+ years of experience',
    to: '/work',
  },
  {
    title: 'Skills',
    body: 'LLMs, RAG, LangChain, Python, AWS, Docker, Kubernetes.',
    meta: 'Core stack',
    to: '/work#skills',
  },
];

export function Contents() {
  return (
    <section id="contents" className="mx-auto max-w-content px-5 pb-20 md:px-6 md:pb-24" aria-label="Site sections">
      <div data-reveal className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Link
            key={card.title}
            to={card.to}
            data-reveal
            style={{ '--reveal-delay': `${index * 90}ms` }}
            className="glass-panel glow-card rounded-[1.7rem] px-6 py-6 md:px-7"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-accent">{card.meta}</p>
            <h2 className="section-title mt-4 text-3xl font-semibold text-ink">{card.title}</h2>
            <p className="mt-3 max-w-sm text-[15px] leading-7 text-muted">{card.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
