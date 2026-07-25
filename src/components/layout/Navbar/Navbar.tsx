import { NavbarLogo } from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <NavbarLogo />

        <NavbarLinks />
      </div>
    </header>
  );
};