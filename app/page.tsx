import { Hero } from '@/app/components/Hero';
import { Showcase } from '@/app/components/Showcase';
import { Contact } from '@/app/components/Contact';
import { Features } from '@/app/components/Features';
import { Pricing } from '@/app/components/Pricing';
import logoText from '@/public/images/hero.svg';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex flex-col items-center gap-12 my-16'>
			<Hero />
			<Image src={logoText} alt='heart rate' className='w-screen' />
			<Showcase />
			<Contact />
			<Features />
			<Pricing />
		</main>
	);
}
