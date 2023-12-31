'use client';

import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { usePathname } from 'next/navigation';

const NavBar = () => {
	const path = usePathname();

	return (
		<Navbar
			bg="primary"
			variant="dark"
			sticky="top"
			expand="sm"
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand as={Link} href="/">
					NextJS 13.4 Image Gallery
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="main-navbar" />
				<Navbar.Collapse id="main-navbar">
					<Nav>
						<Nav.Link
							as={Link}
							href="/static"
							active={path === '/static'}
						>
							Static
						</Nav.Link>
						<Nav.Link
							as={Link}
							href="/dynamic"
							active={path === '/dynamic'}
						>
							Dynamic
						</Nav.Link>
						<Nav.Link as={Link} href="/isr" active={path === '/isr'}>
							ISR
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
