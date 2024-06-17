import { Hero } from '@/app/components/Hero';
import { Showcase } from '@/app/components/Showcase';
import { Contact } from '@/app/components/Contact';
import { Features } from '@/app/components/Features';
import { Pricing } from '@/app/components/Pricing';

export default function Home() {
	return (
		<main className='flex flex-col items-center gap-12 my-16 mx-20'>
			<Hero />
			<Showcase />
			<Contact />
			<Features />
			<Pricing />
		</main>
	);
}
