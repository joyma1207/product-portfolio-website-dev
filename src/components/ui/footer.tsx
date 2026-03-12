"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
}

interface FooterLink {
  name: string;
  Icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
}

interface FooterColumn {
  title: string;
  titleHref?: string;
  links: FooterLink[];
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: {
    name: string;
    description: string;
  };
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  copyright?: string;
  onBrandClick?: () => void;
  onColumnTitleClick?: (href: string) => void;
}

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className, brand, socialLinks, columns, copyright, onBrandClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pt-24", className)}
        {...props}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: "var(--content-max-width)", paddingLeft: "var(--content-padding-x)", paddingRight: "var(--content-padding-x)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <a
                href="#"
                className="text-xl font-semibold"
                onClick={(e) => {
                  if (onBrandClick) {
                    e.preventDefault();
                    onBrandClick();
                  }
                }}
              >
                {brand.name}
              </a>
              <p className="text-sm text-foreground/60">
                {brand.description}
              </p>

              <p className="text-sm font-light text-foreground/55 mt-3.5">
                {socialLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <a
                      className="hover:text-foreground/90"
                      target="_blank"
                      href={link.href}
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                    {index < socialLinks.length - 1 && " • "}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="mt-16 flex flex-wrap justify-end gap-x-12 gap-y-8 lg:col-span-8 lg:mt-0">
              {columns.map(({ title, titleHref, links }) => (
                <div key={title}>
                  {titleHref ? (
                    <a
                      href={titleHref}
                      className="text-sm font-semibold hover:text-foreground/90"
                      onClick={(e) => {
                        if (onColumnTitleClick) {
                          e.preventDefault();
                          onColumnTitleClick(titleHref);
                        }
                      }}
                    >
                      {title}
                    </a>
                  ) : (
                    <h3 className="text-sm font-semibold">{title}</h3>
                  )}
                  <ul className="mt-4 space-y-2.5">
                    {links.map(({ name, Icon, href }) => (
                      <li key={name}>
                        <a
                          href={href || "#"}
                          className="text-sm transition-all text-foreground/60 hover:text-foreground/90 group"
                        >
                          {Icon && (
                            <Icon className="inline stroke-2 h-4 mr-1.5 transition-all stroke-foreground/60 group-hover:stroke-foreground/90" />
                          )}
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {copyright && (
            <div className="mt-20 border-t pt-6 pb-8">
              <p className="text-xs text-foreground/55">{copyright}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Footer.displayName = "Footer";
