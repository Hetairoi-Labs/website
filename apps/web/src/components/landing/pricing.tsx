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
		name: "Technical Retainer",
		priceLabel: "$5,000",
		periodLabel: "/month",
		description:
			"Ongoing architectural oversight and engineering support for teams requiring consistent technical momentum.",
		features: [
			"Weekly sprint cadence with a prioritized technical backlog",
			"Architectural guidance and protocol-level implementation support",
			"Weekly updates with dedicated asynchronous collaboration",
			"Proactive infrastructure health and dependency security audits",
			"Ideal for scaling teams requiring high-level technical direction",
		],
	},
	{
		id: "delivery",
		name: "Production Delivery",
		priceLabel: "$15,000",
		periodLabel: "/project",
		description:
			"Milestone-driven product engineering with integrated automated QA and 99.9% uptime targets.",
		highlight: true,
		features: [
			"Outcome-based scoping for full-stack build execution",
			"Implementation of low-latency and scalable system architectures",
			"Integrated CI/CD pipelines and automated testing frameworks",
			"Predictable handoffs with structured architectural reviews",
			"Post-launch stabilization and performance monitoring",
		],
	},
	{
		id: "custom",
		name: "Strategic Infrastructure",
		priceLabel: "Custom",
		periodLabel: "",
		description:
			"For complex integrations, strict compliance requirements, or cross-ecosystem protocol engineering.",
		features: [
			"Tailored delivery scope with multi-phased execution plans",
			"Compliance-aware architecture for high-stakes environments",
			"Complex systems integration across product ecosystems",
			"Engineering governance for high-security, multi-team programs",
			"Custom infrastructure scaling and failover strategy",
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
						<h2 className="max-w-md font-normal text-4xl text-foreground leading-[0.95] tracking-[-0.04em] md:text-6xl">
							Choose a plan that fits
						</h2>
						<p className="mt-5 max-w-xl text-base text-muted-foreground leading-relaxed md:text-lg">
							Transparent starting points. Final scope is tailored after
							discovery.
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
