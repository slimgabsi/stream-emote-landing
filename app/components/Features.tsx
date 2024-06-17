import Image from 'next/image';
import heartrate from '@/public/icons/heartrate.svg';
import breathe from '@/public/icons/breathe.svg';
import stressLevel from '@/public/icons/stress-level.svg';

import { Ids } from '@/types';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Features() {
	return (
		<section className='flex w-full flex-col  gap-12 items-center'>
			<h2 id={Ids.Features} className='text-3xl font-bold self-start'>
				Features
			</h2>
			<p className='text-3xl font-medium self-start'>
				Track Your Vital Signs: Monitor breath rate, heart rate, and
				stress <br />
				level for improved well-being.{' '}
			</p>
			<div className='flex gap-14 items-center'>
				<Card className='w-[480px]'>
					<CardHeader>
						<Image
							src={heartrate}
							alt='heartrate'
							width={60}
							className='mb-3'
						/>
						<CardTitle>Heartrate</CardTitle>
					</CardHeader>
					<CardContent>
						Monitor your heart rate, stress levels, and breathing
						rate effortlessly with our AI-powered plugin. Just use
						your camera for real-time health insights. Stay informed
						and healthy anywhere, anytime.
					</CardContent>
					<CardFooter>
						<Button variant='outline'>Learn More</Button>
					</CardFooter>
				</Card>
				<Card className='w-[480px]'>
					<CardHeader>
						<Image
							src={breathe}
							alt='Breathe'
							width={60}
							className='mb-3'
						/>
						<CardTitle>Breathe</CardTitle>
					</CardHeader>
					<CardContent>
						Monitor your heart rate, stress levels, and breathing
						rate effortlessly with our AI-powered plugin. Just use
						your camera for real-time health insights. Stay informed
						and healthy anywhere, anytime.
					</CardContent>
					<CardFooter>
						<Button variant='outline'>Learn More</Button>
					</CardFooter>
				</Card>
				<Card className='w-[480px]'>
					<CardHeader>
						<Image
							src={stressLevel}
							alt='heartrate'
							width={60}
							className='mb-3'
						/>
						<CardTitle>Stress level</CardTitle>
					</CardHeader>
					<CardContent>
						Monitor your heart rate, stress levels, and breathing
						rate effortlessly with our AI-powered plugin. Just use
						your camera for real-time health insights. Stay informed
						and healthy anywhere, anytime.
					</CardContent>
					<CardFooter>
						<Button variant='outline'>Learn More</Button>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
}
