'use client';

import { Button } from 'react-bootstrap';

interface ErrorPageProps {
	error: Error;
	reset: () => void;
}
const Error = ({ error, reset }: ErrorPageProps) => {
	return (
		<>
			<div>Error</div>
			<Button onClick={reset}>Reset</Button>
		</>
	);
};

export default Error;
