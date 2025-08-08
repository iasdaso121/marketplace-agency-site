import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "../lib/utils";
import { Sparkles } from "lucide-react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 rounded-xl neon-hover transition-colors",
        active ? "bg-white/15 text-white" : "hover:bg-white/10 text-white/80"
      )}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="glass flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="text-neon-purple" />
            <span className="font-semibold tracking-wide">Prime Analytics</span>
          </Link>
          <nav className="flex items-center gap-2">
            <NavLink href="/">Главная</NavLink>
            <NavLink href="/services">Услуги</NavLink>
            <NavLink href="/contacts">Контакты</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
