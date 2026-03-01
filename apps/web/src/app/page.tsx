import { ScrollSmootherLayout } from "@/components/animations/scroll-smoother";
import { About } from "@/components/landing/about";
import { Contact } from "@/components/landing/contact";
import { FAQ } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { HowWeDeliver } from "@/components/landing/how-we-deliver";
import { OurVision } from "@/components/landing/our-vision";
import { Works } from "@/components/landing/works";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export default function Home() {
	return (
		<div className="min-h-screen bg-background font-sans text-foreground antialiased">
			<ScrollSmootherLayout>
				<Navigation />
				<main>
					<Hero />
					<About />
					<OurVision />
					<Works />
					<HowWeDeliver />
					<FAQ />
					<Contact />
					<Footer />
				</main>
			</ScrollSmootherLayout>
		</div>
	);
}
