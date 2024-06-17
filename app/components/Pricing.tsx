import { Ids } from '@/types';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Pricing() {
	return (
		<section
			id={Ids.Pricing}
			className='flex w-full flex-col  gap-12 items-center'>
			<h2 className='text-3xl font-bold self-start'>Pricing</h2>
			<div className='self-start'>
				<p className='text-3xl font-medium mb-3'>
					One Price for Everything
				</p>
				<p className='text-xl font-medium '>
					Track Your Vital Signs: Monitor breath rate, heart rate, and
					stress level for improved well-being.
				</p>
			</div>

			<div className='flex gap-14 items-center self-start'>
				<Card className='w-[700px]'>
					<CardHeader>
						<CardTitle>Pro</CardTitle>
					</CardHeader>
					<CardContent>
						Monitor your heart rate, stress levels, rate / Site /{' '}
						<br />
						Month ( Billed Monthly ) <br />
						Everything from Pro expect :
					</CardContent>
					<CardFooter>
						<div className='flex-col w-full gap-4'>
							<p>20$</p>
							<Button className='w-full'>Learn More</Button>
						</div>
					</CardFooter>
				</Card>
				<Card className='w-[480px]'>
					<CardHeader>
						<CardTitle>Basic</CardTitle>
					</CardHeader>
					<CardContent>
						Monitor your heart rate, stress levels, rate / Site /{' '}
						<br />
						Month ( Billed Monthly ) <br />
						Everything from Pro expect :
					</CardContent>
					<CardFooter>
						<div className='flex-col w-full gap-4'>
							<p>Free</p>
							<Button className='w-full' variant='outline'>
								Learn More
							</Button>
						</div>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
}
