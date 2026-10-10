const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function IconBurger() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

export function IconGift() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <path d="M4 10h16v10H4z" />
      <path d="M2 6h20v4H2z" />
      <path d="M12 6v14" />
      <path d="M12 6C10 2 5 3 6 6M12 6c2-4 7-3 6 0" />
    </svg>
  );
}

export function IconSlots() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M8 10v4M12 10v4M16 10v4" />
    </svg>
  );
}

export function IconCards() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <rect x="3" y="6" width="12" height="15" rx="2" />
      <path d="M9 6V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-1" />
    </svg>
  );
}

export function IconCherry() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <circle cx="8" cy="17" r="3.5" />
      <circle cx="16" cy="18" r="3.5" />
      <path d="M8.5 13.5C10 8 13 5 17 4c-1 4-1 8-.8 11" />
    </svg>
  );
}

export function IconRocket() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <path d="M12 2c4 2 6 6 6 10l-3 3H9l-3-3c0-4 2-8 6-10z" />
      <circle cx="12" cy="9" r="2" />
      <path d="M9 15l-2 6 3-2 2 2 2-2 3 2-2-6" />
    </svg>
  );
}

export function IconDiamond() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20" />
    </svg>
  );
}

export function IconTrophy() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <path d="M8 21h8M12 17v4M8 4h8v5a4 4 0 0 1-8 0Vz" />
      <path d="M8 5H4a4 4 0 0 0 4 5M16 5h4a4 4 0 0 1-4 5" />
    </svg>
  );
}

export function IconCube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <path d="M12 2l9 5v10l-9 5-9-5V7z" />
      <path d="M12 12l9-5M12 12L3 7M12 12v10" />
    </svg>
  );
}

export function IconArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export function IconChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...stroke}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function IconStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8-6.1-3.5-6.1 3.5 1.4-6.8L2.2 9.1l6.9-.8z" />
    </svg>
  );
}
