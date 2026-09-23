export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 465 626" fill="currentColor" aria-hidden="true">
      <path d="M0 457 129 383v167L0 625z" />
      <path d="M166 365 296 290v261L166 626z" />
      <path d="M334 267 463 191v360L334 626z" />
      <path d="M132 275 282 184 210 155 465 0v146L132 345z" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="logo">
      <LogoMark className="logo-mark" />
      <span className="logo-word">
        IT <b>Rehub</b>
      </span>
    </span>
  );
}
