"use client";

import gsap from "gsap";
import { List, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CTAButton } from "@/components/ui/cta-button";
import { SimpleLink } from "@/components/ui/simple-link";
import { CAL_LINK } from "@/constants";
import { scrollToSectionByHref } from "@/lib/section-scroll";
import { cn } from "@/lib/utils";

const navLinks = [
	{ id: "about", label: "About" },
	{ id: "services", label: "Services" },
	{ id: "case-studies", label: "Case Studies" },
	{ id: "faq", label: "FAQ" },
	{ id: "pricing", label: "Pricing" },
] as const;

export function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
	const menuBackdropRef = useRef<HTMLDivElement>(null);
	const menuPanelRef = useRef<HTMLDivElement>(null);
	const mobileCtaCardRef = useRef<HTMLDivElement>(null);
	const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);

	const openMobileMenu = () => {
		setIsMobileMenuVisible(true);
		requestAnimationFrame(() => {
			setIsMobileMenuOpen(true);
		});
	};

	const closeMobileMenu = useCallback(() => {
		setIsMobileMenuOpen(false);
	}, []);

	useEffect(() => {
		if (!isMobileMenuVisible) {
			document.body.style.overflow = "";
			return;
		}

		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileMenuVisible]);

	useEffect(() => {
		if (!isMobileMenuVisible) {
			return;
		}

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeMobileMenu();
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [closeMobileMenu, isMobileMenuVisible]);

	useEffect(() => {
		const backdrop = menuBackdropRef.current;
		const panel = menuPanelRef.current;
		const ctaCard = mobileCtaCardRef.current;
		if (!(isMobileMenuVisible && backdrop && panel && ctaCard)) {
			return;
		}

		menuTimelineRef.current?.kill();

		if (isMobileMenuOpen) {
			gsap.set(backdrop, { autoAlpha: 0 });
			gsap.set(panel, { yPercent: -100 });
			gsap.set(ctaCard, { opacity: 0, y: 56, scale: 0.96 });

			const tl = gsap.timeline();
			tl.to(backdrop, { autoAlpha: 1, duration: 0.2, ease: "power2.out" });
			tl.to(panel, { yPercent: 0, duration: 0.28, ease: "power3.out" }, 0);
			tl.to(
				ctaCard,
				{ opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "back.out(1.5)" },
				0.14
			);
			menuTimelineRef.current = tl;
			return;
		}

		const tl = gsap.timeline({
			onComplete: () => {
				setIsMobileMenuVisible(false);
			},
		});
		tl.to(ctaCard, { opacity: 0, y: 40, duration: 0.16, ease: "power2.in" }, 0);
		tl.to(panel, { yPercent: -100, duration: 0.22, ease: "power2.in" });
		tl.to(backdrop, { autoAlpha: 0, duration: 0.2, ease: "power2.in" }, 0);
		menuTimelineRef.current = tl;
	}, [isMobileMenuOpen, isMobileMenuVisible]);

	const onDesktopSectionLinkClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => {
		event.preventDefault();
		const didScroll = scrollToSectionByHref(`/#${sectionId}`);
		if (!didScroll) {
			window.location.hash = sectionId;
		}
	};

	const onMobileSectionLinkClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => {
		event.preventDefault();
		const didScroll = scrollToSectionByHref(`/#${sectionId}`);
		if (!didScroll) {
			window.location.hash = sectionId;
		}
		closeMobileMenu();
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
								onClick={(event) => onDesktopSectionLinkClick(event, link.id)}
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
							onClick={() => {
								if (isMobileMenuVisible) {
									closeMobileMenu();
									return;
								}
								openMobileMenu();
							}}
							type="button"
						>
							{isMobileMenuVisible ? <X size={24} /> : <List size={24} />}
						</button>
					</div>
				</div>
			</div>

			{isMobileMenuVisible && (
				<>
					<div
						aria-hidden
						className="fixed inset-0 z-50 bg-foreground/20 lg:hidden"
						onClick={closeMobileMenu}
						ref={menuBackdropRef}
					/>
					<div
						className="fixed inset-0 z-60 flex h-dvh w-screen flex-col overflow-y-auto bg-dark px-8 py-8 text-dark-foreground lg:hidden"
						ref={menuPanelRef}
					>
						<div className="mb-8 flex items-center justify-between">
							<p className="font-mono text-dark-foreground/70 text-xs uppercase tracking-[0.2em]">
								Menu
							</p>
							<button
								aria-label="Close menu"
								className="rounded-md p-2 text-dark-foreground/85 transition-colors hover:text-dark-foreground"
								onClick={closeMobileMenu}
								type="button"
							>
								<X size={24} />
							</button>
						</div>

						<nav className="border-dark-foreground/25 border-b">
							{navLinks.map((link) => (
								<SimpleLink
									className="block border-dark-foreground/25 border-b py-5 font-medium text-dark-foreground text-lg leading-tight no-underline transition-colors hover:text-dark-foreground/80 hover:no-underline"
									href={`/#${link.id}`}
									key={link.id}
									onClick={(event) => onMobileSectionLinkClick(event, link.id)}
								>
									{link.label}
								</SimpleLink>
							))}
						</nav>

						<div className="mt-auto pt-8" ref={mobileCtaCardRef}>
							<div className="rounded-2xl bg-brand p-5 text-foreground">
								<p className="font-mono text-xs uppercase tracking-[0.18em]">
									Need help scoping?
								</p>
								<p className="mt-3 text-base leading-relaxed">
									Book a short call to discuss scope, timeline, and budget.
								</p>
								<CTAButton
									className="mt-5 rounded-xl bg-dark px-4 py-2 text-dark-foreground hover:bg-dark/90"
									href={CAL_LINK}
								>
									Book a free call
								</CTAButton>
							</div>
						</div>
					</div>
				</>
			)}
		</nav>
	);
}
