import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left panel - branding/decorative (hidden on mobile) */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-10 text-white lg:flex dark:from-violet-900 dark:via-purple-900 dark:to-indigo-950">
        {/* Background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 h-64 w-64 -translate-y-1/2 rounded-full bg-white/15 blur-3xl" />
        </div>

        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 6.601 6.601 0 0 0 9 11.5a4.562 4.562 0 0 0 6.362-6.286z" />
            </svg>
          </div>
          <span className="text-xl font-semibold tracking-tight">
            Virlo
          </span>
        </Link>

        {/* Tagline / Quote */}
        <div className="relative z-10 space-y-6">
          <blockquote className="space-y-3">
            <p className="text-2xl leading-relaxed font-medium">
              &ldquo;Virlo helped me grow my audience 3x in just 30 days.
              The algorithm warm-up strategy is a game changer.&rdquo;
            </p>
            <footer className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm" />
              <div>
                <p className="text-sm font-medium">Sarah Chen</p>
                <p className="text-sm text-white/70">
                  Creator, 250K followers
                </p>
              </div>
            </footer>
          </blockquote>
        </div>

        {/* Bottom note */}
        <p className="relative z-10 text-sm text-white/60">
          Trusted by 10,000+ creators worldwide
        </p>
      </div>

      {/* Right panel - form */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-[420px]">{children}</div>
      </div>
    </div>
  );
}
