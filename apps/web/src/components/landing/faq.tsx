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
		question: "What services do you offer?",
		answer:
			"We specialize in blockchain product engineering, full-stack web development, and AI-powered product delivery. From strategy to launch, we handle end-to-end execution.",
	},
	{
		id: "businesses",
		question: "What types of businesses do you work with?",
		answer:
			"We work with startups, growth-stage teams, and established companies that need strong technical execution for product delivery.",
	},
	{
		id: "timeline",
		question: "How long does a typical project take?",
		answer:
			"Most focused engagements ship in 4-12 weeks, depending on scope, integration complexity, and team dependencies.",
	},
	{
		id: "process",
		question: "What is your design and development process like?",
		answer:
			"We run a clear weekly cadence: scope alignment, fast implementation, async updates, and structured review checkpoints to keep decisions moving.",
	},
	{
		id: "support",
		question: "Do you offer ongoing support after launch?",
		answer:
			"Yes. We provide post-launch support for stabilization, iteration, and performance improvements based on real user behavior.",
	},
	{
		id: "start",
		question: "How do we get started?",
		answer:
			"Start with a short discovery call. We map your goals, identify delivery risks, and propose a practical execution plan.",
	},
	{
		id: "existing",
		question: "Do you work with existing products or only new builds?",
		answer:
			"Both. We can modernize and extend existing systems, or design and build a new product from zero to production.",
	},
] as const;

export function FAQ() {
	return (
		<Section className="pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-48" id="faq">
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
