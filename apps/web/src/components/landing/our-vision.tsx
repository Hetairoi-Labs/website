import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { Section } from "@/components/layout/section";

export function OurVision() {
	return (
		<Section className="bg-secondary pb-0 text-secondary-foreground lg:pb-0">
			<div className="-mx-4 grid min-h-[72vh] w-auto grid-cols-1 md:-mx-8 lg:-mx-16 lg:grid-cols-2">
				<div className="flex min-h-[50dvh] flex-col p-8 md:p-12 lg:pl-16">
					<StaggerText className="h-full" delay={0.15} triggerOnView>
						<StaggerItem>
							<h2 className="font-normal text-2xl text-foreground tracking-[-0.04em] md:text-3xl lg:text-5xl">
								Our Vision
							</h2>
						</StaggerItem>

						<StaggerItem>
							<p className="mt-8 max-w-xl text-foreground text-xl leading-relaxed md:text-2xl">
								Our vision is to empower brands to grow with clarity and
								purpose. We partner with clients to understand their goals and
								values, then create digital experiences that truly represent who
								they are and connect with the people they serve.
							</p>
						</StaggerItem>

						<StaggerItem>
							<div className="mt-8 flex items-center gap-4">
								<div className="flex flex-col">
									<span className="text-base text-foreground">Spandan</span>
									<span className="text-foreground/60 text-sm">
										Founder, Hetairoi
									</span>
								</div>
							</div>
						</StaggerItem>

						<StaggerItem>
							<div className="mt-auto pt-14">
								<div className="mb-3 flex items-center gap-3 text-base text-foreground">
									<span className="font-mono text-brand">■■■■■■■ ■■ ■■ ■■</span>
								</div>
								<p className="max-w-sm text-base text-foreground italic leading-relaxed">
									We&apos;ve guided 50+ businesses toward success, and
									we&apos;re ready for yours.
								</p>
							</div>
						</StaggerItem>
					</StaggerText>
				</div>

				<StaggerText className="h-full min-h-[460px]" delay={0.2} triggerOnView>
					<StaggerItem className="h-full">
						<div className="relative h-full min-h-[460px] overflow-hidden">
							<video
								autoPlay
								className="absolute inset-0 h-full w-full object-cover"
								loop
								muted
								playsInline
								src="/videos/our-vision.mp4"
							/>
						</div>
					</StaggerItem>
				</StaggerText>
			</div>
		</Section>
	);
}
