import Image from "next/image";
import fastTurnaroundsImage from "@/assets/images/how-we-deliver/fast-turnarounds.webp";
import gradientPeachImage from "@/assets/images/how-we-deliver/gradient-peach.webp";
import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { WorkCollageCard } from "@/components/landing/collage-card";
import { Section } from "@/components/layout/section";
import { GraphLine } from "@/components/ui/graph-line";
export function HowWeDeliver() {
	return (
		<Section className="py-0 lg:py-0">
			<div
				className="mx-auto flex max-w-7xl flex-col gap-12 py-12 lg:gap-16 lg:py-20"
				id="how-we-work"
			>
				<StaggerText className="flex flex-col items-center gap-4" delay={0.2}>
					<StaggerItem>
						<span className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
							Why Us?
						</span>
					</StaggerItem>
					<StaggerItem>
						<h2 className="text-center font-normal text-4xl text-foreground leading-[1.1] tracking-[-0.04em] lg:text-6xl">
							How we deliver better
							<br />
							work <span className="text-muted-foreground">that lasts</span>
						</h2>
					</StaggerItem>
				</StaggerText>

				<div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-5">
					<div className="flex flex-col gap-4 md:gap-6 lg:col-span-2">
						<StaggerText className="h-full" delay={0.2}>
							<StaggerItem className="h-full">
								<div className="relative flex h-[600px] flex-col justify-between overflow-hidden rounded-3xl bg-muted p-6 md:p-8">
									<div className="relative z-10 flex max-w-sm flex-col gap-4">
										<h3 className="font-normal text-2xl text-foreground tracking-[-0.04em] md:text-3xl">
											Performance First
										</h3>
										<p className="text-base text-foreground leading-relaxed md:text-lg">
											Low-latency engineering and high-throughput are
											prioritized across every system layer. Strategic resource
											utilization ensures core technology remains scalable and
											never bottlenecks growth.
										</p>
									</div>
									<div className="absolute bottom-0 left-0 h-full w-full">
										<Image
											alt="Red sports car representing speed"
											className="object-cover object-bottom"
											fill
											placeholder="blur"
											priority
											sizes="(max-width: 1024px) 100vw, 40vw"
											src={fastTurnaroundsImage}
										/>
									</div>
								</div>
							</StaggerItem>
						</StaggerText>

						<StaggerText className="h-full" delay={0.3}>
							<StaggerItem className="h-full">
								<div className="relative flex h-[300px] flex-col items-start overflow-hidden rounded-3xl bg-card p-6 md:p-8">
									<div className="relative z-10 flex max-w-md flex-col gap-4">
										<h3 className="font-normal text-2xl text-foreground tracking-[-0.04em] md:text-3xl">
											High Availability
										</h3>
										<p className="text-base text-foreground leading-relaxed md:text-lg">
											Commitment to 99.9% uptime for mission-critical
											infrastructure drives the architectural design. Systems
											are engineered for resilience, maintaining stability
											through extreme traffic spikes and protocol shifts.
										</p>
									</div>
									<div className="pointer-events-none absolute right-0 bottom-0 h-full w-full">
										<Image
											alt="Gradient peach"
											className="rotate-180 object-cover object-center opacity-50"
											fill
											placeholder="blur"
											sizes="(max-width: 1024px) 100vw, 40vw"
											src={gradientPeachImage}
										/>
									</div>
								</div>
							</StaggerItem>
						</StaggerText>
					</div>

					<div className="flex flex-col gap-4 md:gap-6 lg:col-span-3">
						<StaggerText delay={0.2}>
							<StaggerItem>
								<div className="relative flex h-[300px] flex-col overflow-hidden rounded-3xl bg-dark p-6 text-dark-foreground md:p-8">
									<div className="relative z-10 flex max-w-md flex-col gap-4">
										<h3 className="font-normal text-2xl text-dark-foreground tracking-[-0.04em] md:text-3xl">
											Technical Integrity
										</h3>
										<p className="text-base text-dark-foreground leading-relaxed md:text-lg">
											Maintainable, production-ready code is the baseline to
											eliminate technical debt from the outset.
											Longevity-focused engineering ensures technology provides
											momentum rather than architectural friction.
										</p>
									</div>
									<GraphLine />
								</div>
							</StaggerItem>
						</StaggerText>

						<StaggerText className="grow" delay={0.3}>
							<StaggerItem className="h-full">
								<WorkCollageCard
									backgroundSrc={gradientPeachImage}
									href="/#about"
									subtitle="Learn our process"
									title="Engineering Governance"
								/>
							</StaggerItem>
						</StaggerText>
					</div>
				</div>
			</div>
		</Section>
	);
}
