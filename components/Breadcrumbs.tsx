"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div style={{ backgroundColor: "#0A0F1E" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 py-3 flex-wrap"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <span key={item.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#A855F7" }}
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(229,231,235,0.5)", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight
                    size={14}
                    style={{ color: "rgba(229,231,235,0.3)" }}
                    aria-hidden="true"
                  />
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}