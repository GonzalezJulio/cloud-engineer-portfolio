import { navbar } from "@/constants/navbar";

export const NavbarLogo = () => {
  return (
    <a
      href="#hero"
      className="flex items-center gap-4"
    >
      {/* Logo */}
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-sky-500/40
          bg-sky-500/10
          text-lg
          font-bold
          text-sky-400
          transition-all
          duration-300
          group-hover:rotate-3
        "
      >
        {navbar.logo.initials}
      </div>

      {/* Nombre */}
      <div className="hidden sm:block leading-tight">
        <h1 className="font-semibold text-white">
          {navbar.logo.name}
        </h1>

        <p className="text-sm text-zinc-400">
          {navbar.logo.role}
        </p>
      </div>
    </a>
  );
};