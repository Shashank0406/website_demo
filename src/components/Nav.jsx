import { Link, NavLink } from 'react-router-dom';
import { navItems, profile } from '../data/siteContent.js';
import { ThemeToggle } from './ThemeToggle.jsx';

export function Nav() {
  return (
    <header className="mx-auto max-w-content px-5 pt-10 pb-8 md:pt-14">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <p className="font-serif text-xl tracking-tight text-ink md:text-2xl">
          <Link to="/" className="link-editorial decoration-transparent hover:decoration-line">
            {profile.name}
          </Link>
        </p>
        <ThemeToggle />
      </div>
      <nav className="nav-dot mt-6 flex flex-wrap items-center text-[13px] font-medium">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `link-editorial decoration-transparent hover:decoration-line ${isActive ? 'text-ink' : 'text-muted'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
