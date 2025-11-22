import Link from 'next/link';
import { Orbit } from 'lucide-react';

export default function NavigationBar() {
  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Mentor', href: '#mentor' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <Orbit className="h-6 w-6 text-primary" />
          <span className="font-headline font-bold text-foreground">Showcase Sphere</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
