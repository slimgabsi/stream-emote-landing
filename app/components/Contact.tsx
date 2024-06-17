import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Ids } from '@/types';
import arrow from '@/public/icons/arrow-right.svg';

export function Contact() {
	return (
		<section
			id={Ids.About}
			className='flex gap-12 content-between items-center p-14 w-full flex-col'>
			<p className='text-3xl'>Get Started Now, Get a first access!</p>

			<div className='flex w-full max-w-sm items-center space-x-2 font-medium'>
				<Input type='email' placeholder='Email' />
				<Button type='submit'>
					Send
					<Image src={arrow} alt='arrow' className='ml-2' />
				</Button>
			</div>
		</section>
	);
}
