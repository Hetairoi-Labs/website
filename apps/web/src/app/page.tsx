import { ScrollSmootherLayout } from "@/components/animations/scroll-smoother";
import { About } from "@/components/landing/about";
import { CtaSection } from "@/components/landing/cta-section";
import { FAQ } from "@/components/landing/faq";
import { HowWeDeliver } from "@/components/landing/how-we-deliver";
import { IntroSequence } from "@/components/landing/intro-sequence";
import { Pricing } from "@/components/landing/pricing";
import { Projects } from "@/components/landing/projects";
import { Services } from "@/components/landing/services";
import { Footer } from "@/components/layout/footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-background font-sans text-foreground antialiased">
			<ScrollSmootherLayout>
				<main>
					<IntroSequence />
					<About />
					<Services />
					<Projects />
					<HowWeDeliver />
					<FAQ />
					<Pricing />
					<CtaSection />
					<Footer />
				</main>
			</ScrollSmootherLayout>
		</div>
	);
}
