import { profile } from '../data/siteContent.js';

export function Hero() {
  return (
    <section className="mx-auto max-w-content px-5 pb-10">
      <h1 className="font-serif text-2xl font-semibold uppercase tracking-tight text-ink md:text-3xl">{profile.name}</h1>
      <p className="mt-3 max-w-prose text-[15px] text-muted">
        {profile.title} · {profile.org}
      </p>
      <p className="mt-1 text-[14px] text-muted">{profile.location}</p>
      <p className="nav-dot mt-6 flex flex-wrap text-[14px] text-muted">
        <a className="link-editorial" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="link-editorial" href={profile.linkedin}>
          LinkedIn
        </a>
        <a className="link-editorial" href={profile.github}>
          GitHub
        </a>
      </p>
    </section>
  );
}
