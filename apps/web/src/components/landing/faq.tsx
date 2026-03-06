import { Section } from "@/components/layout/section";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
	{
		id: "services",
		question: "What technical domains are supported?",
		answer:
			"We specialize in LLM orchestration (RAG), EVM/Rust smart contracts, and high-availability distributed systems. Our deliverables focus on Layer 2 scaling, secure API architectures, and production-grade AI integration.",
	},
	{
		id: "businesses",
		question: "What organizations are the primary focus?",
		answer:
			"Engagements center on high-stakes Web3 protocols, enterprise AI initiatives, and growth-stage teams requiring architectural rigor and 99.9% uptime reliability.",
	},
	{
		id: "timeline",
		question: "How are delivery timelines managed?",
		answer:
			"Focused engagements typically reach production in 4-12 weeks. Velocity is maintained via automated CI/CD workflows and modular design to ensure rapid shipping without accumulating technical debt.",
	},
	{
		id: "support",
		question: "How are SLAs and post-launch stability handled?",
		answer:
			"Post-launch maintenance is governed by Service Level Agreements covering 24/7 monitoring, security patching, and proactive infrastructure optimizations based on real-time system load.",
	},
	{
		id: "start",
		question: "How does the engagement process begin?",
		answer:
			"Onboarding begins with a technical discovery phase and architectural audit. This identifies delivery risks and aligns system requirements with long-term operational and growth goals.",
	},
	{
		id: "existing",
		question: "Is the focus on greenfield builds or legacy systems?",
		answer:
			"Capabilities cover building from zero and modernizing legacy codebases. Refactoring focuses on eliminating technical debt and restoring system agility to existing infrastructure.",
	},
] as const;

export function FAQ() {
	return (
		<Section className="lg:py-20" id="faq">
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[0.5fr_1fr] lg:gap-20">
				<div className="lg:sticky lg:top-24">
					<p className="mb-5 font-mono text-muted-foreground text-xs uppercase tracking-[0.24em]">
						FAQ&apos;S
					</p>
					<h1 className="max-w-md font-normal text-4xl text-foreground leading-[0.95] tracking-[-0.04em] md:text-5xl">
						Frequently asked questions
					</h1>
					<p className="mt-8 max-w-sm text-lg text-muted-foreground leading-relaxed">
						Not sure about something? Check our FAQ for quick answers and
						helpful details.
					</p>
				</div>

				<Accordion className="gap-4" defaultValue={["services"]}>
					{faqItems.map((item) => (
						<AccordionItem
							className="overflow-hidden rounded-xl bg-muted"
							key={item.id}
							value={item.id}
						>
							<AccordionTrigger className="flex items-center justify-between p-5 md:p-6">
								<span className="pr-2 font-normal text-foreground text-lg leading-tight md:text-xl">
									{item.question}
								</span>
							</AccordionTrigger>
							<AccordionContent className="px-5 pb-5 md:px-6 md:pb-6">
								<p className="max-w-3xl text-base text-foreground/85 leading-relaxed md:text-[1.125rem]">
									{item.answer}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</Section>
	);
}
