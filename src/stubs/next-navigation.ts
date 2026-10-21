// Stub for Next.js navigation hooks when using @vercel/analytics in non-Next.js projects
// These exports are required by @vercel/analytics/next but not used in React/Vite projects

export function useParams() {
  return {};
}

export function usePathname() {
  return "/";
}

export function useSearchParams() {
  return new URLSearchParams();
}
