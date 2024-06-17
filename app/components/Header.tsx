import Image from 'next/image';
import logoText from '@/public/logos/logo-text.svg';
import Link from 'next/link';
import { Ids } from '@/types';

export function Header() {
	return (
		<header className='flex align-middle justify-between my-8 mx-20'>
			<Image width={232} src={logoText} alt='logo' />
			<nav className='flex gap-4'>
				<Link className='text-lg' href={Ids.Pricing}>
					Pricing
				</Link>
				<Link className='text-lg' href={Ids.Features}>
					Features
				</Link>
				<Link className='text-lg' href={Ids.About}>
					About
				</Link>
			</nav>
		</header>
	);
}
