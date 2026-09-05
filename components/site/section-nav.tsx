"use client";

import { useEffect, useState } from "react";

export function SectionNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky top-14 z-30 -mx-6 overflow-x-auto border-b border-mist glass px-6 md:top-16">
      <nav className="container-x flex gap-1 px-0 py-2.5">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm transition-colors ${
              active === item.id
                ? "bg-ink text-paper"
                : "text-slate hover:text-ink"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
