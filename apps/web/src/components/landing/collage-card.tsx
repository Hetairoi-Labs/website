import Image from "next/image";

interface WorkCollageCardProps {
	backgroundSrc: string;
	href: string;
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
					sizes="(max-width: 1024px) 100vw, 60vw"
					src={backgroundSrc}
				/>
			</div>
			<div className="relative z-20 mb-12 flex max-w-md flex-col gap-2">
				<h3 className="font-normal text-2xl text-foreground tracking-[-0.04em] md:text-3xl">
					{title}
				</h3>
				<a
					className="w-fit border-foreground/40 border-b pb-1 text-base text-foreground transition-colors hover:border-foreground hover:text-foreground"
					href={href}
				>
					{subtitle}
				</a>
			</div>

			<div className="absolute inset-0 h-full w-full overflow-hidden">
				<div className="absolute bottom-0 left-0 h-[65%] w-full">
					<div className="absolute top-[6%] left-[-5%] z-10 w-[65%] -rotate-6 rounded-xl border border-border/10 shadow-2xl lg:w-[50%]">
						<Image
							alt="Filosign project"
							className="h-auto w-full rounded-xl"
							height={600}
							sizes="(max-width: 1024px) 60vw, 30vw"
							src="/images/works/filosign.png"
							width={800}
						/>
					</div>

					<div className="absolute top-[1%] right-[-20%] z-10 w-[65%] -rotate-8 rounded-xl border border-border/10 shadow-2xl lg:right-[-10%] lg:w-[55%]">
						<Image
							alt="Haithe project"
							className="h-auto w-full rounded-xl"
							height={600}
							sizes="(max-width: 1024px) 60vw, 33vw"
							src="/images/works/haithe.png"
							width={800}
						/>
					</div>

					<div className="absolute top-[15%] left-[18%] z-20 w-[65%] -rotate-5 rounded-xl border border-border/10 shadow-2xl lg:w-[55%]">
						<Image
							alt="Replycorp project"
							className="h-auto w-full rounded-xl"
							height={600}
							sizes="(max-width: 1024px) 60vw, 33vw"
							src="/images/works/replycorp.png"
							width={800}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
