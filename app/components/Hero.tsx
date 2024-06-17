import Image from 'next/image';
import logoText from '@/public/images/hero.svg';

export function Hero() {
	return (
		<section className='flex w-full flex-col items-center gap-14'>
			<div className='flex w-full flex-col items-center gap-4'>
				<h1 className='text-6xl text-center font-bold'>
					Unlock Your <br /> Wellness while Streaming{' '}
				</h1>
				<p className='text-3xl text-center'>
					AI-Powered Heart & Stress Monitoring with Just Your Camera
				</p>
			</div>
			<Image src={logoText} alt='heart rate' layout='respensive' />
		</section>
	);
}
