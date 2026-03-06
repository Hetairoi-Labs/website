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
		name: "Engineering Retainer",
		priceLabel: "$4,000",
		periodLabel: "/month",
		description:
			"Dedicated technical support and architectural guidance to keep your development team moving fast.",
		features: [
			"Weekly planning and code review sessions",
			"Direct help with complex technical roadblocks",
			"Continuous infrastructure and security monitoring",
			"Async support channel for your developers",
			"Perfect for startups needing senior engineering backup",
		],
	},
	{
		id: "delivery",
		name: "Core Development",
		priceLabel: "$12,000",
		periodLabel: "/project",
		description:
			"End-to-end engineering for a specific feature, MVP, or foundational product build.",
		highlight: true,
		features: [
			"Clear project scoping and milestone delivery",
			"Secure and scalable backend or smart contract development",
			"Setup of reliable testing and deployment pipelines",
			"Clean code handoff with full documentation",
			"Post-launch support to ensure system stability",
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
							Transparent starting points. Final scope tailored after discovery.
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
