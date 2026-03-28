import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../theme/ThemeContext.jsx';

const OPTIONS = [
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
  { id: 'system', label: 'Auto' },
];

export function ThemeToggle() {
  const { preference, setPreference } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="theme-toggle">
      <button
        type="button"
        className="theme-toggle__trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change color theme"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="theme-toggle__glyph" aria-hidden="true" />
      </button>

      {open ? (
        <div className="theme-toggle__menu" role="menu" aria-label="Color theme">
          {OPTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="menuitemradio"
              aria-checked={preference === id}
              onClick={() => {
                setPreference(id);
                setOpen(false);
              }}
              className={`theme-toggle__option ${preference === id ? 'theme-toggle__option--active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
