import { Link } from 'react-router-dom';

export function Contents() {
  return (
    <nav id="contents" className="mx-auto max-w-content px-5 pb-10" aria-label="Site sections">
      <p className="text-[12px] font-medium uppercase tracking-wide text-muted">On this site</p>
      <ul className="nav-dot mt-3 flex flex-wrap text-[14px] text-ink">
        <li>
          <Link className="link-editorial" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link-editorial" to="/about#resume-projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link-editorial" to="/work">
            Work
          </Link>
        </li>
      </ul>
    </nav>
  );
}
