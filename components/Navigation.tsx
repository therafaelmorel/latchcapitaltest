import Link from 'next/link';
import { BrandMark } from './BrandMark';

const links = [
  { href: '#thesis', label: 'Thesis' },
  { href: '#platform', label: 'Platform' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/portal', label: 'Portal' },
];

export function Navigation() {
  return (
    <header className="navShell">
      <div className="container navInner">
        <Link href="/" className="brandLink">
          <BrandMark />
        </Link>
        <nav className="navLinks" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>
        <Link className="btn navCta" href="/portal">Private Access</Link>
      </div>
    </header>
  );
}
