import { Alert } from '@/componenets/bootstrap';
import { UnsplashImage } from '@/models/unsplash-image';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	title: 'ISR Page- Incrimental Static Regeneration'
};

export const revalidate = 15;
const page = async () => {
	const response = await fetch(
		'https://api.unsplash.com/photos/random?client_id=' +
			process.env.UNSPLASH_ACCESS_KEY
	);
	const image: UnsplashImage = await response.json();
	const width = Math.min(500, image.width);
	const height = (width / image.width) * image.height;
	return (
		<div className="d-flex flex-column align-items-center">
			<Alert variant="success">This is a ISR page</Alert>
			<Image
				alt={image.description}
				src={image.urls.raw}
				width={width}
				height={height}
				className="rounded shadow mw-100 h-100"
			/>
			by{' '}
			<Link href={'/user/' + image.user.username}>
				{image.user.username}
			</Link>
		</div>
	);
};

export default page;
