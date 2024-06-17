import Image from 'next/image';
import logo from '@/public/logos/logo.svg';
import { Button } from '@/components/ui/button';

export function Showcase() {
	return (
		<section className='border-2 rounded-md flex gap-12 content-between items-center p-14'>
			<Image width={50} src={logo} alt='logo' />
			<p>
				Monitor your heart rate, stress levels, and breathing rate
				effortlessly with our AI-powered plugin. Just use your camera
				for real-time health insights. Stay informed and healthy
				anywhere, anytime.
			</p>
			<Button>WATCH DEMO</Button>
			<Button>DOWNLOADS</Button>
		</section>
	);
}
