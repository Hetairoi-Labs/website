import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
	return (
		<AccordionPrimitive.Root
			className={cn("flex w-full flex-col", className)}
			data-slot="accordion"
			{...props}
		/>
	);
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
	return (
		<AccordionPrimitive.Item
			className={cn(className)}
			data-slot="accordion-item"
			{...props}
		/>
	);
}

function AccordionTrigger({
	className,
	children,
	...props
}: AccordionPrimitive.Trigger.Props) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				className={cn(
					"group/accordion-trigger inline-flex w-full items-start justify-between gap-6 rounded-lg text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/50",
					className
				)}
				data-slot="accordion-trigger"
				{...props}
			>
				{children}
				<span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-background/70 text-muted-foreground">
					<PlusIcon className="size-4 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
				</span>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent({
	className,
	children,
	...props
}: AccordionPrimitive.Panel.Props) {
	return (
		<AccordionPrimitive.Panel
			className="overflow-hidden data-closed:animate-accordion-up data-open:animate-accordion-down"
			data-slot="accordion-content"
			{...props}
		>
			<div
				className={cn(
					"h-(--accordion-panel-height) data-ending-style:h-0 data-starting-style:h-0",
					className
				)}
			>
				{children}
			</div>
		</AccordionPrimitive.Panel>
	);
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
