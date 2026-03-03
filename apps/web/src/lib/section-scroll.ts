import ScrollSmoother from "gsap/ScrollSmoother";
import type React from "react";

const SECTION_HASH_PATTERN = /^\/?#(.+)$/;

function getSectionIdFromHref(href: string): string | null {
	const match = href.match(SECTION_HASH_PATTERN);
	if (!match) {
		return null;
	}

	return match[1] ?? null;
}

export function scrollToSectionByHref(href: string): boolean {
	const sectionId = getSectionIdFromHref(href);
	if (!sectionId) {
		return false;
	}

	const target = document.getElementById(sectionId);
	if (!target) {
		return false;
	}

	const smoother = ScrollSmoother.get();
	if (smoother) {
		smoother.scrollTo(target, true, "top top");
	} else {
		target.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	window.history.replaceState(null, "", `/#${sectionId}`);
	return true;
}

export function handleSectionLinkClick(
	event: React.MouseEvent<HTMLAnchorElement>,
	href: string,
	onAfterScroll?: () => void
): boolean {
	const didScroll = scrollToSectionByHref(href);
	if (!didScroll) {
		return false;
	}

	event.preventDefault();
	onAfterScroll?.();
	return true;
}
