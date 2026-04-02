import { Link, NavLink } from 'react-router-dom';
import { navItems, profile } from '../data/siteContent.js';

export function Nav() {
  return (
    <header className="sticky top-0 z-20 px-4 pt-5 md:px-6 md:pt-7">
      <div className="glass-panel mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 rounded-full px-5 py-3 md:px-7">
        <p className="font-serif text-xl font-semibold tracking-[0.01em] text-ink md:text-[1.7rem]">
          <Link to="/" className="link-editorial">
            ShashiVerse
          </Link>
        </p>

        <nav className="nav-dot flex w-full flex-wrap justify-center text-[13px] font-medium md:w-auto md:text-[15px]">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `link-editorial ${isActive ? 'text-ink' : 'text-muted'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
