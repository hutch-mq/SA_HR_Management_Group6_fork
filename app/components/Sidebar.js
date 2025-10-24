'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ role, roleKey, items }) {
  const pathname = usePathname();
  const isActive = (href) => pathname === href || pathname.startsWith(href + '/');

  return (
    <aside className="sidenav" aria-label="Sidebar">
      <Link href={`/${roleKey}/profile`} className="profile" aria-label="Open profile">
        <div className="avatar" />
        <div>
          <div className="brand-text">Somchai Rakdee</div>
          <div className="muted">somchai@company.com</div>
        </div>
      </Link>

      <div className="muted">บทบาท: {role}</div>

      {items.map((it) => {
        const active = isActive(it.href);
        return (
          <Link
            key={it.href}
            href={it.href}
            className={`navitem${active ? ' active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span>{it.label}</span>
          </Link>
        );
      })}

      <div style={{ flex: 1 }} />
    </aside>
  );
}
