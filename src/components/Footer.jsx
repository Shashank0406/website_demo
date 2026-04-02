import { profile } from '../data/siteContent.js';

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-4 md:px-6 md:pb-14">
      <div className="glass-panel mx-auto max-w-content rounded-[2rem] px-6 py-10 md:px-10">
        <blockquote data-reveal className="section-title text-2xl italic leading-relaxed text-about-body md:text-4xl">
          From prompts to production pipelines.
        </blockquote>
        <p data-reveal style={{ '--reveal-delay': '70ms' }} className="mt-4 text-[14px] text-muted">
          {profile.name}
        </p>
        <div
          data-reveal
          style={{ '--reveal-delay': '120ms' }}
          className="nav-dot mt-6 flex flex-wrap text-[14px] text-muted"
        >
          <a className="link-editorial" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="link-editorial" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="link-editorial" href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
        <p data-reveal style={{ '--reveal-delay': '170ms' }} className="mt-8 text-[12px] text-muted">
          © {new Date().getFullYear()} {profile.name}. Connect via{' '}
          <a className="link-editorial" href={`mailto:${profile.email}`}>
            email
          </a>
          ,{' '}
          <a className="link-editorial" href={profile.linkedin}>
            LinkedIn
          </a>
          , or{' '}
          <a className="link-editorial" href={profile.github}>
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
