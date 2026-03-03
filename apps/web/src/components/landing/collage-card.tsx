"use client";

import type { Route } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import filosignImage from "@/assets/images/works/filosign.webp";
import haitheImage from "@/assets/images/works/haithe.webp";
import replycorpImage from "@/assets/images/works/replycorp.webp";
import { handleSectionLinkClick } from "@/lib/section-scroll";

interface WorkCollageCardProps {
	backgroundSrc: StaticImageData;
	href: Route;
	subtitle: string;
	title: string;
}

export function WorkCollageCard({
	backgroundSrc,
	title,
	subtitle,
	href,
}: WorkCollageCardProps) {
	return (
		<div className="group relative flex h-full min-h-100 flex-col overflow-hidden rounded-3xl bg-background p-6 md:p-8">
			<div className="absolute inset-0 z-0">
				<Image
					alt=""
					aria-hidden
					className="object-cover opacity-80"
					fill
					placeholder="blur"
					sizes="(max-width: 1024px) 100vw, 60vw"
					src={backgroundSrc}
				/>
			</div>
			<div className="relative z-20 mb-12 flex max-w-md flex-col gap-2">
				<h3 className="font-normal text-2xl text-foreground tracking-[-0.04em] md:text-3xl">
					{title}
				</h3>
				<Link
					className="w-fit border-foreground/40 border-b pb-1 text-base text-foreground transition-colors hover:border-foreground hover:text-foreground"
					href={href}
					onClick={(event) => {
						handleSectionLinkClick(event, href);
					}}
				>
					{subtitle}
				</Link>
			</div>

			<div className="absolute inset-0 h-full w-full overflow-hidden">
				<div className="absolute bottom-0 left-0 h-[65%] w-full">
					<div className="absolute top-[6%] left-[-5%] z-10 w-[65%] -rotate-6 rounded-xl border border-border/10 shadow-2xl lg:w-[50%]">
						<Image
							alt="Filosign project"
							className="h-auto w-full rounded-xl"
							height={600}
							placeholder="blur"
							sizes="(max-width: 1024px) 60vw, 30vw"
							src={filosignImage}
							width={800}
						/>
					</div>

					<div className="absolute top-[1%] right-[-20%] z-10 w-[65%] -rotate-8 rounded-xl border border-border/10 shadow-2xl lg:right-[-10%] lg:w-[55%]">
						<Image
							alt="Haithe project"
							className="h-auto w-full rounded-xl"
							height={600}
							placeholder="blur"
							sizes="(max-width: 1024px) 60vw, 33vw"
							src={haitheImage}
							width={800}
						/>
					</div>

					<div className="absolute top-[15%] left-[18%] z-20 w-[65%] -rotate-5 rounded-xl border border-border/10 shadow-2xl lg:w-[55%]">
						<Image
							alt="Replycorp project"
							className="h-auto w-full rounded-xl"
							height={600}
							placeholder="blur"
							sizes="(max-width: 1024px) 60vw, 33vw"
							src={replycorpImage}
							width={800}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
