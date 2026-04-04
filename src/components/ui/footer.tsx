"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { SocialIcons } from "@/components/ui/social-icons";

interface SocialLink {
  name: string;
  href: string;
}

interface FooterLink {
  name: string;
  Icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
  /** When set, link is rendered as a button and this is called instead of navigating. */
  onClick?: () => void;
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
  /** Text links (e.g. "Email • LinkedIn"); ignored when socialEmail/socialLinkedIn are provided. */
  socialLinks: SocialLink[];
  /** When provided with socialLinkedIn, the SocialIcons pill is shown instead of socialLinks. */
  socialEmail?: string;
  socialLinkedIn?: string;
  socialGithub?: string;
  columns: FooterColumn[];
  copyright?: string;
  onBrandClick?: () => void;
  onColumnTitleClick?: (href: string) => void;
}

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className, brand, socialLinks, socialEmail, socialLinkedIn, socialGithub, columns, copyright, onBrandClick, onColumnTitleClick, ...props }, ref) => {
    const useSocialIcons = socialEmail != null && socialLinkedIn != null;
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
                className="text-2xl font-semibold"
                onClick={(e) => {
                  if (onBrandClick) {
                    e.preventDefault();
                    onBrandClick();
                  }
                }}
              >
                {brand.name}
              </a>
              <p className="text-base text-foreground/60">
                {brand.description}
              </p>

              <p className="mt-3 text-sm font-medium text-foreground/80">
                Review my resume or email me to talk about a role.
              </p>
              <div className="mt-2.5">
                {useSocialIcons ? (
                  <SocialIcons
                    email={socialEmail}
                    linkedIn={socialLinkedIn}
                    github={socialGithub}
                  />
                ) : (
                  <p className="text-base font-light text-foreground/55">
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
                )}
              </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-start gap-x-12 gap-y-8 lg:col-span-8 lg:mt-0 lg:justify-end">
              {columns.map(({ title, titleHref, links }) => (
                <div key={title}>
                  {titleHref && onColumnTitleClick ? (
                    <button
                      type="button"
                      className="text-base font-semibold hover:text-foreground/90 text-left bg-transparent border-none cursor-pointer p-0"
                      onClick={() => onColumnTitleClick(titleHref)}
                    >
                      {title}
                    </button>
                  ) : titleHref ? (
                    <a href={titleHref} className="text-base font-semibold hover:text-foreground/90">
                      {title}
                    </a>
                  ) : (
                    <h3 className="text-base font-semibold">{title}</h3>
                  )}
                  <ul className="mt-4 space-y-2.5">
                    {links.map(({ name, Icon, href, onClick }) => (
                      <li key={name}>
                        {onClick ? (
                          <button
                            type="button"
                            onClick={onClick}
                            className="text-base transition-all text-foreground/60 hover:text-foreground/90 group text-left bg-transparent border-none cursor-pointer p-0"
                          >
                            {Icon && (
                              <Icon className="inline stroke-2 h-4 mr-1.5 transition-all stroke-foreground/60 group-hover:stroke-foreground/90" />
                            )}
                            {name}
                          </button>
                        ) : (
                          <a
                            href={href || "#"}
                            className="text-base transition-all text-foreground/60 hover:text-foreground/90 group"
                          >
                            {Icon && (
                              <Icon className="inline stroke-2 h-4 mr-1.5 transition-all stroke-foreground/60 group-hover:stroke-foreground/90" />
                            )}
                            {name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {copyright && (
            <div className="mt-20 border-t pt-6 pb-8 text-left">
              <p className="text-sm text-foreground/55">{copyright}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Footer.displayName = "Footer";
