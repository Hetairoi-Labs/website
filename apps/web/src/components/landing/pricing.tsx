import type { Route } from "next";
import Link from "next/link";
import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { Section } from "@/components/layout/section";
import { CAL_LINK } from "@/constants";
import { cn } from "@/lib/utils";

interface PricingPlan {
	description: string;
	features: string[];
	highlight?: boolean;
	id: string;
	name: string;
	periodLabel: string;
	priceLabel: string;
}

const pricingPlans: PricingPlan[] = [
	{
		id: "retainer",
		name: "Tier 1 — MVP & product",
		priceLabel: "$3,000",
		periodLabel: "/month",
		description:
			"Focused monthly cadence for MVPs, pilots, and iterative product work—design through shipped increments.",
		features: [
			"Scoped milestones toward a shippable MVP or next release",
			"Architecture and implementation for web, backend, or on-chain surfaces",
			"Weekly syncs plus async collaboration on priorities",
			"Testing, CI, and deployment kept production-ready",
		],
	},
	{
		id: "delivery",
		name: "End-to-end projects",
		priceLabel: "$8,000",
		periodLabel: "/project",
		description:
			"Full delivery for a defined build—from discovery and build to handoff—with clear milestones and ownership.",
		highlight: true,
		features: [
			"Discovery, spec, and milestone plan before build starts",
			"Automated testing and deployment pipelines you can run",
			"Documentation and clean handoff for your team",
			"Stabilization window after launch",
		],
	},
	{
		id: "custom",
		name: "Custom Infrastructure",
		priceLabel: "Custom",
		periodLabel: "",
		description:
			"For complex Web3 integrations, heavy AI orchestration, or enterprise-scale protocols.",
		features: [
			"Multi-phase execution for large-scale builds",
			"High-security architecture for sensitive data",
			"Cross-chain or multi-platform system integration",
			"Advanced scaling and disaster recovery plans",
			"Dedicated project management and strict QA testing",
		],
	},
] as const;

export function Pricing() {
	return (
		<Section className="pt-0 lg:pt-0">
			<div
				className="mx-auto flex w-full max-w-7xl flex-col gap-10 pt-12 md:gap-14 lg:pt-20"
				id="pricing"
			>
				<StaggerText
					className="grid grid-cols-1 gap-6 lg:grid-cols-[150px_1fr]"
					delay={0.1}
					triggerOnView
				>
					<StaggerItem>
						<p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
							Pricing
						</p>
					</StaggerItem>
					<StaggerItem>
						<h2 className="max-w-2xl font-normal text-4xl text-foreground leading-[0.95] tracking-[-0.04em] md:text-6xl">
							Engagement models
						</h2>
						<p className="mt-5 max-w-xl text-base text-muted-foreground leading-relaxed md:text-lg">
							MVP and product work from $3,000/month. End-to-end projects from
							$6,000. Custom engagements by quote.
						</p>
					</StaggerItem>
				</StaggerText>

				<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
					{pricingPlans.map((plan, index) => (
						<StaggerText
							className="h-full"
							delay={0.15 + index * 0.05}
							key={plan.id}
							triggerOnView
						>
							<StaggerItem className="h-full">
								<article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
									<div className="flex min-h-62 flex-col gap-6 p-6 md:min-h-68 md:p-8">
										<p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
											<span className="text-foreground">{plan.name}</span>{" "}
											{plan.id !== "custom" && (
												<span className="font-sans text-muted-foreground lowercase">
													starting at
												</span>
											)}
										</p>
										<p className="flex items-end gap-2">
											<span className="font-normal text-4xl text-foreground tracking-[-0.03em] md:text-5xl lg:text-6xl">
												{plan.priceLabel}
											</span>
											<span className="pb-2 font-mono text-muted-foreground text-sm uppercase tracking-[0.15em]">
												{plan.periodLabel}
											</span>
										</p>
										<p className="max-w-sm text-base text-foreground/80 leading-relaxed md:text-lg">
											{plan.description}
										</p>
									</div>

									<Link
										className={cn(
											"group -mt-4 flex w-full items-center justify-center gap-2 border-border border-y px-6 py-4 text-center font-mono text-background text-sm uppercase tracking-[0.2em] transition-colors md:px-8 md:text-base",
											plan.highlight
												? "bg-brand hover:bg-brand/90"
												: "bg-foreground hover:bg-foreground/90"
										)}
										href={CAL_LINK as Route}
										rel="noopener noreferrer"
										target="_blank"
									>
										{plan.id === "custom" ? "Book an audit" : "Get Started"}
									</Link>

									<ul className="flex flex-col gap-4 p-6 pt-7 md:p-8">
										{plan.features.map((feature) => (
											<li className="flex items-start gap-3" key={feature}>
												<span
													aria-hidden
													className={cn(
														"mt-2.5 block size-2 shrink-0",
														plan.highlight ? "bg-brand" : "bg-foreground"
													)}
												/>
												<span className="text-base text-foreground/85 leading-relaxed md:text-lg">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</article>
							</StaggerItem>
						</StaggerText>
					))}
				</div>
			</div>
		</Section>
	);
}
