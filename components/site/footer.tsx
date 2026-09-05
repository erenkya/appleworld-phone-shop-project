import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-mist bg-white">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-lg font-semibold text-ink">
              {site.name}
              <span className="ml-2 text-xs font-medium text-slate">
                {site.tagline}
              </span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              {site.address.line}, {site.address.district}
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-2 text-sm">
            <a
              href={site.phoneHref}
              className="block text-ink transition-colors hover:text-signal"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate transition-colors hover:text-ink"
            >
              {site.instagramHandle}
            </a>
            <a
              href={site.emailHref}
              className="block text-slate transition-colors hover:text-ink"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="hairline mt-12" />
        <p className="mt-6 text-xs text-slate">
          © {new Date().getFullYear()} {site.fullName}. Tüm hakları saklıdır.
          Apple ve ilgili ürün adları Apple Inc.'in ticari markalarıdır; Apple
          World bağımsız bir satış ve servis noktasıdır.
        </p>
      </div>
    </footer>
  );
}
