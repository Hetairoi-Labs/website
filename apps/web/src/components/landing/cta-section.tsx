import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { Section } from "@/components/layout/section";
import { CAL_LINK } from "@/constants";
import { CTAButton } from "../ui/cta-button";

const headingGuideLines = [0, 1, 2, 3] as const;

export function CtaSection() {
	return (
		<Section className="relative -mt-16 mb-16 overflow-hidden" id="cta">
			<div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 md:gap-16">
				<div className="relative w-full">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 hidden h-full md:block"
					>
						<div className="flex h-full flex-col justify-center gap-10 lg:gap-12">
							{headingGuideLines.map((lineIndex) => (
								<div className="h-px w-full bg-border/90" key={lineIndex} />
							))}
						</div>
					</div>
					<StaggerText
						className="relative z-10 flex justify-center"
						delay={0.1}
					>
						<StaggerItem>
							<h2 className="text-center font-normal text-4xl text-foreground leading-[0.95] tracking-[-0.05em] md:text-8xl lg:text-6xl lg:text-[10rem]">
								Ready to start?
							</h2>
						</StaggerItem>
					</StaggerText>
				</div>

				<StaggerText
					className="flex max-w-2xl flex-col items-center gap-6 lg:items-start"
					delay={0.2}
					triggerOnView
				>
					<StaggerItem>
						<p className="text-center text-lg text-muted-foreground leading-relaxed md:text-3xl lg:text-left">
							Book a free call and tell us what are you working on. We will
							analyse your challenges and lay out a customized plan tailored to
							your needs.
						</p>
					</StaggerItem>
					<CTAButton href={CAL_LINK}>Book a Free Call</CTAButton>
				</StaggerText>
			</div>
		</Section>
	);
}
