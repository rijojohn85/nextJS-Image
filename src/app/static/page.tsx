import { Alert } from '@/componenets/bootstrap';
import { UnsplashImage } from '@/models/unsplash-image';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	title: 'Static Page'
};

const Page = async () => {
	const response = await fetch(
		'https://api.unsplash.com/photos/random?client_id=' +
			process.env.UNSPLASH_ACCESS_KEY
	);
	const image: UnsplashImage = await response.json();
	const width = Math.min(500, image.width);
	const height = (width / image.width) * image.height;
	return (
		<div className="d-flex flex-column align-items-center">
			<Alert variant="success">This is a static page</Alert>
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

export default Page;
