"use client";

import { List, X } from "lucide-react";
import { useState } from "react";
import { CTAButton } from "@/components/ui/cta-button";
import { SimpleLink } from "@/components/ui/simple-link";
import { CAL_LINK } from "@/constants";
import { handleSectionLinkClick } from "@/lib/section-scroll";
import { cn } from "@/lib/utils";

const navLinks = [
	{ id: "about", label: "About" },
	{ id: "services", label: "Services" },
	{ id: "projects", label: "Projects" },
	{ id: "how-we-work", label: "How We Work" },
	{ id: "faq", label: "FAQ" },
	{ id: "pricing", label: "Pricing" },
] as const;

export function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const onSectionLinkClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => {
		handleSectionLinkClick(event, `/#${sectionId}`, () => {
			setIsMobileMenuOpen(false);
		});
	};

	return (
		<nav className={cn("absolute top-0 left-0 z-50 w-full px-8 py-8 lg:px-16")}>
			<div className="mx-auto max-w-7xl">
				<div className="flex w-full flex-row items-start justify-between">
					<div
						className="translate-y-10 pt-2 opacity-0"
						data-intro-item
						data-intro-order="1"
					>
						<SimpleLink
							className="font-medium text-foreground text-lg tracking-tight no-underline hover:no-underline"
							href="/"
						>
							Hetairoi®
						</SimpleLink>
					</div>

					<div
						className="hidden translate-y-10 items-center gap-8 rounded-2xl bg-secondary p-6 pr-6 opacity-0 lg:flex"
						data-intro-item
						data-intro-order="2"
					>
						{navLinks.map((link) => (
							<SimpleLink
								className="font-medium text-sm no-underline transition-colors hover:text-muted-foreground hover:no-underline"
								href={`/#${link.id}`}
								key={link.id}
								onClick={(event) => onSectionLinkClick(event, link.id)}
							>
								{link.label}
							</SimpleLink>
						))}

						<CTAButton href={CAL_LINK}>Schedule a Call</CTAButton>
					</div>

					<div
						className="translate-y-10 opacity-0 lg:hidden"
						data-intro-item
						data-intro-order="2"
					>
						<button
							aria-label="Toggle menu"
							className="p-2 text-foreground"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							type="button"
						>
							{isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
						</button>
					</div>
				</div>

				{isMobileMenuOpen && (
					<div className="mt-4 flex flex-col gap-4 rounded-2xl bg-secondary p-5 lg:hidden">
						{navLinks.map((link) => (
							<SimpleLink
								className="font-medium text-base no-underline transition-colors hover:text-muted-foreground hover:no-underline"
								href={`/#${link.id}`}
								key={link.id}
								onClick={(event) => onSectionLinkClick(event, link.id)}
							>
								{link.label}
							</SimpleLink>
						))}
						<CTAButton className="mt-2" href={CAL_LINK}>
							Schedule a Call
						</CTAButton>
					</div>
				)}
			</div>
		</nav>
	);
}
