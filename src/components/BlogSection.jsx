import { blogPosts, profile } from '../data/siteContent.js';

const externalLinkProps = { target: '_blank', rel: 'noopener noreferrer' };

export function BlogSection() {
  return (
    <section id="blog" className="mx-auto max-w-about px-5 pb-20 pt-10 md:px-6 md:pb-24 md:pt-16">
      <div data-reveal className="max-w-3xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-accent">Blog</p>
        <h1 className="section-title mt-5 text-5xl font-semibold tracking-[0.03em] text-ink md:text-6xl">
          Writing about AI systems, agents, and practical builds.
        </h1>
        <p className="mt-6 max-w-2xl text-[16px] leading-8 text-muted">
          A small reading list from my Medium profile. These posts cover applied GenAI, LLM agents, and shipping
          working prototypes.
        </p>
      </div>

      <div className="mt-10 grid gap-6">
        {blogPosts.map((post, index) => (
          <article
            key={post.href}
            data-reveal
            style={{ '--reveal-delay': `${index * 80}ms` }}
            className="glass-panel glow-card rounded-[1.8rem] p-6 md:p-8"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-accent">{post.tag}</p>
            <h2 className="section-title mt-3 text-[2rem] font-semibold text-ink">{post.title}</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">{post.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-4 text-[14px] font-medium">
              <a href={post.href} className="link-editorial" {...externalLinkProps}>
                Read on Medium →
              </a>
            </div>
          </article>
        ))}
      </div>

      <p data-reveal className="mt-12 text-[14px] text-muted">
        More writing on{' '}
        <a href="https://medium.com/@shashankkurakula5" className="link-editorial" target="_blank" rel="noreferrer">
          Medium
        </a>
        . More updates and links:{' '}
        <a href={profile.linkedin} className="link-editorial" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
}
