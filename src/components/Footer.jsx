import { profile } from '../data/siteContent.js';

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-content px-5 py-12">
        <blockquote className="font-serif text-lg italic leading-relaxed text-muted md:text-xl">
          Build in public; ship small; learn continuously.
        </blockquote>
        <p className="mt-6 text-[14px] text-muted">— {profile.name}</p>
        <p className="mt-8 text-[12px] text-muted">
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
        <div className="nav-dot mt-6 flex flex-wrap text-[13px] text-muted">
          <a className="link-editorial" href={profile.github}>
            GitHub
          </a>
          <a className="link-editorial" href={profile.linkedin}>
            LinkedIn
          </a>
          <a className="link-editorial" href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
