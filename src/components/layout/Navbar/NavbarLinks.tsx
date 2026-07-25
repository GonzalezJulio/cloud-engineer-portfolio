import { navbar } from "@/constants/navbar";

export const NavbarLinks = () => {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navbar.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="text-sm font-medium text-zinc-300 transition hover:text-sky-400"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};